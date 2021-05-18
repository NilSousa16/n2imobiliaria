import React from 'react';

// import { Title } from './styled';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Slide from '../../components/Slide';
import Announcement from '../../components/Announcement';
import SearchForm from '../../components/SearchForm';

const useStyles = makeStyles((theme) => ({
  title: {
    marginTop: '20px',
  }
}));

const Home: React.FC = (props) => {
  const classes = useStyles();

  return (
    <>
      <Header />

      <Slide {...props} />

      <SearchForm />

      <Typography className={classes.title} gutterBottom variant="h4" component="h2">
        Lançamentos
      </Typography>

      <Announcement />

      <Typography className={classes.title} gutterBottom variant="h4" component="h2">
        Aluguel
      </Typography>
      
      <Typography className={classes.title} gutterBottom variant="h4" component="h2">
        Prontos
      </Typography>
      
      <Footer />
    </>
  );
};

export default Home;