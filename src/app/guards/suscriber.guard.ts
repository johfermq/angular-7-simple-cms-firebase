import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { tap, map, take } from 'rxjs/operators';

import { AuthenticationService } from './../services/authentication/authentication.service';

@Injectable({
  providedIn: 'root'
})

export class SuscriberGuard implements CanActivate {

  	constructor(private authentication: AuthenticationService) {}

  	canActivate(
    	next: ActivatedRouteSnapshot,
    	state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
  	{
    	return this.authentication.user$.pipe(
    		take(1),
    		map(user => user && user.roles.suscriber ? true : false),
    		tap(isSuscriber =>  {
    			if (! isSuscriber) {
    				console.error('Access denied ─ Suscribers only allowed')
    			}
    		})
    	);
  	}

}
