import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BorrowService } from '../borrow.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-fab-lab',
  templateUrl: './fab-lab.component.html',
  styleUrls: ['./fab-lab.component.css']
})
export class FabLabComponent implements OnInit {
  location = Location;

  availableItems: any = []
  constructor(private _borrowService: BorrowService,
              private _router: Router) { }

  ngOnInit(): void {
    if (location.protocol === 'http:') {
      window.location.href = location.href.replace('http', 'https');
    }
    
    this._borrowService.getAvailableItems()
      .subscribe(
        res => this.availableItems = res,
        err => {
          if(err instanceof HttpErrorResponse){
            this._router.navigate(['/login'])
          }
        }
      )
  }

}
