import {Component} from 'react'

import disneyImage from '../../assets/images/companies/page/disney.jpeg'
import pixarImage from '../../assets/images/companies/page/pixar.jpeg'
import marvelImage from '../../assets/images/companies/page/marvel.jpeg'
import starwarsImage from '../../assets/images/companies/page/starwars.jpeg'
import ngImage from '../../assets/images/companies/page/national-geographic.jpeg'
import starImage from '../../assets/images/companies/page/star.jpeg'

import disneyWebm from '../../assets/videos/companies/disney/disney.webm'
import pixarWebm from '../../assets/videos/companies/pixar/pixar.webm'
import marvelWebm from '../../assets/videos/companies/marvel/marvel.webm'
import starwarsWebm from '../../assets/videos/companies/starwars/starwars.webm'
import ngWebm from '../../assets/videos/companies/national-geographic/national-geographic.webm'
import starWebm from '../../assets/videos/companies/star/star.webm'

import disneyMp4 from '../../assets/videos/companies/disney/disney.mp4'
import pixarMp4 from '../../assets/videos/companies/pixar/pixar.mp4'
import marvelMp4 from '../../assets/videos/companies/marvel/marvel.mp4'
import starwarsMp4 from '../../assets/videos/companies/starwars/starwars.mp4'
import ngMp4 from '../../assets/videos/companies/national-geographic/national-geographic.mp4'
import starMp4 from '../../assets/videos/companies/star/star.mp4'

import './header.scss'

export default class Header extends Component {
    state = {opacity: .5}

    handleVideoEnded() {
        const video = document.querySelector('.header__background-video')
        const image = document.querySelector('.header__background-image')

        video.style.display = 'none'
        image.style.display = 'block'
    }

    handleScroll = () => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0
        const opacity = .5 + scrollTop / 500

        this.setState({opacity})
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
    }

    render() {
        const style = {opacity: this.state.opacity}
        return (
            <section className="header">
                <div className="header__gradient" style={style}></div>
                {this.props.studio === 'disney' &&
                    <div className="header__background">
                        <video muted autoPlay playsInline
                               poster={disneyImage} onEnded={this.handleVideoEnded}
                               className="header__background-video">
                            <source src={disneyWebm} type="video/webm"/>
                            <source src={disneyMp4} type="video/mp4"/>
                        </video>
                        <img src={disneyImage} alt="Disney" className="header__background-image"/>
                    </div>}
                {this.props.studio === 'pixar' &&
                    <div className="header__background">
                        <video muted autoPlay playsInline
                               poster={pixarImage} onEnded={this.handleVideoEnded}
                               className="header__background-video">
                            <source src={pixarWebm} type="video/webm"/>
                            <source src={pixarMp4} type="video/mp4"/>
                        </video>
                        <img src={pixarImage} alt="Disney" className="header__background-image"/>
                    </div>}
                {this.props.studio === 'marvel' &&
                    <div className="header__background">
                        <video muted autoPlay playsInline
                               poster={marvelImage} onEnded={this.handleVideoEnded}
                               className="header__background-video">
                            <source src={marvelWebm} type="video/webm"/>
                            <source src={marvelMp4} type="video/mp4"/>
                        </video>
                        <img src={marvelImage} alt="Disney" className="header__background-image"/>
                    </div>}
                {this.props.studio === 'starwars' &&
                    <div className="header__background">
                        <video muted autoPlay playsInline
                               poster={starwarsImage} onEnded={this.handleVideoEnded}
                               className="header__background-video">
                            <source src={starwarsWebm} type="video/webm"/>
                            <source src={starwarsMp4} type="video/mp4"/>
                        </video>
                        <img src={starwarsImage} alt="Disney" className="header__background-image"/>
                    </div>}
                {this.props.studio === 'nationalgeographic' &&
                    <div className="header__background">
                        <video muted autoPlay playsInline
                               poster={ngImage} onEnded={this.handleVideoEnded}
                               className="header__background-video">
                            <source src={ngWebm} type="video/webm"/>
                            <source src={ngMp4} type="video/mp4"/>
                        </video>
                        <img src={ngImage} alt="Disney" className="header__background-image"/>
                    </div>}
                {this.props.studio === 'star' &&
                    <div className="header__background">
                        <video muted autoPlay playsInline
                               poster={starImage} onEnded={this.handleVideoEnded}
                               className="header__background-video">
                            <source src={starWebm} type="video/webm"/>
                            <source src={starMp4} type="video/mp4"/>
                        </video>
                        <img src={starImage} alt="Disney" className="header__background-image"/>
                    </div>}
            </section>
        )
    }
}