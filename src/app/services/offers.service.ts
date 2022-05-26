import {ErrorHandler, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { offer } from '../pages/offers/offer';

@Injectable({
  providedIn: 'root'
})
export class OffersService {
  
  private url = `http://localhost:3000/offers`;
  private errorHandler: ErrorHandler = new ErrorHandler();


  
  constructor(private http: HttpClient) {
  }

// load the offers from back
  public getoffers(): Observable<offer[]> {
    return this.http.get<offer[]>(`${this.url}/offer/all`);

  }

  //add offer
  public addoffer(Offer: offer): Observable<offer> {
    return this.http.post<offer>(`${this.url}/offer/add`,Offer);
  }

  //edit offer
  public editoffer(Offer: offer): Observable<offer> {
    return this.http.put<offer>(`${this.url}/offer/edit`, Offer);
  }

  public deleteoffer(offerid: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/offer/delete${offerid}`);
  }

}





