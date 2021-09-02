import { Component, OnInit } from '@angular/core';
import { BorrowService } from '../borrow.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-my-stuff',
  templateUrl: './my-stuff.component.html',
  styleUrls: ['./my-stuff.component.css']
})
export class MyStuffComponent implements OnInit {
  location = Location;

  getBackItems: any = []
  constructor(private _borrowService: BorrowService,
              private _router: Router) { }

  ngOnInit(): void {
    if (location.protocol === 'http:') {
      window.location.href = location.href.replace('http', 'https');
    }
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
