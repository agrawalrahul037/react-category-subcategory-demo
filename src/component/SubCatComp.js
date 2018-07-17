import React, { Component } from 'react';
import { myConfig } from '../model/model';

class SubCatComp extends Component {
    render() {
        return (
            <div>
                <select>
                    {this.props.completeResponse2.subCategories != undefined && this.props.completeResponse2.subCategories.map(post =>
                        (post.catId == myConfig.selectedCat) ? <option value={post.name}>{post.name}</option> : ""
                    )}
                </select>
            </div>
        )
    }
}
export default SubCatComp;
