import React from 'react';
import ReactJSON from 'react-json-view';
import superagent from'superagent';

import Form from '../Form/Form.js';
import Header from '../Header/Header.js';
import Footer from '../Footer/footer.js';
import JSONBody from '../JSONBody/JSONBody.js';

import './App.scss';
export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      URL: '',
      method: '',
      result: {},
    }
  };

  handleURL = URL => {
    this.setState({ URL });
  };

  handleMethod = method => {
    this.setState({ method });
  };

  handleSubmit = async () => {
    const METHOD = this.state.method;
    const URL = this.state.URL;
    const response = await superagent(METHOD, URL);
    const result = response.body.results;
    this.setState({ result });
  };

  render(){
    return(
      <>
      <div>
        <Header />
        <Form 
          handleURL    = { this.handleURL } 
          handleMethod = { this.handleMethod } 
          handleSubmit = { this.handleSubmit }
        />
        <JSONBody />
        <div id="reactJSON">
          <ReactJSON src={ this.state.result } />
        </div>
        <Footer />
      </div>
      </>
    );
  }
};
