import { useEffect, useContext } from "react";
import { FullContext } from "../context/full";
import "../styles/modal.css";

export function Modal() {
	const { infoModal, setInfoModal, modal, setModal } = useContext(FullContext);

	const raiz = document.querySelector("body");
	useEffect(() => {
		if (modal) {
			raiz.style.overflow = "hidden";
		}
		if (modal === false) {
			raiz.style.overflow = "";
		}
	}, [modal]);

	return (
		<>
			{infoModal && (
				<section id="modalContainer">
					<i
						className="fa-solid fa-x"
						onClick={() => {
							setInfoModal(null);
							setModal(!modal);
						}}
					></i>
					<h1>{infoModal.name}</h1>
					<aside className="itemsModalContainer">
						<article className="imageContainer">
							<img src={infoModal.imageUrl} alt="" />
						</article>

						<article className="textsContainer">
							<div className="textChildsContainer">
								{infoModal.films.length > 0 && (
									<div>
										<h3>Films:</h3>
										<ul>
											{infoModal.films.slice(0, 3).map((film) => (
												<li key={film}>{film}</li>
											))}
										</ul>
									</div>
								)}

								{infoModal.parkAttractions.length > 0 && (
									<div>
										<h3>parkAttractions:</h3>
										<ul>
											{infoModal.parkAttractions
												.slice(0, 3)
												.map((parkAttractions) => (
													<li key={parkAttractions}>{parkAttractions}</li>
												))}
										</ul>
									</div>
								)}

								{infoModal.shortFilms.length > 0 && (
									<div>
										<h3>shortFilms:</h3>
										<ul>
											{infoModal.shortFilms.slice(0, 3).map((shortFilms) => (
												<li key={shortFilms}>{shortFilms}</li>
											))}
										</ul>
									</div>
								)}

								{infoModal.tvShows.length > 0 && (
									<div>
										<h3>tvShows:</h3>
										<ul>
											{infoModal.tvShows.slice(0, 3).map((tvShows) => (
												<li key={tvShows}>{tvShows}</li>
											))}
										</ul>
									</div>
								)}

								{infoModal.videoGames.length > 0 && (
									<div>
										<h3>videoGames:</h3>
										<ul>
											{infoModal.videoGames.slice(0, 3).map((videoGames) => (
												<li key={videoGames}>{videoGames}</li>
											))}
										</ul>
									</div>
								)}
							</div>
						</article>
					</aside>
				</section>
			)}
		</>
	);
}
