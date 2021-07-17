import  { Component } from "react"
import '../about/about.css'
import about from '../../images/about.png'
// scroll bar
import { Scrollbars } from 'react-custom-scrollbars';

const renderThumb = ({ style, ...props }) => {
  const thumbStyle = {
    borderRadius: 6,
    backgroundColor: 'rgba(35, 49, 86, 0.8)'
  };
  return <div style={{ ...style, ...thumbStyle }} {...props} />;
};

class About extends Component{
    render(){
        return(
            <div className="about">
               <div className='container'>
               <div className='row'>
               
                  <div className="col-md-6 col-12  ">
                    <p className='about-p1'>الفكرة</p>
                    <p className='about-p2'>نبذة عن البرنامج</p>
                    <Scrollbars className="about-p3-div" autoHide autoHideTimeout={500} autoHideDuration={200} style={{width:'100%',height:"100"}}  >
                    <p className='about-p3'>
                     النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.</p>
                    <p className='about-p3'>
 النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.</p>
 
                    </Scrollbars>
                    <div className="about-btn-div">  
                             <button className=" rounded-pill btn-about  "> إعرف أكثر </button>
                    </div>
                  </div>
                  <div className="col-md-6 col-12  ">
                  <img className="about-img"  src={about} alt="project"/>
                  </div>
                    </div>
                  </div>
                </div>
        )
    }
}

export default About