import { useState, useEffect } from 'react';
import axios from 'axios';
import ProductFilter from '@/components/ProductFilter';
import ProductTable from '@/components/ProductTable';
import { Product, FilterCriteria } from '@/types/interfaces';
import withAuth from '@/hoc/withAuth';

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/products').then((response) => {
      setProducts(response.data.products);
      setFilteredProducts(response.data.products);
    });
  }, []);

  const handleFilter = (filters: FilterCriteria) => {
    const filtered = products.filter(
      (product) =>
        (!filters.category || product.category?.includes(filters.category)) &&
        (!filters.brand || product.brand?.includes(filters.brand))
    );
    setFilteredProducts(filtered);
  };

  const onDeleteProduct = async (id: number) => {
    await axios.delete(`https://dummyjson.com/products/${id}`);
    setFilteredProducts(products.filter((product) => product.id !== id));
  };

  return (
    <div>
      <h2 className='text-3xl dark:text-white'>Products</h2>
      <ProductFilter onFilter={handleFilter} />
      <ProductTable
        products={filteredProducts}
        deleteProduct={onDeleteProduct}
      />
    </div>
  );
};

export default withAuth(Products);
