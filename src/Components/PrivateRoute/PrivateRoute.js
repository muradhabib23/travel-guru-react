import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { DestinationContext} from '../../App';

const PrivateRoute = ({ children, ...rest }) => {
    const [destination, setDestination, loggedInUser, setLoggedInUser] = useContext(DestinationContext);
    return (
        <Route
      {...rest}
      render={({ location }) =>
        loggedInUser.email || loggedInUser.name ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
    );
};

export default PrivateRoute;