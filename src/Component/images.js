import  { Component } from "react"
import './images.css'
import img1 from '../images/img1.jpg'
import img2 from '../images/img2.jpg'
import img3 from '../images/img3.jpg'
import img4 from '../images/img4.jpg'

// scroll bar
import { Scrollbars } from 'react-custom-scrollbars';
const renderThumb = ({ style, ...props }) => {
  const thumbStyle = {
    borderRadius: 6,
    backgroundColor: 'rgba(35, 49, 86, 0.8)'
  };
  return <div style={{ ...style, ...thumbStyle }} {...props} />;
};

class Images extends Component{
    render(){
        return(
            <div className='images images-border-top'>
                <div className='container'>
     <Scrollbars autoHide autoHideTimeout={500} autoHideDuration={200} style={{width:'100%',height:"100"}} className='s'  >
               
    <div className="row ">
       <div className="col-lg-4 col-md-12 mb-4 mb-lg-0 col-6 imagesinside">
        <img  src={img1}  className="w-100 shadow-1-strong rounded mb-4 clip-height0"alt="" />
      </div>
  
       <div className="col-lg-4 mb-4 mb-lg-0 ab-4 col-6 img-margin-t" >
        <img  src={img2}  className="w-100 shadow-1-strong rounded mb-4 clip-height" alt="" />
       <img  src={img3}  className="w-100 shadow-1-strong rounded mb-4 clip-height2"  alt=""/>
     </div>
  

  <div className="col-lg-4 mb-4 mb-lg-0 imagesinside col-6 ">
  <div className='acheivments w-100 shadow-1-strong rounded mb-4'>
      <div className='acheivments-div1'>بعض انجازات البرنامج  
الســــــــــــــابقة</div>
      <div className='acheivments-div2'>منهاج لأنشطة صفية لجميع المراحل العمرية لتنمية مهارات القرن الحادي والعشرين ومهارات الحياة والقيم الإنسانية والوطنية</div>
      <div className="acheivments-btn-div">  
                             <button className=" rounded-pill acheivments-btn  "> إعرف أكثر </button>
                    </div>
  </div>
  <div className='acheivments2 w-100 shadow-1-strong rounded mb-4 img-dis'>عنوان تشويقي للعرض</div> 
  </div>

  <div className="col-lg-8 mb-4 mb-lg-0 col-6  ">
     <img src={img4}  class="w-100 shadow-1-strong rounded mb-4 clip-height4" alt=""/>
  </div>
     </div>

  </Scrollbars>

        </div>
            </div>
        )
    }
}

export default Images