import {IProduct} from "./product";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/do";

@Injectable()
export class ProductService {
  private _httpClient: HttpClient;
  constructor( http: HttpClient) {
      this._httpClient = http;
    }

    getProducts(): Observable<IProduct[]> {
    //    return this._http.get<IProduct[]>(this.endPointUrl)
    //     .do(data => console.log("All: " + JSON.stringify(data)))
    //     .catch(this.handleError);
      let url: string;
      url = "http://localhost:3000/products";
      return this._httpClient.get<IProduct[]>(url)
        .do(data => {
            console.log("All :" + JSON.stringify(data));
        })
        .catch(err => this.handleError(err));

    }
  private handleError(err: HttpErrorResponse) {
        console.log(err.message);
        return Observable.throw(err.message);
    }
}
