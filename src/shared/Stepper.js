import React from 'react';

import { Container, Grid, makeStyles } from '@material-ui/core';


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

const Stepper = () => {
    const classes = useStyle();

    return <Container maxWidth="lg" disableGutters className={classes.ContainerPrincipal}>
        <div className={classes.ContainerProgressBar}>
            PROGRESSO AQUI
        </div>
        <div className={classes.ContainerContent}>
            <div className={classes.ContainerLeft}>
                <div style={{backgroundImage: "url('https://www.w3schools.com/howto/img_girl.jpg')"}} className="left-image"></div>
                <div className="left-titles">
                    <h2>Venham onferir oq há de novo nos produtos</h2>
                    <h5>Venham onferir oq há de novo nos produtos  há de novo nos produtos  há de novo nos produtos  há de novo nos produtos  há de novo nos produtos  há de novo nos produtos há de novo nos produtos</h5>
                </div>
            </div>
            <div className={classes.ContainerRight}>
                <div className="right-passos">
                    <span>Passo 1 de 5</span>
                </div>
                {/* aqui na section vai o transition */}
                <section className="right-content">
                    <div className="right-titles">
                        <h2>Venham onferir oq há de novo nos prodovo nos prodovo nos prod ovo nos produtos</h2>
                        <h5>Venham onferir oq há de novo nos produtos  há de novo nos produtos  há de novo nos produtos  há de novo nos produtos  há de novo nos produtoss</h5>
                    </div>
                    <div className="right-content-show">
                        <form>
                            <Grid container>
                                <Grid item>
                                    <input></input>
                                    <input></input>
                                    <input></input>
                                    <input></input>
                                    <input></input>
                                    <input></input>
                                </Grid>
                                <Grid item>
                                    <button>
                                        Continuar
                                    </button>
                                </Grid>
                            </Grid>
                        </form>
                    </div>
                </section>
            </div>
        </div>
    </Container>
}

export default Stepper;
