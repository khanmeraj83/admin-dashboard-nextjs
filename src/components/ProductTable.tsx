import { Product } from '@/types/interfaces';

interface ProductTableProps {
  products: Product[];
  deleteProduct: (id: number) => void;
}

const ProductTable: React.FC<ProductTableProps> = ({
  products,
  deleteProduct,
}) => {
  const onDelete = (id: number) => {
    deleteProduct(id);
  };

  return (
    <table className='min-w-full bg-white'>
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Price</th>
          <th>Category</th>
          <th>Brand</th>
          <th>Stock</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <td>{product.title}</td>
            <td>{product.description}</td>
            <td>{product.price}</td>
            <td>{product.category}</td>
            <td>{product.brand}</td>
            <td>{product.stock}</td>
            <td>
              <img src={product.thumbnail} alt={product.title} width='50' />
            </td>
            <td className='font-medium text-blue-600 dark:text-blue-500 hover:underline'>
              <button onClick={() => onDelete(product.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable;
