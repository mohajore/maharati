import  { Component } from "react"
import './tools.css'
import tools from '../images/tools.png'
import t1 from '../images/t1.png'
import t2 from '../images/t2.png'
import t3 from '../images/t3.png'

class Tools extends Component{
    render(){
        return(
            <div className="tools ">
            <div className='container'>
            <div className='row '>
            
               <div className="col-md-6 col-12  ">
                 <p className='tools-p1'>أدوات</p>
                 <p className='tools-p2'>الأدوات المساعدة
للبرنامج</p>
                 <p className='tools-p3'>
                 ويتضمن المشروع مجموعة من الأدوات التي تدعم تحقيق الأهداف وهي
                 </p>
                 <div className='row ml-4'>
                     <div className="col-md-8 col-8 m-tools">
                         <p>تطبيق هاتفي سهل الاستخدام من قِبل المعلمين 
واولياء الأمور يدعم الطلبة في تحقيق أهدافهم 
ضمن خطة عمل يسهل متابعتها</p>
                     </div>
                     <div className="col-md-4 col-4">
                        <img className="three-imgs" src={t1} alt=''/>
                     </div>
                     <div className="col-md-8 col-8 m-tools ">
                         <p>موقع الكتروني يرصد جميع مهام المرشد التربوي ويزود أصحاب القرار بالتقارير اللازمة لمتابعة وتقييم وتطوير السلوكيات داخل المدرسة</p>
                     </div>
                     <div className="col-md-4 col-4">
                        <img className="three-imgs" src={t2} alt=''/>
                     </div>
                     <div className="col-md-8 col-8 m-tools ">
                         <p>منهاج لأنشطة صفية لجميع المراحل العمرية لتنمية مهارات القرن الحادي والعشرين ومهارات الحياة والقيم الإنسانية والوطنية</p>
                     </div>
                     <div className="col-md-4 col-4">
                        <img className="three-imgs" src={t3} alt=''/>
                     </div>
                 </div>
               </div>
               <div className="col-md-6 col-12  ">
               <img className="tools-img"src={tools} alt="project"/>
               </div>
                 </div>
               </div>
               
             </div>
        )
    }
}

export default Tools