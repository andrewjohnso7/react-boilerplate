import React from 'react';
import StringForm from '../StringForm';

class StringDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      strings: [],
    };
  }

  componentDidMount() {
    this.fetchAllStrings();
  }

  fetchAllStrings = () => {
    fetch(`api/getStrings`)
      .then(res => res.json())
      .then(strings => this.setState({ strings }))
      .catch(error => console.log('Something Broke ', error));
  };

  render() {
    return (
      <div>
        Hello
        <div>
          These are the strings
          <ul>
            {this.state.strings.map(item => (
              <li>{item}</li>
            ))}
          </ul>
          <StringForm />
        </div>
      </div>
    );
  }
}

export default StringDisplay;
