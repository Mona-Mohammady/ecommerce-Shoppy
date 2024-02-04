import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.css']
})
export class UsersDetailsComponent implements OnInit {

  constructor(private _UsersService:UsersService){}

  ngOnInit(): void {
    this._UsersService.getUsers().subscribe({

      next:()=>{},
      error:()=>{},
      complete:()=>{}

    })
    
    
  }

}
