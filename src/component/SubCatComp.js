import React, { Component } from 'react';

class SubCatComp extends Component {
    render() {
        return (
            <div>
                <select>
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                </select>
            </div>
        )
    }
}
export default SubCatComp;
