import React from 'react';
import HighScoresDisplay from "./HighScoresDisplay";
import Spinner from "../commons/Spinner";
import PropTypes from 'prop-types';
import {fetchHighscores} from "../../redux/actions/highscoreActions";
import {connect} from "react-redux";


class HighScoresPage extends React.Component {

    static propTypes = {
        fetchHighscores: PropTypes.func.isRequired
    }

    componentDidMount() {
        if (this.props.highScores.length === 0) {
            this.props.fetchHighscores();
        }
    }

    render() {
        return (
            this.props.highScores.length === 0
                ? <Spinner/>
                : <HighScoresDisplay highScores={this.props.highScores}/>
        );
    }
}

function mapDispatchToProps(dispatch){
    return {
        fetchHighscores: () => dispatch(fetchHighscores())
    }
}

function mapStateToProps(state) {
    return {
        highScores: state.highscores,
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(HighScoresPage);
