import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { UPDATING_STRINGS } from '../StringDisplay/constants';
import {
  MainContainer,
  Section,
  StringNavigation,
  SubmitString,
  FormContainer,
  TextArea,
} from '../StringDisplay/styled';

export class StringForm extends React.Component {
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
    if (
      post.body &&
      post.body !== 'Please enter a string' &&
      post.body.length > 0
    ) {
      this.props.addString(post);
      this.setState({ body: '' });
    } else {
      this.setState({ body: 'Please enter a string' });
    }
  };

  render() {
    return (
      <MainContainer>
        <Section>
          <h1>Add a Name</h1>
          <form onSubmit={this.onSubmit}>
            <FormContainer>
              <label htmlFor="New String">Enter name here: </label>
              <br />
              <TextArea
                placeholder={this.state.body || "What's your name?"}
                name="body"
                value={this.state.body}
                onChange={this.onChange}
              />
              <br />
              <SubmitString type="submit">Add name</SubmitString>
            </FormContainer>
          </form>
          <br />
          <StringNavigation to="/">See list of names</StringNavigation>
        </Section>
      </MainContainer>
    );
  }
}

export const mapDispatchToProps = {
  addString: payload => ({
    type: UPDATING_STRINGS,
    payload,
  }),
};

export default connect(
  null,
  mapDispatchToProps,
)(StringForm);
