import  { Component } from "react"
import playbtn2 from'../images/playbtn2.png'
import './learnmore.css'
class LearnMore extends Component{
    render(){
        return(
           <div className="learnmore learnmorebackground ">
               <div className='container'>
               <div className='row'> 
                <div className="learnmore-text">تعرف على البرنامج أكثر من خلال هذا الفيديو</div>        
                <div className="learnmore-btn-div">  <img  className='learnmore-btn' src={playbtn2}/></div>
               </div>
               </div>
                
           </div>
        )
    }
}

export default LearnMore