import Store from './Store'; 

class CounterStore extends Store {
  constructor() {
    super(); 
    this.setState(0); 

    this.increment = this.increment.bind(this); 
    this.decrement = this.decrement.bind(this); 
  }

  increment() {
    var state = this.getState(); 
    state = state + 1; 
    this.setState(state); 
  }

  decrement() {
    var state = this.getState(); 
    state = state - 1; 
    this.setState(state); 
  }
}

const counterStore = new CounterStore();

export default counterStore;
