import React, {Component} from 'react';
import './city.css';


class city extends Component{


    render(){

        
        return(
            <div>
                
                <ul>
                    <h4 id ="header" key = {this.props.index}>City: {this.props.City}  </h4>
                    <li>Zip: {this.props.zips}</li>
                    <br></br>
                </ul>
            </div>
        )

    }
}
export default city;
