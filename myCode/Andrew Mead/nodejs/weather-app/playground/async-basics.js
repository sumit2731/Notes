console.log('Starting app');

setTimeout(() => {
    console.log('Inside of call back');
}, 0);

setTimeout(() => {
    console.log('Inside of call back');
},2000);
console.log('Finishing up');