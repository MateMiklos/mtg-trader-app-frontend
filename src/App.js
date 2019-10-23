import React, {Fragment} from 'react';
import './App.css';
import NavBar from './components/NavBar';
import CardTable from './components/CardTable';

function App() {
  return (
    <Fragment>
        <NavBar />
        <CardTable />
    </Fragment>
  );
}

export default App;
