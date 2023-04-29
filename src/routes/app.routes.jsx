import { Routes, Route } from 'react-router-dom'

import { Home } from '../pages/Home'
import { Details } from '../pages/Details'
import { Cart } from '../pages/Cart'
import { Favorites } from '../pages/Favorites'
import { Orders } from '../pages/Orders'
import { NewPlate } from '../pages/NewPlate'

export function AppRoutes() {
	return (
		<Routes>
			<Route
				path="/"
				element={<Home />}
			/>
			<Route
				path="/details/:id"
				element={<Details />}
			/>

			<Route
				path="/cart"
				element={<Cart />}
			/>
			<Route
				path="/favorites"
				element={<Favorites />}
			/>
			<Route
				path="/orders"
				element={<Orders />}
			/>

			<Route
				path="/new-plate"
				element={<NewPlate />}
			/>
		</Routes>
	)
}
