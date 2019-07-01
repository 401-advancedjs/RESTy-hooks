import React from 'react';
import './form.scss'

export default class Form extends React.Component{
  handleSubmitChange = event => {
    event.preventDefault();
    this.props.handleSubmit();
  };

  handleURLChange = event => {
    event.preventDefault();
    const URL = event.target.value;
    this.props.handleURL(URL);
  };

  handleMethodChange = event => {
    event.preventDefault();
    const method = event.target.value;
    this.props.handleMethod(method);
  };


  render(){
    return(
      <>
        <form>
          <div>
            <label>
              <input 
                type      = 'text' 
                onChange  = { this.handleURLChange } 
                className = "URL" />
            </label>
          </div>

          <div className = "methodsDIV">
            <label className = "methods">
              GET
              <input 
                type      = "radio" 
                value     = "GET" 
                className = "GET" 
                name      = "methods" 
                onChange  = { this.handleMethodChange }/>
            </label>

            <label className = "methods">
              POST
              <input 
                type      = "radio" 
                value     = "POST" 
                className = "POST" 
                name      = "methods" 
                onChange  = { this.handleMethodChange }/>
            </label>

            <label className = "methods">
              PUT
              <input 
                type      = "radio" 
                value     = "PUT" 
                className = "PUT" 
                name      = "methods" 
                onChange  = { this.handleMethodChange }/>
            </label>

            <label className = "methods">
              PATCH
              <input 
                type      = "radio" 
                value     = "PATCH" 
                className = "PATCH" 
                name      = "methods" 
                onChange  = { this.handleMethodChange }/>
            </label>

            <label className = "methods">
              DELETE
              <input 
                type      = "radio" 
                value     = "DELETE"  
                className = "DELETE" 
                name      = "methods" 
                onChange  = { this.handleMethodChange }/>
            </label>

            <button onClick = { this.handleSubmitChange }>Go!</button>
          </div>
        </form>
      </>
    );
  }
}
