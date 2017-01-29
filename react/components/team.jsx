import React, { Component } from 'react';
import axios from 'axios';

class Team extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            allTeams: [],
            allTeamsStats: [],
            selectedTeam: {}
        }
        this.handleClick = this.handleClick.bind(this);
    }

    componentWillMount(){
        if(this.props.name.length > 1){
            this.setState({allTeams: this.props.name})
        } else{
            this.setState({
                allTeams: this.props.name,
                selectedTeam: {
                    name: this.props.name
                }
            });
        };
    }

    componentDidMount(){
        this.state.allTeams.forEach(team => {
            axios.get(`/team/${team}`)
            .then(teamStats => {
                let selectTeam = {
                    name: team,
                    stats: teamStats.data
                }
                this.setState({allTeamsStats: [...this.state.allTeamsStats, teamStats.data]})
                if(this.state.allTeams.length === 1){
                    this.setState({selectedTeam: teamStats.data})
                };
            })
            .catch(err => console.log(err));
        })
    }

    handleClick(e){
        for(let i = 0; i < this.state.allTeamsStats.length; i++){
            if(this.state.allTeamsStats[i].name === e.target.value){
                this.setState({selectedTeam: this.state.allTeamsStats[i]});
            }
        }
    }
    
    render(){
        return (
            <div id="team-stats" className="container-fluid">
                <div id="team-button-holder" className="container-fluid">
                    {
                        !!this.state.allTeams.length &&
                        this.state.allTeams.map((team, i) => {
                            return (
                                <div key={`${team}${i}`} style={{display: "inline-block"}}>
                                    <button onClick={this.handleClick} value={team} className="btn btn-default" >{team}</button>
                                </div>
                            )
                        })
                    }
                </div>
                {
                    !!Object.keys(this.state.selectedTeam).length &&
                    <div>
                        <div>
                            {
                                

                                this.state.allTeams.length < 2 ?
                                <h3 style={{textAlign: "center", marginTop: "5px"}}>{this.state.selectedTeam.name}</h3>
                                :
                                <h3 style={{textAlign: "center", marginTop: "5px"}}>{this.state.selectedTeam.years[0].name}</h3>
                            }
                        </div>
                        <div style={{overflow: 'auto'}}>
                            <table className="table-custom" style={{width: "100%"}}>
                                <tbody>
                                    <tr>
                                        <th className="tableHeading">Year</th>
                                        <th className="tableHeading">League</th>
                                        <th className="tableHeading">Franchise ID</th>
                                        <th className="tableHeading">Wins</th>
                                        <th className="tableHeading">Losses</th>
                                        <th className="tableHeading">Win Percent</th>
                                        <th className="tableHeading">Pennent</th>
                                        <th className="tableHeading">World Series Win</th>
                                        <th className="tableHeading">Park</th>                  
                                        <th className="tableHeading">Attendance</th>
                                    </tr>
                                    {
                                        this.state.selectedTeam.years &&
                                        this.state.selectedTeam.years.map(year => {
                                            return (
                                                <tr key={`${year.yearid}${year.franchid}`}>
                                                    <td className="tableData">{year.yearid}</td>
                                                    <td className="tableData">{year.lgid}</td>
                                                    <td className="tableData">{year.franchid}</td>
                                                    <td className="tableData">{year.w}</td>
                                                    <td className="tableData">{year.l}</td>
                                                    <td className="tableData">{ (year.w / (year.w + year.l)).toString().slice(1, 5) }</td>
                                                    <td className="tableData">{year.lgwin}</td>
                                                    <td className="tableData">{year.wswin}</td>
                                                    <td className="tableData">{year.park}</td>
                                                    <td className="tableData">{
                                                        year.attendance ?
                                                        (year.attendance).toLocaleString()
                                                        :
                                                        'N/A'
                                                    }</td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>

                }
            </div>
        )
    };
}

export default Team;