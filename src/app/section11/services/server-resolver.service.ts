import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ServersService } from '../servers/servers.service';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ServerResolverService implements Resolve<{id: number, name: string, status: string}> {
    constructor(private serversService: ServersService) {
    }

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
        ): Observable<{id: number, name: string, status: string}> |
        Promise<{id: number, name: string, status: string}> |
        {id: number, name: string, status: string} {
        return this.serversService.getServer(+route.params.id);
    }
}
