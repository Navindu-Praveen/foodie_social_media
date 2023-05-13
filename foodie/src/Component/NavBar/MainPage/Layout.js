import React, { Component } from 'react';
import "./Mainpage.css";
import { Grid } from '@material-ui/core';
import LeftSide from './LeftSidePanel/LeftSide';

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
                    midle
                </Grid>
                <Grid item xs={3}>
                    right
                </Grid>
                </Grid>
        </div> );
    }
}
 
export default Layout;