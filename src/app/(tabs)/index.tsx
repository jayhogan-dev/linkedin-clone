import PostListItem from '@/components/PostListItem';
import { FlatList } from 'react-native';
import posts from '../../../assets/data/posts.json';

export default function HomeFeedScreen() {
  return (
    <FlatList
      data={posts}
      renderItem={({ item }) => <PostListItem post={item} />}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ gap: 10 }}
    />
  );
}
