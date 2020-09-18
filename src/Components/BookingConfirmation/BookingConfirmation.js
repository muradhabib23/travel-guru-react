import React, { useContext, useState } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import hotelsData from '../../hotelsData';
import logoImage from '../../images/Logo.png'
import stars from '../../images/Icon/star_1_.png';
import { DestinationContext } from '../../App';

const BookingConfirmation = () => {
    const [hotels] = useState(hotelsData);
    const [loggedInUser, setLoggedInUser] = useContext(DestinationContext)

    return (
        <div>
        <div className='container'>
        <Navbar className='pt-4 navbar' expand="lg">
                <Link to="/home"><img style={{height:'50px', marginRight:'10px'}} src={logoImage} alt="logoImage"/></Link>
               <div style={{marginLeft: '800px'}}>
                        {loggedInUser.email || loggedInUser.name ? <Link onClick={()=> setLoggedInUser({})} className="btn btn-sm btn-warning px-4 font-weight-bold">{loggedInUser.name ? loggedInUser.name : loggedInUser.email}</Link> : <Link to="/login" className="btn btn-sm btn-warning px-4 font-weight-bold">{loggedInUser.name ? loggedInUser.name : loggedInUser.email}Sign Out</Link>
                        }
               </div>
               
        </Navbar>
        </div>

        <div className='row mt-3 justify-content-between'>
                <div className='col-md-6'>
                    {
                        hotels.map(hotel => {
                            return (
                                <div className='row border rounded mb-2 hotel-card d-flex align-items-center p-2'>
                                    <div className='col-md-4'>
                                        <img style={{width: '300px', height: '200px'}} src={hotel.img} alt="" />
                                    </div>
                                    <div className='col-md-7' style={{marginLeft: '55px'}}>
                                        <ul className='p-0 pl-md-5'>
                                            <li>
                                               <h4 className="text-dark mt-2 mt-md-0">{hotel.name}</h4>
                                            </li>
                                            <li>
                                                {hotel.specification}
                                            </li>
                                            <li>
                                                {hotel.internet}
                                            </li>
                                            <li>
                                                {hotel.cancel}
                                            </li>
                                            <div className='d-flex justify-content-between'>
                                                <div><img src={stars} style={{ width: '20px' }} alt="" />{hotel.star}(25)</div> 
                                                <div className='font-weight-bold'>${hotel.price}/night</div>
                                            </div>
                                        </ul>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
        </div>
        </div>
    );
};

export default BookingConfirmation;