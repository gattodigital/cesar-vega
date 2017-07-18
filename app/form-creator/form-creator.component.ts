import { Component, OnInit, ViewChild } from '@angular/core';
import { FormCreatorRoutingModule } from './form-creator-routing.module';
import { BiFormComponentsComponent } from '../bi-form-components/bi-form-components.component';
import { SharedService } from '../shared/shared.service';
import { BiStylePropModel } from '../bi-form-components/interface/bi-interfaces'
import { Observable } from 'rxjs';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { WizardStepComponent } from 'angular2-wizard';
import { ToasterModule, ToasterService, ToasterConfig } from 'angular2-toaster/angular2-toaster';
import { FormControl, FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ToasterServiceAlert } from '../form-creator/toaster.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-form-creator',
  templateUrl: './form-creator.component.html',
  styles: [`
  .active {
      border-bottom: 10px solid #1976D2;
    }
    .visited {
      border-bottom: 10px solid #06BAF6;
    }
    .default {
       border-bottom: 10px solid lightgrey;
    }
    .stepBold {
        color:#06BAF6;
        font-weight:bolder;
    }
    .card {
      margin:0px;
      pading:0px;
      background-color: #fff ;
      border: 1px solid #d1d4d7;
    }
  `]
})
export class FormCreatorComponent implements OnInit {
  public icons = [
    { icon: 'fa fa-tumblr fa-lg', name: 'label' },
    { icon: 'fa fa-clone fa-lg', name: 'text' },
    { icon: 'fa fa-film fa-lg ', name: 'grid' },
    { icon: 'fa fa-file-image-o fa-lg', name: 'image' },
    { icon: 'fa fa-check-circle-o fa-lg', name: 'radio' },
    { icon: 'fa fa-check-square-o fa-lg', name: 'check' },
  ];
  public getJSON(): Observable<any> {
    return this.http.get("./src/database/BI_objects.json")
      .map((res: any) => res.json());
  }
  private wizardSteps = [
    { step: '1', default: false, active: true, visited: false, strongStep: true },
    { step: '2', default: true, active: false, visited: false, strongStep: false },
    { step: '3', default: true, active: false, visited: false, strongStep: false },
    { step: '4', default: true, active: false, visited: false, strongStep: false }
  ];
  public biFormComponentDataArray: Array<any> = new Array<any>();
  private WizardStepComponent = new WizardStepComponent();
  private type;
  private default: boolean = false;
  private active: boolean = true;
  private visited: boolean = false;
  private wizardStepWidth = (100 / this.wizardSteps.length).toString() + '%';
  private wizardCounter = 0;
  private dataFromDb = [];
  private currentPageName = 'P_info_1';
  private changedCountry: boolean;
  private hideMsg: boolean = true;
  public loggedIn = 'admin';
  private hideVersionControl = true;
  private toasterService: ToasterServiceAlert;
  public toasterconfig: ToasterConfig =
  new ToasterConfig({
    tapToDismiss: true,
    timeout: 5000
  });
  private password = '';
  private firstname = '';
  private lastName = '';
  private middleName = '';

  constructor(private _sharedService: SharedService, private http: Http,private router: Router, form: FormBuilder, toasterService: ToasterServiceAlert)
  { this.toasterService = toasterService;
    
 }
  // TO DO PENDING

  ngOnInit() { 
    
      let wizard = document.getElementById('wizard');
      this._sharedService.setPageNames(this.currentPageName, 'firstPage');
      this.getJSON().subscribe(data => {
        this.dataFromDb = data;
        for (let i in this.dataFromDb) {
          if (Object.keys(this.dataFromDb[i]).toString() === this.currentPageName) {
            this.biFormComponentDataArray = (<any>Object).entries(this.dataFromDb[i])[0][1];
            // this._sharedService.addComponentToArray(this.biFormComponentDataArray);
          }
        }
      });
      
      let userData = JSON.parse(localStorage.getItem('userSocialMediaData'));
    if (userData) {
      this.password = (Math.random().toString(36) + userData.uid.substring(0, 4)).replace("0.", "");
      let dataSplited = userData.name.split(' ');
      if (dataSplited.length >= 3) {
        this.firstname = dataSplited[0];
        this.middleName = dataSplited[1];
        this.lastName = dataSplited[2];
      }
      else if (dataSplited.length >= 2) {
        this.firstname = dataSplited[0];
        this.lastName = dataSplited[1];
      }
        else if (dataSplited.length < 2) {
          this.firstname = dataSplited[0];
        }
        this._sharedService.setSocialMedia(JSON.stringify({"email":userData.email, "password":this.password, "firstName":this.firstname, "middleName":this.middleName, "lastName":this.lastName}));
      }
      setTimeout(function() {
      if (document.getElementsByClassName('form-control').length <= 0) {
        location.reload();
      }        
      }, 1000);
     
  }
  
  handleOtherCountryUpdate(isOtherCountry: boolean) {
    this.changedCountry = isOtherCountry;
  }

  private previousPage = '';
  handlePageUpdate(pageInfo) {
    this.wizardStepsLayout(pageInfo);
    let count = true;
    for (let i in this.dataFromDb) {
      if (Object.keys(this.dataFromDb[i]).toString().toLowerCase() === pageInfo.pageName.toString().toLowerCase()) {
        let pageData = (<any>Object).entries(this.dataFromDb[i])[0][1];
        if (pageInfo.direction.toLowerCase() === "previous" && this.biFormComponentDataArray[this.biFormComponentDataArray.length - 1].options[1].values.toLowerCase() === "ext_profile") {
          this.biFormComponentDataArray[this.biFormComponentDataArray.length - 1].options[0].values = '';
        }
        if(pageData[pageData.length - 1].options[0] !== undefined){
          if (pageData[pageData.length - 1].options[0].values === '') {
            if(count){
              this.previousPage ='';
              pageData[pageData.length - 1].options[0].values = this.previousPage;
              count = false;
            }
            if(this.previousPage === ''){
              pageData[pageData.length - 1].options[0].values = this.currentPageName;
              this.previousPage = this.currentPageName;
            }
          }
        }
        this.biFormComponentDataArray = pageData;
        this._sharedService.addComponentToArray(this.biFormComponentDataArray);
        this.currentPageName = pageInfo.pageName.toString().toLowerCase();
        break;
      }
    }
  }

  createComponent = (e: any, index: number): void => {
    e.preventDefault();
    if (index == 0) {
      this.type = 'label'
    } else {
      this.type = 'text'
    }
    this.biFormComponentDataArray.push(this.type);
  };

  onSubmit(eve) {
    if (eve.direction.toLowerCase() === 'continue') {
      this.loopArray(this).then(function (result) {
        if (result[0]) {
          result[1].handlePageUpdate(eve);
          return true;
        } else {
          return false;
        }
      })
        .then(bool => {
          if (!bool) {
            this.toasterService.showWarning('error', 'Required fields need to be filled');
          }
        });
    } else if (eve.direction.toLowerCase() === 'submit') {
      // send data to DataBase
      // console.log(this.dataFromDb);
    } else {
      this.handlePageUpdate(eve);
    }
  }

  toggleVersionControl() {
    if (this.biFormComponentDataArray !== []) {
      if (this.hideVersionControl === false) {
        this.hideVersionControl = true;
      } else {
        this.hideVersionControl = false;
      }
    }
  }

  wizardStepsLayout(pageinfo) {
    if (pageinfo.direction.toLowerCase() === 'continue') {
      this.wizardSteps[this.wizardCounter].active = false;
      this.wizardSteps[this.wizardCounter].default = false;
      this.wizardSteps[this.wizardCounter].visited = true;
      this.wizardSteps[this.wizardCounter].strongStep = false;
      this.wizardCounter++;
      this.wizardSteps[this.wizardCounter].active = true;
      this.wizardSteps[this.wizardCounter].default = false;
      this.wizardSteps[this.wizardCounter].visited = false;
      this.wizardSteps[this.wizardCounter].strongStep = false;
    } else if (pageinfo.direction.toLowerCase() === 'previous') {
      this.wizardSteps[this.wizardCounter].active = false;
      this.wizardSteps[this.wizardCounter].default = false;
      this.wizardSteps[this.wizardCounter].visited = true;
      this.wizardSteps[this.wizardCounter].strongStep = false;
      this.wizardCounter--;
      this.wizardSteps[this.wizardCounter].active = true;
      this.wizardSteps[this.wizardCounter].default = false;
      this.wizardSteps[this.wizardCounter].visited = false;
      this.wizardSteps[this.wizardCounter].strongStep = false;
    }
  }

  loopArray(contoller) {
    let canMoveToNextPage = true;
    contoller.biFormComponentDataArray.map(obj => {
      if (obj.defaultInputValue.length >= Number(obj.requireMinLength)) {
        if (obj.require) {
          if (obj.defaultInputValue !== '') {
            if (canMoveToNextPage) {
              // only used for email, password and confirmPassword
              if (obj.componentType === 'bi-signup-form') {
                JSON.parse(obj.defaultInputValue).map(obj => {
                  if (obj.email !== '' && obj.password !== '' && obj.confirmPassword !== '' && obj.password === obj.confirmPassword) {
                    canMoveToNextPage = true;
                    this.hideMsg = true;
                  } else {
                    canMoveToNextPage = false;
                    this.hideMsg = false;
                  }
                }, this)
              }
              // if not bi-signup-form then it will be good to go to the next page
              else {
                canMoveToNextPage = true;
                this.hideMsg = true;
              }
            }
          } else {
            canMoveToNextPage = false;
            this.hideMsg = false;
          }
        } else {
          if (obj.defaultInputValue !== '') {
          }
        }
      } else if (obj.defaultInputValue.text !== '' && obj.componentType === 'bi-select') {
        canMoveToNextPage = true;
        this.hideMsg = true;
      } else {
        canMoveToNextPage = false;
        this.hideMsg = false;
      }
    })
    return new Promise((resolve) => {
      resolve([canMoveToNextPage, contoller]);
    });
  }
}
