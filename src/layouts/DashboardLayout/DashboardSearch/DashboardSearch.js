import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Container,
  TextField,
  makeStyles,
  Button
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

const DashboardSearch = ({ buscaDadosPorData }) => {
  const classes = useStyles();

  const [dataInicio, setDataInicio] = useState('2020-01-01');
  const [dataFim, setDataFim] = useState('2020-12-29');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    buscaDadosPorData(dataInicio, dataFim);
  };

  return (
    <Container>
      <Box display="flex" alignItems="center" justifyContent="start" className={classes.boxPesquisa}>
        <form className={classes.formPesquisa} onSubmit={(e) => handleFormSubmit(e)}>
          <TextField
            id="dataInicio"
            variant="outlined"
            label="De"
            type="date"
            value={dataInicio}
            onChange={(e) => setDataInicio(e.target.value)}
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="dataFim"
            variant="outlined"
            label="Até"
            type="date"
            value={dataFim}
            onChange={(e) => setDataFim(e.target.value)}
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <Button type="submit" variant="outlined" color="primary">Pesquisar</Button>
        </form>
      </Box>
    </Container>
  );
};

DashboardSearch.propTypes = {
  buscaDadosPorData: PropTypes.func,
};

export default DashboardSearch;
