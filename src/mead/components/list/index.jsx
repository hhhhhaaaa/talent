import React, { Component } from 'react';

export default class List extends Component {
  renderList(list) {
    return list.map(listItem => (
      <li className="list-group-item" key={listItem.id}>
        {listItem[this.type]}
      </li>
    ));
  }

  render() {
    return (
      <div>
        <h3>{this.type.replace(this.type.charAt(0), this.type.charAt(0).toUpperCase())}</h3>
        <ul className="list-group">{this.renderList(this.elements)}</ul>
      </div>
    );
  }
}
