import { Component, OnInit } from '@angular/core';
import { StoreService } from '../shared/services/store.service';
import { IStoreData } from '../shared/interfaces/store-data.interface';
import { StoreDataE } from '../shared/enums/store-data.enum';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  public storeData:IStoreData[] = [];
  public storeDataE = StoreDataE;
  constructor(
    private readonly StoreService:StoreService
  ){
  }

  ngOnInit(){
    this.getDataFromStore();
  }

  public getDataFromStore(){
    this.StoreService.getData().subscribe(
      (response:any) => {
        const { data } = response;
          this.storeData = data.map((elements:any) => {
            return{
              id: elements.artist_id,
              title: elements.artist_title,
              description: elements.description,
              exhibition_history: elements.exhibition_history,
              image: elements.thumbnail.lqip
            }
          })
          console.log(this.storeData)
      }
    )
  }
}
