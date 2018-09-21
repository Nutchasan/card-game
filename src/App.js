import React, { Component } from 'react';
import WordCard from './WordCard';


class App extends Component{
  render(){
    return(
      <div>
        {
          <WordCard value="HELLO"/>
        }
      </div>
    );
  }
}
export default App;