import  { Component } from "react"
import './companies.css'
import co1 from '../images/co1.png'
import co2 from '../images/co2.png'
import co3 from '../images/co3.png'
import co4 from '../images/co4.png'
import co5 from '../images/co5.png'
import co6 from '../images/co6.png'
import co7 from '../images/co7.png'
import co8 from '../images/co8.png'
import co9 from '../images/co9.png'
class Companies extends Component{
    render(){
        return(
            <section class="companies ">
            <div class="container">
                <div className="row">
             
                   <div className="companies-intro">
                   
                   <p className='companies-text'> النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا  النص من مولد النص العربى</p>
                  <div className="companies-title "> 
                  <p className='companies-p1 '>نعتز بالتعاون معهم </p>
                    <p className='companies-p2 '>شركائنا بالنجاح</p>
                  </div>
                  </div>
                   </div>
                 
                 <div className='compaines-images-div'>
                 <div className="row my-4 ml-4">
                    <div className="col-md-2 co-first-imgs col-5 co-m "><img className='col-img' src={co1}/></div>
                    <div className="col-md-2 co-first-imgs col-5 co-m"><img src={co2}/></div>
                    <div className="col-md-2 co-first-imgs col-5 co-m"><img src={co3}/></div>
                    <div className="col-md-2 co-first-imgs col-5 co-m"><img src={co4}/></div>
                    <div className="col-md-2 co-first-imgs col-5 co-m"><img src={co5}/></div>
  
                    <div className="col-md-3 co-first-imgs col-5 "><img src={co6}/></div>
                    <div className="col-md-3 co-first-imgs col-5 "><img src={co7}/></div>
                    <div className="col-md-3 co-first-imgs col-5 "><img src={co8}/></div>
                    <div className="col-md-3 co-first-imgs col-5 "><img src={co9}/></div>
                     
                     </div> 
                 </div>
                  
                   </div> 
                    </section>
        )
    }
}

export default Companies