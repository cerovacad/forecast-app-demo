import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/actions';

class Search extends Component {
  constructor(props){
    super(props);
  
    this.state = { 
      term: ''
    }

  }

  handleInputChange = (e) => {
    const inputValue = e.target.value
    this.setState({
      term: inputValue
    })
  }

  handleClick = (e) => {
    e.preventDefault()
    this.props.fetchWeather(this.state.term);
    this.setState({
      term: ''
    })
  }

  render() {
    return (
      <form className='input-group'>

        <input type='text'
               className='form-control' 
               placeholder='Search for city / US only' 
               value={this.state.term}
               onChange={this.handleInputChange}
               autoFocus
        />

        <span className='input-group-btn'>
          <button type="submit" 
                  className='btn btn-primary' 
                  onClick={this.handleClick}
          >Search</button>
        </span>
        
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(Search);