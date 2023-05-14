import React, { Component } from 'react';
import "./RightSide.css";
import ImageLayout from '../ImageLayout';
import groups from "../../../../images/groups.png";

import dpwomen from "../../../../images/dp3.png";
import dpman from "../../../../images/dp9.png";

class RightSide extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data :[]
        }
    }
    getData=()=>{ //FAke JSON RESPONSE
        let jsondata = [
            
            {
                "image": dpman,
                "text":"Navindu Praveen"
            },
            {
                "image": dpman,
                "text":"Mahinda "
            },
            {
                "image": dpman,
                "text":"Sajith"
            },
            {
                "image": dpman,
                "text":"Ranil"
            },
            {
                "image": dpman,
                "text":"Champka"
            },
           
            {
                "image": dpwomen,
                "text":"Gamage"
            }    
        ];
        this.setState({data : jsondata});
    }

    componentDidMount() {
        this.getData();
    }
    
    render() { 
        return (
            <div className="rightside__container">
                <div className="rightside__header">
                    Contacts
                </div>

                <div className="rightside__content">
             {
                 this.state.data.map( (item) =>(
                        <ImageLayout image={item.image} text={item.text} />
                 ))
             }

                </div>
            </div>
        );
    }
}
 
export default RightSide;