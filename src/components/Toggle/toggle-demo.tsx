import { Toggle } from "@/components/Toggle";

const ToggleDemo = () => {
	return (
		<div style={{ display: "flex", flexDirection: "column" }}>
			<Toggle onToggle={(on) => console.log(on)}>
				<Toggle.On>On</Toggle.On>
				<Toggle.Off>Off</Toggle.Off>
				<Toggle.Button />
			</Toggle>
		</div>
	);
};

export { ToggleDemo };
