import React, { component } from 'react';
import TableBatting from '../components/tablebatting.jsx';
import TablePitching from '../components/tablepitching.jsx';
import TableAwards from '../components/tableawards.jsx';
import Teams from '../components/teams.jsx';

export default class YearContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            selectedStat: 'Batting',
        }
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount(){
        console.log(this.props)
    }

    handleClick(e){
        this.setState({selectedStat: e.target.value});
    }

    render(){
        return (
            <div id="yearcontainer" className="container-fluid">
                <div>
                    <button className="btn btn-default" onClick={this.handleClick} value='Batting'>Batting</button>
                    <button className="btn btn-default" onClick={this.handleClick} value='Pitching'>Pitching</button>
                    <button className="btn btn-default" onClick={this.handleClick} value='Awards'>Awards</button>
                    <button className="btn btn-default" onClick={this.handleClick} value='Teams'>Teams</button>
                </div>
                <div className="container-fluid">{this.props.year}</div>
                <div>
                {
                    this.state.selectedStat === 'Batting' && <TableBatting stats={this.props.playerBatting} />
                }
                {
                    this.state.selectedStat === 'Pitching' && <TablePitching stats={this.props.playerPitching} />
                }
                {
                    this.state.selectedStat === 'Awards' && <TableAwards stats={this.props.playerAwards} />
                }
                {
                    this.state.selectedStat === 'Teams' && <Teams stats={this.props.teams} />
                }
                </div>
            </div>
        )
    }
}