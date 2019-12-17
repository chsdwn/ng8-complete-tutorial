import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root' // With this code the service no need to be added to providers in app module
})
export class UserService {
    activatedEmitter = new Subject<boolean>();
}
