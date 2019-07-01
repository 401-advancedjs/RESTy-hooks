import './JSONBody.scss';
import React from 'react';

export default class JSONBody extends React.Component{
  render(){
    return(
      <textarea placeholder="Raw JSON Body"></textarea>
    );
  }
}