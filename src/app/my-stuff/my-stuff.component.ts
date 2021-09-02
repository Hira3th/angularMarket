import { Component, OnInit } from '@angular/core';
import { BorrowService } from '../borrow.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-stuff',
  templateUrl: './my-stuff.component.html',
  styleUrls: ['./my-stuff.component.css']
})
export class MyStuffComponent implements OnInit {

  getBackItems: any = []
  constructor(private _borrowService: BorrowService,
              private _router: Router) { }

  ngOnInit(): void {
    this._borrowService.getGetBack()
      .subscribe(
        res => this.getBackItems = res,
        err => {
          if(err instanceof HttpErrorResponse){
            this._router.navigate(['/login'])
          }
        }
      )
  }
}
