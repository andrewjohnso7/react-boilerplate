import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const getStrings = () => ({ type: 'FETCH_STRINGS' });

class StringDisplay extends React.Component {
  componentDidMount() {
    this.props.getStrings();
    console.log('Component Mounted');
  }

  render() {
    console.log('the props', this.props);
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

const mapStateToProps = (state, ownProps) => {
  const { strings } = state;
  return { strings };
};

const mapDispatchToProps = {
  getStrings,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StringDisplay);
