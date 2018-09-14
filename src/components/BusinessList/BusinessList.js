import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';

class BusinessList extends React.Component {
  render() {
    return (
      <div className="BusinessList">
        {this.props.businesses.map(bus => <Business key={bus.id} business={bus}/>)}
      </div>
    );
  }
}

export default BusinessList;
