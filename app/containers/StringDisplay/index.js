import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getSelectorStrings } from './selectors';
import { FETCH_STRINGS } from './constants';

const getStrings = () => ({ type: FETCH_STRINGS });

class StringDisplay extends React.Component {
  componentDidMount() {
    this.props.getStrings();
  }

  render() {
    return (
      <div>
        Hello
        <div>
          These are the strings
          <ul>
            {this.props.strings.strings.map(item => (
              <li key={item.id}>{item.body}</li>
            ))}
          </ul>
          <button type="button">
            <Link to="/addString">Add another string</Link>
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  strings: getSelectorStrings(state),
});

const mapDispatchToProps = {
  getStrings,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StringDisplay);
