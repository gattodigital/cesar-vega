import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
import { Http, Response, Headers, RequestOptions  } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SharedService {
    
    constructor(private http: Http) { }
    // private instance variable to hold base url
    private apiCall: string = 'api/BiFormCreator/';
    // let webBaseUrl:string = 'http://localhost/';          
    // this.webBaseUrl = 'http://localhost:64378/';
    private webBaseUrl: string = 'https://tools.brandinstitute.com/BIWebServices/';
    private completeUrl = this.webBaseUrl + this.apiCall;
    private pageName = [];
    private arrayComponent = [];
    private currentPage:string = '';
    private direction = '';
    private socialMediaData;
    private iframeUrl;

    private SP_verifyUser = "[respondents].[dbo].[pm_verify_username_and_password] ";
    private _SP_verifyUserEmail = '[RESPONDENTS].[dbo].[pm_verify_username] ';
    private _SP_verifyUserPassword = '[RESPONDENTS].[dbo].[pm_verify_password] ';
    private _SP_verifyUsersFirstAndLastName = '[RESPONDENTS].[dbo].[pm_verify_VERIFY_FIRST_N_LASTNAME] ';
    private _SP_verifyDOB = '[RESPONDENTS].[dbo].[pm_verify_DOB] ';
    private _SP_verifyCellPhone = '[RESPONDENTS].[dbo].[pm_verify_CELLPHONE] ';

    // private subject: Subject<string>; 
    public readonly subject: Observable<string>;

    private headers = new Headers({ 'Content-Type': 'application/json' }); 
    private options = new RequestOptions({ headers: this.headers });

    verifyCellPhone(cellPhone) {
        return this.executeGetSql(this._SP_verifyCellPhone + "'" + cellPhone + "'");
    }
    verifyDob(dob) {
        return this.executeGetSql(this._SP_verifyDOB + "'" + dob + "'");
    }
    verifyFirstAndLastName(firstOrLastName) {
        return this.executeGetSql(this._SP_verifyUsersFirstAndLastName + "'" + firstOrLastName + "'");
    }
    verifyPassword(password) {
        return this.executeGetSql(this._SP_verifyUserPassword + "'" + password + "'");
    }
    verifyEmail(user) {
        return this.executeGetSql(this._SP_verifyUserEmail + "'" + user + "'");
    }

    executeGetSql(sql) {
        let bodyString = JSON.stringify(sql); 
        return this.http.post(this.completeUrl, bodyString, this.options) 
        .map((res: Response) => 
            res.json())   
        .catch((error: any) =>
            Observable.throw(error.json().error || 'Server error')); 
    }

    signInAndRegistrationAuth(userData) {
        return this.executeGetSql(this.SP_verifyUser  + userData);
    }

    setPageNames(name, direction) {
        if(direction.toLowerCase() === 'continue' || direction.toLowerCase() === 'firstpage'){
            this.direction = direction.toLowerCase();
            this.currentPage = name;
            this.pageName.push(name);
        }else if(direction.toLowerCase() === 'previous'){
            this.currentPage = name;
            this.direction = direction.toLowerCase();
            this.pageName.pop();
        }
    }

    setSocialMedia(socialMediaStr){
        this.socialMediaData = JSON.parse(socialMediaStr);
    }

    getSocialMediaData(retrieveData?){
        if(retrieveData === undefined){
            return this.socialMediaData;
        }
        if(retrieveData === 'bi-signup-form'){
            return {"email": this.socialMediaData.email, "password": this.socialMediaData.password};
        }else if(retrieveData.toLowerCase().match('first name')){
            return this.socialMediaData.firstName;
        }else if(retrieveData.toLowerCase().match('last name')){
            return this.socialMediaData.lastName;
        }else if(retrieveData.toLowerCase().match('middle name')){
            return this.socialMediaData.middleName;
        }
    }

    getPageNames() {
        return this.pageName;
    }

    getReviewForPages() {
        return this.arrayComponent;
    }

    addComponentToArray(componentData) {
        let pageAndComponent = {"page": this.currentPage, "data": componentData}
        if(this.direction === 'continue' || this.direction === 'firstpage'){
            this.arrayComponent.push(pageAndComponent);
            console.log(this.arrayComponent);
        }else if(this.direction === 'previous'){
            for (var obj in this.arrayComponent) {
                if(JSON.stringify(this.arrayComponent[obj]).toLowerCase() === JSON.stringify(pageAndComponent).toLowerCase()){
                    this.arrayComponent.splice(Number(obj)+1,1)
                    console.log(this.arrayComponent);
                }
            }
        }
    }

    loadIframe(url){
   
        // this.subject.subscribe(url =>  this.iframeUrl = url)
        // return this.iframeUrl;
    }
    getIframe(){
        // return this.subject.subscribe(this.iframeUrl);
    }
}