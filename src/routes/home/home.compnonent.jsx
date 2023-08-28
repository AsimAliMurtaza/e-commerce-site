import { Outlet } from 'react-router-dom';
import CategoryContainer from '../../components/categories-container/categories-container.component';

const Home = ()=> {
  const categories = [
    {
      id: 1,
      title: 'Hats',
      imageUrl: 'https://i.ibb.co/cvpntL1/hats.png'
    },
    {
      id: 2,
      title: 'Jackets',
      imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png'
    },
    {
      id: 3,
      title: 'Sneakers',
      imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png'
    },
    {
      id: 4,
      title: 'For Women',
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png"
    },
    {
      id: 5,
      title: 'For Men',
      imageUrl: 'https://i.ibb.co/R70vBrQ/men.png'
    }
  ]
  return (
    <div>
        <Outlet/>
        <CategoryContainer categories={categories}/>
    </div>
  );
}

export default Home;
