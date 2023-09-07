import PostListItem from '@/components/PostListItem';
import { StyleSheet } from 'react-native';
import { View } from '../../components/Themed';
import post from '../../../assets/data/posts.json';

const firstPost = post[3];

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <PostListItem post={firstPost} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
