import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { UPDATING_STRINGS } from '../StringDisplay/constants';

class StringForm extends React.Component {
  static propTypes = {
    addString: PropTypes.func.isRequired,
  };

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

    this.props.addString(post);

    this.setState({ body: '' });
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

const mapDispatchToProps = {
  addString: payload => ({
    type: UPDATING_STRINGS,
    payload,
  }),
};

export default connect(
  null,
  mapDispatchToProps,
)(StringForm);
