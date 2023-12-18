import { CartItem } from "./CartItem";

export class Cart{
    items: CartItem[]=[]; 

    get totalPrice():number{
        let totalPrice=0;
        for(let item of this.items)
            totalPrice+=item.price;
        return totalPrice;
    }

}