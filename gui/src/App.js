import React, { Component } from 'react';
import logo from './logo.svg';
import Button from 'antd/lib/button';
import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

class App extends Component {
  render() {
    return (
      <div className="App">
      <div>
        <Button type="primary">打开USB端口 01</Button>
        <Button type="primary">打开USB端口 02</Button>
        <Button type="primary">打开USB端口 03</Button>
        <Button type="primary">打开USB端口 04</Button>
      </div>

      <div>
        <Button type="primary">打开USB端口 05</Button>
        <Button type="primary">打开USB端口 06</Button>
        <Button type="primary">打开USB端口 07</Button>
        <Button type="primary">打开USB端口 08</Button>
      </div>


      <div>
        <Button type="primary">打开USB端口 09</Button>
        <Button type="primary">打开USB端口 10</Button>
        <Button type="primary">打开USB端口 11</Button>
        <Button type="primary">打开USB端口 12</Button>
      </div>

      <div>
        <Button type="primary">打开USB端口 13</Button>
        <Button type="primary">打开USB端口 14</Button>
        <Button type="primary">打开USB端口 15</Button>
        <Button type="primary">打开USB端口 16</Button>
      </div>


      </div>
    );
  }
}
export default App;
