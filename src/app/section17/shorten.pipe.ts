import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'shorten'
})
export class ShortenPipe implements PipeTransform {
    transform(value: any, limit: number, start: number) {
        if (value.length > limit) {
            return value.substr(start, limit) + '...';
        }
        return value;
    }
}
