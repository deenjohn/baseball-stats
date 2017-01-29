import { SET_TEAM } from './constants.jsx';

const setTeamCreator = function(teamStats){
    let team = {
        type: SET_TEAM,
        name: [],
        years:[]
    };
    if(teamStats.length > 1){
        teamStats.forEach(function(teamData){
            team.name.push(teamData.franchname)
        });
    }else if(teamStats.length === 1){
        team.name.push(teamStats[0].franchname);
        teamStats.teamID = teamStats[0].franchid;
    }
    return team;
}

export default setTeamCreator;