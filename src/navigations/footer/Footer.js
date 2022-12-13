import {Link} from 'react-router-dom'

import logo from '../../assets/images/logo.png'
import './footer.scss'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__container">
                <Link to="/" className="footer__logo">
                    <img src={logo} alt="Logo du site de streaming Disney+" className="footer__logo-image"/>
                </Link>
                <ul className="footer__menu">
                    <li>
                        <Link to="/" className="footer__menu-link">
                            Règles de Respect de la Vie Privée
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className="footer__menu-link">
                            Modalités relatives aux cookies
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className="footer__menu-link">
                            Droits Données dans l'UE et au R.U
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className="footer__menu-link">
                            Conditions générales d'abonnement
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className="footer__menu-link">
                            Aide
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className="footer__menu-link">
                            Appareils compatibles
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className="footer__menu-link">
                            Qui sommes-nous
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className="footer__menu-link">
                            Publicités ciblées par centres d'intérêt
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className="footer__menu-link">
                            Gérer vos préférences
                        </Link>
                    </li>
                </ul>
                <span className="footer__copyright">
                    &copy; Disney. Tous droits réservés.
                </span>
            </div>
        </footer>
    )
}