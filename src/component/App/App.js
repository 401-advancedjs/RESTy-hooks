import React from 'react';
import ReactJSON from 'react-json-view';
import superagent from'superagent';
import { useState } from 'react';

import Form from '../Form/Form.js';
import Header from '../Header/Header.js';
import Footer from '../Footer/footer.js';
import JSONBody from '../JSONBody/JSONBody.js';

import './App.scss';

export default function App(){
  const [URL, setURL] = useState({URL:''});
  const [method, setMethod] = useState({method:''});
  const [result, setResult] = useState({});

  const handleURL = URL => {
    setURL({ URL });
  };

  const handleMethod = method => {
    setMethod({ method });
  };

  const handleSubmit = async () => {
    const response = await superagent(method.method, URL.URL);
    const API_result = response.body.results;
    console.log(API_result);
    setResult({ result: API_result });
  };

  return(
      <>
      <div>
        <Header />
        <Form 
          handleURL    = { handleURL } 
          handleMethod = { handleMethod } 
          handleSubmit = { handleSubmit }
        />
        <JSONBody />
        <div id="reactJSON">
          <ReactJSON src={ result } />
        </div>
        <Footer />
      </div>
      </>
    );
}
