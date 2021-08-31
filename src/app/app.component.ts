import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {Coin } from './interfaces/coin'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-coingecko-api';
  coin:Coin[]=[]
  filterCoin:Coin[]=[]

  searchText='';
  constructor(private http:HttpClient){
  
  }
  ngOnInit(){
   this.http.get<Coin[]>('https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=10&page=1&sparkline=false')
  .subscribe((data)=>{
   this.coin=data;
   this.filterCoin=data
  })
  }
  buscar(){
    console.log('mi search',this.searchText)
    this.filterCoin=this.coin.filter(coin=>
      coin.name.toLowerCase().includes(this.searchText.toLowerCase())
    )
  }
}
