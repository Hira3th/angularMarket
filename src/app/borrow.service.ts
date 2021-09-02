import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BorrowService {

  private _availableItemsUrl = "http://localhost:3000/api/Materials";

  private _getBackUrl = "http://localhost:3000/";

  private _postNewMaterial = "http://localhost:3000/api/Materials"

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
