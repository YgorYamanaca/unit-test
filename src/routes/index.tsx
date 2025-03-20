import { Route, Routes } from 'react-router'
import { Dashboard } from '../pages/Dashboard/Dashboard'
import { MainPage } from '../pages/MainPage/MainPage'

const AppPageRouter = () => {
	return (
		<Routes>
			<Route index element={<MainPage />} />
			<Route path="/dashboard" element={<Dashboard />} />
		</Routes>
	)
}

export default AppPageRouter
