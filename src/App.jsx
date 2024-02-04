import './App.css'
import ContactForm from './components/ContactForm/ContactForm.jsx';
import ContactHeader from './components/ContactHeader/ContactHeader.jsx';
import NavBar from './components/NavBar/NavBar.jsx';
function App() {
  return (
    <div>
      <NavBar />
      <main>
        <ContactHeader />
        <ContactForm />
      </main>
    </div>
  );
}

export default App
