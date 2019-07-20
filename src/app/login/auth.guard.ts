import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Route, Router } from '@angular/router';
import { LoginRoutingModule } from './login-routing.module';
import { AuthService } from '../core/services/auth.service';
import { Observable } from 'rxjs';
import { take, tap } from 'rxjs/operators';

@Injectable({providedIn: LoginRoutingModule})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): Observable<boolean> {
    return this.checkAuthState();
  }

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): Observable<boolean> {
    return this.canActivate(route, state);
  }

  canLoad(route: Route): Observable<boolean> {
    return this.authService.isAuthneticated
      .pipe(take(1));
  }

  private checkAuthState(): Observable<boolean> {
    return this.authService.isAuthneticated
      .pipe(
        tap(is => {
          if (!is) {
            this.router.navigate(['/login']);
          }
        })
      );
  }
}
