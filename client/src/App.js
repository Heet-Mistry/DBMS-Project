import React,{Fragment} from 'react';
import './App.css';

//componets
import InputCustomer from './components/InputCustomer';
import ListCustomer from './components/ListCustomer';

function App() {
  return (
     <Fragment>
       <div className="container">
          <InputCustomer />
          <ListCustomer />
       </div>
     </Fragment>
  );
}

export default App;
