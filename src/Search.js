import React, {Component} from 'react';
import axios from 'axios';
import Cityy from './city';
import './city.css';


class Search extends Component {
    constructor(props){
        super(props)
        this.state ={
            zipCodes: [],
            input:"",
            city:"",
   
        }
    }

 
    handleInput = (e) =>{
        let temp = e.target.value.toUpperCase();
        this.setState({
            input: temp,
             
        })
        
    }
    handleSubmit = (event) =>{
        this.updateCity();
        event.preventDefault();
    }
    async updateCity(){
        console.log('ran');
        
        try{
            const response = await axios.get(`http://ctp-zip-api.herokuapp.com/city/${this.state.input}`);
            this.setState({
                zipCodes: response.data,
                city: this.state.input

            })
        }
        catch (error) {console.log(error);}
        

    }


    render(){
        return(
        <div>
            <h1 id = "title">US CITY ZIPCODE LOOKUP</h1>
            <form onSubmit = {this.handleSubmit} >
                <input type = "text" value = {this.state.input} onChange ={this.handleInput}/>
                <input type = "submit" value = "Submit"/>
            </form>
            
            {this.state.zipCodes.map((city, index) =>{
                return <Cityy key = {index} City = {this.state.city} zips = {city} State = {city.State}/>                     
            })}


        </div>

        ) 
            
    }
}
export default Search;
