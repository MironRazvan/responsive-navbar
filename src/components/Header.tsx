import { NavLink } from "react-router-dom"
import { ChevronsRight, House, Info, Moon, Sun } from "lucide-react"

import useThemeStore from "../stores/themeStore"

import { useEffect } from "react"

import clsx from "clsx"

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

	const getClassName = (initial: string) => {
		return clsx(
			initial,
			({
				isActive,
				isPending,
			}: {
				isActive: boolean
				isPending: boolean
			}) => (isPending ? "pending" : isActive ? "active" : "")
		)
	}

	return (
		<>
			<h1 className="page-title">Hello</h1>
			<nav className="menu-items">
				<div className="menu-list">
					<div className="menu-button" onClick={toggleExpanded}>
						<ChevronsRight />
					</div>
					<NavLink to={"/"} className={getClassName("menu-item")}>
						<House />
						<p>Home</p>
					</NavLink>
					<NavLink to={"about"} className={getClassName("menu-item")}>
						<Info />
						<p>About</p>
					</NavLink>
					<div className="theme-toggle" onClick={toggleTheme}>
						{theme === "light" ? <Moon /> : <Sun />}
					</div>
				</div>
			</nav>
		</>
	)
}

export default Header
