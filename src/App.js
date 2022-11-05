import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Commodity from './components/Commodity';
import Form from './components/Form';
import Contact from './components/Contact';

function App() {
	return (
		<>
			<Navbar/>
			<Commodity/>
			<Form/>
			<Contact/>
			<Footer/>
		</>
   );
}

export default App;
