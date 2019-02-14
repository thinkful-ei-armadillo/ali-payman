import React, { Component } from 'react';

export default class AddFolder extends Component {
  state = {
    folderName: "", valid: false, validationMessage: "Folder Name cannot be empty"
  };
  setFolderName = folderName => {
    this.setState({folderName}, () => this.validateFolderName(folderName));
};
validateFolderName = folderName => {
  if (folderName.length !== 0) {
    this.setState({valid: true})
  } else {
    this.setState({valid: false})
  }
  // validate duplicate folder names
}

  render() {
    const { valid, validationMessage } = this.state
    return (
      <React.Fragment>
        <h2>Create a Folder</h2>
        <form action="submit">
          <label htmlFor="folder-name">Name {!valid && (
          <p className="error">{validationMessage}</p>)}</label>
          <input onChange={e => this.setFolderName(e.target.value)} name="folder-name" value={this.state.folderName} type="text" />
          <button disabled={!this.state.valid} type="submit">Add Folder</button>
        </form>
      </React.Fragment>
    );
  }
}
