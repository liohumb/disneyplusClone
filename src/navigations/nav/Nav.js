import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import logo from '../../assets/images/logo.png'
import profil from '../../assets/images/profil/wall-e.png'

import './nav.scss'

export default class Nav extends Component {
    state = {active: false}

    handleScroll = () => {
        if (window.scrollY > 0) {
            this.setState({active: true})
        } else {
            this.setState({active: false})
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
    }

    render() {
        const {active} = this.state

        return (
            <header className={`nav ${active ? 'nav__active' : ''}`}>
                <div className="nav__container">
                    <Link to="/" className="nav__logo" title="Lien vers la page d'accueil de Disney+">
                        <img src={logo} alt="Logo de Disney+" className="nav__logo-image"/>
                    </Link>
                    <ul className="nav__menu">
                        <li>
                            <Link to="/" className="nav__menu-link"
                                  title="Lien vers la page d'accueil de Disney+">
                                <i className="bx bxs-home nav__menu-link--icon"></i>
                                <span className="nav__menu-link--text">Accueil</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="nav__menu-link"
                                  title="Lien vers la page de recherche de Disney+">
                                <i className="bx bx-search nav__menu-link--icon"></i>
                                <span className="nav__menu-link--text">Recherche</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="nav__menu-link"
                                  title="Lien vers vers votre liste de films et séries Disney+">
                                <i className="bx bx-plus nav__menu-link--icon"></i>
                                <span className="nav__menu-link--text">Ma Liste</span>
                            </Link>
                        </li>
                        <li className="nav__menu-alt">
                            <Link to="/" className="nav__menu-link"
                                  title="Lien vers la page des films et série originaux de Disney+">
                                <i className="bx bxs-star nav__menu-link--icon"></i>
                                <span className="nav__menu-link--text">Originals</span>
                            </Link>
                        </li>
                        <li className="nav__menu-alt">
                            <Link to="/" className="nav__menu-link"
                                  title="Lien vers la page des films de Disney+">
                                <i className="bx bxs-film nav__menu-link--icon"></i>
                                <span className="nav__menu-link--text">Films</span>
                            </Link>
                        </li>
                        <li className="nav__menu-alt">
                            <Link to="/" className="nav__menu-link"
                                  title="Lien vers la page des séries de Disney+">
                                <i className="bx bxs-tv nav__menu-link--icon"></i>
                                <span className="nav__menu-link--text">Séries</span>
                            </Link>
                        </li>
                        <li>
                        <span className="nav__menu-link nav__menu-dots">
                            <i className="bx bx-dots-vertical-rounded nav__menu-link--icon"></i>
                        </span>
                        </li>
                    </ul>
                </div>
                <Link to="/" className="nav__account" title="Lien vers votre profil Disney+">
                    <span className="nav__account-text">Wall•E</span>
                    <input type="image" src={profil} alt="Photo de profil de l'utilisateur"
                           className="nav__account-image"/>
                </Link>
            </header>
        )
    }
}