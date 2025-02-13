import Header from "./components/Header"
import Footer from "./components/Footer"
import Main from "./layouts/Main"
import Home from "./pages/Home"
import About from "./pages/About"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import "./styles/App.css"

function App() {
	return (
		<Router>
			<div className="app-wrapper">
				<Header />
				<Routes>
					<Route path="/" element={<Main />}>
						<Route index element={<Home />} />
						<Route path="about" element={<About />} />
					</Route>
				</Routes>
				<Footer />
			</div>
		</Router>
	)
}

export default App
