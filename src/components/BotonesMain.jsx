import { useContext } from "react";
import { FullContext } from "../context/full";
import "../styles/botones.css";

export function BotonesMain() {
	const { setPagina, pagina, apiResponse, personajes } = useContext(FullContext);

	const handleSubmit = (e) => {
		e.preventDefault()
		setPagina(Number(e.target[0].value));
		location.href='#'
	};

	return (
		<>
			{apiResponse && personajes && (
				<section className="botonesPaginas">
					<div className="botonesPaginasContainer">
						<aside className="botones">
							{apiResponse && personajes && pagina > 1 && (
								<a onClick={() => setPagina(pagina - 1)} href="#">
									Pagina anterior
								</a>
							)}
							{apiResponse && personajes && (
								<a onClick={() => setPagina(pagina + 1)} href="#">
									Pagina siguiente
								</a>
							)}
						</aside>

						<aside className="formContainer">
							{apiResponse && personajes && (
								<form className="form" onSubmit={handleSubmit}>
									<div className="formInput">
										<label htmlFor="pagina">Ingrese la pagina:</label>
										<input type="number" id="pagina" placeholder="1 - 149" />
									</div>

									<div className="botonBuscarContainer">
										<button>Buscar</button>
									</div>
								</form>
							)}
						</aside>
					</div>
				</section>
			)}
		</>
	);
}
