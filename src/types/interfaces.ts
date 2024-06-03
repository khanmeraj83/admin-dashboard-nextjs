
export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    category: string;
    brand: string;
    stock: number;
    thumbnail: string;
    rating: number;
  }
  
  export interface FilterCriteria {
    category?: string;
    brand?: string;
  }
  