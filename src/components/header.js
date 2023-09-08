import * as React from "react"
import { Link } from "gatsby"

import logo from '../images/celestia-logo.svg'
import Image from "./imageComponent";

const navigation = [
    {
        text: "Learn",
        url: "/resources/",
        type: 'internal',
        submenus: [
            {
                text: "What is Celestia?",
                subtext: "Start here",
                url: "/what-is-celestia/",
                icon: "menu/logo.svg",
                type: 'internal'
            },
            {
                text: "Dive into modular",
                subtext: "Dive deep",
                url: "/learn/",
                icon: "menu/books.svg",
                type: 'internal'
            },
            {
                text: "FAQ",
                subtext: "Learn",
                url: "/faq/",
                icon: "menu/faq.svg",
                type: 'internal'
            },
            {
                text: "Read the whitepaper",
                subtext: "Research paper",
                url: "/faq/",
                icon: "menu/faq.svg",
                type: 'internal'
            }
        ]
    },{
        text: "Build",
        url: "",
        submenus: [
            {
                text: "Start with the dev portal",
                subtext: "Developer portal",
                url: "/developer-portal/",
                icon: "menu/devnet.svg",
                type: 'internal'
            },
            {
                text: "Read the docs",
                subtext: "Celestia Documentation",
                url: "https://docs.celestia.org/",
                icon: "menu/documentation.svg",
                type: 'external'
            },
            {
                text: "View the GitHub repos",
                subtext: "GitHub repositories",
                url: "https://github.com/celestiaorg",
                icon: "menu/github.svg",
                type: 'external'
            }
        ]
    },{
        text: "Explore",
        url: "",
        submenus: [
            {
                text: "Run a light node",
                subtext: "Node operator",
                url: "/run-a-light-node/",
                icon: "menu/technology-svg.svg",
                type: 'internal'
            },
            {
                text: "Join the community",
                subtext: "Social channels",
                url: "/community/",
                icon: "menu/forum.svg",
                type: 'internal'
            },
            {
                text: "Explore the ecosystem",
                subtext: "Celestia ecosystem",
                url: "/ecosystem/",
                icon: "menu/careers.svg",
                type: 'internal'
            },
        ]
    },
]

class Header extends React.Component {
    componentDidMount() {
        window.addEventListener("scroll", this.toggleHeaderClass);
        this.toggleHeaderClass();
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.toggleHeaderClass);
    }

    toggleHeaderClass = () => {
        if (window.scrollY > 130) {
            document.getElementById("header").classList.add("blur");
        } else if(window.scrollY < 80) {
            document.getElementById("header").classList.remove("blur");
        }
    };


    toggleMenu = () => {
        if (document.getElementById("hamburger").classList.contains('is-active')) {
            document.getElementById("header").classList.remove("menu-opened");
            document.getElementById("hamburger").classList.remove("is-active");
        }else{
            document.getElementById("hamburger").classList.add("is-active");
            document.getElementById("header").classList.add("menu-opened");
        }
    }

    render() {
        return (
            <>
                <header id={'header'}>
                    <div className={'blurry'}/>
                    <div className={'container'}>
                        <button id={'hamburger'} className="hamburger hamburger--slider" type="button" onClick={this.toggleMenu}>
                      <span className="hamburger-box">
                        <span className="hamburger-inner"/>
                      </span>
                        </button>
                        <div className={'logo'}>
                            <Link to="/"><img src={logo} alt="Celestia"/></Link>
                        </div>
                        <nav>
                            <ul>
                                {navigation.map((link, index) => (
                                    <li key={index}>
                                        {link.submenus ? <div className={'hasSubmenu'}>{link.text} <i className={'icon-dropdown'}/></div> : link.type === 'external' ?
                                            <a href={link.url} target={'_blank'} rel={'noreferrer'}>{link.text}</a> : <Link to={`${link.url}`} activeClassName="active">{link.text} {link.submenus && <i className={'icon-dropdown'}/>}</Link>}
                                        {link.submenus &&
                                        <div className={'submenu'}>
                                            <ul>
                                                {link.submenus.map((submenu, index) => (
                                                    <li key={index}>
                                                        {submenu.type === 'external' ?
                                                            (<a href={submenu.url} target={'_blank'} rel="noreferrer">
                                                                <div className={'row d-table w-100'}>
                                                                    <div className={'col-2 align-middle d-table-cell'}>
                                                                        <div className={'icon'}>
                                                                            <Image alt={submenu.text} filename={submenu.icon} />
                                                                        </div>
                                                                    </div>
                                                                    <div className={'col-10 align-middle d-table-cell'}>
                                                                        <div className={'subtitle'}>{submenu.subtext}</div>
                                                                        <div className={'title'}>{submenu.text}</div>
                                                                    </div>
                                                                </div>
                                                            </a>)
                                                            :
                                                            (<Link to={submenu.url} >
                                                                <div className={'row d-table w-100'}>
                                                                    <div className={'col-2 align-middle d-table-cell'}>
                                                                        <div className={'icon'}>
                                                                            <Image alt={submenu.text} filename={submenu.icon} />
                                                                        </div>
                                                                    </div>
                                                                    <div className={'col-10 align-middle d-table-cell'}>
                                                                        <div className={'subtitle'}>{submenu.subtext}</div>
                                                                        <div className={'title'}>{submenu.text}</div>
                                                                    </div>
                                                                </div>
                                                            </Link>)}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        }

                                    </li>
                                ))}
                            </ul>
                        </nav>
                        <div className={'clear'}/>
                    </div>
                </header>
            </>
        );
    }
}

export default Header
