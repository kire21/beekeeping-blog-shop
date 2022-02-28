import ReactMarkdown from 'react-markdown';

import PostHeader from './post-header';

function PostContent(props) {
  const { post } = props;

  console.log(props.post);

  const imagePath = `/${post.slug.image}`;

  return (
    <article>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </article>
  );
}

export default PostContent;
