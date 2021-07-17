import React,{Component} from "react";
import Header from './Component/header'
import Intro from './Component/intro/intro'
import About from './Component/about/about'
import Benefits from './Component/benefits'
import LearnMore from './Component/learnmore'
import Tools from "./Component/tools";
import Images from './Component/images'
import Outputs from './Component/outputs'
import Sharik from './Component/sharik'
import Companies from './Component/compaines'
import Contacts from './Component/contact'
import Footer from './Component/footer'

class App extends Component{
  render(){
      
  return (
    <div className="App">
      <Header></Header>
      <Intro></Intro>
       <About id='about'></About>
     <Benefits id='benefits'></Benefits>
      <LearnMore></LearnMore> 
       <Tools id='tools'></Tools>
      <Images></Images>
      <Outputs id='outputs'></Outputs>
      <Sharik></Sharik> 
      <Companies id='companies'></Companies>
      <Contacts id='contacts'></Contacts>
      <Footer></Footer>
      
    </div>
  )
}
}

export default App;
