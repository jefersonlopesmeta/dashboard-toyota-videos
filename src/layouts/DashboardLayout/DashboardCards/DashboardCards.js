import React from 'react';
import {
  Avatar,
  Card,
  CardContent,
  Box,
  Typography,
  colors,
  makeStyles,
  Container
} from '@material-ui/core';
import PauseIcon from '@material-ui/icons/Pause';
import LoopIcon from '@material-ui/icons/Loop';
import DoneIcon from '@material-ui/icons/Done';
import TheatersIcon from '@material-ui/icons/Theaters';
import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles(() => ({
  root: {
    height: '100%'
  },
  card: {
    width: 250,
    marginTop: 20
  },
  textRight: {
    textAlign: 'right'
  },
  avatar: {
    height: 46,
    width: 46
  },
  bgRed: {
    backgroundColor: colors.red[600],
  },
  bgGreen: {
    backgroundColor: colors.green[600],
  },
  bgOrange: {
    backgroundColor: colors.orange[600]
  },
  bgBlue: {
    backgroundColor: colors.indigo[600]
  }
}));

const DashboardCards = () => {
  const classes = useStyles();

  const cardValues = {
    totalVideosPendentes: 10,
    totalVideosProcessando: 20,
    totalVideosFinalizados: 420,
    totalVideos: 450,
    totalRequisicoes: 25
  };

  const infoCards = [
    {
      icon: <Avatar className={`${classes.avatar} ${classes.bgRed}`}><PauseIcon /></Avatar>,
      title: 'Total Pendentes',
      numberValue: cardValues.totalVideosPendentes
    },
    {
      icon: <Avatar className={`${classes.avatar} ${classes.bgOrange}`}><LoopIcon /></Avatar>,
      title: 'Total Processando',
      numberValue: cardValues.totalVideosProcessando
    },
    {
      icon: <Avatar className={`${classes.avatar} ${classes.bgGreen}`}><DoneIcon /></Avatar>,
      title: 'Total Finalizados',
      numberValue: cardValues.totalVideosFinalizados
    },
    {
      icon: <Avatar className={`${classes.avatar} ${classes.bgBlue}`}><TheatersIcon /></Avatar>,
      title: 'Total de Vídeos',
      numberValue: cardValues.totalVideos
    },
    {
      icon: <Avatar className={classes.avatar}><SendIcon /></Avatar>,
      title: 'Total de Requisições',
      numberValue: cardValues.totalRequisicoes
    },
  ];

  return (
    <Container>
      <Box display="flex" alignItems="center" justifyContent="space-between" flexWrap="wrap">
        {infoCards.map((info) => {
          return (
            <Card className={classes.card}>
              <CardContent>
                <Box display="flex" alignItems="center" justifyContent="space-between">
                  {info.icon}
                  <Typography
                    color="textSecondary"
                    gutterBottom
                    variant="h6"
                  >
                    {info.title}
                  </Typography>
                </Box>
                <Typography
                  color="textPrimary"
                  variant="h3"
                  className={classes.textRight}
                >
                  {info.numberValue}
                </Typography>
              </CardContent>
            </Card>
          );
        })}
      </Box>
    </Container>
  );
};

export default DashboardCards;
