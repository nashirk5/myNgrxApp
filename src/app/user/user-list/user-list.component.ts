import { Component, Input } from '@angular/core';
import { UserInterface } from 'src/app/_interface/user.interface';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {

  @Input() userData: UserInterface[] | null | undefined

}
