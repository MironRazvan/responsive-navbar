import { create } from "zustand"

type ThemeStore = {
	theme: string
	toggleTheme: () => void
}

const useThemeStore = create<ThemeStore>((set) => ({
	theme: localStorage.getItem("resp-nav-theme") || "light",
	toggleTheme: () => {
		set((state) => {
			const newTheme =
				localStorage.getItem("resp-nav-theme") === "light"
					? "dark"
					: "light"
			localStorage.setItem("resp-nav-theme", newTheme)

			return { theme: state.theme === "light" ? "dark" : "light" }
		})
	},
}))

export default useThemeStore
