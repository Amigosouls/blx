import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Cities } from 'src/models/cities';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  constructor(private httpObj:HttpClient) { }

  getcities(){
    return this.httpObj.get<Cities[]>(environment.cities);
  }

  getVehicles(){
    return this.httpObj.get<any[]>(environment.vehicles);
  }
}
