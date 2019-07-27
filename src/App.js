import React from 'react';

import 'react-tabs/style/react-tabs.css';
import './style.css';

import RequestContainer from './components/RequestContainer';

function App() {
  return (
    <div className="container">
      <h1 className="header">MTQniversity</h1>

		<RequestContainer />
	</div>
  );
}

export default App;
