import { createContext, useState } from "react";

export const FullContext = createContext();

export function FullProvider({ children }) {
	let [pagina, setPagina] = useState(1);
	const [personajes, setPersonajes] = useState(false);
	const [apiResponse, setApiResponse] = useState(null);
	const [personaje, setPersonaje] = useState(null);
	const [apiPersonaje, setApiPersonaje] = useState(null);
	const [infoModal, setInfoModal] = useState(null);
	const [modal, setModal] = useState(false);

	return (
		<FullContext.Provider
			value={{
				pagina,
				setPagina,
				personajes,
				setPersonajes,
				apiResponse,
				setApiResponse,
				personaje,
				setPersonaje,
				apiPersonaje,
				setApiPersonaje,
				infoModal,
				setInfoModal,
				modal,
				setModal,
			}}
		>
			{children}
		</FullContext.Provider>
	);
}
