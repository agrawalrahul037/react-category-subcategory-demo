import React, { Component } from 'react';
import { myConfig } from '../model/model';

class SubCatComp extends Component {
    constructor(props) {
        super(props);
        this.subCatChange = this.subCatChange1.bind(this);
    }
    subCatChange1(event) {
        myConfig.selectedSubCat = event.target.value;
        //console.log(myConfig.selectedCat);
        this.props.subChildData(myConfig.selectedSubCat)
    }
    render() {
        return (
            <div>
                <select onChange={this.subCatChange}>
                    {this.props.completeResponse2.subCategories !== undefined && this.props.completeResponse2.subCategories.map((post,index) =>
                        (post.catId == this.props.selectedCatVal) ? <option  key={'mykey' + index} value={post.id}>{post.name}</option> : ""
                    )}
                </select>
            </div>
        )
    }
}
export default SubCatComp;
