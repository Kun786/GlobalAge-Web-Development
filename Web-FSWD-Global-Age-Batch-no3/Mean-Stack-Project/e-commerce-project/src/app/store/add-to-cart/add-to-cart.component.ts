import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StoreService } from 'src/app/shared/services/store.service';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent implements OnInit{

  public filteredDataById: any = []; 
  constructor(
    private readonly Router: Router,
    private readonly ActivatedRoute: ActivatedRoute,
    private readonly StoreService: StoreService 
  ) { }

  ngOnInit(): void {
    this.StoreService.getData().subscribe((data:any) => {
      let { data:responseData } = data; 
      this.ActivatedRoute.params.subscribe((id)=>{
        this.filteredDataById = responseData.filter((element:any) => {
         return  element.artist_id === parseInt(id['id'])
        })	
      })
      console.log(this.filteredDataById)
    })
  }
}
