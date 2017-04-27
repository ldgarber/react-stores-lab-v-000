import React from 'react';
import actions from '../actions'; 
import counterStore from '../stores/counterStore'; 

class App extends React.Component {
  constructor (props) {
    super(props);
    
    this.state = {
      counter: counterStore.getState(),  
    }
    this.handleIncrement = this.handleIncrement.bind(this); 
    this.handleDecrement = this.handleDecrement.bind(this); 
  }

  handleIncrement(event) {
    event.preventDefault(); 
    actions.increment(this); 
  }

  handleDecrement(event) {
    event.preventDefault(); 
    actions.decrement(this); 
  }

  componentDidMount () {
    this.removeListener = counterStore.addListener(counter => {
      this.setState({ counter }); 
    });   
  }

  componentWillUnmount () {
    this.removeListener(); 
  }

  render () {
    return (
      <div className='app'>
        <h1 className='counter'>{this.state.counter}</h1>
        <div className='actions'>
          <button className='decrement' onClick={this.handleDecrement}>
            -
          </button>
          <button className='increment' onClick={this.handleIncrement}>
            +
          </button>
        </div>
      </div>
    );
  }
}

export default App;
