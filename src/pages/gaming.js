import React, { useState } from "react";
import ReactModal from "react-modal";
import Layout from "../components/layout";
import Button from "../components/buttons/button";
import { StaticImage } from "gatsby-plugin-image";

import "../scss/main.scss";
import { FooterBoxes } from "../datas/home/content";

import SignUp from "../components/modals/signUp";
import { seoContent } from "../datas/home/seoContent";
import Seo from "../components/seo";

const IndexPage = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [modalType] = useState("");

	// const handleModalOpen = (event) => {
	// 	setModalType(event.target.id);
	// 	setIsModalOpen(true);
	// 	document.body.style.overflow = "hidden";
	// };

	const handleModalClose = (event) => {
		setIsModalOpen(false);
		document.body.style.overflow = "unset";
	};

	return (
		<Layout footerBoxes={FooterBoxes} className={"gaming-wrapper"}>
			<Seo title={seoContent.title} description={seoContent.description} ogTitle={seoContent.ogTitle} image={seoContent.image} />
			<div className='gaming-page'>
				<main>
					<section className={"hero-section"}>
						<div className={"container"}>
							<h1>Scale with the number of gamers</h1>
							<div className={"text"}>Celestia provides the expressivity to build fully onchain games</div>

							<div className='buttom'>
								<Button class={"purple"} type={"external"} text={"Build Modular"} url={"/"} />
								<Button class={"blurred"} type={"external"} text={"Contact"} url={"/"} />
							</div>
						</div>
					</section>
					<section id='unleash-section' className='unleash-section'>
						<div className='container'>
							<div className='title d-flex justify-content-center'>
								<h2 className='pb-2'>
									Unleash full <span className='gradient-text'>expressivity onchain</span>
								</h2>
							</div>
							<div className='d-flex flex-column flex-lg-row gap-5 gap-lg-3'>
								<div className='col-12 col-lg-6 col-1'>
									<div className='d-flex flex-column gap-3 align-items-lg-end'>
										<div className='card'>
											<div className='card-body'>
												<h3 className='card-title'>Monetize</h3>
												<p className='card-text'>
													Low transaction fees unlocks new opportunities to monetize and experiment with in-game economies.
												</p>
											</div>
										</div>
										<div className='card small'>
											<div className='card-body'>
												<h3 className='card-title'>Dynamic scaling</h3>
												<p className='card-text'>
													Celestia provides dedicated, dynamic throughput for developers, that scales with the number of
													users as the first blockchain with Data Availability Sampling.
												</p>
											</div>
										</div>
									</div>
								</div>
								<div className='col-12 col-lg-6 col-2'>
									<div className='d-flex flex-column gap-3'>
										<div className='card'>
											<div className='card-body'>
												<h3 className='card-title'>Minimized platform risk</h3>
												<p className='card-text'>
													Use Celestia's modular data layer with any blockchain framework and upgrade as new modular
													capabilities come online.
												</p>
											</div>
										</div>
										<div className='card small'>
											<div className='card-body'>
												<h3 className='card-title'>Expressivity</h3>
												<p className='card-text'>
													Express any type of game logic as a rollup on Celestia, even fully onchain gameplay.
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
					<section className={"games-section"}>
						<div className={"container"}>
							<h2 className='with-decor mb-5'>Games using the modular stack</h2>
							<div className='row flex-column-reverse flex-lg-row mb-5'>
								<div className='flex flex-column col-12 col-lg-4 d-flex justify-content-center'>
									<h3 className='title mb-4'>Argus</h3>
									<p className='text'>
										World Engine provides the foundation for game developers to build and customize their own open and
										interoperable game worlds.
									</p>
								</div>
								<div className='col-12 col-lg-8 mb-4 mb-lg-0'>
									<StaticImage className='image-right' src='../images/gaming/game-1.jpg' />
								</div>
							</div>
							<div className='row flex-column flex-lg-row'>
								<div className='col-12 col-lg-8 mb-4 mb-lg-0'>
									<StaticImage className='image-left' src='../images/gaming/game-2.jpg' />
								</div>
								<div className='flex flex-column col-12 col-lg-4 d-flex justify-content-center'>
									<h3 className='title mb-4'>Curio</h3>
									<p className='text'>
										Curio is the maker of Keystone - a rollup SDK for games focused on performance and composability. Keystone
										powers their upcoming social strategy game and many more to come in the modular ecosystem.
									</p>
								</div>
							</div>
						</div>
					</section>
					<section className={"unlock-section"}>
						<div className={"container"}>
							<div className='row flex-column flex-lg-row mb-5'>
								<div className='title-col flex flex-column col-12 col-lg-6 d-flex justify-content-center'>
									<h2 className='with-decor mb-4'>Unlock capabilities</h2>
									<p className='text'>
										Find the ideal modular stack that meets the scaling, flexibility, and sustainability requirements for your
										game.
									</p>
									<div className='button-wrapper mt-3'>
										<Button class={"simple"} type={"external"} text={"Level up"} url={"/"} />
									</div>
								</div>
								<div className='col-12 col-lg-6 mt-5 mt-lg-0'>
									<StaticImage src='../images/gaming/game-1.jpg' />
								</div>
							</div>
						</div>
					</section>
				</main>
				<ReactModal isOpen={isModalOpen}>
					<div className='inner'>
						<SignUp modalType={modalType} />
						<button className='close-button' onClick={handleModalClose}>
							<i className='icon-close' aria-label='close' />
						</button>
					</div>
				</ReactModal>
			</div>
		</Layout>
	);
};

export default IndexPage;
