import { Bienvenida } from "./components/Bienvenida";
import { BotonesMain } from "./components/BotonesMain";
import { BuscarPersonaje } from "./components/BuscarPersonaje";
import { Characters } from "./components/Characters";
import { Modal } from "./components/Modal";

export function App() {
	return (
		<>
			<Bienvenida/>
			<BuscarPersonaje />
			<Characters />
			<BotonesMain />
			<Modal />
		</>
	);
}
