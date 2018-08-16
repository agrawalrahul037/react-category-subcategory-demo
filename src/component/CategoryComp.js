import React, { Component } from 'react';
import { myConfig } from '../model/model';

class CategoryComp extends Component {
    constructor(props) {
        super(props);
        this.catChange = this.catChange1.bind(this);
    }
    catChange1(event) {
        myConfig.selectedCat = event.target.value;
        var temp = this.props.completeResponse1.subCategories.filter(subObj => subObj.catId == myConfig.selectedCat);
        myConfig.selectedSubCat = temp[0].id;
        this.props.childData(myConfig.selectedCat,myConfig.selectedSubCat)
    }
    render() {
        return (
            <div>
                <select onChange={this.catChange}>
                    {this.props.completeResponse1.categories !== undefined && this.props.completeResponse1.categories.map((post,index) =>
                        <option key={'mykey' + index} value={post.id}>{post.name}</option>
                    )}
                </select>
            </div>
        )
    }
}
export default CategoryComp;
