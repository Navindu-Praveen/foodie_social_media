import React, { Component } from 'react';
import './PostContainer.css';
import { Avatar, Paper } from '@material-ui/core';
import post from "../../../../images/post.jpeg";
import likebutton from "../../../../images/likebutton.png";
import sharebutton from "../../../../images/share.png";
import cmntbutton from "../../../../images/comment.png";


class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    
    render() { 
        return ( 
            <div>
                <Paper className="post__container"> 
                {/* header */}
                <div className="post__header">
                    <div className="post__header_img">
                        <Avatar src="https://scontent.fcmb4-2.fna.fbcdn.net/v/t39.30808-1/225796552_4061129557275916_1409216289508167974_n.jpg?stp=cp0_dst-jpg_p86x86&_nc_cat=102&ccb=1-7&_nc_sid=dbb9e7&_nc_eui2=AeFFJibsjuZ1MhZoDsoYaKX3VjzWMUEeVDlWPNYxQR5UOeoCgl0W8e-LgmZnVeAxrTzhLNHl9mngtT8Rvjc8Jb5C&_nc_ohc=TRjpcK5vrKgAX9KCOMf&_nc_ht=scontent.fcmb4-2.fna&oh=00_AfCG2-lR5KY7iHorlBjFJNivSu4JCcCA_bgpbrMPYyVS3Q&oe=64643621" className="post_img" />
                    </div>

                    <div className="post__header_text">
                        {this.props.object.user_name}
                    </div>
                </div>

                 {/* description */}
                 <div className="post__description">
                 {this.props.object.description}
                 </div>

                  {/* image */}
                  <div>
                    <img src={post} width="600px" />
                  </div>

                   {/* like count */}
                   <div className="post__likeCountContainer">
                    <div className="post__like">
                        <img className="post__img" src={likebutton} />
                    </div>
                    <div className="post__likecount">
                        25
                    </div>
                   </div>

                    {/* like share box */}
                    <div className="post__likeShare">
                    <div className="post__tab">
                    <div className="post__tabfirst">
                        <img className="post__tabimg" src={sharebutton} />
                    </div>
                    <div className="post__tabtext">
                        Like
                    </div>
                   </div>

                    <div className="post__tab">
                    <div className="post__tabfirst">
                        <img className="post__tabimg" src={cmntbutton} />
                    </div>
                    <div className="post__tabtext">
                        Comment
                    </div>
                   </div>

                    <div className="post__tab">
                    <div className="post__tabfirst">
                        <img className="post__tabimg" src={sharebutton} />
                    </div>
                    <div className="post__tabtext">
                        Share
                    </div>

                   </div>

                   </div>
                     {/* comment box */}
                     <div className="upload__comment">
                     <div className="upload__top">
                    <div>
                        <Avatar src="https://scontent.fcmb4-2.fna.fbcdn.net/v/t39.30808-1/225796552_4061129557275916_1409216289508167974_n.jpg?stp=cp0_dst-jpg_p86x86&_nc_cat=102&ccb=1-7&_nc_sid=dbb9e7&_nc_eui2=AeFFJibsjuZ1MhZoDsoYaKX3VjzWMUEeVDlWPNYxQR5UOeoCgl0W8e-LgmZnVeAxrTzhLNHl9mngtT8Rvjc8Jb5C&_nc_ohc=TRjpcK5vrKgAX9KCOMf&_nc_ht=scontent.fcmb4-2.fna&oh=00_AfCG2-lR5KY7iHorlBjFJNivSu4JCcCA_bgpbrMPYyVS3Q&oe=64643621" className="upload_img"/>
                    </div>
                    <div>
                        <input className="upload__box" placeholder="what's on your mind ?" type="text" />
                    </div>
                </div>
                     </div>

                    </Paper>
            </div>
         );
    }
}
 
export default Post;