import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private httpObj: HttpClient) {

   }


   getVehicles(type:string){
    return this.httpObj.get<any[]>(environment.vehicles+`/?data_like=${type}`);
   }
}
