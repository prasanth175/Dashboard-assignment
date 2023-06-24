import './index.css';
// import Cookies from 'js-cookie';
import Navbar from "../Navbar";
import TotalCards from '../TotalCards';
import ActivityCard from '../ActivityCard';
import TopProducts from '../TopProducts';
import Schedule from '../Schedule';


const Cards = ({profileObj}) => {
  // const [profileObj, setProfileObj] = useState(null);

  // useEffect(() => {
  //   const getToken = Cookies.get('jwtToken');
  //   console.log(getToken);
  //   console.log('love');
  //   const url = 'https://cors-anywhere.herokuapp.com/https://github.com/public-apis/public-apis';
  //   const options = {
  //     headers: {
  //       'Content-type': 'application/json',
  //       Authorization: `Bearer ${getToken}`
  //     },
  //   };

  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(url, options);
  //       console.log(response);
  //       const data = await response.json();
  //       console.log(data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <div className="cards-container">
      <Navbar projectObj={profileObj} />
      <TotalCards />
      <ActivityCard />
      <div className='bottom-container'>
        <TopProducts />
        <Schedule />
      </div>
    </div>
  );
}

export default Cards;
