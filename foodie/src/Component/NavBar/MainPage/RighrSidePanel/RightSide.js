import React, { Component } from 'react';
import "./RightSide.css";
import ImageLayout from '../ImageLayout';
import groups from "../../../../images/groups.png";
import memories from "../../../../images/memories.png";
import messengerKids from "../../../../images/messengerkids.png";
import ads from "../../../../images/ads.png";
import adsmanager from "../../../../images/admanager.png";
import business from "../../../../images/business.png";
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
                "image": groups,
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
                "text":"Anura"
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