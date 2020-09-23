import React from 'react';
import {NavLink} from "react-router-dom";
import "./tutorial.css";
import {Grid} from "@material-ui/core";
import PropTypes from 'prop-types';

const TutorialSteps = ({activeStep}) => {
    const tutorialSteps = [
        {link: '/tutorial/menu', label: 'Main menu'},
        {link: "/tutorial/start-game", label: 'Game start'},
        {link: "/tutorial/game-rules", label: 'Game rules'},
        {link: "/tutorial/win-game", label: 'Win game'},
        {link: "/tutorial/game-over", label: 'Game over'},
    ];

    return (
        <>
            <Grid container
                  spacing={0}
                  direction="column"
                  alignItems="center"
                  justify="center">
                <Grid item lg={12}>
                    <h2 style={{fontSize: "30px"}}>Tutorial</h2>
                </Grid>
            </Grid>

            <Grid container
                  spacing={0}
                  alignItems="center"
                  justify="center"
                  style={{minHeight: '15vh'}}>
                {
                    tutorialSteps.map(({link, label}) => {
                        return (
                            <Grid item key={link} xl={1} lg={1}>
                                <NavLink to={link} className="step"
                                         style={activeStep === link ? {backgroundColor: "#264653"} : {}}>{label}</NavLink>
                            </Grid>
                        );
                    })
                }
            </Grid>
        </>
    );
};

TutorialSteps.propTypes = {
    activeStep: PropTypes.string.isRequired
}

export default TutorialSteps;