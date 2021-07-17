import  {useState,useEffect} from "react"
import Ellipse from '../images/Ellipse.png'
import './benefits.css'
import axios from "axios"
// import Ellipse from '../../public/js/data.json'
const Benefits = ()=>{

 
  const [benefits,setBenefits] =useState([])

  useEffect ( ()=> {axios.get("../data.json").then( res => setBenefits(res.data.benefits) )},[])

  const benefitsMap =  benefits.map(item => {
      return (
     
          <div className="col-md-4 col-6" key={item.id}>
                      <div className="benefits-value-div" >
                        <a href="blog.html">
                        <img src={item.image} className="circle-img-top" alt="..."/>
                        </a>
                        <div className="card-body">
                          <span>{item.title} </span>
                         <p className="card-text mt-3">
                         {item.body}
                           </p>
                        </div>
                      </div>
                 </div>
      
      )})
   
        return(
            <section className="benefits ">
            <div className="container">
                <div className="row">
             
                   <div className="benefits-intro">
                   <p className='benefits-text'> النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا 
النص من مولد النص العربى</p>
                   <div className="benefits-title "> 
                    <p className='benefits-p1 '>ما الفائدة </p>
                    <p className='benefits-p2 '>القيمة المضافة</p>
                   </div>
                   </div>
                    
                </div>
                <div className="row">
                   {benefitsMap}
                    
                  </div>
                </div>
        </section>     
        )
    
}

export default Benefits