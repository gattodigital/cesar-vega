import { Component, OnInit, ElementRef, TemplateRef, ViewContainerRef, Directive, Input, Output, EventEmitter, OnChanges  } from '@angular/core';
import { SharedService } from '../shared/shared.service';
import { BiStylePropModel, BiStylePropInterface } from './interface/bi-interfaces';
import { FormsModule, FormControl, FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ToasterModule, ToasterService, ToasterConfig }  from 'angular2-toaster/angular2-toaster';
import { FileUploader, FileSelectDirective, FileDropDirective, FileUploaderOptions } from 'ng2-file-upload';
import { ToasterServiceAlert } from '../form-creator/toaster.service';


const URL = 'https://tools.brandinstitute.com/biwebservices/api/Files/UploadFile/?projectName=';
// const URL = 'http://localhost:64378/api/Files/UploadFile/?projectName=';

@Component({
  selector: 'bi-form-components',
  templateUrl: './bi-form-components.component.html',
  styleUrls: ['./bi-form-components.component.scss']
})

export class BiFormComponentsComponent implements OnInit {

  // public uploader;
  public uploader: FileUploader = new FileUploader({ url: URL + 'panel2' });
  public selected: string;
  public selectedOption;
  public selectedOptions = [];
  public orientations: string[] = ['left', 'top', 'bottom', 'right'];
  public biInputIcon: string;
  public iconchooser: string;
  public Object: any;
  public typeOfTemplate = '';
  public toasterconfig : ToasterConfig = new ToasterConfig({
    tapToDismiss: true,
    timeout: 5000
  });
  public collapseInput;
  public collapseStyle;
  public collapseLabel;

  private uploaderOptions: FileUploaderOptions = {};
  private fileUploadService: FileUploader;
  public leftPosition;
  public topPosition;
  private icon;
  private countries = [];
  private arrayOfCheckbox = [];
  private pageName = [];
  private isOtherCountry: boolean;
  private toasterService: ToasterServiceAlert;
  public displayPassword: string = 'text';
  public userEmail: string;
  public userPassword: string;
  public confirmedPassword: string;
  public matchedPassword: boolean = true;
  public matchFirstName ='first name';
  public matchMiddleName ='middle name';
  public matchLastName ='last name';
  public matchDOB ='date of birth';
  public matchCellPhone ='cell phone';

  @Input() hideVersionControl = true;
  @Input() componentType;
  @Input() hideMsg: boolean = true;
  @Input() sortOrder: string;
  @Input() componentId: string;
  @Input() componentData: BiStylePropModel;
  @Input() ifOtherCountry: boolean = true;

  @Output() updateIfOtherCountry = new EventEmitter();
  @Output() updatePage = new EventEmitter();

  constructor(private _sharedService: SharedService, form: FormBuilder,toasterService: ToasterServiceAlert)
  { this.toasterService = toasterService;}


  selectedValue(value: any){
    this.selectedOption = value;
    this.componentData.defaultInputValue = JSON.stringify(value);

    if (value.text === 'United States' || value.text === 'Canada') {
      this.isOtherCountry = false;
      this.updateIfOtherCountry.emit(this.isOtherCountry);
    } else {
      this.isOtherCountry = true;
      this.updateIfOtherCountry.emit(this.isOtherCountry);
    }

    localStorage.setItem(this.componentData.labelValue,this.componentData.defaultInputValue);
  }

  ngOnChanges() {
    this.isOtherCountry = this.ifOtherCountry;
  }

  ngOnInit() {
    // localStorage.clear();
   if(this._sharedService.getSocialMediaData() !== undefined){
      if(this.componentData.componentType === 'bi-signup-form'){
        let givenSocialObj = this._sharedService.getSocialMediaData(this.componentData.componentType);
        this.userEmail = givenSocialObj.email;
        this.userPassword = givenSocialObj.password;
        this.confirmedPassword = givenSocialObj.password;
      }else if(this.componentData.labelValue.toLowerCase().match(this.matchFirstName)){
        let givenSocialFirstName = this._sharedService.getSocialMediaData(this.componentData.labelValue);
        this.componentData.defaultInputValue = givenSocialFirstName;
      }else if(this.componentData.labelValue.toLowerCase().match(this.matchMiddleName)){
        let givenSocialMiddleName = this._sharedService.getSocialMediaData(this.componentData.labelValue);
        this.componentData.defaultInputValue = givenSocialMiddleName;
      }else if(this.componentData.labelValue.toLowerCase().match(this.matchLastName)){
        let givenSocialLastName = this._sharedService.getSocialMediaData(this.componentData.labelValue);
        this.componentData.defaultInputValue = givenSocialLastName;
      }
    }

    if(localStorage.getItem(this.componentData.labelValue)!== null){
      if(this.componentData.componentType === 'bi-select'){
        this.componentData.defaultInputValue = JSON.parse(localStorage.getItem(this.componentData.labelValue));
      }else if(this.componentData.componentType === 'bi-signup-form'){
        this.componentData.defaultInputValue = localStorage.getItem(this.componentData.labelValue);
        JSON.parse(localStorage.getItem(this.componentData.labelValue)).map(function (obj) {
          this.userEmail = obj.email;
          this.userPassword = obj.password;
          this.confirmedPassword = obj.confirmPassword;
        }, this);
      }else{
        this.componentData.defaultInputValue = localStorage.getItem(this.componentData.labelValue);
      }
    }

    // file upload call backs
    this.uploader.onAfterAddingFile = (file: any) => {
      file.withCredentials = false;
    }

    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      if (status === 500) {
        this.uploader.progress = 50;
        this.toasterService.showWarning('Failed to Upload','Please try to upload the file again');
      }else {
        this.toasterService.showSuccess('Upload success','the file : ' + response +  'was uploaded');
      }
      console.log("ImageUpload:uploaded:", item, status, response);
    }

    this.isOtherCountry = true;
    if (this.componentData.componentType === 'bi-typeahead') {
      let getSql = (<any>this.componentData.options)[0].sql;
      if (getSql !== undefined) {
        this._sharedService.executeGetSql(getSql).subscribe(
          data => {
            this.componentData.options = [];
            JSON.parse(data[0].List).forEach(element => {
              this.componentData.options.push(element.values);
            });
          },
          err => this.logError(err)
        )
      }
    }
    // USED ONLY FOR TABLE
    // if(this.componentData.componentType === 'bi-table'){
    //   this._sharedService.getReviewForPages().map(function (obj) {
    //     obj.data.map(function (internalObjOfData) {
    //       let question = internalObjOfData.labelValue;
    //       let answer = internalObjOfData.defaultInputValue;

    //       let questionAndAnswerObj = {"page": obj.page, "question": question, "answer": answer};

    //       this.componentData.options.push(questionAndAnswerObj);
    //     }, this)
    //   }, this)
    // }

    if (this.componentData.componentType === 'bi-select-input' || this.componentData.componentType === 'bi-dropdown' || this.componentData.componentType === 'bi-select' || this.componentData.componentType === 'bi-input-radio' || this.componentData.componentType === 'bi-input-checkbox') {
      let getSql = (<any>this.componentData.options)[0].sql;
      if (getSql !== undefined) {
        this._sharedService.executeGetSql(getSql).subscribe(
          data => {
            if(this.componentData.componentType === 'bi-select'){
              let tempArray = [];
              JSON.parse(data[0].List).map(function (obj) {
                tempArray.push(obj.values);
              });
              this.componentData.options = tempArray;
              // let placeHolderObj = {"names": this.componentData.placeHolder, "values": this.componentData.placeHolder}
              // tempArray = JSON.parse(data[0].List);
              // tempArray.unshift(placeHolderObj)
              // this.componentData.options = tempArray;
            }else{
              this.componentData.options = JSON.parse(data[0].List);
            }
            // this.componentData.options = JSON.parse(data[0].List);
          },
          err => this.logError(err)
        )
      }
    }

    // scrolls to the top on load page
    window.scrollTo(0, 0);
    if (this.componentData.componentType.match('bi-input-')) {
      this.typeOfTemplate = this.componentData.componentType.replace('bi-input-', '');
    }
    this.collapseLabel = true;
    this.collapseInput = true;
    this.collapseStyle = false;
    this.biInputIcon = 'fa fa-' + this.componentData.icon;
    this.selectedOption = (this.componentData.defaultInputValue !== '') ? this.componentData.defaultInputValue : 'Select an Option';

  }

  passwordMatches(matchingPassword: string, userPassword: string){
    if(userPassword === undefined){
      return this.matchedPassword = false;
    }
    if(userPassword.localeCompare(matchingPassword) === 0){
      this.matchedPassword = true;
      this.saveInCacheMemory();
    }else{
      this.matchedPassword = false;
    }
  }

changeOption(name, option) {
    if(this.componentData.componentType === 'bi-input-checkbox'){
      let indexOfCheckbox = this.arrayOfCheckbox.indexOf(name.target.value);
      if(indexOfCheckbox<0){
        this.arrayOfCheckbox.push(name.target.value);
        this.componentData.defaultInputValue = this.arrayOfCheckbox.join(',');
      }else{
        this.arrayOfCheckbox.splice(indexOfCheckbox, 1);
        this.componentData.defaultInputValue = this.arrayOfCheckbox.join(',');
      }
    }else{
      this.selectedOption = option;
      if (option === undefined) {
        if (name.target !== undefined) {
          if(name.target.selectedOptions.length > 1){
            this.selectedOptions = name.target.selectedOptions;
          }
        } else {
          this.selectedOption = name[0];
          this.componentData.defaultInputValue = name[0];
        }
      }else if(this.componentData.componentType === 'bi-dropdown'){
        let pageInfo = { pageName: option, direction: 'continue', selectedOption: '' }
        this._sharedService.setPageNames(option, 'continue');
        this.componentData.defaultInputValue = name;
      } else {
        this.toasterService.showWarning('Error','Please ' + this.componentData.tooltip.toLocaleLowerCase());
      }
      if (this.componentData.icon !== 'sql') {
        if (name !== option) {
          let pageInfo = { pageName: option, direction: 'continue', selectedOption: name }
          this.updatePage.emit(pageInfo);
        }
      }
    }    
  }

  changeOptionValues(options) {
    this.componentData.options = options.split(',');
  }

  buttonClicked(name, option) {
    let pageInfo = { pageName: option, direction: name, selectedOption: '' }
    this._sharedService.setPageNames(option, name);
    this.updatePage.emit(pageInfo);
  }

  onRightClick(event: any, el: ElementRef) {
    let backdrop = document.getElementsByClassName('modal-backdrop');
    event.preventDefault();
    this.leftPosition = event.x;
    this.topPosition = event.y;
  }

  // file uploader onChange
  onChange(e: any): void {
    var files = e.srcElement.files;
    this.uploader.addToQueue(files);
    this.uploader.uploadAll();
  }

  public emailNotValid = false;
  public emailValidationMessage = '';
  public passwordNotValid = false;
  public passwordValidationMessage = '';
  public firstAndLastNameOrCellPhoneNotValid = false;
  public firstAndLastNameOrCellPhoneValidationMessage = '';
  public dateOfBirthNotValid = false;
  public dateOfBirthValidationMessage = '';

  verifyInformation(verifyData, verifyWhat){
    if(verifyWhat === 'email'){
      this._sharedService.verifyEmail(verifyData).subscribe(
        data => {
          if(!data.verified){
            this.emailNotValid = data.verified;
            this.emailValidationMessage = data.message;
          }
        },
        err => this.logError(err)
      )
    }
    if(verifyWhat === 'password'){
      this._sharedService.verifyPassword(verifyData).subscribe(
        data => {
          if(!data.verified){
            this.passwordNotValid = data.verified;
            this.passwordValidationMessage = data.message;
          }
        },
        err => this.logError(err)
      )
    }
  }

  saveInCacheMemory(){
    if(this.componentData.componentType === 'bi-signup-form'){
      this.componentData.defaultInputValue = '[{"email":"' + this.userEmail + '", "password":"' + this.userPassword + '","confirmPassword":"' + this.confirmedPassword + '"}]'
    }

    // this SP calls only for first and last name verification
    if(this.componentData.labelValue.toLowerCase().match(this.matchFirstName) || this.componentData.labelValue.toLowerCase().match(this.matchLastName)){
      this._sharedService.verifyFirstAndLastName(this.componentData.defaultInputValue).subscribe(
        data => {
          if(!data.verified){
            this.firstAndLastNameOrCellPhoneNotValid = data.verified;
            this.firstAndLastNameOrCellPhoneValidationMessage = data.message;
          }
        },
        err => this.logError(err)
      )
    }

    // verifies only for DOB
    if(this.componentData.labelValue.toLowerCase().match(this.matchDOB)){
      this._sharedService.verifyDob(this.componentData.defaultInputValue.toString()).subscribe(
        data => {
          if(!data.verified){
            this.dateOfBirthNotValid = data.verified;
            this.dateOfBirthValidationMessage = data.message;
          }
        },
        err => this.logError(err)
      )
    }

    // verifies only for cellphone
    if(this.componentData.labelValue.toLowerCase().match(this.matchCellPhone)){
      this._sharedService.verifyCellPhone(this.componentData.defaultInputValue.toString()).subscribe(
        data => {
          if(!data.verified){
            this.firstAndLastNameOrCellPhoneNotValid = data.verified;
            this.firstAndLastNameOrCellPhoneValidationMessage = data.message;
          }
        },
        err => this.logError(err)
      )
    }

    localStorage.setItem(this.componentData.labelValue,this.componentData.defaultInputValue);

    // let oldValue = this.componentData.defaultInputValue;
    // let username = 'cacevedo@brandinstitute.com';
    // let createDateObj = new Date();
    // let time = createDateObj.getHours().toString() + ':' + createDateObj.getMinutes().toString() + ':' + createDateObj.getSeconds().toString();
    // let date = (createDateObj.getMonth() + 1) + '/' +createDateObj.getDate().toString() + '/' + createDateObj.getFullYear().toString();
    // let newVersion = new VersionControlObj(date,time,oldValue,username);

    // this.componentData.versionControl.unshift(newVersion.getVersionControlObj());
  }

  logError(err) {
    console.error('There was an error: ' + err);
  }
}

export class VersionControlObj {

  private oldValue;
  private date;
  private time;
  private username;

  constructor(date: string, time: string, value: string, username: string){
    this.oldValue = value;
    this.date = date;
    this.time = time;
    this.username = username;
  }

  getVersionControlObj(){
    return JSON.parse('{"modifiedAnswer":"'+this.oldValue+'", "email":"'+this.username+'", "date":"'+this.date+'", "time":"'+this.time+'"}');
  }
}

@Component({
  selector: 'bi-input-icon',
  templateUrl: `./bi-icon-modal.html`
})
export class BiInputIcon implements OnInit {

  @Input() icon: string;
  setIconClass;
  ngOnInit() {
    this.setIconClass = this.icon;
  }
  setIcon(e, self) {}
}

import { PipeTransform, Pipe } from '@angular/core';
@Pipe({ name: 'keys' })
export class KeysPipe implements PipeTransform {
  transform(value, args: string[]): any {
    let keys = [];
    for (var index = 0; index < value.length; index++) {
      let container: any = { names: '', values: '' };
      if (typeof value[0] === "object") {
        container.names = (!isNaN(parseInt(value[index].names))) ? value[index].values : value[index].names;
        container.values = value[index].values;
      } else {
        container.names = container.values = value[index];
      }
      keys.push(container);
    }
    return keys;
  }


}
