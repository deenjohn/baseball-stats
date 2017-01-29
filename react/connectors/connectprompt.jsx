import { connect } from 'react-redux';
import Prompt from '../components/prompt.jsx';

const mapStateToProps = function(state, ownProps){
    return {};
}

const mapDispatchToProps = function(dispatch){
    return {};
}

const ConnectedPrompt = connect(mapStateToProps, mapDispatchToProps)(Prompt);

export default ConnectedPrompt;