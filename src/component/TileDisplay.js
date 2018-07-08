import React, { Component } from 'react';

class TileDisplay extends Component {
    render() {
        var myStyle = {
            color: '#FF0000',
            background:'#eeeeee',
            width: 300,
            height: 300
        }
        return (
            <div style={myStyle}>
                {this.props.completeResponse.categories[0]}
            </div>
        )
    }
}
export default TileDisplay;
