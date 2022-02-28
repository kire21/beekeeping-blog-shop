import Link from 'next/link';
import Image from 'next/image';
import { Card, Typography } from '@mui/material';
import { CardMedia } from '@mui/material';
import { CardContent } from '@mui/material';
import { CardActions } from '@mui/material';
import { Box } from '@mui/system';
import { Button } from '@mui/material';
import { typography } from '@mui/system';

import classes from './post-item.module.css';

function PostItem(props) {
  const { title, date, image, excerpt, slug } = props.post;

  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const postUrl = `/posts/${slug}`;
  const imagePath = `/${image}`;

  return (
    <Card sx={{ maxWidth: 250 }}>
      <CardMedia component='img' height='200' image={imagePath} alt={title} />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {title}
        </Typography>
        <Typography variant='caption' paragraph>
          {date}
        </Typography>
        <Typography paragraph variant='body2' color='text.secondary'>
          {excerpt}
        </Typography>
        <Button className={classes.btn} variant='outlined' href={postUrl}>
          Learn More
        </Button>
      </CardContent>
    </Card>
  );
}

export default PostItem;
