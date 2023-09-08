import { Post } from '@/types';
import { Text, View, StyleSheet, Image } from 'react-native';

interface PostListItemProps {
  post: Post;
}

export default function PostListItem({ post }: PostListItemProps) {
  return (
    <View>
      {/* Header */}
      <View style={styles.header}>
        <Image style={styles.userImage} source={{ uri: post.author.image }} />
        <View>
          <Text style={styles.userName}>{post.author.name}</Text>
          <Text>{post.author.position}</Text>
        </View>
      </View>

      {/* Text Content */}
      <Text>{post.content}</Text>

      {/* Image Content */}
      <Image style={styles.postImage} source={{ uri: post.image }} />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userName: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  postImage: {
    width: '100%',
    aspectRatio: 1,
  },
});
