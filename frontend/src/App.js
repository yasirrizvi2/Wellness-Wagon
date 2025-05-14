import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { ToastContainer } from "react-toastify";

const App = () => {
	return (
		<>
			<ToastContainer />
			<Routes>
				<Route path="/" element={<LoginPage />} />
				<Route path="/register" element={<RegisterPage />} />
			</Routes>
		</>
	);
};

export default App;
