import { Component } from '@angular/core';
import { CrudService } from './service/crud.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firebaseCurso';

  employee: any;
  employeeName:string | undefined;
  employeeAge:number | string;
  employeeAddress:string | undefined;
  message:string | undefined;

constructor(public crudservice:CrudService){}

CreateRecord()
{
  let Record = {};
  Record['name'] = this.employeeName;
  Record['age'] = this.employeeAge;
  Record['address'] = this.employeeAddress;

  this.crudservice.create_Newemployee(Record).then((res: any) => {

    this.employeeName = "";
    this.employeeAge = "";
    this.employeeAddress = "";
    console.log(res);
    this.message = "Employee data save Done";
  }).catch((error: any) => {
    console.log(error);
  });
}
}
