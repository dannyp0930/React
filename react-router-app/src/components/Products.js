import { Link, Outlet } from 'react-router-dom'

export const Products = () => {
  return (
    <div>
      <div>
        <input type='search' placeholder='Search products'/>
      </div>
      <nav>
        <Link to='featured'>Featured</Link>
        <Link to='new'>New</Link>
      </nav>
      <Outlet/>
    </div>
  );
};
