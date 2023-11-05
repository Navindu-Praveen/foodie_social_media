import React, { Component } from 'react';
import './UploadSection.css';
import { Avatar, Paper } from '@material-ui/core';
import live from "../../../../images/video.png";
import image from "../../../../images/image.png";
import feeling from "../../../../images/feelings.png";

class UploadSection extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    
    render() { 
        return (  
            <div>
                <Paper className="upload__container">
                <div className="upload__top">
                    <div>
                        <Avatar src="https://scontent.fcmb4-2.fna.fbcdn.net/v/t39.30808-1/225796552_4061129557275916_1409216289508167974_n.jpg?stp=cp0_dst-jpg_p86x86&_nc_cat=102&ccb=1-7&_nc_sid=dbb9e7&_nc_eui2=AeFFJibsjuZ1MhZoDsoYaKX3VjzWMUEeVDlWPNYxQR5UOeoCgl0W8e-LgmZnVeAxrTzhLNHl9mngtT8Rvjc8Jb5C&_nc_ohc=TRjpcK5vrKgAX9KCOMf&_nc_ht=scontent.fcmb4-2.fna&oh=00_AfCG2-lR5KY7iHorlBjFJNivSu4JCcCA_bgpbrMPYyVS3Q&oe=64643621" className="upload_img"/>
                    </div>
                    <div>
                        <input className="upload__box" placeholder="what's on your mind ?" type="text" />
                    </div>
                </div>
                <div className="upload__bottom">
                    <div className="upload__tabs">
                        <img src={live} width="35px"/>
                        <div className="upload__text">Live Video</div>
                    </div>
                    <div className="upload__tabs">
                    <img src={image} width="35px" />
                    <div className="upload__text">Photo/Video</div>
                    </div>
                    <div className="upload__tabs">
                    <img src={feeling} width="35px" />
                    <div className="upload__text">Feeling/Activity</div>
                    </div>
                      </div>
               </Paper>
            </div>
        );
    }
}
 
export default UploadSection;