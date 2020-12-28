import React from 'react';
import {
  Box,
  Container,
  TextField,
  makeStyles,
  Typography
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    height: '100%'
  },
  boxPesquisa: {
    padding: 20
  },
  cardPesquisa: {
    width: '100%',
    marginTop: 10
  },
  formPesquisa: {
    margin: 10
  },
  textField: {
    marginLeft: 10,
    marginRight: 10
  }
}));

const DashboardSearch = () => {
  const classes = useStyles();

  return (
    <Container>
      <Box display="flex" alignItems="center" justifyContent="start" flexWrap="wrap" className={classes.boxPesquisa}>
        <Typography variant="h6" color="textSecondary">Pesquisar: </Typography>
        <form className={classes.formPesquisa}>
          <TextField
            id="date"
            variant="outlined"
            label="De"
            type="date"
            defaultValue="2017-05-24"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="date"
            variant="outlined"
            label="Até"
            type="date"
            defaultValue="2017-05-24"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </form>
      </Box>
    </Container>
  );
};

export default DashboardSearch;
