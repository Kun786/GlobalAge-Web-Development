import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(
    private readonly HttpClient:HttpClient
  ) { }

  public getData() {
   return this.HttpClient.get('https://api.artic.edu/api/v1/artworks');
  }
  
}
