import "./App.css";
function App() {
	return (
		<div className="App">
			<div className="container">
				<form className="p-2 m-4 w-50 mx-auto">
					<div className="mb-3">
						<label className="form-label">Firstname</label>
						<input type="text" className="form-control" />
					</div>
					<div className="mb-3">
						<label className="form-label">Lastname</label>
						<input type="text" className="form-control" />
					</div>
					<div className="mb-3">
						<label className="form-label">Email</label>
						<input type="email" className="form-control" />
					</div>
					<div className="mb-3">
						<label className="form-label">Password</label>
						<input type="password" className="form-control" />
					</div>
					<div className="mb-3">
						<label className="form-label">Confirm Password</label>
						<input type="password" className="form-control" />
					</div>
					<div className="mb-3">
						<label className="form-label">Phone</label>
						<input type="number" className="form-control" />
					</div>
					<div className="mb-3">
						<div className="form-check form-check-inline">
							<input
								className="form-check-input"
								type="radio"
								name="radio"
								id="radio1"
								value="1"
							/>
							<label className="form-check-label" htmlFor="radio1">
								Male
							</label>
						</div>
						<div className="form-check form-check-inline">
							<input
								className="form-check-input"
								type="radio"
								name="radio"
								id="radio2"
								value="2"
							/>
							<label className="form-check-label" htmlFor="radio2">
								Female
							</label>
						</div>
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

