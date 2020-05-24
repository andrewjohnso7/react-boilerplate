import React from 'react';
import { Link } from 'react-router-dom';

class StringForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      body: '',
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const post = {
      body: this.state.body,
    };

    fetch(`/api/addString`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(post),
    })
      // This won't be necessary for Redux
      .then(res => res.json())
      .then(
        this.setState({
          body: '',
        }),
      )
      .catch(error => console.log('We Broke it again: ', error));
  };

  render() {
    return (
      <div>
        <h1>Add String</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label htmlFor="New String">New String: </label>
            <br />
            <textarea
              name="body"
              value={this.state.body}
              onChange={this.onChange}
            />
          </div>
          <br />
          <button type="submit">Add string</button>
        </form>
        <br />
        <button type="button">
          <Link to="/">See List of Strings</Link>
        </button>
      </div>
    );
  }
}

export default StringForm;
