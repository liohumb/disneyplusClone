import React, {Component} from 'react'
import Slider from '../../components/slider/Slider'

import restriction from '../../assets/images/movie/infos/restriction.png'
import audio from '../../assets/images/movie/infos/audio.png'
import subtile from '../../assets/images/movie/infos/subtile.png'

import './movie.scss'
import Modal from '../../components/modal/Modal'

export default class Movie extends Component {
    state = {
        movie: [],
        showModal: false
    }

    async getMovie(id) {
        const data = await fetch(`${process.env.REACT_APP_API_URL}movie/${id}`).then(response => response.json())
        this.setState({movie: data})
    }

    handleHour(minute) {
        const hours = minute / 60
        return hours.toFixed(2).toString().replace('.', ' h ')
    }

    handleOpenModal = () => {
        this.setState({showModal: true})
    }

    handleCloseModal = () => {
        this.setState({showModal: false})
    }

    componentDidMount() {
        this.getMovie(this.props.match.params.id)
        this.handleHour()
    }

    render() {
        const {showModal} = this.state
        return (
            <main className="movie">
                <div className="movie__gradient"></div>
                <img src={this.state.movie.cover} alt={this.state.movie.title} className="movie__background"/>

                <div className="movie__containers">
                    <div className="movie__container">
                        <h1 className="movie__title">{this.state.movie.title}</h1>

                        <div className="movie__infos">
                            <div className="movie__info">
                                <img src={restriction} alt="Restrictions" className="movie__info-restriction"/>
                                <img src={audio} alt="Pistes audio" className="movie__info-audio"/>
                                <img src={subtile} alt="Sous titre" className="movie__info-subtile"/>
                                <span className="movie__info-year">{this.state.movie.releaseDate}</span>
                                <span className="movie__info-span">•</span>
                                <span
                                    className="movie__info-duration">{this.handleHour(this.state.movie.duration)} min</span>
                            </div>

                            <div className="movie__info">
                                <span className="movie__info-brand">{this.state.movie.company}</span>
                            </div>
                        </div>

                        <div className="movie__buttons">
                            <button className="movie__buttons-play">
                                <i className="bx bx-play movie__buttons-play--icon"></i>
                                <span className="movie__buttons-play--text">Lecture</span>
                            </button>

                            <button className="movie__buttons-trailer" onClick={this.handleOpenModal}>
                                Bande-annonce
                            </button>

                            <button className="movie__buttons-add">
                                <i className="bx bx-plus movie__buttons-add--icon"></i>
                            </button>

                            <button className="movie__buttons-group">
                                <i className="bx bxs-group movie__buttons-group--icon"></i>
                            </button>
                        </div>

                        <p className="movie__resume">{this.state.movie.description}</p>
                    </div>
                    <Modal show={showModal} onClose={this.handleCloseModal} link={this.state.movie.video} title={this.state.movie.title}/>
                    <div className="movie__others">
                        <div className="movie__others-titles">
                            <h1 className="movie__others-title movie__others-active">Suggestions</h1>
                            <h1 className="movie__others-title">Bonus</h1>
                            <h1 className="movie__others-title">Détails</h1>
                        </div>
                        <div className="movie__content">
                            <Slider suggest/>
                        </div>
                    </div>
                </div>

            </main>
        )
    }
}