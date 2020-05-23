import React from 'react';

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
      .then(body => console.log(body))
      .catch(error => console.log('We Broke it again: ', error));
  };

  render() {
    return (
      <div>
        <h1>Add String</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label htmlFor="body">Body: </label>
            <br />
            <textarea
              name="body"
              value={this.state.body}
              onChange={this.onChange}
            />
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default StringForm;
