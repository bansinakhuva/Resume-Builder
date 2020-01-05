import React from 'react';
import { Text, View, StyleSheet,} from '@react-pdf/renderer';

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  school: {
    fontSize: 10,
  },
  degree: {
    fontSize: 10,
  },
  candidate: {
    fontSize: 10,
  },
  title: {
    fontSize: 14,
    marginBottom: 10,
    textTransform: 'uppercase',
  },
});
  
const Educations = (props:any) => {
  return(
    <View style={styles.container}>
      <Text style={styles.title}>Education</Text>
      <Text style={styles.school}>{props.edu.education}</Text>
    </View>
  );
}

export default Educations;