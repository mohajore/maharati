import  { Component } from "react"
import '../intro/intro.css'
import intro from '../../images/intro.png'
import playbtn from '../../images/playbtn.png'

import '../intro/modal-video.scss'
import React,{useState} from 'react'
import ModalVideo from 'react-modal-video'
class VidModal extends React.Component {

  constructor () {
    super()
    this.state = {
      isOpen: false
    }
    this.openModal = this.openModal.bind(this)
  }

  openModal () {
    this.setState({isOpen: true})
  }

  render () {
    return (
      <React.Fragment>
        <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='ZCvemsUfwPQ' onClose={() => this.setState({isOpen: false})} />
        <img onClick={this.openModal} className="playbtn rounded-circle"  src={playbtn} alt="play"/>
      </React.Fragment>
    )
  }
}
class Intro extends Component{
    render(){
        return(
            <div className="intro ">
               <div className='container '>
               <div className='row'>
               <div className="col-md-6 col-12 m-intro ">
                <img className="intro-img"  src={intro} alt="project"/>
                        
                  </div>
                  <div className="col-md-6 col-12 m-intro">
                    <p className="intro-p1">مهاراتي</p>
                    <p className="intro-p2" >نعزز مهارات القرن الحادي والعشرين</p>
                    <p className='intro-p3'>النص هو مثال يمكن أن يستبدل في نفس المساحة ، حيث يمكنك إنشاء هذا النص من مولد النص العربى ، حيث يمكنك أن تولد مثل النص أو النصوص الأخرى إضافة إلى زيادة عدد الحروف التي يولدها التطبيق </p>

                    <div className="intro-butons">  
                            <h6 className="intro-h6">شاهد الفيديو التعريفي </h6>
                            <VidModal />
                             <button className=" rounded-pill intro-btn border-0 ">حمل الملف التعريفي</button>
                            
                        </div>

                  </div>
                    </div>
                  </div>
                  
                </div>
               
        )
    }
}

export default Intro