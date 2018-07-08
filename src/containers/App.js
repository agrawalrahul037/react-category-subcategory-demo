import React, { Component } from 'react';
import $ from 'jquery';
import './App.css';
import CategoryComp from '../component/CategoryComp';
import SubCatComp from '../component/SubCatComp';
import TileDisplay from '../component/TileDisplay';


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
        response = {
          categories: [
            {
              "id": 1,
              "name": "cat1"
            },
            {
              "id": 2,
              "name": "cat2"
            },
            {
              "id": 3,
              "name": "cat3"
            }
          ], subCategories: [
            {
              "id": 4,
              "catId": "1",
              "name": "sub1-cat1",
              "images": [
                {
                  "url": "../images/1.jpg"
                },
                {
                  "url": "../images/2.jpg"
                }
              ]
            },
            {
              "id": 5,
              "catId": "1",
              "name": "sub2-cat1",
              "images": [
                {
                  "url": "../images/1.jpg"
                },
                {
                  "url": "../images/2.jpg"
                }
              ]
            },
            {
              "id": 6,
              "catId": "1",
              "name": "sub3-cat1",
              "images": [
                {
                  "url": "../images/1.jpg"
                },
                {
                  "url": "../images/2.jpg"
                }
              ]
            },
            {
              "id": 7,
              "catId": "2",
              "name": "sub1-cat2",
              "images": [
                {
                  "url": "../images/1.jpg"
                },
                {
                  "url": "../images/2.jpg"
                }
              ]
            },
            {
              "id": 8,
              "catId": "2",
              "name": "sub2-cat2",
              "images": [
                {
                  "url": "../images/1.jpg"
                },
                {
                  "url": "../images/2.jpg"
                }
              ]
            },
            {
              "id": 9,
              "catId": "2",
              "name": "sub3-cat2",
              "images": [
                {
                  "url": "../images/1.jpg"
                },
                {
                  "url": "../images/2.jpg"
                }
              ]
            },
            {
              "id": 10,
              "catId": "3",
              "name": "sub1-cat3",
              "images": [
                {
                  "url": "../images/1.jpg"
                },
                {
                  "url": "../images/2.jpg"
                }
              ]
            },
            {
              "id": 11,
              "catId": "3",
              "name": "sub2-cat3",
              "images": [
                {
                  "url": "../images/1.jpg"
                },
                {
                  "url": "../images/2.jpg"
                }
              ]
            },
            {
              "id": 12,
              "catId": "3",
              "name": "sub3-cat3",
              "images": [
                {
                  "url": "../images/1.jpg"
                },
                {
                  "url": "../images/2.jpg"
                }
              ]
            }
          ]
        };
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
        <CategoryComp />
        <SubCatComp />
        <TileDisplay completeResponse={this.state.data} />
      </div>
    );
  }
}

export default App;
