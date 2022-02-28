import PostsGrid from './posts-grid';
import { Container } from '@mui/material';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';

function AllPosts(props) {
  return (
    <Container maxWidth='md'>
      <Box mt={6} mb={3}>
        <Typography variant='h4'>Blog</Typography>
      </Box>
      <PostsGrid posts={props.posts} />
      <Box mb={6}></Box>
    </Container>
  );
}

export default AllPosts;
