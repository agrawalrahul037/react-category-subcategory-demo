import React, { Component } from 'react';
import { myConfig } from '../model/model';

class CategoryComp extends Component {
    constructor(props){
        super(props);
        this.subCatChange = this.subCatChange1.bind(this);
    }
    subCatChange1(event){
        myConfig.selectedCat = event.target.value;
        console.log(myConfig.selectedCat);
    }
    render() {
        return (
            <div>
                <select onChange={this.subCatChange}>
                    {this.props.completeResponse1.categories != undefined && this.props.completeResponse1.categories.map(post =>
                        <option value={post.id}>{post.name}</option>
                    )}
                </select>
            </div>
        )
    }
}
export default CategoryComp;
