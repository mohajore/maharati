import  { Component } from "react"
import './contacts.css'
import contacts from '../images/contacts.png'
class Contacts extends Component{
    render(){
        return(
            <div className="contacts ">
            <div className='container'>
            <div className='row contactsrow'>
            <div className="col-md-6 col-12 ">
               <img className="contacts-img"  src={contacts} alt="project"/>
               </div>
               <div className="col-md-6 col-12 contact-m1">
                 <p className='contacts-p1'>ابق على تواصل</p>
                 <p className='contacts-p2'>لإستفسارتكم
واسألتكم</p>
                 <p className='contacts-p3'>شارع الملكة رانيا , مجمع ابو الحاج التجاري
الطابق الأول , مكتب 104</p>
                 <div className='row contactsrow2'>
                 <div className="mx-3 ">هاتف </div>
                 <div className="mx-4">+962  6  515  1021</div>
                 
                 </div>
                 <div className='row contactsrow2'>
                 <div className="mx-3 ">مووبايل </div>
                 <div className="mx-4">+962 79 858 0848 </div>
                 </div>
                 <div className='row contactsrow2'>
                 <div className="mx-3 ">ايميل </div>
                 <div className="mx-4">info@sharekacademy.net</div>
                 
                 </div>
               </div>
              
                 </div>
               </div>
               
             </div>
        )
    }
}

export default Contacts