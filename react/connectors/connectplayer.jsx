import { connect } from 'react-redux';
import Player from '../components/player.jsx';

const mapStateToProps = function(state, ownProps){
    return {player: state.player};
}

const mapDispatchToProps = function(dispatch){
    return {};
}

const ConnectedPlayer = connect(mapStateToProps, mapDispatchToProps)(Player);

export default ConnectedPlayer;