import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import { question} from '../pages/questions/question';
import { retry,catchError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  private url = `http://localhost:3000/questions`;
  
  constructor(private http:HttpClient) { }

public getquestions():Observable<question[]>{
  return this.http.get<question[]>(this.url)
    .pipe(retry(1), catchError(this.handleError));
  }

  
  public sendAnswer(ques:question) :Observable<question>{
    return this.http.post<question>(this.url,ques)
   }


   public deletequestion(quesid: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/product/delete${quesid}`);
  }
  
  
  handleError(error:any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => {
        return errorMessage;
    });
  };


  }



