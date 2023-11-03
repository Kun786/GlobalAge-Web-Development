import { Component, HostListener, Inject, OnInit, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit, OnChanges, OnDestroy {

  public showTable: boolean = true;
  public human:any = [
    { name: 'John', age: 25 },
    { name: 'Doe', age: 30 },
    { name: 'Jane', age: 35 },
    { name: 'Smith', age: 40 },
    { name: 'Williams', age: 45 },
    { name: 'Brown', age: 50 },
    { name: 'Jones', age: 55 },
    { name: 'Miller', age: 60 }
  ]
  public name: string = "John Doe";
  constructor(){
    console.log('Bhai main constructor wala life cycle hook hoon')
  }

  public ngOnInit():void {
    console.log('Bhai main init wala life cycle hook hoon')
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('asdas')
  }

  public showTableMehod():void {
    this.showTable = !this.showTable;
  }
  ngOnDestroy(): void {
    console.log('Jaab component tum ghayab hoo gay taab yeh life cycle hook chalay ga')
  }
   public myName: string = "John Doe";
}

