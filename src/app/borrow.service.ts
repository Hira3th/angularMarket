import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BorrowService {

  private _availableItemsUrl = "https://mijntest.herokuapp.com/api/Materials";

  private _getBackUrl = "https://mijntest.herokuapp.com/";

  private _postNewMaterial = "https://mijntest.herokuapp.com/api/Materials"

  constructor(private http: HttpClient) { }

  getAvailableItems(){
    return this.http.get<any>(this._availableItemsUrl);
  }

  getGetBack(){
    return this.http.get<any>(this._getBackUrl);
  }

  makeMateial(material: any){
    return this.http.post<any>(this._postNewMaterial, material);
  }
}
