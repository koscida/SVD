function CheckOption({ name, label, value, checked, handleOnChange }) {
	return (
		<div className="form-check">
			<input
				className="form-check-input"
				type="checkbox"
				name={name}
				id={value}
				value={value}
				checked={checked}
				onChange={handleOnChange}
			/>
			<label className="form-check-label" htmlFor={value}>
				{label}
			</label>
		</div>
	);
}

export default CheckOption;
