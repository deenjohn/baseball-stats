import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router';
import Store from '../../react-redux/store.jsx';
import setPlayerCreator from '../../react-redux/action-creators/setplayer-creator.jsx';
import searchBoolCreator from '../../react-redux/action-creators/setsearch-creator.jsx';
import setTeamCreator from '../../react-redux/action-creators/setteamcreator.jsx';
import setYearCreator from '../../react-redux/action-creators/setyear-creator.jsx';

export default class Prompt extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            search: '',
            badSearch: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
        this.setState({search: e.target.value});
    }

    handleSubmit(e){
        e.preventDefault();
        let firstName = this.state.search.split(' ')[0];
        let lName = this.state.search.split(' ');
        let lastName = lName[lName.length-1];


        if(this.props.searchType === 'Player'){
            this.setState({badSearch: false})
            axios({method: 'get', url: '/player', params:{firstName, lastName}})
            .then(player => {
                if(player.data.length){
                    Store.dispatch(setPlayerCreator(player));
                    Store.dispatch(searchBoolCreator());
                } else {
                    this.setState({search: '', badSearch: true})
                }
            })
            .catch(err => console.log(err));
        }else if(this.props.searchType === 'Team'){
            this.setState({badSearch: false})
            axios({method: 'get', url: '/team', params:{search: this.state.search}})
            .then(teams => {
                if(teams.data.length){
                    Store.dispatch(setTeamCreator(teams.data));
                    Store.dispatch(searchBoolCreator());
                } else {
                    this.setState({search: '', badSearch: true})
                }
            })
        }else if(this.props.searchType === 'Year'){
            
            if(this.state.search > 1870 && this.state.search < 2016){
                this.setState({badSearch: false})
                axios.get(`/year/${this.state.search}`)
                .then(stats => {
                    let yearStats = {
                        year: this.state.search,
                        playerBattingStats: stats.data[0],
                        playerPitchingStats: stats.data[1],
                        playerAwards: stats.data[2],
                        teamStats: stats.data[3],
                        players: stats.data[4]
                    }
                    Store.dispatch(setYearCreator(yearStats));
                    Store.dispatch(searchBoolCreator());  
                })
            } else {
                console.log("hellooooo")
                this.setState({search: '', badSearch: true})
            }
        }
    }

    render(){
        return (
            <div id="prompt-form" >
                <form type="submit" onSubmit={this.handleSubmit}>
                    <h3 style={{"textAlign": "center", "marginTop": "5px"}}>Search for {
                        this.props.searchType === 'Team' ?
                        'Team or City'
                        :
                        this.props.searchType
                    }</h3>
                    <input 
                        style={{"marginBottom": "10px"}} 
                        className="form-control" type="text" 
                        placeholder={
                            this.state.badSearch ?
                            'No Results, Search Again'
                            :
                            this.props.searchType === 'Team' ?
                                'Team or City'
                                :
                                this.props.searchType
                        } 
                        value={this.state.search}
                        onChange={this.handleChange}
                        autoFocus
                    />
                    <button 
                        className="btn btn-success btn-block" 
                        type="submit"
                    >Submit</button>

                </form>
            </div>
        );
    }
}
