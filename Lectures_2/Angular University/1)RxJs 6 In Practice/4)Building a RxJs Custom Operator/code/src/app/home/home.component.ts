import {Component, OnInit} from '@angular/core';
import { Course } from '../model/course';
import {interval, Observable, of, timer, throwError} from 'rxjs';
import {catchError, delayWhen, map, retryWhen, shareReplay, tap, finalize, delay, take} from 'rxjs/operators';
import { createHttpObservable } from '../common/util';


@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    beginnerCourses$: Observable<Course[]>;
    advancedCourses$: Observable<Course[]>;

    constructor() {

    }

    ngOnInit() {
        const http$ = createHttpObservable('/api/courses');
        const courses$: Observable<Course[]> = http$
            .pipe(
                tap(() => console.log('HTTP Requested was executed')),
                map(res => Object.values(res['payload'])),
                shareReplay(),
                retryWhen(errors => errors.pipe(
                    delayWhen(() => interval(2000)),
                    take(3)
                ))
            );
        this.beginnerCourses$ = courses$
                .pipe(
                    map((courses: Course[]) => courses.filter(course => course.category === 'BEGINNER'))
                );
        this.advancedCourses$ = courses$
                .pipe(
                    map((courses: Course[]) => courses.filter(course => course.category === 'ADVANCED'))
                );
    }

}
