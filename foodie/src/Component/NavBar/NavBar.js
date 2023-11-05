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
                            <Avatar className="navbar__rightimg" src="https://scontent.fcmb4-2.fna.fbcdn.net/v/t39.30808-1/225796552_4061129557275916_1409216289508167974_n.jpg?stp=cp0_dst-jpg_p86x86&_nc_cat=102&ccb=1-7&_nc_sid=dbb9e7&_nc_eui2=AeFFJibsjuZ1MhZoDsoYaKX3VjzWMUEeVDlWPNYxQR5UOeoCgl0W8e-LgmZnVeAxrTzhLNHl9mngtT8Rvjc8Jb5C&_nc_ohc=TRjpcK5vrKgAX9KCOMf&_nc_ht=scontent.fcmb4-2.fna&oh=00_AfCG2-lR5KY7iHorlBjFJNivSu4JCcCA_bgpbrMPYyVS3Q&oe=64643621" />
                            <div className="navbar__profilename">Praveen</div>
                            </div>
                            
                        </div>
                    </Grid>
                </Grid>
            </div>  );
    }
}
 
export default NavBar;