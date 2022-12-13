import {Link} from 'react-router-dom'

import './button.scss'

export default function Button({logo, logoHover, name}) {
    return (
        <Link to={`/brand/${name.toLowerCase()}`} className="button">
            <img src={logo} alt={name} className="button__logo"/>
            <img src={logoHover} alt={name} className="button__logo button__logo-hover"/>
        </Link>
    )
}