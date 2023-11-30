import React, { useState } from "react";
import Layout from "../components/layout";
import { FooterBoxes2 } from "../datas/what-is-celestia/content";
import { tableOfContent } from "../datas/what-is-celestia/toc";
import { StaticImage } from "gatsby-plugin-image";
import { AnchorLink } from "gatsby-plugin-anchor-links";

import { seoContent } from "../datas/what-is-celestia/seoContent";
import SEO from "../components/seo";

import celestia_what_are_rollups from "../images/what-is-celestia/celestia-what-are-rollups.png";
import celestia_data_availability from "../images/what-is-celestia/celestia-data-availability.png";
import celestia_what_is_modular from "../images/what-is-celestia/celestia-what-is-modular.png";
import celestia_modularizm from "../images/what-is-celestia/celestia-modularizm.png";
import celestia_connections from "../images/what-is-celestia/celestia-connections.png";

const WhatIsCelestia = () => {
	const [showTocCategories, setShowTocCategories] = useState(false);
	const [selectedItem, setSelectedItem] = useState(0);
	const handleItemClick = (index) => {
		setSelectedItem(index);
	};

	return (
		<Layout footerBoxes2={FooterBoxes2}>
			<SEO title={seoContent.title} description={seoContent.description} ogTitle={seoContent.ogTitle} image={seoContent.image} />
			<div className={"what-is-celestia"}>
				<main>
					<div className={"container"}>
						<h1 className={"mb-5"}>What is Celestia?</h1>

						<section className={"card-section"}>
							<div className={"row justify-content-between"}>
								<div className={"order-2 order-lg-1 text-box col-12 col-lg-6 col-xl-6 col-xxl-7"}>
									<p>
										A complete beginner's guide to how Celestia works, its key benefits, and how anyone in the world will be able
										to create their own blockchain in minutes.
									</p>
									<p>Let’s walk through the basics, step-by-step.</p>
								</div>
								<div className={"image-box--cover order-1 order-lg-2 col-12 col-lg-6 col-xl-6 col-xxl-5"}></div>
							</div>
						</section>

						<div className={"row sticky-row"}>
							<div className={"sticky-container col-lg-3"}>
								<div className={"toc-2"}>
									<div
										className={`mobile-toc ${showTocCategories && "show"}`}
										onClick={() => setShowTocCategories(!showTocCategories)}
									>
										Jump to...
										<div className='dropdown-button'>
											<svg id={"mobile-category"} fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 11 11'>
												<path d='m1 4 4.5 4L10 4' stroke='#000' strokeWidth='1.5' strokeLinecap='round' />
											</svg>
										</div>
									</div>
									<div className={"toc-inner"}>
										<div className={"toc-title"}>
											Table of Contents
										</div>
										<div className={`category-menu ${showTocCategories && "show"}`}>
											<div className={"toc-item"}>
												{tableOfContent.map((item, index) => {
													return (
														<div
															key={index}
															className={selectedItem === index ? "selected" : ""}
															onClick={() => handleItemClick(index)}
														>
															<AnchorLink to={`#${item.id.replace(/\s+/g, "-").toLowerCase()}`}>
																{item.value}
															</AnchorLink>
														</div>
													);
												})}
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className='col-lg-9 ps-lg-4 p-xl-5'>
								<section className={"what-is-a-modular-blockchain"} id={`${tableOfContent[0].id.replace(/\s+/g, "-").toLowerCase()}`}>
									<h2 className='title'>And what is a modular blockchain?</h2>
									<div className={"image-box--different"}>
										<div className='image-wrapper'>
											<img className='img' style={{ width: `100%` }} src={celestia_what_is_modular} alt={""} />
										</div>
									</div>
									<p>
										Modular blockchains are a new paradigm in blockchain design. Instead of one blockchain doing everything,
										modular blockchains specialize and optimize to perform a given function. This specialization provides
										breakthroughs in scalability, flexibility, and interoperability, enabling developers to build blockchain
										applications for mass adoption.
									</p>
								</section>

								<section className={"what-is-data-availability"} id={`${tableOfContent[1].id.replace(/\s+/g, "-").toLowerCase()}`}>
									<div className={"row justify-content-between align-items-center"}>
										<div className={"col-12 col-lg-6"}>
											<h2 className='title'>What is data availability and why does it matter?</h2>
											<p>
												Data availability answers the question, has the data for this blockchain been published? It is
												critical to the security of any blockchain because it ensures that anyone can inspect the ledger of
												transactions and verify it.
											</p>
											<p>Users of a monolithic blockchain download all the data to check that it is available.</p>
											<p>
												As blocks get bigger, it becomes impractical for normal users to download all the data meaning that
												they can’t verify the chain. Modular chains solve this problem by making it possible for users to
												verify very large blocks using a technology called data availability sampling.
											</p>
										</div>
										<div className={"image-box--analogy col-12 col-lg-6"}>
											<div className='image-wrapper'>
												<img className='img' style={{ width: `100%` }} src={celestia_data_availability} alt={""} />
											</div>
										</div>
									</div>
								</section>

								<section className={"what-are-rollups"} id={`${tableOfContent[2].id.replace(/\s+/g, "-").toLowerCase()}`}>
									<div className={"row justify-content-between align-items-center"}>
										<div className={"order-2 order-lg-1 image-box--different col-12 col-lg-6"}>
											<div className='image-wrapper'>
												<img className='img' style={{ width: `100%` }} src={celestia_what_are_rollups} alt={""} />
											</div>
										</div>
										<div className={"order-1 order-lg-2 col-12 col-lg-6"}>
											<h2 className='title'>What are rollups and how do they work with Celestia?</h2>
											<p>
												Rollups are a pretty new type of blockchain. What makes them different is that they offload some of
												their work to a layer 1 like Celestia. The simple version is that rollups publish their transaction
												data to Celestia, which gets ordered and made available for rollup users to download. As a bonus,
												rollups receive some of Celestia’s security.
											</p>
											<p>
												But rollups on Celestia aren’t quite the same as others. They are convenient to launch like layer 2s
												with the added sovereignty that layer 1s enjoy. We like to call these blockchains sovereign rollups.
											</p>
										</div>
									</div>
								</section>

								<section className={"whats-it-like-to-build-on-Celestia"} id={`${tableOfContent[3].id.replace(/\s+/g, "-").toLowerCase()}`}>
									<div className={"row mb-3 mb-md-5 justify-content-center"}>
										<h2 className='title'>What’s it like to build on Celestia?</h2>
									</div>
									<div className='row'>
										<div className='col-z-index order-2 order-md-1 col-sm-12 col-md-5 col-lg-6 col-xl-5'>
											<div className={"row align-items-center gy-3"}>
												<div className={"col-12"}>
													<div className={"why-use-card"}>
														<h3 className={"why-use-title"}>Start fast</h3>
														<p className={"why-use-text"}>
															Deploy your own blockchain in minutes, as easy as a smart contract.
														</p>
													</div>
												</div>
												<div className={"col-12"}>
													<div className={"why-use-card"}>
														<h3 className={"why-use-title"}>Use any VM</h3>
														<p className={"why-use-text"}>Unlock unique application features and use-cases.</p>
													</div>
												</div>
												<div className={"col-12"}>
													<div className={"why-use-card"}>
														<h3 className={"why-use-title"}>Access dynamic throughput</h3>
														<p className={"why-use-text"}>Support more users as your application grows.</p>
													</div>
												</div>
											</div>
										</div>
										<div className={"image-box--why order-1 order-md-2 col-sm-12 col-md-7 col-lg-6 col-xl-7"}>
											<StaticImage
												className={"d-md-none d-block"}
												quality={100}
												placeholder={"none"}
												src='../images/what-is-celestia/celestia-infographics-paths-mobile.png'
											/>
											<StaticImage
												className={"d-none d-md-block"}
												quality={100}
												placeholder={"none"}
												src='../images/what-is-celestia/celestia-infographics-paths.png'
											/>
										</div>
									</div>
									<div className='link-wrapper'>
										<a className='link' href='https://celestia.org/developer-portal/' target='_blank'>
											Find out what you can build
											<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none'>
												<path
													stroke='#7B2BF9'
													stroke-linecap='square'
													stroke-width='1.5'
													d='M3.61218 12.0721L11.0761 4.60823'
												/>
												<path
													stroke='#7B2BF9'
													stroke-linecap='square'
													stroke-linejoin='bevel'
													stroke-width='1.5'
													d='M11.5254 11.0752V4.00413H4.45432'
												/>
											</svg>
										</a>
									</div>
								</section>

								<section className='celestia-community'>
									<div className={"modularism-not-maximalism"} id={`${tableOfContent[4].id.replace(/\s+/g, "-").toLowerCase()}`}>
										<h2 className='section-title'>What the Celestia community stands for</h2>
										<div className={"row justify-content-between align-items-center"}>
											<div className={"col-12 col-lg-6"}>
												<h3 className='title'>Modularism, not Maximalism</h3>
												<p>
													For years, crypto has endured a monolithic blockchain loop. Each new L1 has built a walled-off
													system, where competition is fierce and zero-sum. This leads to maximalism as they all fight over
													users in their ecosystems.
												</p>
												<p>
													Modular blockchains create a collaborative environment with many connected chains. Each new user
													that a modular blockchain brings in creates value for the whole modular ecosystem, not just a
													single L1. Modular blockchains collaborate while monolithic L1s compete.
												</p>
												<p>Modularism, not maximalism.</p>
											</div>
											<div className={"image-box--availability col-12 col-lg-6"}>
												<div className='image-wrapper'>
													<img className='img' style={{ width: `100%` }} src={celestia_modularizm} alt={""} />
												</div>
											</div>
										</div>
									</div>

									<div className={"layer-0-social-consensus"} id={`${tableOfContent[5].id.replace(/\s+/g, "-").toLowerCase()}`}>
										<div className={"row justify-content-between align-items-center"}>
											<div className={"order-2 order-lg-1 image-box--rollups col-12 col-lg-6"}>
												<div className='image-wrapper'>
													<img className='img' style={{ width: `100%` }} src={celestia_connections} alt={""} />
												</div>
											</div>
											<div className={"order-1 order-lg-2 col-12 col-lg-6"}>
												<h3 className='title'>Layer 0 is social consensus</h3>
												<p>
													To us, the most important layer in blockchains is social consensus. Blockchains are a tool to
													allow communities of people to socially coordinate in a sovereign way. Thus, our vision stems from
													a deeply held core belief: communities have an inalienable right to independently self-organize.
												</p>
												<p>Modular blockchains for sovereign communities.</p>
											</div>
										</div>
									</div>
								</section>
							</div>
						</div>
					</div>
				</main>
			</div>
		</Layout>
	);
};

export default WhatIsCelestia;
