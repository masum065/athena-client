import './App.scss';
import Footer from './Componnets/Footer/Footer';
import Achivment from './Componnets/Achivment/Achivment/Achivment';
import Header from './Componnets/Header/Header/Header';
import StayRunning from './Componnets/StayRunning/StayRunning';
import { Services } from './Componnets/Services/Services';
import { Price } from './Componnets/Price/Price';

function App() {
	return (
		<>
			<Header />
			<Services />
			<StayRunning />
			<Achivment />
			<Price />
			<Footer />
		</>
	);
}

export default App;
