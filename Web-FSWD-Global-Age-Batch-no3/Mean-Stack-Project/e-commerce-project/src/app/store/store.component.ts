import { Component, OnInit } from '@angular/core';
import { StoreService } from '../shared/services/store.service';
import { IOne, IStoreData, ITwo } from '../shared/interfaces/store-data.interface';
import { StoreDataE } from '../shared/enums/store-data.enum';
import { Router } from '@angular/router';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  public array1 :IOne[] = [
    { _id:1, status: false },
    { _id:2, status: true },
    { _id:3, status: false },
    { _id:4, status: true },
    { _id:5, status: false },
  ]
  
  public array2 :ITwo[] = [
    { _selectionId:1, name: 'A'},
    { _selectionId:2, name: 'B'},
    { _selectionId:3, name: 'C'},
    { _selectionId:4, name: 'D'},
    { _selectionId:5, name: 'E'},
  ] 

  public storeData:IStoreData[] = [];
  public storeDataE = StoreDataE;
  constructor(
    private readonly StoreService:StoreService,
    private readonly Router: Router
  ){
  }

  ngOnInit(){
    this.getDataFromStore();
    let result = this.mergingArray(this.array1, this.array2);
  }

  public mergingArray (array1: IOne[], array2: ITwo[]) {
    let mergedArray = array1.map((array1element:IOne) => {
       let array2element =  array2.find((element:ITwo) => {
        return (array1element._id === element._selectionId)
      })
       return {...array1element, ...array2element}
    })
    return mergedArray
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
      }
      
    )
  }

  public goToCart(uniqueIdentity:number){
    this.Router.navigate(['/add-to-cart', uniqueIdentity]);
  }
}
