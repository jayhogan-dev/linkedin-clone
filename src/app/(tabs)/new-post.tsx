import { useNavigation, useRouter } from 'expo-router';
import { useLayoutEffect, useState } from 'react';
import { StyleSheet, TextInput, Pressable } from 'react-native';

import { Text, View } from '../../components/Themed';

export default function NewPostScreen() {
  const [content, setContent] = useState('');
  const navigation = useNavigation();
  const router = useRouter();

  const onPost = () => {
    console.warn('Posting:', content);

    router.push('/(tabs)');
    setContent('');
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Pressable onPress={onPost} style={styles.postButton}>
          <Text style={styles.postButtonText}>Submit</Text>
        </Pressable>
      ),
    });
  }, [onPost]);

  return (
    <View style={styles.container}>
      <TextInput
        value={content}
        onChangeText={setContent}
        placeholder="What do you want to talk about?"
        style={styles.input}
        multiline
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  input: {
    fontSize: 18,
    color: '#000',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  postButton: {
    backgroundColor: 'royalblue',
    padding: 5,
    paddingHorizontal: 15,
    borderRadius: 50,
    marginRight: 10,
  },
  postButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
