import React from 'react';
import { PDFDownloadLink } from "@react-pdf/renderer";
import MergeComp from './MergeComp';

// This component is used to display footer download button as well as download the PDF
const Footer = (props:any) => {
    // console.log(props.resume);
    return(
        <div className="footer" style={{position: 'fixed', margin: '2%', marginBottom: '4%', marginRight: '8%'}}>
            <PDFDownloadLink
            document={<MergeComp resume={props.resume}/>}
            fileName="Resume.pdf"
            style={{
            textDecoration: "none",
            padding: "10px",
            color: "#fff",
            borderRadius: '10rem',
            backgroundColor: "#007bff",
            border: "1px solid #4a4a4a"
            }}
            >
                {({loading}) =>
                loading ? "Download" : "Download"
                }
            </PDFDownloadLink>
        </div>
    );
}

export default Footer;