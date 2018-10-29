import React from 'react';

class ToDoForm extends React.Component {
  textInput = React.createRef();
  textInput2 = React.createRef();

  handleSubmit = event => {
    event.preventDefault();
    const text = this.textInput.current.value;
    this.props.addToDo(text);
    event.currentTarget.reset();
  }

  render() {
    return (
      <form className="input-group my-3" onSubmit={this.handleSubmit}>
        <input
          name="one"
          className="form-control"
          type="text"
          placeholder="Add a new bucket list item ..."
          ref={this.textInput}
        />
        <div className="input-group-append">
          <button className="btn btn-outline-secondary" type="submit">
            <i className="fa fa-plus" aria-hidden="true" />&nbsp;Add item
          </button>
        </div>
      </form>
      )
  }
}

export default ToDoForm
