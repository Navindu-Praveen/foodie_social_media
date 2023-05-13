import React, { Component } from 'react';
import "./Mainpage.css";
import { Grid } from '@material-ui/core';
import LeftSide from './LeftSidePanel/LeftSide';
import StatusBar from './StatusBar/Status';

class Layout extends Component {
    constructor(props) {
        super(props);
        this.state ={}
    }
    render() { 
        return ( 
        <div className="mainpage__container">
            <Grid container>
                <Grid item xs={3}>
                    <LeftSide />
                </Grid>
                <Grid item xs={6}>
                    <StatusBar />
                </Grid>
                <Grid item xs={3}>
                    right
                </Grid>
                </Grid>
        </div> );
    }
}
 
export default Layout;