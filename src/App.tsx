import React from 'react';
import './App.css';
import TableComponent from './TableComponent/TableComponent';
import i18n from './i18n';

const App = () => {
  return (
    <div className='App-title'>
      <h1>{i18n.t('financialInstrumentsTable')}</h1>
      <TableComponent />
    </div>
  );
};

export default App;
