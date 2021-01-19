import React ,{Component} from 'react';

export default class Comment extends Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}