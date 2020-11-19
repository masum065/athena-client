import './App.scss';
import Footer from './Componnets/Footer/Footer';
import Achivment from './Componnets/Achivment/Achivment/Achivment';
import Header from './Componnets/Header/Header/Header';
import StayRunning from './Componnets/StayRunning/StayRunning';

function App() {
	return (
		<>
			<Header />
			<StayRunning />
			<Achivment />
			<Footer />
		</>
	);
}

export default App;
