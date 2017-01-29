import { connect } from 'react-redux';
import YearContainer from '../containers/yearcontainer.jsx';

const mapStateToProps = function(state, ownProps){
    console.log("conneecccttttt", state)
    return {
        year: state.year.year,
        playerBatting: state.year.playerBatting,
        playerPitching: state.year.playerPitching,
        playerAwards: state.year.playerAwards,
        teams: state.year.teamStats};
}

const mapDispatchToProps = function(dispatch){
    return {};
}

const ConnectYearContainer = connect(mapStateToProps, mapDispatchToProps)(YearContainer);

export default ConnectYearContainer;