import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError  } from 'rxjs';
import { catchError, retry , map } from 'rxjs/operators';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})





export class ContentComponent implements OnInit {
  
  stateUrl: string = "http://sepomex.icalialabs.com/api/v1/states";
  cityUrl: string = "http://sepomex.icalialabs.com/api/v1/cities";
  munUrl: string = "http://sepomex.icalialabs.com/api/v1/municipalities";
  url: string = "http://sepomex.icalialabs.com/api/v1/zip_codes";
  public states : any;
  public cities : any;
  public mun : any;

  constructor(private http : HttpClient) {
    
  }

  ngOnInit() {
    this.states = this.getState();
    this.cities = this.getCity();
    this.mun = this.getMun();
  }

  getState(term: string = ''){
    const options = term ? { params: new HttpParams().set('name', term) } : {};
    console.log(term ? "si" : "no");
    return this.http.get(this.stateUrl, options).pipe(map(res => {
      console.log("estates " ,res.states);
      return res.states;
    }));
  }

  getCity(term: string = '') {
    const options = term ? { params: new HttpParams().set('name', term) } : {};
    console.log(term ? "si" : "no");
    return this.http.get(this.cityUrl, options).pipe(map(res => {
      console.log("cities ",res.cities);
      return res.cities;
    }));
  }

  getMun(term: string = '') {
    const options = term ? { params: new HttpParams().set('name', term) } : {};
    console.log(term ? "si" : "no");
    return this.http.get(this.munUrl, options).pipe(map(res => {
      console.log("muns " ,res.municipalities);
      return res.municipalities;
    }));
  }
}
