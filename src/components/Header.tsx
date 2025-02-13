import { Link } from "react-router-dom"
import { ChevronsRight, House, Info, Moon, Sun } from "lucide-react"

import useThemeStore from "../stores/themeStore"

import { useEffect } from "react"

const Header = () => {
	const { theme, toggleTheme } = useThemeStore()

	useEffect(() => {
		const root = document.documentElement
		root.setAttribute("data-theme", theme)
	}, [theme])

	const toggleExpanded = () => {
		const element = document.querySelector(".menu-items")
		console.log(element)

		if (element) {
			element.classList.toggle("expanded")
		}
	}

	return (
		<>
			<h1 className="page-title">Hello</h1>
			<nav className="menu-items">
				<ul className="menu-list">
					<li
						className="menu-button"
						onClick={() => toggleExpanded()}
					>
						<ChevronsRight />
					</li>
					<li className="menu-item">
						<Link to="/">
							<House />
							<p>Home</p>
						</Link>
					</li>
					<li className="menu-item">
						<Link to="about">
							<Info />
							<p>About</p>
						</Link>
					</li>
					<li className="theme-toggle" onClick={toggleTheme}>
						{theme === "light" ? <Moon /> : <Sun />}
					</li>
				</ul>
			</nav>
		</>
	)
}

export default Header
