function RadioOption({ name, label, value, checked, handleOnChange }) {
	return (
		<div className="form-check">
			<input
				className="form-check-input"
				type="radio"
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

export default RadioOption;
