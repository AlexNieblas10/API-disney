import { BotonesMain } from "./components/BotonesMain";
import { BuscarPersonaje } from "./components/BuscarPersonaje";
import { Characters } from "./components/Characters";
import { Modal } from "./components/Modal";

export function App() {
	return (
		<>
			<BuscarPersonaje />
			<Characters />
			<BotonesMain />
			<Modal />
		</>
	);
}
