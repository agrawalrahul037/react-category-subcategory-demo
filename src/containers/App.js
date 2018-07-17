import React, { Component } from 'react';
import $ from 'jquery';
import './App.css';
import CategoryComp from '../component/CategoryComp';
import SubCatComp from '../component/SubCatComp';
import TileDisplay from '../component/TileDisplay';
import { myConfig } from '../model/model';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    var that = this;
    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/users',
      success(response) {
        response = myConfig.stubData;
        that.setState({
          data: response
        });
      },
      error() {
        console.log("ERROR");
      }
    })
    console.log('gggggg====='+this.state.data);
  }
  render() {
    return (
      <div className="App">
        <CategoryComp completeResponse1={this.state.data}/>
        <SubCatComp completeResponse2={this.state.data}/>
        <TileDisplay completeResponse={this.state.data} />
      </div>
    );
  }
}

export default App;
