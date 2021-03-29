import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button, Card, CardContent, CardMedia, Typography, makeStyles } from '@material-ui/core'
// https://github.com/Learus/react-material-ui-carousel
//https://g787543.github.io/infinite-react-carousel/

const useStyles = makeStyles(() => ({
  slides: {
    marginTop: "60px",
    // marginTop: "50px" quando a tela for menor que 900px
    "@media (max-width: 600px)": {
      marginTop: "50px",
    },
  },

  cardMedia: {
    height: '350px',
    "@media (max-width: 600px)": {
      height: "150px",
    },
  },

}));

const Example: React.FC = (props) => { 

  const { slides, cardMedia } = useStyles();

  var items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
      image: './photo-1.jpeg',
      title: 'A Nice Car' 
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
      image: './photo-2.jpeg',
      title: 'Delicious Coffee'
    }
  ]

  return (
    <Carousel className={slides} >
      {
        items.map( 
          (item, i) => (
            <Paper>
              {/* <h2>{item.name}</h2>
              <p>{item.description}</p> */}
              <Card>
                <CardMedia
                  image={item.image}
                  title={item.title}
                  className={cardMedia}
                />
                {/* <CardContent>
                <Typography>{item.title}</Typography>
                </CardContent> */}
              </Card>

              {/* <Button className="CheckButton">
              Check it out!
              </Button> */}
            </Paper>
          ) 
        )
      }
    </Carousel>
  )
}

export default Example;

