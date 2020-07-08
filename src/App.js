import React, { Component } from 'react';
import { Grid, Col, Row } from 'react-flexbox-grid';
import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended';
import './App.css';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';

const cities = [
  "Morelia, mx",
  "Madrid, es",
  "California, us"
];
class App extends Component {

  constructor() {
    super();
    this.state = { city: null };

  }

  handleSelectLocation = city => {
    this.setState({ city });
  }

  render() {
    const { city } = this.state;
    return (
      <Grid>
        <Row>
          <AppBar position="sticky">
            <Toolbar>
              <Typography variant='subtitle1' color='inherit'>
                Weather App
              </Typography>
            </Toolbar>
          </AppBar>
        </Row>
        <Row>
          <Col xs={12} md={6} className="list">
            <LocationList cities={ cities }
              onSelectedLocation={this.handleSelectLocation}> 
            </LocationList>
          </Col>
          <Col  xs={12} md={6} className="details">
            <Paper elevation={4}>
              <div>
                {
                  city && <ForecastExtended city={ city }></ForecastExtended>
                }
              </div>
            </Paper>
          </Col>
        </Row>
      </Grid>
    );
  }

}


export default App;
