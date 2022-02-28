import {
  Paper,
  Container,
  Grid,
  Typography,
  Box,
  Button,
  Hidden,
} from '@mui/material';

import classes from './hero.module.css';
import Social from './social';

function Hero() {
  return (
    <Paper className={classes.hero}>
      <div className={classes.overlay}></div>
      <Container className={classes.container} maxWidth='md'>
        <Grid className={classes.content} container>
          <Grid item sm={8}>
            <Typography variant='h2'>Lorem Ipsum</Typography>
            <Typography variant='h8'>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </Typography>
            <Box my={2}>
              <Button
                className={classes.btn}
                href='mailto:kire.zdraveski@gmail.com'
                variant='outlined'
                color='secondary'
              >
                Get in touch
              </Button>
            </Box>
          </Grid>
          <Hidden smDown>
            <Grid item>
              <Social />
            </Grid>
          </Hidden>
        </Grid>
      </Container>
    </Paper>
  );
}

export default Hero;
