// pages/RegisterPage.jsx
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axiosInstance from "../utils/axiosinstance";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		password: "",
		confirmPassword: "",
		role: "Participant",
	});

	const navigate = useNavigate();

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (formData.password !== formData.confirmPassword) {
			toast.error("Passwords do not match");
			return;
		}

		const userData = {
			name: formData.name,
			email: formData.email,
			phone: formData.phone,
			password: formData.password,
			roles: [formData.role],
		};

		try {
			const response = await axiosInstance.post(
				"/api/register",
				userData
			);
			toast.success(response.data.message || "Registration successful!");
			setFormData({
				name: "",
				email: "",
				phone: "",
				password: "",
				confirmPassword: "",
				role: "Participant",
			});

			// Navigate to login after short delay
			navigate("/");
		} catch (error) {
			const errorMessage =
				error.response?.data?.message ||
				"Registration failed. Please try again.";
			toast.error(errorMessage);
		}
	};

	return (
		<div style={styles.container}>
			<h2>Register for Wellness Wagon</h2>
			<form onSubmit={handleSubmit} style={styles.form}>
				<input
					name="name"
					type="text"
					placeholder="Name"
					value={formData.name}
					onChange={handleChange}
					required
					style={styles.input}
				/>
				<input
					name="email"
					type="email"
					placeholder="Email"
					value={formData.email}
					onChange={handleChange}
					required
					style={styles.input}
				/>
				<input
					name="phone"
					type="text"
					placeholder="Phone"
					value={formData.phone}
					onChange={handleChange}
					style={styles.input}
				/>
				<input
					name="password"
					type="password"
					placeholder="Password"
					value={formData.password}
					onChange={handleChange}
					required
					style={styles.input}
				/>
				<input
					name="confirmPassword"
					type="password"
					placeholder="Confirm Password"
					value={formData.confirmPassword}
					onChange={handleChange}
					required
					style={styles.input}
				/>
				<select
					name="role"
					value={formData.role}
					onChange={handleChange}
					required
					style={styles.input}
				>
					<option value="Participant">Participant</option>
					<option value="Admin">Admin</option>
				</select>
				<button type="submit" style={styles.button}>
					Register
				</button>
			</form>
		</div>
	);
};

const styles = {
	container: {
		maxWidth: "400px",
		margin: "2rem auto",
		padding: "2rem",
		background: "#f0fdf4",
		borderRadius: "10px",
		boxShadow: "0 0 10px rgba(0,0,0,0.1)",
		fontFamily: "Arial, sans-serif",
	},
	form: {
		display: "flex",
		flexDirection: "column",
		gap: "1rem",
	},
	input: {
		padding: "10px",
		fontSize: "16px",
		border: "1px solid #ccc",
		borderRadius: "4px",
	},
	button: {
		padding: "10px",
		fontSize: "16px",
		backgroundColor: "#38a169",
		color: "white",
		border: "none",
		borderRadius: "5px",
		cursor: "pointer",
	},
};

export default RegisterPage;
