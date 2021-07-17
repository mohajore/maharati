import  { Component } from "react"
import './sharik.css'
import sharik from '../images/sharik.png'
import { useState } from "react"
import Collapse from 'react-bootstrap/Collapse'
import Button from 'react-bootstrap/Button'
// scroll bar
import { Scrollbars } from 'react-custom-scrollbars';
function Example() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Button className='mb-3 rounded-pill btn-sharik'
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        إعرف أكثر
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text" className='sharik-collapse'>
        النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.
        </div>
      </Collapse>
    </div>
  );
}


class Sharik extends Component{
    render(){
        return(
            <div className="sharik">
                <div className='wave'></div>
               <div className='container'>
               <div className='row'>
               
                  <div className="col-md-6 col-12  ab-1 wd ">
                   
                    <div  className="sharik-p-div">
                    <p className='sharik-p1'>وراء الإبداع</p>
                    <p className='sharik-p2'>الجهة المنفذة للبرنامج</p>
                    <p className='sharik-p4'> أكاديمية شارك</p> 
                    </div>
                    <Scrollbars autoHide autoHideTimeout={500} autoHideDuration={200} style={{width:'100%',height:"100"}}  className="sharik-p3-div">
                    <p className='sharik-p3'>
                     النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.</p>
                    <p className='sharik-p3'>
 النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.</p>
 
                    </Scrollbars>
                    <div className="sharik-btn-div">  
                             <Example />
                    </div>
                  </div>
                  <div className="col-md-6 col-12 ab-1 ">
                  <img className="sharik-img"  src={sharik} alt="project"/>
                  </div>
                    </div>
                  </div>
                  <div className='wave wave2'></div>
                </div>
        )
    }
}

export default Sharik