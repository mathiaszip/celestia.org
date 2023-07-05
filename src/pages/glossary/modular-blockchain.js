import * as React from "react"

import {FooterBoxes} from "../../datas/team/content";
import Layout from "../../components/layout";
import BreadCrumb from "../../components/breadcrumb";
import SocialShare from "../../components/socialShare";
import GlossaryNav from "../../components/glossary-nav";

import { seoContent } from "../../datas/glossary/seoContent";
import SEO from "../../components/seo";

const title = 'Modular blockchain';

class GlossaryContent extends React.Component {
    render() {
        return (
            <div className={'glossary-content'}>
                <p>A type of blockchain that specializes in only a few functions, rather than all of them. The key functions are
                </p>

                <ol>
                  <li>Execution</li>
                  <li>Settlement</li>
                  <li>Consensus</li>
                  <li>Data availability</li>
                </ol>

                <p>Modular blockchains are arranged as a modular stack, with each blockchain in the stack referred to as a “layer”. Since modular blockchains only provided a subset of the key functions, this enables them to to be purpose-built for the functions it provides.
                </p>

                <p>For example, Celestia is a consensus and data availability layer as it only provides ordering over transactions (consensus) and verifying that their data is available.
                </p>

            </div>
        )
    }
}

class GlossarySubpage extends React.Component {
    render() {
        return (
            <Layout footerBoxes={FooterBoxes}>
                <SEO
                    title={'Celestia - '+title}
                    description={seoContent.description}
                    image={seoContent.image}
                />
                <div className={'glossary-subpage'}>
                    <main>
                        <div className={'container'}>
                            <BreadCrumb title={title}/>
                            <h1 className={'main mb-4'}>{title}</h1>

                            <SocialShare title={title} url={this.props.location.href}/>

                            <GlossaryContent/>

                        </div>

                        <div className={'container wide'}>
                            <GlossaryNav url={this.props.location.state && this.props.location.state.url}/>
                        </div>
                    </main>
                </div>
            </Layout>
        )
    }
}

export default GlossarySubpage
