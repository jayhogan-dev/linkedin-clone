import { Post } from '@/types';
import { Text } from 'react-native';

interface PostListItemProps {
  post: Post;
}

export default function PostListItem({ post }: PostListItemProps) {
  return <Text>{post.content}</Text>;
}
