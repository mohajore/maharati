import  {useState,useEffect} from "react"
import axios from "axios"
import o1 from '../images/o1.png'
import o2 from '../images/o2.png'
import o3 from '../images/o3.png'
import o4 from '../images/o4.png'
import './outputs.css'
const Outputs = ()=>{

    const [outputs,setOutputs] = useState([]);
    useEffect(()=> axios.get("../data.json").then( ess => setOutputs(ess.data.outputs)),[])

    const outputsMap = outputs.map( item => {
     if (item.id ===1){
       return(
      <div className="col-md-6 col-6" key={item.id}>
      <div className="outputs-value-div outputs-value-div1" >
        <a href="#">
        <img src={item.image} className="outputs-card-img-top" alt="..."/>
        </a>
        <div className="card-body">
        <a href="#"  >
        <img src={item.image}  className="outputs-card-img-top1" alt="..."/>
        </a>
          <span>{item.title}</span>
         <p className="card-text mt-3">
         {item.body}
           </p>
        </div>
      </div>
    </div>
       )
     }else{
       return(
        <div className="col-md-4 col-6" key={item.id}>
        <div className="outputs-value-div" >
          <a href="#">
          <img src={item.image} className="outputs-card-img-top" alt="..."/>
          </a>
          <div className="card-body">
          <a href="#"  >
          <img src={item.image}  className="outputs-card-img-top1" alt="..."/>
          </a>
            <span>{item.title}</span>
           <p className="card-text mt-3">
           {item.body}
             </p>
          </div>
        </div>
      </div>
       )
     }
    })
    


  
        return(
            <section className="outputs">
            <div className="container">
                <div className="row">
                <div className="outputs-intro col-md-6">
                  <div className="outputs-title "> 
                  <p className='outputs-p1 '>والنتائج تكون  </p>
                    <p className='outputs-p2 '>مخرجات البرنامج</p>
                    <p className=''> النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا 
النص من مولد النص العربى</p>
                  </div>
                   </div>
                   {outputsMap}
                   
                    
                  </div>
                </div>
        </section>     
        )
    }

export default Outputs