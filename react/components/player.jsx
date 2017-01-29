import React, { Component } from 'react';
import axios from 'axios';
import Store from '../../react-redux/store.jsx';
import SetPlayerStats from '../../react-redux/action-creators/setplayerstats-creator.jsx';

import GeneralStats from './generalstats.jsx';
import Pitching from './pitching.jsx';
import Batting from './batting.jsx';
import Awards from './awards.jsx';

export default class Player extends React.Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            display: "General",
            player: this.props.player
        }
    }

    handleClick(e){
        this.setState({display: e.target.id})
    }

    componentDidMount(props){
        axios.get(`/player/${this.props.player.general.playerid}`)
        .then(stats => {
            let player = {
                general: this.props.player.general,
                batting: stats.data[0],
                pitching: stats.data[1],
                awards: stats.data[2]
            }
            Store.dispatch(SetPlayerStats(player))
        })
        .catch(err => console.log("FRONTEND ERROR", err))
    }


    render(){
        return (
            <div id="playerStatsContainer" className="">
                <div id="btnContainer" className="">
                        <button id="General" onClick={this.handleClick} className="btn btn-default">General</button>
                    {
                        this.props.player.batting.length ? <button id="Batting" onClick={this.handleClick} className="btn btn-default">Batting</button>
                        :
                        <div style={{display: "inline-block"}}></div>
                    }
                    {
                        this.props.player.pitching.length ? <button id="Pitching" onClick={this.handleClick} className="btn btn-default">Pitching</button>
                        :
                        <div style={{display: "inline-block"}}></div>
                    }
                    {
                        this.props.player.awards.length ? <button id="Awards" onClick={this.handleClick} className="btn btn-default">Awards</button>
                        :
                        <div style={{display: "inline-block"}}></div>
                    }
                </div>
                <div id="playerName">
                    <h3 style={{textAlign: "center", marginTop: "5px"}}>{this.props.player.general.namegiven} "{this.props.player.general.namefirst}" {this.props.player.general.namelast}</h3>
                </div>
                <div id="playerStatsContainer">
                    {
                        (this.state.display === "General") &&
                        <GeneralStats general={this.props.player.general} />
                    }
                    {
                        (this.state.display === "Batting") &&
                        <Batting batting={this.props.player.batting} />
                    }
                    {
                        (this.state.display === "Pitching") &&
                        <Pitching pitching={this.props.player.pitching} />
                    }
                    {
                        (this.state.display === "Awards") &&
                        <Awards awards={this.props.player.awards} />
                    }
                </div>
            </div>
        );
    }
}
