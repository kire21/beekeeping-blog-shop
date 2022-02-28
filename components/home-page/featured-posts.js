import PostsGrid from '../posts/posts-grid';
import { Container } from '@mui/material';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';

function FeaturedPosts(props) {
  return (
    <Container maxWidth='md'>
      <Box mt={6} mb={3}>
        <Typography variant='h4'>Featured Posts</Typography>
      </Box>
      <PostsGrid posts={props.posts} />
      <Box mb={6}></Box>
    </Container>
  );
}

export default FeaturedPosts;
