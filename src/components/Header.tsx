import { Link } from "react-router-dom"
import { ChevronsRight, House, Info } from "lucide-react"
// import { useState } from "react"

const Header = () => {
	// const [isExpanded, setIsExpanded] = useState(false)

	const toggleExpanded = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
		console.log(e.currentTarget.parentElement?.parentElement)
		const element = document.getElementsByClassName(
			"menu-items"
		)[0] as HTMLDivElement

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
						onClick={(e) => toggleExpanded(e)}
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
				</ul>
			</nav>
		</>
	)
}

export default Header
