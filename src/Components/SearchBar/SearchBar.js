import React, { Component } from 'react'
import './SearchBar.css'

export class SearchBar extends Component {
    constructor(props){
        super(props)
        this.state = {
            term:''
        }
        this.search = this.search.bind(this)
        this.handleTermChange = this.handleTermChange.bind(this)
      
        
    }

    search(e){
        e.preventDefault()
        this.props.onSearch(this.state.term)
    }

    handleTermChange(e){
            this.setState({
                term : e.target.value
            })  
    }

   
  


    render() {
        return (
            <div className="SearchBar">
                <form onSubmit = {this.search}>
                <input placeholder="Enter A Song, Album, or Artist" onChange = {this.handleTermChange}  required/>
                <button className="SearchButton">SEARCH</button>
                </form>
             </div>
        )
    }
}

export default SearchBar
