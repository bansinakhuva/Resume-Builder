import React from 'react';
import {Text, View, StyleSheet,} from '@react-pdf/renderer';
  
const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  bulletPoint: {
    width: 10,
    fontSize: 10,
  },
  itemContent: {
    flex: 1,
    fontSize: 10,
  },
  title: {
    fontSize: 11,
    marginBottom: 10,
  },
  title1: {
    fontSize: 14,
    marginBottom: 10,
    textTransform: 'uppercase',
  },
  skills: {
    fontFamily: 'Lato',
    fontSize: 10,
    marginBottom: 10,
  },
}); 
  
const TechnicalSkills = (props:any) => {
  return(
    <View>
      <Text style={styles.title1}>Skills</Text>
      <View>
        <Text style={styles.title}>Combat Abilities</Text>
        <View style={styles.item}>
          <Text style={styles.itemContent}>{props.skills.skills}</Text>
        </View>
      </View>
    </View>
  );
}

export default TechnicalSkills;