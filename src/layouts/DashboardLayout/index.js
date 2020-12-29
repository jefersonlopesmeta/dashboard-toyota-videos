import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import NavBar from './NavBar';
import TopBar from './TopBar';
import DashboardCards from './DashboardCards';
import DashboardSearch from './DashboardSearch';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    display: 'flex',
    height: '100%',
    overflow: 'hidden',
    width: '100%'
  },
  wrapper: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
    paddingTop: 64,
    [theme.breakpoints.up('lg')]: {
      paddingLeft: 256
    }
  },
  contentContainer: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden'
  },
  content: {
    flex: '1 1 auto',
    height: '100%',
    overflow: 'auto'
  }
}));

const DashboardLayout = () => {
  const classes = useStyles();
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  const [cardValues, setCardsValue] = useState({
    totalVideosPendentes: 0,
    totalVideosProcessando: 0,
    totalVideosFinalizados: 0,
    totalVideos: 0,
    totalRequisicoes: 0
  });

  const buscaDadosPorData = async (dataInicio, dataFim) => {
    const username = 'toyota';
    const password = 'toyota@2020';
    const authString = `${username}:${password}`;
    try {
      await fetch(`https://videosapi.metabrasil.com.br:3000/api/homologacao/dashboard/totais/${dataInicio}/${dataFim}`, {
        method: 'GET', Authorization: `Basic ${btoa(authString)}`
      })
        .then((res) => {
          if (!res.ok) throw res;

          return res.json();
        })
        .then((json) => setCardsValue(json));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={classes.root}>
      <TopBar onMobileNavOpen={() => setMobileNavOpen(true)} />
      <NavBar
        onMobileClose={() => setMobileNavOpen(false)}
        openMobile={isMobileNavOpen}
      />
      <div className={classes.wrapper}>
        <div className={classes.contentContainer}>
          <div className={classes.content}>
            <DashboardSearch buscaDadosPorData={buscaDadosPorData} />
            <DashboardCards cardValues={cardValues} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
