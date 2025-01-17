import * as React from "react";
import Image from "../imageComponent";
import { Link } from "gatsby";

export default class TwoColumnH2 extends React.Component {
	render() {
		return (
			<section className={`two-column-h2 ${this.props.direction}`}>
				<div className={"row align-items-center"}>
					<div className={`col col-12 col-lg-6 ${this.props.direction === "rtl" ? "order-lg-2" : "order-lg-1"}`}>
						<Image alt={this.props.title} filename={this.props.image} />
					</div>
					<div className={`d-table-cell align-middle col col-12 col-lg-6 ${this.props.direction === "rtl" ? "order-lg-1" : "order-lg-2"}`}>
						<div className={"text"}>
							<h2 className={"with-decor mt-4 mt-lg-0"}>{this.props.title}</h2>
							<div className='paragraph' dangerouslySetInnerHTML={{ __html: this.props.text }} />
							<div className={"flex mt-4"}>
								<Link to={this.props.buttonPrimaryUrl} target={"_blank"} className={`button button-simple me-4 ${this.props.buttonPrimaryClass}`}>
									{this.props.buttonPrimaryTitle}
								</Link>
								{this.props.buttonSecondaryTitle && (
									<Link to={this.props.buttonSecondaryUrl} target={"_blank"} className={`button button-white ${this.props.buttonSecondaryClass}`}>
										{this.props.buttonSecondaryTitle}
									</Link>
								)}
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}
