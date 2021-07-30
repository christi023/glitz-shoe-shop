import Carrousel from '../Carrousel/Carrousel';
import Banner from '../../assets/banner1.jpeg';
// style
import './Home.css';

const Home = () => {
  return (
    <div className="home" style={{ background: `url(${Banner})` }}>
      <Carrousel />
    </div>
  );
};
export default Home;
