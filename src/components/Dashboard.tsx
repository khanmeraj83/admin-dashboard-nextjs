import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import Chart from 'chart.js/auto';
import { Product } from '@/types/interfaces';

const Dashboard = () => {
  const [averageRating, setAverageRating] = useState(0);
  const [categoryCount, setCategoryCount] = useState<{ [key: string]: number }>(
    {}
  );
  const chartRef = useRef<Chart | null>(null);

  useEffect(() => {
    axios.get('https://dummyjson.com/products').then((response) => {
      const average =
        response.data.products.reduce(
          (sum: number, p: Product) => sum + p.rating,
          0
        ) / response.data.products.length;
        
      setAverageRating(Math.round(average));

      const countByCategory = response.data.products.reduce(
        (acc: { [key: string]: number }, product: Product) => {
          acc[product.category] = (acc[product.category] || 0) + 1;
          return acc;
        },
        {}
      );
      setCategoryCount(countByCategory);
    });
  }, []);

  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    const ctx = (
      document.getElementById('categoryChart') as HTMLCanvasElement
    ).getContext('2d');

    if (ctx) {
      chartRef.current = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: Object.keys(categoryCount),
          datasets: [
            {
              label: 'Products by Category',
              data: Object.values(categoryCount),
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
            },
          ],
        },
      });
    }
  }, [categoryCount]);

  return (
    <div>
      <h2 className='text-3xl dark:text-white'>Dashboard</h2>
      <p className='my-4 text-lg text-gray-500'>
        Average Rating: {averageRating}
      </p>
      <canvas id='categoryChart'></canvas>
    </div>
  );
};

export default Dashboard;
