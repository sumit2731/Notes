import {Component, OnInit} from '@angular/core';
import {Course} from "../model/course";
import {interval, noop, Observable, of, throwError, timer} from 'rxjs';
import {catchError, delay, delayWhen, finalize, map, retryWhen, shareReplay, tap} from 'rxjs/operators';
import {createHttpObservable} from '../common/util';
import { Store } from '../common/store.service';


@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    beginnerCourses$: Observable<Course[]>;

    advancedCourses$: Observable<Course[]>;
    constructor(private store: Store) {}

    ngOnInit() {

        // const http$ = createHttpObservable('/api/courses');

        // const courses$: Observable<Course[]> = http$
        //     .pipe(
        //         tap(() => console.log("HTTP request executed")),
        //         map(res => Object.values(res["payload"]) ),
        //         shareReplay(),
        //         retryWhen(errors =>
        //             errors.pipe(
        //             delayWhen(() => timer(2000)
        //             )
        //         ) )
        //     );
        const courses$ = this.store.courses$;

        // this.beginnerCourses$ = courses$
        //     .pipe(
        //         map(courses => courses
        //             .filter(course => course.category == 'BEGINNER'))
        //     );
        this.beginnerCourses$ = this.store.selectBeginnerCourses();

        // this.advancedCourses$ = courses$
        //     .pipe(
        //         map(courses => courses
        //             .filter(course => course.category == 'ADVANCED'))
        //     );
        this.advancedCourses$ = this.store.selectAdvancedCourses();

    }

}
