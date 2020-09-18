import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { DestinationContext } from '../../App';
import Header from '../Header/Header';
import { makeStyles, TextField } from '@material-ui/core';
import fakeData from '../../fakeData';


const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
}));

const Booking = () => {
    const classes = useStyles();
    let history = useHistory();
    const handleConfirmBooking = () => {
        history.push('/bookingConfirmation')
    }
    const [destination, setDestination] = useState(DestinationContext)
    const [destinations] = useState(fakeData);
    useEffect(() => {
        setDestination(destinations[0])
    }, []);
   

    return (
        <div className="home-page">
            <Header />
            <br/>
            <br/>
            <div className='container mt-7 pt-5'>
                <div className="row d-flex justify-content-between">
                    <div className="col-md-6">
                        <h1 className="text-white">
                            {destination.name}
                        </h1>
                        <p className="text-white">
                            {destination.description}
                        </p>
                    </div>
                    <div className="col-md-6">
                        <div class="card">
                            <div class="card-body">
                                <form className='from-group '>
                                    <label htmlFor="">Origin</label>
                                    <input type="text" className="form-control mb-2" name="" placeholder='Dhaka' id="" />
                                    <label htmlFor=''>Destination</label>
                                    <input type="text" className="form-control mb-2" name='' placeholder={destination.name} id="" />
                                    <div class="row d-flex justify-content-between mb-3">
                                        <div>
                                            <form className={classes.container} noValidate>
                                                <TextField
                                                    id="date"
                                                    label="From"
                                                    type="date"
                                                    defaultValue={Date}
                                                    className={classes.textField}
                                                    InputLabelProps={{
                                                        shrink: true,
                                                    }}
                                                />
                                            </form>
                                        </div>
                                        <div>
                                            <form className={classes.container} noValidate>
                                                <TextField
                                                    id="date"
                                                    label="To"
                                                    type="date"
                                                    defaultValue={Date}
                                                    className={classes.textField}
                                                    InputLabelProps={{
                                                        shrink: true,
                                                    }}
                                                />
                                            </form>
                                        </div>
                                    </div>
                                </form>
                                <button onClick={handleConfirmBooking} class="btn btn-md btn-warning btn-block font-weight-bold">Confirm Booking</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;