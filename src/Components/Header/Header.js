import React, { useContext } from 'react';
import { Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { DestinationContext } from '../../App';
import logoImage from '../../images/Logo.png'

const Header = () => {
    const [destination, setDestination, loggedInUser, setLoggedInUser] = useContext(DestinationContext);
    return (
        <div className='container'>
        <Navbar className='pt-4 navbar' expand="lg">
                <Link to="/home"><img style={{height:'50px', marginRight:'10px'}} src={logoImage} alt="logoImage"/></Link>
        
                <Form inline>
                    <FormControl style={{ width: "500px", background: 'none'}} type="text" placeholder="Search Your Destination..." className="mr-5"/>
                </Form>
            
                <Nav className="nav-link d-flex align-items-center">
                    <Link className="mr-4 text-white" to="/news">News</Link>
                    <Link className="mr-4 text-white" to="/destination">Destination</Link>
                    <Link className="mr-4 text-white" to="/blog">Blog</Link>
                    <Link className="mr-4 text-white" to="/Contact">Contact</Link>
                    {loggedInUser.email || loggedInUser.name ? <Link onClick={()=> setLoggedInUser({})} className="btn btn-sm btn-warning px-4 font-weight-bold">{loggedInUser.name ? loggedInUser.name : loggedInUser.email}</Link> : <Link to="/login" className="btn btn-sm btn-warning px-4 font-weight-bold">Login</Link>
                        }
                </Nav>
        </Navbar>
    </div>
    );
};

export default Header;