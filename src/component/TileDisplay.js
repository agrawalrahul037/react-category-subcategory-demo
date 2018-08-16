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
                {this.props.completeResponse.subCategories !== undefined && that.props.completeResponse.subCategories.map((post,index) =>
                    (post.id == this.props.selectedSubCatVal) ? <div key={'mykey' + index}>{post.images !== undefined && post.images.map((post1,index) => <img  key={'mykey' + index} src={post1.url} alt={post1.url}></img>)}</div> : ""
                )}
            </div>
        )
    }
}
export default TileDisplay;
