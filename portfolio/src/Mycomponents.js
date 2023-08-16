import React, { Component } from 'react';
import axios from 'axios';

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      loading: true,
      error: null,
    };
  }

  componentDidMount() {
    axios.get('/api/data') // Replace with your actual API route URL
      .then(response => {
        this.setState({
          data: response.data,
          loading: false,
        });
      })
      .catch(error => {
        this.setState({
          error: 'Error fetching data.',
          loading: false,
        });
      });
  }

  render() {
    const { data, loading, error } = this.state;

    if (loading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>{error}</div>;
    }

    return (
      <div>
        <h2>Data from Server:</h2>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    );
  }
}

export default MyComponent;
