import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";


function BuyersInfo() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Información de la reserva
      </Typography>
      <Grid container spacing={24}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="Nombre"
            name="Nombre"
            label="Nombre"
            fullWidth
            autoComplete="Nombre"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="Apellido"
            name="Apellido"
            label="Apellido"
            fullWidth
            autoComplete="Apellido"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="Dirección"
            name="Dirección"
            label="Dirección"
            fullWidth
            autoComplete="Dirección"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="Colonia"
            name="Colonia"
            label="Colonia"
            fullWidth
            autoComplete="Colonia"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="Ciudad"
            name="Ciudad"
            label="Ciudad"
            fullWidth
            autoComplete="Ciudad"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="Estado"
            name="Estado"
            label="Estado"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="Codigo Postal"
            name="Codigo Postal"
            label="Codigo Postal"
            fullWidth
            autoComplete="Codigo Postal"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="País"
            name="País"
            label="País"
            fullWidth
            autoComplete="País"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox color="secondary" name="saveAddress" value="yes" />
            }
            label="Utilice esta dirección para los datos de pago"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default BuyersInfo;
