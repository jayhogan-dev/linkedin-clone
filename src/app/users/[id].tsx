import { User } from '@/types';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import { useLayoutEffect } from 'react';
import { useState } from 'react';
import { Text, View, Image, StyleSheet, Pressable } from 'react-native';
import userData from '../../../assets/data/user.json';

export default function UserProfile() {
  const [user, setUser] = useState<User>(userData);
  const { id } = useLocalSearchParams();
  const navigation = useNavigation();

  const onConnect = () => {
    console.log('Pressed');
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: user.name,
    });
  }, [user?.name]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* Background Image */}
        <Image source={{ uri: user.backImage }} style={styles.backImage} />
        <View style={styles.headerContent}>
          {/* Profile Image */}
          <Image source={{ uri: user.image }} style={styles.profileImage} />

          {/* Name and Position */}
          <Text style={styles.name}>{user.name}</Text>
          <Text>{user.position}</Text>

          {/* Button */}
          <Pressable onPress={onConnect} style={styles.button}>
            <Text style={styles.buttonText}>Connect</Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>About</Text>
        <Text style={styles.paragraph}>{user.about}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  header: {
    backgroundColor: 'white',
  },
  headerContent: {
    padding: 10,
    paddingTop: 0,
  },
  backImage: {
    width: '100%',
    aspectRatio: 5 / 2,
    marginBottom: -60,
  },
  profileImage: {
    width: 120,
    aspectRatio: 1,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: 'white',
  },
  name: {
    fontSize: 24,
    fontWeight: '500',
  },
  button: {
    backgroundColor: 'royalblue',
    padding: 10,
    alignItems: 'center',
    borderRadius: 50,
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
  },
  section: {
    backgroundColor: 'white',
    marginVertical: 10,
    padding: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 5,
  },
  paragraph: {
    lineHeight: 20,
  },
});
