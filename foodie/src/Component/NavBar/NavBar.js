import React, { Component } from 'react';
import "./NavBar.css";
import Grid from '@material-ui/core/Grid';
import fdlogo from "../../images/logo.png";

import home from "../../images/home.svg";
import page from "../../images/pages.svg";
import watch from "../../images/watch.svg";
import market from "../../images/market.svg";
import group from "../../images/groups.svg";
import { Avatar } from '@material-ui/core';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state ={ }
    }
    render() { 
        return (
            <div>
                <Grid container className="navbar_main">
                <Grid item xs ={3}>
                    <div className="navbar_leftbar">
                        <img className="navbar_logo" src={fdlogo} width="40px"/>
                        <input className="navbar_search" type="text" placeholder="Search Foodie"/>
                    </div>
                    </Grid>
                <Grid item xs ={6}>
                <div className="navbar__container">
                            <div className="navbar__tabs active">
                                <img src={home} height="35px" width="35px" />
                            </div>
                            <div className="navbar__tabs">
                                <img src={page} height="35px" width="35px" />
                            </div>
                            <div className="navbar__tabs">
                                <img src={watch} height="35px" width="35px" />
                            </div>
                            <div className="navbar__tabs">
                                <img src={market} height="35px" width="35px" />
                            </div>
                            <div className="navbar__tabs">
                                <img src={group} height="35px" width="35px" />
                            </div>
                        </div>
                    </Grid>
                <Grid item xs ={3}>
                <div className="navbar__right">
                            <div className="navbar__righttab"> 
                            <Avatar className="navbar__rightimg" src="https://web.facebook.com/SensitiveContentEyewear/photos/a.107070181041781/107343014347831/?__tn__=%3C" />
                            <div className="navbar__profilename">Praveen</div>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>  );
    }
}
 
export default NavBar;