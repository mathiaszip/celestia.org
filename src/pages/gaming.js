import React, { useState } from "react";
import ReactModal from "react-modal";
import Layout from "../components/layout";
import Button from "../components/buttons/button";

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
					<div className='container'>
						<section id='unleash-section' className='unleash-section'>
							<div className='d-flex justify-content-center'>
								<h2 className='pb-2'>
									Unleash full <span className='gradient-text'>expressivity onchain</span>
								</h2>
							</div>
						</section>
					</div>
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
