import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header'; 
// make sure to capitalize all components
function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
}
// the jsx MUST be wrapped in something, so it can return one element, returning only one thing is the requirement of jsx
export default App;
// this is an example of a functional component
// non of this is html, it is jsx, which is an extension, its short for javascript xml
// js xml is NOT js
// babel will take all this jsx and compile it down into html, css, and vanilla js. 
// there is no real organization of folders with react, thats why its more so like a library