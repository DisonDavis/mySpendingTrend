import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import SpendingEntry from './pages/SpendingEntry';
import SpendingSummary from './pages/SpendingSummary';
import { useState } from 'react';
import { TransactionProvider } from './contexts/Transactions';
import Navbar from './components/navbar/Navbar';
import Settings from './components/settings/Settings';


function App() {

 

  return (
    
    <div className="App">
      {/* <h1 className='text-white bg-info p-3'>my <em><u><b>spending</b></u></em> trend</h1> */}
      <Navbar/>
      <Settings/>
      <TransactionProvider>
        <SpendingEntry></SpendingEntry>
       <SpendingSummary></SpendingSummary>
      </TransactionProvider>

    </div>
  );
}

export default App;
