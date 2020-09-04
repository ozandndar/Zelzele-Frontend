import React from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';


// IMPORTING PAGES
import Homepage from './Pages/Homepage';
import Login from './Auth/Login';
import Register from './Auth/Register';
import Earthquake from './Pages/Earthquake';
import About from './Pages/About';

class Index extends React.Component {
  render() {
    return (
      <Router>
        <Stack key="root" hideNavBar>
          <Scene key="login" component={Login} initial />
          <Scene key="register" component={Register} />
          <Scene key="home" component={Homepage} />
          <Scene key="earthquake" component={Earthquake} />
          <Scene key="about" component={About} />
        </Stack>
      </Router>
    );
  }
}

export default Index;
