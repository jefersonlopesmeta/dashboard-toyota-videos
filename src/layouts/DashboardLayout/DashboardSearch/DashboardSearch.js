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
  },
  flexCenter: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
}));

const DashboardSearch = ({ buscaDadosPorData }) => {
  const classes = useStyles();

  const ajustaData = (data) => { return data < 10 ? `0${data}` : data + 1; };

  const novaData = new Date();
  const diaAtual = `${novaData.getFullYear()}-${ajustaData(novaData.getMonth() + 1)}-${ajustaData(novaData.getDate())}`;
  const umAnoAtras = `${novaData.getFullYear() - 1}-${ajustaData(novaData.getMonth() + 1)}-${ajustaData(novaData.getDate())}`;
  const [dataInicio, setDataInicio] = useState(umAnoAtras);
  const [dataFim, setDataFim] = useState(diaAtual);
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    await buscaDadosPorData(dataInicio, dataFim);
    setLoading(false);
  };

  return (
    <Container>
      <Box display="flex" alignItems="center" justifyContent="start" className={classes.boxPesquisa}>
        <form className={`${classes.formPesquisa}, ${classes.flexCenter}`} onSubmit={(e) => handleFormSubmit(e)}>
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
          <Button type="submit" variant="outlined" color="primary">{loading === true ? 'Carregando...' : 'Pesquisar'}</Button>
        </form>
      </Box>
    </Container>
  );
};

DashboardSearch.propTypes = {
  buscaDadosPorData: PropTypes.func,
};

export default DashboardSearch;
