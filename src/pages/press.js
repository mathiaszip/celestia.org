import * as React from "react";

import { heroData } from "../datas/press/hero-data";
import { explore } from "../datas/press/explore";
import { FooterBoxes } from "../datas/developer-portal/content";
import Layout from "../components/layout";
import { Helmet } from "react-helmet";
import CommunityItem from "../components/modules/community-item";
import Button from "../components/buttons/button";

const Press = () => {
	return (
		<Layout footerBoxes={FooterBoxes}>
			<Helmet>
				<title>Celestia - Press</title>
			</Helmet>
			<div className={"what-is-celestia"}>
				<main>
					<div className={"container"}>
						<h1 className={"mb-3 mb-md-5"}>What is Celestia?</h1>
						<p className={"lead-text"}>
							A complete beginner's guide to how Celestia works, its key benefits, and how anyone in the world will be able to create
							their own blockchain in minutes.
						</p>
					</div>

					<section className='explore'>
						<div className={"container"}>
							<div className={"row flex-wrap-reverse flex-lg-wrap align-items-center justify-content-between gx-5"}>
								<div className='col-12 col-lg-6 col-xl-6'>
									<div className='gx-3 gy-4 gy-md-3 row'>
										{explore.items.map(function (item) {
											return <CommunityItem className='icon-card-wrapper col-6 col-md-6' key={item.id} content={item} />;
										})}
									</div>
								</div>
								<div className='col-12 col-lg-6 col-xl-4 mb-5 mb-lg-0'>
									<h2 className={"title with-decor"}>{explore.title}</h2>
									{explore.description && <div className={"description"}>{explore.description}</div>}
								</div>
							</div>
						</div>
					</section>
				</main>
			</div>
		</Layout>
	);
};

export default Press;
