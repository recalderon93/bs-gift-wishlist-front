import { Routes, Route } from 'react-router-dom';
import AdminEditItemScreen from './screens/ add-edit-item/admin-add-edit-item-screen';
import AdminGiftListScreen from './screens/admin-gift-list/admin-gift-list-screen';
import AdminLoginScreen from './screens/admin-login/admin-login-screen';
import CardScreen from './screens/card/card-screen';
import Landing from './screens/landing/landing';
import UserGiftList from './screens/user-gift-list/user-gift-list';

export default function AppRoutes() {

	return (
		<Routes>
			<Route path="/" element={<Landing />} />
			<Route path="/gift-wishlist" element={<UserGiftList />} />
			<Route path="/card" element={<CardScreen />} />
			<Route path="/admin/login" element={<AdminLoginScreen />} />
			<Route path="/admin/gift-wishlist" element={<AdminGiftListScreen />} />
			<Route path="/admin/add-item" element={<AdminEditItemScreen />} />
			<Route path="/admin/edit-item" element={<AdminEditItemScreen />} />
		</Routes>
	)
}