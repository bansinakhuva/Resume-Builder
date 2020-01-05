import React from 'react';
import { Text, View, Link, StyleSheet,} from '@react-pdf/renderer';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderBottomColor: '#112131',
    borderBottomStyle: 'solid',
    alignItems: 'stretch',
  },
  detailColumn: {
    flexDirection: 'column',
    flexGrow: 9,
  },
  linkColumn: {
    flexDirection: 'column',
    flexGrow: 2,
    alignSelf: 'flex-end',
    justifyContent: 'flex-end',
  },
  name: {
    fontSize: 24,
    textTransform: 'uppercase',
  },
  subtitle: {
    fontSize: 10,
    justifyContent: 'flex-end',
    textTransform: 'uppercase',
  },
  link: {
    fontSize: 10,
    color: 'black',
    textDecoration: 'none',
    alignSelf: 'flex-end',
    justifyContent: 'flex-end',
  },
});

const Heading = (props:any) => {
  return(
    <View style={styles.container}>
      <View style={styles.detailColumn}>
        <Text style={styles.name}>{props.heading.fullName}</Text>
        <Text style={styles.subtitle}>{props.heading.speciality}</Text>
      </View>
      <View style={styles.linkColumn}>
        <Link src={props.heading.email} style={styles.link}>{props.heading.email}</Link>
      </View>
    </View>
  );
}

export default Heading;