import React from "react";
import ReactDOM from "react-dom";

 class App extends React.Component {
  render() {
    return (
      <div>
         Reactive Updates
         <input />
         <br/><br/>
         {(new Date()).toString()}
      </div>
    );
  }
}

setInterval(() => {
  ReactDOM.render(<App />, document.getElementById('react'))
}, 1000);
