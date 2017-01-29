import { connect } from 'react-redux';
import AppContainer from '../containers/appcontainer.jsx';

const mapStateToProps = function(state, ownProps){
    return {player: state.player,
            searchBool: state.search.searchBool,
            team: state.team,
            year: state.year
        };
}

const mapDispatchToProps = function(dispatch){
    return {};
}

const ConnectedAppContainer = connect(mapStateToProps, mapDispatchToProps)(AppContainer);

export default ConnectedAppContainer;