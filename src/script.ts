import { fromEvent, interval, timer } from 'rxjs';
import {map, mapTo, pluck, switchMap, takeUntil} from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

import './init';

const SAMPLES_URL = 'https://loremflickr.com/500/500/cat';

const imagesSub$ = timer(0, 1000).pipe(map(refreshImage));

function refreshImage() {
    const image = document.querySelector('#image') as HTMLImageElement;
    image.src = `${SAMPLES_URL}?date=${Date.now()}`;
}

const stop$ = fromEvent(document.querySelector('.stop'), 'click');

fromEvent(document.querySelector('.start'), 'click')
    .pipe(
        switchMap(() => imagesSub$.pipe(takeUntil(stop$))),
        )
    .subscribe();