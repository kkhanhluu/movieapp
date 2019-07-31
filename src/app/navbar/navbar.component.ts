import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import * as fromApp from '../store/app.reducer';
import { Subscription } from 'rxjs';
import * as AuthActions from '../auth/store/auth.actions';
import { User } from '../auth/user.model';
import { DataServiceService } from '../shared/service/data-service.service';
import { NgbdModalContentComponent } from '../shared/components/modal/modal.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {
  authSubscription: Subscription;
  isLoading = false;
  isLoggedin = false;
  user: User;
  emailVerfied = true;
  navbarOpened = false;

  constructor(
    private store: Store<fromApp.AppState>,
    private dataService: DataServiceService,
    private modalService: NgbModal
  ) {}

  ngOnInit() {
    this.authSubscription = this.store.select('auth').subscribe(authState => {
      this.isLoading = authState.isLoading;
      this.isLoggedin = authState.user !== null;
      this.user = authState.user;
      if (this.user) {
        this.dataService
          .getCurrentUserData(this.user.token)
          .subscribe(userData => {
            console.log(userData);
            if (!userData.users[0].emailVerified) {
              const modalRef = this.modalService.open(
                NgbdModalContentComponent,
                {
                  centered: true
                }
              );
              modalRef.componentInstance.title = 'Hello';
              modalRef.componentInstance.message =
                'We sent you a verification email. Please verify your email';
            }
          });
      }
    });
  }

  onLogout() {
    this.store.dispatch(new AuthActions.Logout());
  }

  toggleNavbar() {
    this.navbarOpened = !this.navbarOpened;
  }

  ngOnDestroy() {
    this.authSubscription.unsubscribe();
  }
}
