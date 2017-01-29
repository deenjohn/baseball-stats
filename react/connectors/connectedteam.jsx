import { connect } from 'react-redux';
import Team from '../components/team.jsx';

const mapStateToProps = function(state, ownProps){
    return {
        name: state.team.name,
        teamID: state.team.teamID,
        years: state.team.years
    }
}

const mapDispatchToProps = function(dispatch){
    return {}
}

const ConnectedTeam = connect(mapStateToProps, mapDispatchToProps)(Team);
export default ConnectedTeam;