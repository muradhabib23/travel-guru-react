import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import fakeData from '../../fakeData';
import { DestinationContext } from '../../App';
import Header from '../Header/Header';
import './Home.css'




const Home = () => {
  const [destination, setDestination] = useState(DestinationContext)

  let history = useHistory()

  const [destinations] = useState(fakeData);

  const handleDestination = (id) => {
      const selectDestination = destinations.find(dst => dst.id === id);
      setDestination(selectDestination);
  }

  useEffect(() => {
      setDestination(destinations[0])
  }, []);

  const handleBooking = (dst) => {
      history.push('/booking/' + dst.name)
  }
    return (
        <div className="home-page">
          <Header></Header>
          <br/>
          <br/>
          <div className='row container d-flex justify-content-between mt-5 pt-5'>
          <div className='col-md-5 ml-5 pl-5'>
             <h1 className='text-white'>{destination.name}</h1>
             <p className='text-white'>
                 {destination.highLightedText}
             </p>
             <Link className='btn btn-md btn-warning font-weight-bold' onClick={() => handleBooking(destination)}>Booking</Link>
         </div>
         <div className='col-md-5 d-flex'>
             {
                 destinations.map(dst => {
                     return (
                         <div className='destinationImage'>
                             <Link onClick={()=> handleDestination(dst.id)}>
                                 <img src={dst.img} alt="" />
                                 <h4 className='text-white ml-4'>{dst.name}</h4>
                             </Link>
                         </div>
                     )
                 })
             }
         </div>
     </div>
        </div>
      
    );
};

export default Home;