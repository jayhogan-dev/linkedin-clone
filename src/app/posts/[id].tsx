import { ActivityIndicator, ScrollView, Text } from 'react-native';
import PostListItem from '@/components/PostListItem';
import { useLocalSearchParams } from 'expo-router';
import { gql, useQuery } from '@apollo/client';

const query = gql`
  query MyQuery($id: ID!) {
    post(id: $id) {
      content
      id
      image
      profile {
        id
        image
        name
        position
      }
    }
  }
`;

export default function PostDetailsScreen() {
  const { id } = useLocalSearchParams();
  const { loading, error, data } = useQuery(query, { variables: { id } });

  if (loading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Text>Something went wrong</Text>;
  }

  return (
    <ScrollView>
      <PostListItem post={data.post} />
    </ScrollView>
  );
}
