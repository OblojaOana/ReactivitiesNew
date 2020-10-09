import React, { Fragment } from 'react';
import { Container } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import NavBar from '../../features/nav/Navbar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import { Route, RouteComponentProps, withRouter } from 'react-router-dom';
import HomePage from '../../features/home/HomePage';
import ActivityForm from '../../features/activities/form/ActivityForm';
import { observer } from 'mobx-react-lite';
import ActivityDetails from '../../features/activities/details/ActivitiesDetails';


const App: React.FC<RouteComponentProps> = ({location}) => {

    return (
      <Fragment >
        <Route exact path='/' component={HomePage} />
        <Route 
        path={'/(.+)'} 
        render={() => (
          <Fragment>
            <NavBar />
            <Container style={{marginTop: '7em'}}>      
              <Route exact path='/activities' component={ActivityDashboard} />
              <Route path='/activities/:id' component={ActivityDetails} />
              <Route key={location.key} path={['/createActivity','/manage/:id']} component={ActivityForm} />
            </Container>
          </Fragment>
        ) }
        />
      </Fragment>
    );

}

export default withRouter(observer(App));
