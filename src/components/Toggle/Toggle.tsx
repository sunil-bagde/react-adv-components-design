import {
	useState,
	useCallback,
	createContext,
	useContext,
	useMemo,
} from "react";

import { Switch } from "./Switch";

const ToggleContext = createContext();

const ToggleProvider = ToggleContext.Provider;

const useToogle = () => {
	const context = useContext(ToggleContext);
	return context;
};

export const Toggle = ({ children, onToggle }) => {
	const [on, setOn] = useState(false);

	const toggle = useCallback(() => {
		setOn((prev) => {
			let r = !prev;
			if (onToggle) onToggle(r);
			return r;
		});
	}, []);

	const value = useMemo(() => ({ on, toggle }), [on]);

	return (
		<ToggleContext.Provider value={value}>
			{children}
		</ToggleContext.Provider>
	);
};
const Button = ({ children }) => {
	const { on, toggle } = useToogle();
	return <Switch on={on} onToggle={toggle} />;
};
const On = ({ children }) => {
	const { on, toggle } = useToogle();

	return on ? children : "";
};
const Off = ({ children }) => {
	const { on, toggle } = useToogle();

	return on ? "" : children;
};

Toggle.On = On;
Toggle.Off = Off;
Toggle.Button = Button;
