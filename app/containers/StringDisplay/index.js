import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { getSelectorStrings } from './selectors';
import { FETCH_STRINGS } from './constants';
import {
  Section,
  Title,
  List,
  MainContainer,
  StringNavigation,
} from './styled';

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
      <MainContainer>
        <Title>DMI Tech Screen</Title>
        <Section>
          These are the names
          <List>
            {this.props.strings.list.map(item => (
              <li key={item.id}>{item.body}</li>
            ))}
          </List>
          <StringNavigation to="/addString">Add another name</StringNavigation>
        </Section>
      </MainContainer>
    );
  }
}

const mapStateToProps = state => ({
  strings: getSelectorStrings(state),
  fontSize: true,
});

const mapDispatchToProps = {
  fetchStrings: () => ({ type: FETCH_STRINGS }),
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StringDisplay);
