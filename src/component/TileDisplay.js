import React, { Component } from 'react';

class TileDisplay extends Component {
    render() {
        var myStyle = {
            color: '#FF0000',
            background: '#eeeeee',
            width: 300,
            height: 300
        }
        var that = this;
        return (
            <div style={myStyle}>
                <ul>
                    {this.props.completeResponse.categories != undefined && that.props.completeResponse.categories.map(post =>
                        <li key={post.id}>{post.name}</li>
                    )}
                </ul>
            </div>
        )
    }
}
export default TileDisplay;
