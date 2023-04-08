import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { FullProvider } from "./context/full";

ReactDOM.createRoot(document.getElementById("root")).render(
	<FullProvider>
		<App />
	</FullProvider>
);
