import React, { Component } from 'react';
import "./PostContainer.css";
import Post from './Post';
import food1 from "../../../../images/food1.jpg";

class PostContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data: []
         }
    }

    getData=()=>{ //calling the rest from our backend
            let json=[
                {
                    "post_ID": 1,
                   "user_id": 12345678,
                   "user_img": "This is a Perfect Meal ",
                   "user_name": "Praveen",
                   "description": "This is a Perfect Meal අපි කමුත .",
                   "post_img" : food1,
                    "like": "2.5k"
                },
               {
                    "post_ID": 2,
                     "user_id": 12345678,
                    "user_img": "",
                    "user_name": "Technical Interview",
                    "description": "අද මොනවත කම්ත තියෙන්නේ🤞🤷‍♂️🤷‍♀️",
                    "post_img" :"",
                    "like": "25"
                }
            ]
        this.setState({data : json});
    }
    componentDidMount(){
        this.getData();
    }
    render() { 
        return ( 
            <div>
                {
                    this.state.data.map((item)=>(
                        <Post object={item } />
                    ))
                }
            </div>
         );
    }
}
 
export default PostContainer;