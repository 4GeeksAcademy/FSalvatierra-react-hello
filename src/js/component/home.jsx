import React from "react";

import Navbar from "./navBar";
import Jumbotron from "./jumbotron";
import Cards from "./cards";
import Footer from "./footer";



//create your first component
const Home = () => {
	return (
		<><div>
			<Navbar />
			<Jumbotron />
			<Cards />

		</div><footer>
				<Footer />
			</footer>

		</>
	);
};

export default Home;
