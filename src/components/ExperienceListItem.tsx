import { Experience } from '@/types';
import { Text, View, Image, StyleSheet } from 'react-native';

interface ExperienceListItemProps {
  experience: Experience;
}

export default function ExperienceListItem({
  experience,
}: ExperienceListItemProps) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: experience.companyImage }} style={styles.image} />
      <View>
        <Text style={styles.title}>{experience.title}</Text>
        <Text>{experience.companyName}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    paddingBottom: 10,
    marginBottom: 10,
    borderBottomWidth: 0.5,
    borderColor: 'lightgray',
  },
  image: {
    width: 50,
    aspectRatio: 1,
    marginRight: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
  },
});
