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
      data: [],
      catVal: 1,
      subCatVal:4
    };
  }
  myCallBack = (datafromchild,datafromSubchild) => {
    //console.log("datafromchild=======" + datafromchild);
    this.setState({catVal:datafromchild});
    this.setState({subCatVal:datafromSubchild})
  }
  myCallBack1 = (datafromSubchild) => {
   // console.log("datafromSubchild=======" + datafromSubchild);
    this.setState({subCatVal:datafromSubchild})
   // console.log("datafromSubchild=======" + this.state.subCatVal);
  }
  componentDidMount() {
    var that = this;
    $.ajax({
      url: 'http://www.mocky.io/v2/5ed741b13200002b002745dc',
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
    console.log('gggggg=====' + this.state.data);
  }
  render() {
    return (
      <div className="App">
        <CategoryComp completeResponse1={this.state.data} childData={this.myCallBack} />
        <SubCatComp completeResponse2={this.state.data} selectedCatVal={this.state.catVal} subChildData={this.myCallBack1}/>
        <TileDisplay completeResponse={this.state.data} selectedSubCatVal={this.state.subCatVal}/>
      </div>
    );
  }
}

export default App;
