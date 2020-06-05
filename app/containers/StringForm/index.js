import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { addString } from '../StringDisplay/actionCreators';
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
    added: PropTypes.shape({
      id: PropTypes.number,
      body: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    }),
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
    const { added } = this.props;
    return (
      <MainContainer>
        <Section>
          <h1>Add a Name</h1>
          <form onSubmit={this.onSubmit}>
            <FormContainer>
              <label htmlFor="New String">
                <br />
                {added ? (
                  <div>{added.body} successfully added to the list</div>
                ) : (
                  <div>Please attempt to enter a string</div>
                )}
                <br />{' '}
              </label>
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

const mapStateToProps = state => ({
  added: state.strings.added,
  error: state.strings.error,
});

export const mapDispatchToProps = {
  addString,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StringForm);
