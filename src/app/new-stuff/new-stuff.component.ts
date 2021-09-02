import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BorrowService } from '../borrow.service';

@Component({
  selector: 'app-new-stuff',
  templateUrl: './new-stuff.component.html',
  styleUrls: ['./new-stuff.component.css']
})
export class NewStuffComponent implements OnInit {
  material: any = {}

  constructor(private _borrowService: BorrowService,
              private _router: Router) { }

  ngOnInit(): void {
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
