import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";
import { useCart } from "../contexts/CartContext";


// const products = [
//   { name: "Snorkel en Cozumel", desc: "Acuáticos", price: "$1805.99" },
//   { name: "Buceo en arrecife", desc: "Acuáticos", price: "$2506.99" },

// ];

const currency = { style: 'currency', currency: 'MXN' };
const currencyData = new Intl.NumberFormat('es-MX', currency);


const addresses = [
  "Calle limpia # 525",
  "Las Flores",
  "Mi Chan Pueblo",
  "77777",
  "México"
];
const payments = [
  { name: "Tipo de Tarjeta", detail: "Visa" },
  { name: "Titular de la tarjeta", detail: "Juanito Perez" },
  { name: "Numero de tarjeta", detail: "xxxx-xxxx-xxxx-1234" },
  { name: "Fecha de expiración", detail: "04/2024" }
];

const styles = theme => ({
  listItem: {
    padding: `${theme.spacing.unit}px 0`
  },
  total: {
    fontWeight: "700"
  },
  title: {
    marginTop: theme.spacing.unit * 2
  }
});

function Review(props) {
  const { classes } = props;
  const { cartItems, subTotal } = useCart();
  return (
    <React.Fragment>
     <Typography variant="h6" gutterBottom>
      Resumen de su reservación
      </Typography>
      
      {/* <List disablePadding>
        {products.map(product => (
          <ListItem className={classes.listItem} key={product.name} >
            <ListItemText primary={product.name} secondary={product.desc} />
            <Typography variant="body2">{product.price}</Typography>
          </ListItem>
        ))}
        <ListItem className={classes.listItem}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" className={classes.total}>
            ${subTotal}
          </Typography>
        </ListItem>
      </List> */}
      <List disablePadding>
        {cartItems.map(tour => (
           
          <ListItem className={classes.listItem} key={tour.title} > 
            
            <ListItemText primary={tour.title} secondary={`Total de Tours (${tour.quantity}) - Categoria: ${tour.category}  `}/>
            <ListItemText secondary={`Precio unitario  ${currencyData.format(tour.price)}`} />

            <Typography variant="body2">Total {currencyData.format(tour.price*tour.quantity)}</Typography>
          </ListItem>
        ))}
        <ListItem className={classes.listItem}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" className={classes.total}>
            {currencyData.format(subTotal)}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={16}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Datos de reserva
          </Typography>
          <Typography gutterBottom>Juanito Perez</Typography>
          <Typography gutterBottom>{addresses.join(", ")}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Detalles de su pago
          </Typography>
          <Grid container>
            {payments.map(payment => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

Review.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Review);
