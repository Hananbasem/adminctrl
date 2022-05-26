import {ErrorHandler, Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Observable, throwError} from 'rxjs';
import {product} from '../pages/products/product';
import {catchError,retry} from "rxjs/operators"

@Injectable({
  providedIn: 'root'
})

export class ProductsService {
//back url
private url = `http://localhost:3000/products`;
  

constructor(private http: HttpClient) {
  }

// load the products from back
  public getproducts(): Observable<product[]> {
    return this.http.get<product[]>(this.url)
    .pipe(retry(1), catchError(this.handleError));
  }
    
  //add product-------------------------------

  public addproduct(Product: product): Observable<product> {
    return this.http.post<product>(`${this.url}/product/add`, Product)
    .pipe(retry(1), catchError(this.handleError));
  }

  //edit product---------------------------------------

  public editproduct(Product: product): Observable<product> {
    return this.http.put<product>(`${this.url}/product/edit`, Product)
    .pipe(retry(1), catchError(this.handleError));
  }
// delete product------------------------------------------

  public deleteproduct(productid: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/product/delete${productid}`);
  }

//errors---------------------------------------------------  
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




