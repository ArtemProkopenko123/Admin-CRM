import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import ImageUploader from './components/imageUploader/imgUploader';
import Navbar from './components/navigation';
import Deashboard from './components/dashboard/dashboard';
import EditImage from './components/dashboard/galaryEdit';


class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <div className="row">
              <Navbar />
              
                <div className="container">
                  <Switch>
                    <Route exact  path='/' component={ Deashboard } />
                    <Route path='/edit/:id' component={EditImage} />
                    <Route  exact path='/uploadfile' component={ ImageUploader } />
                  </Switch>
              </div>
          </div>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
