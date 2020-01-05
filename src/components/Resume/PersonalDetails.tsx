import React from 'react';
import { Text, View, StyleSheet,} from '@react-pdf/renderer';

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  details: {
    fontSize: 10,
  },
  title: {
    fontSize: 14,
    marginBottom: 10,
    textTransform: 'uppercase',
  },
});
  
const PersonalDetails = (props:any) => {
  return(
    <View style={styles.container}>
      <Text style={styles.title}>Personal Details</Text>
      <Text style={styles.details}>• Name: {props.pdetails.fullName}</Text>
      <Text style={styles.details}>• DOB: {props.pdetails.dob}</Text>
      <Text style={styles.details}>• Nationality: {props.pdetails.nationality}</Text>
      <Text style={styles.details}>• Address: {props.pdetails.address}</Text>
    </View>
  );
}

export default PersonalDetails;