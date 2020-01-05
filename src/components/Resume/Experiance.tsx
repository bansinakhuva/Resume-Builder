import React from 'react';
import { Text, View, StyleSheet,} from '@react-pdf/renderer';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    paddingLeft: 15,
  },
  entryContainer: {
    marginBottom: 10,
  },
  date: {
    fontSize: 11,
  },
  detailContainer: {
    flexDirection: 'row',
  },
  detailLeftColumn: {
    flexDirection: 'column',
    marginLeft: 10,
    marginRight: 10,
  },
  detailRightColumn: {
    flexDirection: 'column',
    flexGrow: 9,
  },
  bulletPoint: {
    fontSize: 10,
  },
  details: {
    fontSize: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  leftColumn: {
    flexDirection: 'column',
    flexGrow: 9,
  },
  rightColumn: {
    flexDirection: 'column',
    flexGrow: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  title: {
    fontSize: 11,
    color: 'black',
    textDecoration: 'none',
  },
  title1: {
    fontSize: 14,
    marginBottom: 10,
    textTransform: 'uppercase',
  },
  item: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  bulletPoint1: {
    width: 10,
    fontSize: 10,
  },
  itemContent: {
    flex: 1,
    fontSize: 10,
  },
});

const Experiance = (props:any) => {
    
  return(
    <View style={styles.container}>
      <Text style={styles.title1}>Experiance</Text>
      <View style={styles.entryContainer}>
        <View style={styles.headerContainer}>
          {/* <View style={styles.leftColumn}>
            <Text style={styles.title}>World Compliance Technologies</Text>
          </View> */}
          {/* <View style={styles.rightColumn}>
            <Text style={styles.date}>28-ma-2018</Text>
          </View> */}
        </View>
        <View style={styles.item}>
        <Text style={styles.itemContent}>{props.exp.experiance}</Text>
        </View>
        {/* <View style={styles.item}>
          <Text style={styles.bulletPoint1}>•</Text>
          <Text style={styles.itemContent}>This is break pointaaaa</Text>
        </View> */}
      </View>
    </View>
  );
}

export default Experiance;