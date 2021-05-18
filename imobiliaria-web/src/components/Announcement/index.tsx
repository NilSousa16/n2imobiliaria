/*
Support link: 
  https://reactgo.com/material-ui-react-tutorial/
*/

import React from 'react';
import { Grid, Typography, makeStyles } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import { posts } from "./dummy-post";

const useStyles = makeStyles(() => ({
  // grid: {
  //   "@media (max-width: 600px)": {
      
  //   },
  // },

}));

const Announcement: React.FC = () => {

  // const { grid } = useStyles();
  
  return (
    <div style={{ marginTop: 20, }}>
      <Grid container item spacing={1} justify="space-around">
        {posts.map(post => (
          <Grid item xs={4} key={post.title} >
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="200"
                  image={post.image}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {post.title}
                  </Typography>
                  <Typography component="p">{post.excerpt}</Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Announcement;