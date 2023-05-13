import { Paper } from '@material-ui/core';
import React, { Component } from 'react'

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    
    render() { 
        return ( 
            <div>
                <Paper className="post__container"> 
                    </Paper>
            </div>
         );
    }
}
 
export default Post;