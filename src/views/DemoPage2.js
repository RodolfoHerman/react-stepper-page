import { Button, Grid, TextField } from "@material-ui/core";
import React from "react";

const DemoPage2 = () => {
    return <form noValidate autoComplete="off">
        <Grid container>
            <Grid item>
                <Grid container spacing={1} justifyContent="space-between" direction="column">
                    <Grid item>
                        <TextField 
                            type="text"
                            label="CEP"
                        />
                    </Grid>
                    <Grid item>
                        <TextField 
                            type="text"
                            label="Número"
                        />
                    </Grid>
                    <Grid item>
                        <TextField 
                            type="text"
                            label="Complemento"
                        />
                    </Grid>
                    <Grid item>
                        <TextField 
                            type="text"
                            label="Rua"
                        />
                    </Grid>
                    <Grid item>
                        <TextField 
                            type="text"
                            label="Bairro"
                        />
                    </Grid>
                    <Grid item>
                        <TextField 
                            type="text"
                            label="Cidade"
                        />
                    </Grid>
                    <Grid item>
                        <TextField 
                            type="text"
                            label="UF"
                        />
                    </Grid>
                    <Grid item>
                        <TextField 
                            type="text"
                            label="Telefone de contato 1"
                        />
                    </Grid>
                    <Grid item>
                        <TextField 
                            type="text"
                            label="Telefone de contato 2"
                        />
                    </Grid>
                    <Grid item>
                        <TextField 
                            type="text"
                            label="Telefone de contato 3"
                        />
                    </Grid>
                    <Grid item>
                        <TextField 
                            type="text"
                            label="E-mail aux 1"
                        />
                    </Grid>
                    <Grid item>
                        <TextField 
                            type="text"
                            label="E-mail aux 2"
                        />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item style={{ marginTop: 20 }}>
                <Button>
                    Continuar
                </Button>
            </Grid>
        </Grid>
    </form>
}

export default DemoPage2;
