import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {date:null};
  }

  onFormSubmit(e) {
    e.preventDefault();
    if(this.state.date > new Date().setHours(0,0,0,0)){
       console.log("Date in the future"); 
    }
    else if(this.state.date < new Date().setHours(0,0,0,0)){
       console.log("Date in the past"); 
    }
    else {
       console.log("Date is today"); 
    }
  }

  onDateChange(date) {
    date = new Date(date.split("-").join());
    this.setState({date});
  }

  renderAlert() {
    if (!this.state.date) {
      return (
        <div className="alert alert-danger col-sm-3">
          What is the date?
        </div>
      );
    }
  }

  render() {
    return (
      <div>

      <form onSubmit={this.onFormSubmit.bind(this)}>

        <fieldset className="form-group">
          <input type="date" name="bday" 
          className="input-sm col-xs-3"
          onChange={event => this.onDateChange(event.target.value)} />
          <input type="submit"  value="date" className="btn btn-primary btn-sm date" />
        </fieldset>

        {this.renderAlert()}
       
      </form>
      
      </div>
    );
  }
}

export default App;