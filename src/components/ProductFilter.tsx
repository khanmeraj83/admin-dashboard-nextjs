import { useEffect, useState } from 'react';
import { FilterCriteria } from '@/types/interfaces';

interface ProductFilterProps {
  onFilter: (criteria: FilterCriteria) => void;
}

const ProductFilter: React.FC<ProductFilterProps> = ({ onFilter }) => {
  const [category, setCategory] = useState<string>('');
  const [brand, setBrand] = useState<string>('');

  useEffect(() => {
    onFilter({ category, brand });
  }, [brand, category]);

  const handleFilter = () => {
    onFilter({ category, brand });
  };

  return (
    <div className='mb-4'>
      <input
        type='text'
        placeholder='Category'
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className='border p-2 mr-2'
      />
      <input
        type='text'
        placeholder='Brand'
        value={brand}
        onChange={(e) => setBrand(e.target.value)}
        className='border p-2'
      />
      <button
        onClick={handleFilter}
        className='bg-blue-500 text-white p-2 ml-2 rounded'
      >
        Filter
      </button>
    </div>
  );
};

export default ProductFilter;
