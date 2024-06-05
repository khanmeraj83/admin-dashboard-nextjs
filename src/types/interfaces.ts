
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
  
export interface User {
    email: string;
    id: number;
    name: string;
  }
  
  export interface Session {
    expires: string;
    user: User;
  }
  
  interface Credentials {
    username: string;
    password: string;
  }