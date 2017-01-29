import React, { Component } from 'react';
import Perf from 'react-addons-perf'
import axios from 'axios';
import Header from '../components/header.jsx';
import ConnectedPrompt from '../connectors/connectprompt.jsx';
import ConnectedPlayer from '../connectors/connectplayer.jsx';
import ConnectedYear from '../connectors/connectyearcontainer.jsx';
import ConnectedTeam from '../connectors/connectedteam.jsx';
import Store from '../../react-redux/store.jsx';
import setPlayerCreator from '../../react-redux/action-creators/setplayer-creator.jsx';
import setTeamCreator from '../../react-redux/action-creators/setteamcreator.jsx';
import searchBoolCreator from '../../react-redux/action-creators/setsearch-creator.jsx';
import setYearCreator from '../../react-redux/action-creators/setyear-creator.jsx';

export default class AppContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            searchSelection: 'Player'
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        Perf.start();    
        if(e.target.id === 'searchAgain'){
            Store.dispatch(setPlayerCreator({}));
            Store.dispatch(setTeamCreator({}));
            Store.dispatch(setYearCreator({}));
            Store.dispatch(searchBoolCreator());
            this.setState({searchSelection: 'Player'});
        }else {
            this.setState({searchSelection: e.target.id});
        }
    }

    shouldComponentUpdate(){
        return true;
    }

    componentDidUpdate(){
        Perf.stop()
        Perf.printInclusive();
        Perf.printExclusive()
        Perf.printWasted()
        Perf.printOperations()
    }

    render(){
        
        return (
            <div id="main" className="container-fluid" style={{"paddingRight": "0px"}}>
                <div id="top-banner" className="container-fluid">
                    <Header />
                </div>
                <div id="search-container" className="container-fluid" style={{padding: '0px 0px 30px 0px', height: '100%'}}>
                    <div id="search-body" 
                        className="container" 
                        style={{
                            "backgroundColor": "#313233",
                            "borderRadius": "3px",
                            padding: '0px 0px 0px 0px'}}>
                        {
                            this.props.searchBool ?
                            <div id="prompt-container" className="container-fluid">
                                <button 
                                className="btn btn-default" 
                                id="searchAgain" 
                                onClick={this.handleClick}>Search Again</button>
                            </div>
                            :
                            <div id="prompt-container" className="container-fluid">
                                <button className="btn btn-default" id="Player" onClick={this.handleClick}>Player</button>
                                <button className="btn btn-default" id="Team" onClick={this.handleClick}>Team</button>
                                <button className="btn btn-default" id="Year" onClick={this.handleClick}>Year</button>
                            </div>
                        }
                        <div className="container-fluid" 
                        style={{"backgroundColor": "#3e3e3f",
                                "borderRadius": "3px",
                                paddingBottom: "10px"}}>
                            {
                                !!Object.keys(this.props.player.general).length &&
                                <ConnectedPlayer /> 
                            }
                            {
                                !!Object.keys(this.props.team.name).length &&
                                <ConnectedTeam /> 
                            }
                            {
                                this.props.year.year &&
                                <ConnectedYear />
                            }
                            {
                                !this.props.searchBool &&
                                <ConnectedPrompt searchType={this.state.searchSelection}/>
                            }
                        </div>
                    </div>
                </div>
                <div id="footer">
                    <div className="container-fluid footer-div footer-color">
                        <div className='footer-img footer-color'><img src="/Baseball.svg.png" alt="Baseball Stats" className='img-thumbnail'/></div>
                        <div className='footer-div-div footer-color'>
                            <div className="footer-element">A-Herm</div>
                            <div className="footer-element">Powered by: React-Redux | Sequelize | Express</div>
                        </div>
                        <div className='footer-img footer-color'><img src="/Baseball.svg.png" alt="Baseball Stats" className='img-thumbnail'/></div>
                    </div>
                </div>
            </div>
        )
    }
}