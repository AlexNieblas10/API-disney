import { useEffect, useContext } from "react";
import { FullContext } from "../context/full";
import "../styles/busqueda.css";

export function BuscarPersonaje() {
	const {
		personaje,
		setPersonaje,
		setApiPersonaje,
		setPersonajes,
		setPagina,
		apiPersonaje,
		setInfoModal,
		setModal,
		modal
	} = useContext(FullContext);

	let APICharacter = `https://api.disneyapi.dev/character?name=${personaje}`;

	const submitBusqueda = (e) => {
		e.preventDefault();
		setPersonaje(e.target[0].value);
		setPersonajes(false);		
		setPagina(1);
		e.target[0].value = "";
	};

	useEffect(() => {
		fetch(APICharacter)
			.then((response) => response.json())
			.then((data) => setApiPersonaje(data));
	}, [personaje]);

	return (
		<>
			<section className="buscarPersonajeMain">
				<h1>Bienvenido a Disney character</h1>
				<form action="" onSubmit={submitBusqueda}>
					<label htmlFor="buscarPersonaje">
						Aqui puedes buscar a tu personaje:
					</label>
					<input type="text" id="buscarPersonaje" placeholder="Mickey Mouse" />

					<button>Buscar</button>
				</form>
			</section>

			{apiPersonaje?.data.length > 0 && (
				<section className="mainContainerBusqueda">
					{apiPersonaje.data.map((busqueda) => (
						<article key={busqueda._id} className="busqueda">
							<h2>{busqueda.name}</h2>
							<div className="imageContainer">
								<img
									src={busqueda.imageUrl}
									alt="No se puede encontrar foto de este personaje"
								/>
							</div>

							<button className="verMas" onClick={() => {
								setInfoModal(busqueda)
								setModal(!modal)
							}}>Ver mas</button>
						</article> 
					))}
				</section>
			)}
		</>
	);
}
