import React, { Component } from 'react';
import NotefulContext from './NotefulContext';
import { withRouter } from 'react-router-dom';

class AddNote extends Component {
  static contextType = NotefulContext;

  constructor(props) {
    super(props);
    this.contentInput = React.createRef();
  }

  state = {
    name: '',
    validName: false,
    folderId: 1,
    validFolder: false,
    validationMessages : 'Please type in a valid name'

  };

  

  setNoteName = value => {
    this.setState(
      {
        name: value
      },
      () => this.validateNoteName(value)
    );
  };

  validateNoteName = name => {
    if (name.length !== 0) {
      this.setState({ validName: true });
    } else {
      this.setState({ validName: false, validationMessages: 'Please type in a valid name' });
    }
    // validate duplicate folder names
  };

  setFolder = event => {
    const id = event.target.value;
    const { folders } = this.context;
    (folders.find((e) => e.id === id)) ? this.setState({ folderId: event.target.value, validFolder: true }) : this.setState({ folderId: 1, validFolder: false }) ;

  };

  generateFolderOptions = () => {
    return this.context.folders.map(folder => {
      return (
        <option key={folder.id} value={folder.id}>
          {folder.name ? folder.name : folder.id}
        </option>
      );
    });
  };

  render() {
    return (
      <React.Fragment>
        <h2>Create a Note</h2>
        <form
          onSubmit={e => {
            e.preventDefault();
            this.addNoteRequest();
          }}
          action="submit"
        >
          <label htmlFor="note-name">Name {!this.state.validName && <p className="error">{this.state.validationMessages}</p>}</label>
          <input
            onChange={e => this.setNoteName(e.target.value)}
            name="note-name"
            value={this.state.noteName}
            type="text"
          />
          <label htmlFor="note-content">Content</label>
          
          <textarea type="text" name="note-content" ref={this.contentInput} />
          <select value={this.state.folderId} onChange={this.setFolder}>
            <option key={1} value="1" disabled>
              Select A Folder
            </option>
            {this.generateFolderOptions()}
          </select>
          
          <button disabled={!this.state.valid} type="submit">
            Add Note
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default withRouter(AddNote);
