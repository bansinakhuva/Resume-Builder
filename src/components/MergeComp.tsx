import React from 'react';
import { Page, Text, View, Image, Document, StyleSheet } from '@react-pdf/renderer';
import Educations from './Resume/Educations';
import Heading from './Resume/Heading';
import TechnicalSkills from './Resume/TechnicalSkills';
import Experiance from './Resume/Experiance';
import PersonalDetails from './Resume/PersonalDetails';
import Projects from './Resume/Projects';

// Main purpose of this componenet is to Join all the resume components for making PDF file
// Create styles
const styles = StyleSheet.create({
  page: {
    padding: 30,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  image: {
    marginBottom: 10,
  },
  leftColumn: {
    flexDirection: 'column',
    width: 150,
    paddingTop: 30,
    paddingRight: 15,
  },
  rightColumn: {
    width: 350,
    paddingTop: 30,
    paddingRight: 15,
    flexDirection: 'column',
  },
  footer: {
    fontSize: 12,
    textAlign: 'center',
    marginTop: 25,
    paddingTop: 10,
    borderWidth: 3,
    borderColor: 'gray',
    borderStyle: 'dashed',
  },
});

const MergeComp = (props:any) => {
  //console.log(props.resume);
    // render() {
        return(
            <Document>
                <Page size="A4" style={styles.page}>
                    <Heading heading={props.resume}/>
                    <View style={styles.container}>
                      <View style={styles.leftColumn}>
                        <Image
                          src={props.resume.image}
                          style={styles.image}
                        />
                        <Educations edu={props.resume}/>
                        <TechnicalSkills skills={props.resume}/>
                        <PersonalDetails pdetails={props.resume}/>
                      </View>
                      {/* <View style={styles.rightColumn}> */}
                        <Projects projects={props.resume} />
                        <Experiance exp={props.resume}/>
                      {/* </View> */}
                    </View>
                  <Text style={styles.footer}>Copyright by Ryder Josh</Text>
                </Page>
            </Document>
        );
    // }
}

export default MergeComp;