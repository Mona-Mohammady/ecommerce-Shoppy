export interface Product {
    _id : string;
    description: string;
    imageCover : string;
    title: string;
    ratingsAverage: string;
    price:number;
    category:Categoery;

}


export interface Categoery{
    name : string;
    _id : string;
    slug : string;
    image : string;
    
}


export interface Brands{
    name : string;
   
    image : string;
    
}