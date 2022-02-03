import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service'; 
import { CartService } from 'src/app/service/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {
  public productList:any;
  public pQuantity: number=1;
  constructor(private api : ApiService, private cartService : CartService, private router: Router) { }

  ngOnInit(): void {
    this.api.getProducts()
    .subscribe((res:any)=>{
      this.productList=res;

      this.productList.array.forEach((a:any) => {
        Object.assign(a,{quantity:this.pQuantity,total:a.price});
      });
    })
  
  }
  addtocart(productList:any,pQuantity:number){
    this.cartService.addtoCart(productList,pQuantity);
  }
}  
  