interface ICreateProduct {
   title: string;
   price: number;
   description: string;
   imageUrl?: string[];
   quantity: number;
   category_id: string;
}

export { ICreateProduct };
