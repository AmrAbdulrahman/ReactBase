import React from 'react';
import _ from 'lodash';
import router from '../../app.router';

export default class ContactsState extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className='main-wrapper login'>
        <div>Contacts</div>

        <a onClick={() => router.go('login')}> Back</a>
      </div>
    );
  }
}
