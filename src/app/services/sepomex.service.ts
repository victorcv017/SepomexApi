import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface State {
  states: any[];
}

export interface City {
  cities: any[];
}

export interface Municipality {
  municipalities : any[];
}

export interface ZipCode {
  zip_codes : any[];
}


@Injectable({
  providedIn: 'root'
})

export class SepomexService {

  stateUrl: string ;
  cityUrl: string ;
  municipalityUrl: string;
  zipCodeUrl: string ;

  constructor(private http: HttpClient) { 
    this.stateUrl = "http://sepomex.icalialabs.com/api/v1/states/";
    this.zipCodeUrl = "http://sepomex.icalialabs.com/api/v1/zip_codes";

  }

  getStates() : Observable<State> {
    return this.http.get<State>(this.stateUrl);
  }

  getMunicipality(id_state: number): Observable<Municipality> {
    return this.http.get<Municipality>(this.stateUrl + id_state + "/municipalities" );
  }

  getZipCode(zip_code : string): Observable<ZipCode> {
    const options = { params: new HttpParams().set('zip_code', zip_code) }
    return this.http.get<ZipCode>(this.zipCodeUrl,options);
  }

  getData(state: string , city : string): Observable<ZipCode> {
    const options = { params: new HttpParams().set('state', state).set('city',city) }
    return this.http.get<ZipCode>(this.zipCodeUrl,options);
  }

  


}
