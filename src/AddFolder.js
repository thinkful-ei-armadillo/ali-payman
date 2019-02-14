import React, { Component } from 'react';

export default class AddFolder extends Component {
  render() {
    return (
      <React.Fragment>
        <h2>Create a Folder</h2>
        <form action="submit">
          <label htmlFor="folder-name">Name</label>
          <input name="folder-name" type="text" />
          <button type="submit">Add Folder</button>
        </form>
      </React.Fragment>
    );
  }
}
