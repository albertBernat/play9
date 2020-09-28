import React from 'react';
import HighScoresDisplay from "./HighScoresDisplay";
import Spinner from "../commons/Spinner";
import PropTypes from 'prop-types';
import {fetchHighscores} from "../../redux/actions/highscoreActions";
import {connect} from "react-redux";


class HighScoresPage extends React.Component {

    static propTypes = {
        fetchHighscores: PropTypes.func.isRequired,
        highScores: PropTypes.array,
        errorMessage: PropTypes.string,
    }

    componentDidMount() {
        this.props.fetchHighscores();
    }

    render() {
        return (
            this.props.errorMessage === '' && this.props.highScores.length === 0
                ? <Spinner/>
                : <HighScoresDisplay
                    highScores={this.props.highScores}
                    errorMessage={this.props.errorMessage}
                />
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchHighscores: () => dispatch(fetchHighscores())
    }
}

function mapStateToProps(state) {
    return {
        highScores: state.scores.highscores,
        errorMessage: state.scores.errorMessage,
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(HighScoresPage);
