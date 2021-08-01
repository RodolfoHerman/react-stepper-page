import { Button, Grid, TextField } from "@material-ui/core";
import React from "react";


const DemoPage1 = () => {
    return <form noValidate autoComplete="off">
        <Grid container>
            <Grid item>
                <Grid container direction="column">
                    <Grid item>
                        <TextField 
                            type="text"
                            label="Nome completo"
                        />
                    </Grid>
                    <Grid item>
                        <TextField 
                            type="email"
                            label="E-mail"
                        />
                    </Grid>
                    <Grid item>
                        <TextField 
                            type="text"
                            label="CPF"
                        />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <Button>
                    Continuar
                </Button>
            </Grid>
        </Grid>
    </form>
}

export default DemoPage1;
