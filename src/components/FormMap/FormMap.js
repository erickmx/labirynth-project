import React, { Component } from "react";

class FormMap extends Component {

  render() {
    return (
      <div>
        <input type="file" name="file" onChange={event => {
          const file = event.target.files && event.target.files[0];
          this.setState({
            selectedFile: file, loaded: 0,
          })
        }} />
        <button onClick={() => {
          
        }}>Confirmar</button>
      </div>
    );
  }
}

export {FormMap};