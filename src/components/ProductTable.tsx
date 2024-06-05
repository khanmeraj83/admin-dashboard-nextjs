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
    <div className='overflow-x-auto'>
      <table className='min-w-full bg-white'>
        <thead className='bg-gray-50'>
          <tr>
            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
              Title
            </th>
            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden sm:table-cell'>
              Description
            </th>
            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
              Price
            </th>
            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
              Category
            </th>
            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
              Brand
            </th>
            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
              Stock
            </th>
            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'></th>
            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'></th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} className='bg-white border-b'>
              <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
                {product.title}
              </td>
              <td className='px-6 py-4 text-sm text-gray-500 hidden sm:table-cell'>
                {product.description}
              </td>
              <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                {product.price}
              </td>
              <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                {product.category}
              </td>
              <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                {product.brand}
              </td>
              <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                {product.stock}
              </td>
              <td className='px-6 py-4 whitespace-nowrap'>
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  width='50'
                  className='w-12 h-12 rounded-full'
                />
              </td>
              <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline'>
                <button onClick={() => onDelete(product.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
