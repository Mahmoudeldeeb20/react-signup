import { useState } from "react";
import "./App.css";
function App() {
	const [formData, setFormData] = useState({
		Firstname: { value: "", validationMessage: "" },
		Lastname: { value: "", validationMessage: "" },
		Email: { value: "", validationMessage: "" },
		Password: { value: "", validationMessage: "" },
		Phone: { value: "", validationMessage: "" },
	});
	const handleSubmit = (event) => {
		event.preventDefault();
		Array.prototype.forEach.call(event.target.elements, (element, i, array) => {
			if (element.tagName === "INPUT") {
				let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
				if (element.type === "text" && element.value.length < 5) {
					element.classList.add("is-invalid");
					setFormData((prevFormData) => ({ ...prevFormData, [element.name]: { isValid: false, validationMessage: `Invalid format, should be more 5 characters` } }));
				} else if (element.type === "email" && !emailRegex.test(element.value)) {
					element.classList.add("is-invalid");
					setFormData((prevFormData) => ({ ...prevFormData, [element.name]: { isValid: false, validationMessage: `Invalid Email address, you should type correct one` } }));
				} else if (element.type === "password" && element.value.length < 9) {
					element.classList.add("is-invalid");
					setFormData((prevFormData) => ({ ...prevFormData, [element.name]: { isValid: false, validationMessage: `Week Password, should be more 8 characters` } }));
				} else {
					element.classList.remove("is-invalid");
					element.classList.add("is-valid");
					setFormData((prevFormData) => ({ ...prevFormData, [element.name]: { value: element.value, isValid: true } }));
				}
				if (element.value.length === 0 && element.value.trim() === "") {
					element.classList.add("is-invalid");
					setFormData((prevFormData) => ({ ...prevFormData, [element.name]: { isValid: false, validationMessage: `${element.name} Required` } }));
				}
			}
		});
	};
	return (
		<div className="App">
			<div className="container">
				<form onSubmit={handleSubmit} className="p-2 m-4 w-50 mx-auto">
					<div className="mb-3">
						<label className="form-label">Firstname</label>
						<input type="text" className="form-control" name="Firstname" />
						{!formData.Firstname.isValid && <div className="invalid-feedback">{formData.Firstname.validationMessage}</div>}
					</div>
					<div className="mb-3">
						<label className="form-label">Lastname</label>
						<input type="text" className="form-control" name="Lastname" />
						{!formData.Lastname.isValid && <div className="invalid-feedback">{formData.Lastname.validationMessage}</div>}
					</div>
					<div className="mb-3">
						<label className="form-label">Email</label>
						<input type="email" className="form-control" name="Email" />
						{!formData.Email.isValid && <div className="invalid-feedback">{formData.Email.validationMessage}</div>}
					</div>
					<div className="mb-3">
						<label className="form-label">Password</label>
						<input type="password" className="form-control" name="Password" />
						{!formData.Password.isValid && <div className="invalid-feedback">{formData.Password.validationMessage}</div>}
					</div>
					<div className="mb-3">
						<label className="form-label">Phone</label>
						<input type="number" className="form-control" name="Phone" />
						{!formData.Phone.isValid && <div className="invalid-feedback">{formData.Phone.validationMessage}</div>}
					</div>
					<button type="submit" className="btn btn-primary">
						Submit
					</button>
				</form>
			</div>
		</div>
	);
}

export default App;

