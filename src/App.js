import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: "",
      list: []
    }
  }

  addItem(todoValue) {
    if(todoValue !== ""){
      const newItem = {
        id: Date.now(),
        value: todoValue,
        isDone: false
      }

      const list = [...this.state.list];
      list.push(newItem);

      this.setState({
        list,
        newItem: ""
      });
    }
  }

  deleteItem(id) {
    const list = [...this.state.list];
    const updatedList = list.filter(item => item.id !== id);

    this.setState({
      list: updatedList,
      newItem: ""
    })
  }

  updateInput(input){
    this.setState({
      newItem: input
    })
  }

  render() {
    return(
      <div className="App">
        <header className="App-header">TODO APPLICATION </header>
        <section className="add-item">
          <h3>Add Todos here</h3>
          <input className="input-text" type="text" placeholder="Type here" 
            required
            value = {this.state.newItem}
            onChange = {e => this.updateInput(e.target.value)}
          />
          <button
            className="add-btn"
            onClick = {() => this.addItem(this.state.newItem)}
            disabled = {!this.state.newItem.length}
          >
            ADD TODO
          </button>
        </section>
        <section className="todos">
          <ul>
            {
              this.state.list.map(item => {
                return(
                  <li key = {item.id}>
                    <input 
                    type="checkbox" 
                    name="isDone" 
                    checked={this.isDone}
                    onChange={()=>{}}
                    />
                    {item.value}
                    <button onClick={() => this.deleteItem(item.id)}>Delete</button>
                  </li>
                );
              })
            }
          </ul>
        </section>
      </div>
    );
  }
}

export default App;



// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
