import Image from 'next/image';
import { Container } from '@mui/material';
import { Grid } from '@mui/material';
import { Typography } from '@mui/material';
import { Paper } from '@mui/material';
import { makeStyles } from '@mui/material';

function PostHeader(props) {
  const { title, image } = props;

  return (
    <Paper>
      <Typography variant='h3'>{title}</Typography>
    </Paper>
  );
}

export default PostHeader;
