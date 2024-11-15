import './Home.css';
import { useOutletContext } from 'react-router-dom';

const Home = () => {
  const { jwt } = useOutletContext();

  return (
    <div className="home-wrapper">
      <p>Hello world!</p>
      <p>Welcome home.</p>
    </div>
  );
};

export default Home;
