import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter,
  Routes,
  Route,
  
} from "react-router-dom";
export default class App extends Component {

  constructor()
  {
    super();
    this.state=
    {
      mode : 'light',
      progress:  0   }
  }

  setProgress=(progress)=>
  {
    this.setState({progress:progress})
  }

  setMode=(setmode)=>
  {
      this.setState({
        mode : setmode
      })
  }
 
  render() {

    let county = "in"
    return (
      <>
      <BrowserRouter>
        <div><Navbar mode ={this.state.mode} setMode = {this.setMode} /></div>
        
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        height = {3}
        transitionTime={200}
        waitingTime ={200}
        loaderSpeed ={400}
    
      />

        <Routes>
        <Route exact path="/" element={<><div><News  setProgress={this.setProgress} key="general" mode ={this.state.mode} country ={county} category="general"/> </div> </>} />
        <Route exact path="business" element={<><div><News setProgress={this.setProgress} key="business" mode ={this.state.mode} country ={county} category="business"/> </div> </>} />
        <Route exact path="entertainment" element={<><div><News setProgress={this.setProgress} key="entertainment" mode ={this.state.mode} country ={county} category="entertainment"/> </div> </>} />
        <Route exact path="health" element={<><div><News setProgress={this.setProgress} key="health" mode ={this.state.mode} country ={county} category="health"/> </div> </>} />
        <Route exact path="science" element={<><div><News setProgress={this.setProgress} key="science" mode ={this.state.mode} country ={county} category="science"/> </div> </>} />
        <Route exact path="technology" element={<><div><News setProgress={this.setProgress} key="technology" mode ={this.state.mode} country ={county} category="technology"/> </div> </>} />
        <Route exact path="sports" element={<div><News setProgress={this.setProgress} key="sports" mode ={this.state.mode} country ={county} category="sports"/> </div> } />
      </Routes>
        </BrowserRouter>
      </>
    )
  }
}
