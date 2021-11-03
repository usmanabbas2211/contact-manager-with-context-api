import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import Contact from './components/Contact';
function App() {
  return (
    <div className=''>
      <Header branding='Contact Manager'/>
      <div className='container mt-3'>
      <Contact name='Hamza' email='hamza@gmail.com' phone='03009795655'/>
      <Contact name='Arslan' email='arslan@gmail.com' phone='03458754896'/>
      </div>
    </div>
  );
}

export default App;
