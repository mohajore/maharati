import  { Component } from "react"
import './footer.css'

class Footer extends Component{
    render(){
        return(
            <div className="footer">
                <div className='container'>
                <div className='row '>
                    <div className='col-7 bbbb'>حميع الحقوق محفوظة لدى اكاديمية شارك  © 2021</div>

                    <div className='col-5  aaaa'>
                    <div className='row cccc'>
                    <div className='col'>الوكالات - فرنشايزد</div>
                    <div className='col'>الشروط و الأحكام  </div>
                   
                    <div className='col'>سياسة الإستخدام </div>
                    </div>
                    </div>
                 </div>
                </div>
               
             </div>
        )
    }
}

export default Footer ;