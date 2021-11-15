import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/layout/Header'
import Contacts from './components/contacts/Contacts';

import {Provider} from './context'
function App() {
  return (
    <Provider>
      <div className=''>
      <Header branding='Contact Manager'/>
      <div className='container mt-3'>
      <Contacts />
      </div>
    </div>
    </Provider>
  );
}

export default App;
