import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { getSelectorStrings } from './selectors';
import { FETCH_STRINGS } from './constants';

class StringDisplay extends React.Component {
  static propTypes = {
    fetchStrings: PropTypes.func.isRequired,
    strings: PropTypes.shape({
      list: PropTypes.array.isRequired,
    }),
  };

  componentDidMount() {
    this.props.fetchStrings();
  }

  render() {
    return (
      <div>
        Hello
        <div>
          These are the strings
          <ul>
            {this.props.strings.list.map(item => (
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
  fetchStrings: () => ({ type: FETCH_STRINGS }),
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StringDisplay);
