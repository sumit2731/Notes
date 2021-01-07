console.clear();

const { Observable, Subject } = Rx;

/** A really, really, really fake websocket */
class FakeWebSocket {
    constructor(url) {
        this.url = url;
        console.log('connecting to ' + url);
        let i = 0;
        this.id = setInterval(() => this.triggerMessage(i++), 500);
    }

    close() {
        console.log('closing connection to ' + this.url);
        clearInterval(this.id);
    }

    addEventListener(name, handler) {
        const listeners = this.listeners = this.listeners || {};
        const handlers = listeners[name] = listeners[name] || [];
        handlers.push(handler);
    }

    addEventListener(name, handler) {
        const listeners = this.listeners = this.listeners || {};
        const handlers = listeners[name] = listeners[name] || [];
        handlers.push(handler);
    }

    triggerMessage(msg) {
        const listeners = this.listeners;
        if (listeners) {
            const handlers = listeners['message'];
            handlers.forEach(handler => handler({ target: this, data: JSON.stringify(msg) }))
        }
    }
}

function makeHotRefCounted(cold) {
    const subject = new Subject();
    const mainSub = cold.subscribe(subject);
    let refs = 0;
    return new Observable((observer) => {
        refs++;
        let sub = subject.subscribe(observer);
        return () => {
            refs--;
            if (refs === 0) mainSub.unsubscribe();
            sub.unsubscribe();
        };
    });
}

const source = new Observable((observer) => {
    const socket = new FakeWebSocket('ws://someurl');
    socket.addEventListener('message', (e) => observer.next(e));
    return () => socket.close();
});

const hot = makeHotRefCounted(source);

/**
 * Notice in console that ONE connection is made.
 */

// first connection
let sub1 = hot.subscribe((e) => console.log('s1', e));
let sub2;

// second connection one second later
setTimeout(() => {
    sub2 = hot.subscribe((e) => console.log('s2', e));
}, 1000);


// since we're pumping all of the values through a Subject, which 
// mutlicasts to all subscribers, we've made our source "hot".

// After a while, we'll unsubscribe from both,
// and now our socket will disconnect.
setTimeout(() => {
    sub1.unsubscribe();
    sub2.unsubscribe();
}, 4000);