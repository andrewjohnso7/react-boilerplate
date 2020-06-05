import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { getSelectorStrings } from './selectors';
import { fetchStrings } from './actionCreators';
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
      list: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
      error: PropTypes.string,
    }),
  };

  componentDidMount() {
    this.props.fetchStrings();
  }

  render() {
    const { error } = this.props.strings;
    if (error != null) {
      return (
        <MainContainer>
          <Title>There was an error, please try again</Title>
        </MainContainer>
      );
    }
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
  fetchStrings,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StringDisplay);
