import React from 'react';

import EssayForm from './EssayForm';
import FlavorForm from './FlavorForm';
import Reservation from './Reservation';
export default class Page extends React.Component {
  render() {
    return (
      <div className="page-container">
        <div className="row">
          <div className="col text-center">
            <h2>Page</h2>
          </div>
        </div>
        <div className="row">
          <div className="col text-center">
            <EssayForm />
          </div>
        </div>
        <FlavorForm />
        <Reservation />
      </div>
    );
  }
}
