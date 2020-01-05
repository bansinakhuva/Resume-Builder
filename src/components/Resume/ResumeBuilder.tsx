import React, { ChangeEvent } from 'react';
import '../../css/ResumeBuilder.css'
import IconImage from '../../resources/images/icon_image.svg';
import Footer from '../Footer';

class ResumeBuilder extends React.Component {

    state =  {
        dob:'',
        nationality:'',
        address:'',
        email:'',
        number:'',
        fullName: '',
        speciality:'',
        experiance:'',
        education:'',
        projects:'',
        skills:'',
        image:IconImage
    };

    onChange = (e: ChangeEvent<HTMLInputElement>) => {
        let files = e.target.files;
        if(files !== null) {
            this.setState({image: URL.createObjectURL(files[0])});
        }
    }

    render() {
        return(
            <div>
                <div className="container shadow-lg p-3 mb-5 bg-white rounded" id="resumeBuilder">
                    <div 
                        id="colOne" className="col-md-4">
                        <div className="row">
                            <label htmlFor="inputfoto2" id="inputfoto">
                                <div className="cont_fotodiv">
                                    <div id="inserta_imagenlabel"
                                        style={{color:'#fff'}}>
                                        <img className="camImageMargin"
                                            src={this.state.image} 
                                            alt=""
                                            style={{width:'100%', margin:'0'}}
                                        />
                                    </div>
                                </div>
                            </label>
                            <input 
                                type="file" 
                                id="inputfoto2" 
                                accept="image/*" 
                                style={{display: 'none'}} 
                                onChange={this.onChange} 
                            />
                        </div>
                        <div className="row">
                            <span style={{marginLeft:'10%'}}>SELECT YOUR PICTURE</span>
                            <div className="col-md-12 personalDetails">
                                <h4>Personal Details</h4>
                            </div>
                            <div className="col-md-12 personalDetails">
                                <h6>Birth Date</h6>
                                <input 
                                    type="text" 
                                    placeholder="Enter Your B'Date"
                                    onChange={e => this.setState({birthDate: e.target.value})}
                                />
                            </div>
                            <div className="col-md-12 personalDetails">
                                <h6>Nationality</h6>
                                <input 
                                    type="text" 
                                    placeholder="Enter your nationality" 
                                    onChange={e => this.setState({nationality: e.target.value})}
                                />
                            </div>
                            <div className="col-md-12 personalDetails">
                                <h6>Address</h6>
                                <input 
                                    type="text"
                                    placeholder="Enter your address" 
                                    onChange={e => this.setState({address: e.target.value})}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <h4>Contact</h4>
                            </div>
                            <div className="col-md-12">
                                <input 
                                    type="text" 
                                    placeholder="Enter Your email" 
                                    style={{width:'60%'}} 
                                    maxLength={25} 
                                    onChange={e => this.setState({email: e.target.value})}
                                />
                            </div>
                            <div className="col-md-12">
                                <input 
                                    type="text" 
                                    style={{width:'60%'}} 
                                    placeholder="enter phone number" 
                                    onChange={e => this.setState({number: e.target.value})}
                                />
                            </div>
                        </div>
                    </div>
                    <div id="colTwo" className="col-md-8">
                        <div className="row" style={{marginTop: '7%'}}>
                            <div className="col-md-12">
                                <h1 placeholder="Enter Your Name Here">
                                    <input type="text" 
                                        placeholder="Enter Your Name"
                                        onChange={e => this.setState({fullName: e.target.value})}
                                    />
                                </h1>
                            </div>
                            <div className="col-md-12">
                                <input type="text" 
                                    placeholder="Enter Your Speciality"
                                    onChange={e => this.setState({speciality: e.target.value})}
                                />
                            </div>
                        </div>
                        <div className="row" style={{marginTop:'15%'}}>
                            <div className="col-md-12">
                                <h4>Professional Experiance</h4>
                            </div>
                            <div className="col-md-12">
                                <textarea  
                                    placeholder="In this text field your can describe your duties. Try to focus on accomplishments that serve as concrete examples to the type of problems you can solve to your future employer." 
                                    className="w-100" 
                                    style={{height:'200px'}} 
                                    onChange={e => this.setState({experiance: e.target.value})}
                                />
                                <br />
                            </div>
                        </div>
                        
                        <div className="row">
                            <div className="col-md-12">
                                <h4>Education</h4>
                            </div>
                            <div className="col-md-12">
                                <textarea 
                                    placeholder="Enter Education details of school, graduation, postgraduation, diploma Etc...." 
                                    className="w-100"
                                    style={{height:'150px'}} 
                                    onChange={e => this.setState({education: e.target.value})}
                                />
                                <br />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-12">
                                <h4>Project</h4>
                            </div>
                            <div className="col-md-12">
                                <textarea 
                                    placeholder="Enter Project details" 
                                    className="w-100"
                                    style={{height:'200px'}} 
                                    onChange={e => this.setState({projects: e.target.value})}
                                />
                                <br />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-12">
                                <h4>Technical Skills</h4>
                            </div>
                            <div className="col-md-12">
                                <textarea 
                                    placeholder="Enter Your Technical Skills" 
                                    className="w-100" 
                                    onChange={e => this.setState({skills: e.target.value})}
                                />
                                <br />
                            </div>
                        </div>
                    </div>
                </div>
                <Footer resume={this.state}/>
            </div>
        );
    }
}

export default ResumeBuilder;