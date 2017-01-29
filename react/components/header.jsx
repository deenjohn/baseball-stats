import React, { Component } from 'react';


export default class Header extends React.Component {
    constructor(props){
        super(props);
    }

    shouldComponentUpdate(){
        return false;
    }

    render() {
        return (
            <div id="header" className="container-fluid" >
                    <h1 style={{"textAlign": "center"}}>Baseball Stats</h1>
            </div>
        );
    }
}
