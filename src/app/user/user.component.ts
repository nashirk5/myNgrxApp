import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserInterface } from '../_interface/user.interface';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user$: Observable<UserInterface[]> | undefined

  constructor(private userSrv: UserService) { }

  ngOnInit(): void {
    this.user$ = this.userSrv.getPost();
  }

}
