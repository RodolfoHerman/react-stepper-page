import React, { useState } from 'react';

import { Container, Grid, makeStyles } from '@material-ui/core';
import StepperProgress from './StepperProgress/StepperProgress';


const useStyle = makeStyles((theme) => ({
    ContainerPrincipal: {
        [theme.breakpoints.down('sm')]: {
            padding: "0px 5px",
        },
    },

    ContainerProgressBar: {
        width: "100%",
        marginBottom: 10,
        backgroundColor: "cornflowerblue",
    },

    // CONTENT

    ContainerContent: {
        width: "100%",

        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "black",
    },

    // LEFT CONTENT

    ContainerLeft: {
        height: "70vh",
        width: "45%",

        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",

        "& .left-image": {
            width: "100%",
            height: "70%",

            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
        },

        "& .left-titles": {
            width: "100%",
            height: "20%",

            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",

            "& > * ": {
                margin: 0,
            }
        },

        [theme.breakpoints.down('sm')]: {
            display: "none",
        },

        backgroundColor: "red",
    },

    // RIGHT CONTENT

    ContainerRight: {
        width: "50%",
        minHeight: "70vh",

        display: "flex",
        flexDirection: "column",

        "& .right-passos": {
            marginBottom: "10px",

            backgroundColor: "green",
        },

        "& .right-content": {
            height: "100%",

            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",

            "& .right-titles": {
                display: "flex",
                flexDirection: "column",
                marginBottom: "20px",

                "& > * ": {
                    margin: "0px 0px 10px 0px",
                }
            },

            "& .right-content-show": {
                height: "100%",
                width: "100%",

                display: "flex",
                justifyContent: "space-between",
                flexDirection: "column",

                "& > form": {
                    height: "100%",
                    width: "100%",

                    "& > * ": {
                        height: "100%",
                        width: "100%",

                        display: "flex",
                        justifyContent: "space-between",
                        flexDirection: "column",
                    },

                },

            },
        },

        [theme.breakpoints.down('sm')]: {
            width: "100%",
            minHeight: "unset !important",

            "& * ": {
                height: "unset !important",
                minHeight: "unset !important",
            }
        },

        backgroundColor: "blue",
    }
}));

const Stepper = ({
    imageToShow,
    principalTitle,
    principalSubTitle,
    progressTitle,
    steps = [],
}) => {
    const classes = useStyle();
    const [currentStep, setCurrentStep] = useState(1);

    setTimeout(() => {
        setCurrentStep(2);
    }, 2000);

    return <Container maxWidth="lg" disableGutters className={classes.ContainerPrincipal}>
        <div className={classes.ContainerProgressBar}>
            <StepperProgress currentStep={currentStep} numberOfSteps={steps.length} />
        </div>
        <div className={classes.ContainerContent}>
            <div className={classes.ContainerLeft}>
                <div style={{backgroundImage: `url("${imageToShow}")`}} className="left-image"></div>
                <div className="left-titles">
                    <h2>{principalTitle}</h2>
                    <h5>{principalSubTitle}</h5>
                </div>
            </div>
            <div className={classes.ContainerRight}>
                <div className="right-passos">
                    <span>{`Passo ${currentStep} de ${5} - ${progressTitle}`}</span>
                </div>
                {
                    // https://pedrobern.github.io/react-tiger-transition/demo/glide
                    steps.map((step, index) => {
                        return <section className="right-content" key={`stepper_${index}`}>
                            <div className="right-titles">
                                <h2>{step.stepTitle}</h2>
                                <h5>{step.stepSubTitle}</h5>
                            </div>
                            <div className="right-content-show">
                                {step.element}
                            </div>
                        </section>
                    })
                }
            </div>
        </div>
    </Container>
}

export default Stepper;
