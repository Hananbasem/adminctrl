import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,throwError } from 'rxjs';
import { user } from '../pages/users/user';
import { retry,catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
private url=`http://localhost:3000/users`;
  
constructor(private http:HttpClient) { }
//get users table --------------------------------
  public getusers():Observable<user[]>{
    return this.http.get<user[]>(this.url)
      .pipe(retry(1), catchError(this.handleError));
    }
// delete user-----------------------------------------

  public deleteuser(userid: number): Observable<void> {
  return this.http.delete<void>(`${this.url}/users/delete${userid}`)
    .pipe(retry(1), catchError(this.handleError));
    }
//edit-----------------------------------------------

  public edituser(User:user):Observable<user>{
    return this.http.put<user>(`${this.url}/users/edit`, User)
    .pipe(retry(1), catchError(this.handleError));
  
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
