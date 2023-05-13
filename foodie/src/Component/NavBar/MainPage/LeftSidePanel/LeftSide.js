import React, { Component } from 'react'
import "./LeftSide.css"
import ImageLayout from '../ImageLayout';
import groups from "../../../../images/groups.png";
import memories from "../../../../images/memories.png";
import messengerKids from "../../../../images/messengerkids.png";
import ads from "../../../../images/ads.png"

class LeftSide extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    
    render() { 
        return ( <div>
            <ImageLayout image={groups} text="Friends"/>
            <ImageLayout image={memories} text="Memories"/>
            <ImageLayout image={messengerKids} text="Messenger"/>
            <ImageLayout image={ads} text="Ads"/>
        </div> );
    }
}
 
export default LeftSide;