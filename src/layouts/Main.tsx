import { Outlet } from "react-router-dom"

const Main = () => {
	return (
		<main className="content-wrapper">
			<Outlet />
		</main>
	)
}

export default Main
