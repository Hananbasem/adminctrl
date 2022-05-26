import {ErrorHandler, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { work } from '../pages/works/work';

@Injectable({
  providedIn: 'root'
})
export class WorksService {
  
  private url = `http://localhost:3000/works`;



  
  constructor(private http: HttpClient) {
  }

// load the works from back
  public getworks(): Observable<work[]> {
    return this.http.get<work[]>(`${this.url}/work/all`);

  }

  //add work
  public addwork(Work: work): Observable<work> {
    return this.http.post<work>(`${this.url}/work/add`,Work);
  }

  //edit work
  public editwork(Work:work): Observable<work> {
    return this.http.put<work>(`${this.url}/work/edit`, Work);
  }

  public deletework(workid: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/work/delete${workid}`);
  }

}





