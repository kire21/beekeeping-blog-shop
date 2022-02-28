import PostItem from './post-item';
import { Grid } from '@mui/material';

function PostsGrid(props) {
  const { posts } = props;

  return (
    <Grid container direction='row' spacing={3}>
      {posts.map((post) => {
        return (
          <Grid item md={4} xs={6} key={post.slug}>
            <PostItem post={post} />
          </Grid>
        );
      })}
    </Grid>
  );
}

export default PostsGrid;
