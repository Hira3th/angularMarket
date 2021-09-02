import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BorrowService } from '../borrow.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-new-stuff',
  templateUrl: './new-stuff.component.html',
  styleUrls: ['./new-stuff.component.css']
})
export class NewStuffComponent implements OnInit {
  material: any = {}
  location = Location;

  constructor(private _borrowService: BorrowService,
              private _router: Router) { }

  ngOnInit(): void {
    if (location.protocol === 'http:') {
      window.location.href = location.href.replace('http', 'https');
    }
  }

  makeMaterail(){
      //TODO
      this._borrowService.makeMateial(this.material)
      .subscribe(
        res => {
          //localStorage.setItem('token',res.token) 
          this._router.navigate(['/fablab']) 
        },
          err => console.log(err)
      )
  }
}
