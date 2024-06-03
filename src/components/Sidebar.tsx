import Link from 'next/link';
import { useRouter } from 'next/router';

const Sidebar = () => {
  const router = useRouter();
  return (
    <div className='w-64 bg-gray-800 text-white'>
      <nav>
        <ul>
          <li className={`p-4 ${router.pathname == '/' ? 'bg-slate-600' : ''}`}>
            <Link href='/'>Dashboard</Link>
          </li>
          <li
            className={`p-4 ${router.pathname == '/products' ? 'bg-slate-600' : ''}`}
          >
            <Link href='/products'>Products</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
