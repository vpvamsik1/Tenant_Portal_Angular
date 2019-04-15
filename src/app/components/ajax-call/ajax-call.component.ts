import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IEmployee } from 'src/app/employee';


@Component({
  selector: 'app-ajax-call',
  templateUrl: './ajax-call.component.html',
  styleUrls: ['./ajax-call.component.css']
})
export class AJAXCallComponent implements OnInit {

  private _url: string = "../../../assets/data.employees.json";

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this._url);
  }

  ngOnInit() {
    
  }

}
