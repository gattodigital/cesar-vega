import { Person } from './person';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Component } from '@angular/core';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class PeopleService {
  // Resolve HTTP using the constructor
  // constructor () {}

  constructor(private http: Http) { }
  // private instance variable to hold base url
  private apiCall: string = 'api/BiFormCreator/';
  private webBaseUrl: string = 'https://tools.brandinstitute.com/BIWebServices/';
  private PersonsUrl = this.webBaseUrl + this.apiCall;

  // Deprevated
  getAll() {
    return [
      { name: 'Luke Skywalker', height: 177, weight: 70 },
      { name: 'Darth Vader', height: 200, weight: 100 },
      { name: 'Han Solo', height: 185, weight: 85 },
    ];
  }

  search(value) {
    // let webBaseUrl:string = 'http://localhost/';          
    // this.webBaseUrl = 'http://localhost:64378/';
    let  randomQuote;
    var _SP_ProjectName = "[BI_PROJECT_DEVELOPMENT].[dbo].[pd_SearchBIProjects] '"+ value +"'";
    this.PersonsUrl = this.webBaseUrl + this.apiCall;
    let bodyString = JSON.stringify(_SP_ProjectName); 
    let headers = new Headers({ 'Content-Type': 'application/json' }); 
    let options = new RequestOptions({ headers: headers }); 

   return this.http.post(this.PersonsUrl, bodyString, options) 
      .map((res: Response) => 
        res.json())   
      .catch((error: any) =>
        Observable.throw(error.json().error || 'Server error')); 
  }
  search2(value) {
    // let webBaseUrl:string = 'http://localhost/';          
    // this.webBaseUrl = 'http://localhost:64378/';
    let  randomQuote;
    var _SP_ProjectName = "[BI_PROJECT_DEVELOPMENT].[dbo].[pd_SearchBIProjects] '"+ value +"'";
    this.PersonsUrl ='https://un3e6ulwzc.execute-api.us-east-1.amazonaws.com/comments/comments/breaking-news-story-01-18-2016';
    let bodyString = JSON.stringify(_SP_ProjectName); 
    let headers = new Headers({ 'Content-Type': 'application/json' }); 
    headers.append('Access-Control-Allow-Origin', '*');
    let options = new RequestOptions({ headers: headers }); 

   return this.http.get(this.PersonsUrl) 
      .map((res: Response) => 
        res.json())   
      .catch((error: any) =>
        Observable.throw(error.json().error || 'Server error')); 
  }

  getPersons(): Observable<Person[]> {


    return this.http.get(this.PersonsUrl)
      // ...and calling .json() on the response to return data
      .map((res: Response) => res.json())
      //...errors if any
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

  }

  addPerson(body: Object): Observable<Person[]> {
    let bodyString = JSON.stringify(body); // Stringify payload
    let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    let options = new RequestOptions({ headers: headers }); // Create a request option

    return this.http.post(this.PersonsUrl, body, options) // ...using post request
      .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
      .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
  }


  updatePerson(body: Object): Observable<Person[]> {
    let bodyString = JSON.stringify(body); // Stringify payload
    let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    let options = new RequestOptions({ headers: headers }); // Create a request option

    return this.http.put(`${this.PersonsUrl}/${body['id']}`, body, options) // ...using put request
      .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
      .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
  }


  removePerson(id: string): Observable<Person[]> {
    return this.http.delete(`${this.PersonsUrl}/${id}`) // ...using put request
      .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
      .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
  }

 generatedata(rowscount, hasNullValues) {
    // prepare the data
    var data = new Array();
    if (rowscount == undefined) rowscount = 100;
    var firstNames =
      [
        "Andrew", "Nancy", "Shelley", "Regina", "Yoshi", "Antoni", "Mayumi", "Ian", "Peter", "Lars", "Petra", "Martin", "Sven", "Elio", "Beate", "Cheryl", "Michael", "Guylene"
      ];

    var lastNames =
      [
        "Fuller", "Davolio", "Burke", "Murphy", "Nagase", "Saavedra", "Ohno", "Devling", "Wilson", "Peterson", "Winkler", "Bein", "Petersen", "Rossi", "Vileid", "Saylor", "Bjorn", "Nodier"
      ];

    var productNames =
      [
        "Black Tea", "Green Tea", "Caffe Espresso", "Doubleshot Espresso", "Caffe Latte", "White Chocolate Mocha", "Caramel Latte", "Caffe Americano", "Cappuccino", "Espresso Truffle", "Espresso con Panna", "Peppermint Mocha Twist"
      ];

    var priceValues =
      [
        "2.25", "1.5", "3.0", "3.3", "4.5", "3.6", "3.8", "2.5", "5.0", "1.75", "3.25", "4.0"
      ];

    for (var i = 0; i < rowscount; i++) {
      var row = {};
      var productindex = Math.floor(Math.random() * productNames.length);
      var price = parseFloat(priceValues[productindex]);
      var quantity = 1 + Math.round(Math.random() * 10);

      row["id"] = i;
      row["reportsto"] = Math.floor(Math.random() * firstNames.length);
      if (i % Math.floor(Math.random() * firstNames.length) === 0) {
        row["reportsto"] = null;
      }

      row["available"] = productindex % 2 == 0;
      if (hasNullValues == true) {
        if (productindex % 2 != 0) {
          var random = Math.floor(Math.random() * rowscount);
          row["available"] = i % random == 0 ? null : false;
        }
      }
      row["firstname"] = firstNames[Math.floor(Math.random() * firstNames.length)];
      row["lastname"] = lastNames[Math.floor(Math.random() * lastNames.length)];
      row["name"] = row["firstname"] + " " + row["lastname"];
      row["productname"] = productNames[productindex];
      row["price"] = price;
      row["quantity"] = quantity;
      row["total"] = price * quantity;

      var date = new Date();
      date.setFullYear(2016, Math.floor(Math.random() * 11), Math.floor(Math.random() * 27));
      date.setHours(0, 0, 0, 0);
      row["date"] = date;

      data[i] = row;
    }

    return data;
  }


}
