import "./Switch.css";

export const Switch = ({ on = false, onToggle = () => {} }) => {
	const handleOn = (e) => {
		onToggle(on, e);
	};

	return (
		<>
			<input
				type="checkbox toggle-input"
				id="switch"
				className="checkbox"
				onClick={handleOn}
			/>
			<label
				htmlFor="switch"
				className={`toggle ${on ? "switch-on" : "switch-off"}`}
			></label>
		</>
	);
};
