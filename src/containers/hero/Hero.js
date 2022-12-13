import Carousel from '../../components/carousel/Carousel'
import Button from '../../components/button/Button'

import disney from '../../assets/images/companies/logo-disney.png'
import pixar from '../../assets/images/companies/logo-pixar.png'
import marvel from '../../assets/images/companies/logo-marvel.png'
import starwars from '../../assets/images/companies/logo-starwars.png'
import ng from '../../assets/images/companies/logo-nationalgeographic.png'
import star from '../../assets/images/companies/logo-star.png'

import disneyHover from '../../assets/images/companies/hover/disney.gif'
import pixarHover from '../../assets/images/companies/hover/pixar.gif'
import marvelHover from '../../assets/images/companies/hover/marvel.gif'
import starwarsHover from '../../assets/images/companies/hover/starwars.gif'
import ngHover from '../../assets/images/companies/hover/nationalgeographic.gif'
import starHover from '../../assets/images/companies/hover/starwars.gif'

import './hero.scss'

export default function Hero() {
    return (
        <section className="hero section">
            <Carousel/>
            <div className="hero__category">
                <Button name="Disney" logo={disney} logoHover={disneyHover}/>
                <Button name="Pixar" logo={pixar} logoHover={pixarHover}/>
                <Button name="Marvel" logo={marvel} logoHover={marvelHover}/>
                <Button name="StarWars" logo={starwars} logoHover={starwarsHover}/>
                <Button name="NationalGeographic" logo={ng} logoHover={ngHover}/>
                <Button name="Star" logo={star} logoHover={starHover}/>
            </div>
        </section>
    )
}