import {Component} from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Navigation} from 'swiper'
import {Link} from 'react-router-dom'

import 'swiper/css'
import 'swiper/css/navigation'
import './slider.scss'

export default class Slider extends Component {
    state = {
        movies: [],
        suggest: [],
        studio: []
    }

    async getMovies() {
        const data = await fetch(`${process.env.REACT_APP_API_URL}movies`).then(response => response.json())
        this.setState({movies: data})
    }

    async getSuggest() {
        const data = await fetch(`${process.env.REACT_APP_API_URL}suggest`).then(response => response.json())
        this.setState({suggest: data})
    }

    async getStudio(studio) {
        const data = await fetch(`${process.env.REACT_APP_API_URL}company/${studio}`).then(response => response.json())
        this.setState({studio: data})
    }

    componentDidMount() {
        this.getMovies()
        this.getSuggest()
        this.getStudio(this.props.studio)
    }

    render() {
        const newMovies = this.state.movies.sort(function (a, b) {
            return new Date(b.releaseDate) - new Date(a.releaseDate)
        })
        const newMovie = newMovies.slice(0, 17).map((movie) => {
            return (
                <SwiperSlide key={movie.id} className="slider__card">
                    <Link to={`/movie/${movie.title}/${movie.id}`}>
                        <img src={movie.cover} alt={movie.title} className="slider__image"/>
                    </Link>
                </SwiperSlide>
            )
        })

        const bestMovie = this.state.movies.reverse().slice(0, 17).map((movie) => {
            return (
                <SwiperSlide key={movie.id} className="slider__card">
                    <Link to={`/movie/${movie.title}/${movie.id}`}>
                        <img src={movie.cover} alt={movie.title} className="slider__image"/>
                    </Link>
                </SwiperSlide>
            )
        })

        const suggestMovies = this.state.suggest.sort(() => .5 - Math.random())
        const suggestMovie = suggestMovies.slice(0, 17).map((movie) => {
            return (
                <SwiperSlide key={movie.id} className="slider__card">
                    <Link to={`/movie/${movie.title}/${movie.id}`}>
                        <img src={movie.cover} alt={movie.title} className="slider__image"/>
                    </Link>
                </SwiperSlide>
            )
        })

        const selectMovies = this.state.movies.sort(() => .5 - Math.random())
        const selectMovie = selectMovies.slice(0, 17).map((movie) => {
            return (
                <SwiperSlide key={movie.id} className="slider__card">
                    <Link to={`/movie/${movie.title}/${movie.id}`}>
                        <img src={movie.cover} alt={movie.title} className="slider__image"/>
                    </Link>
                </SwiperSlide>
            )
        })

        const topMovies = this.state.studio.sort(() => .5 - Math.random())
        const topMovie = topMovies.slice(0, 17).map((movie) => {
            return (
                <SwiperSlide key={movie.id} className="slider__card">
                    <Link to={`/movie/${movie.title}/${movie.id}`}>
                        <img src={movie.cover} alt={movie.title} className="slider__image"/>
                    </Link>
                </SwiperSlide>
            )
        })

        return (
            <Swiper breakpoints={{
                425: {
                    slidesPerView: 2, slidesPerGroup: 2
                },
                768: {
                    slidesPerView: 3, slidesPerGroup: 3
                },
                1024: {
                    slidesPerView: 4, slidesPerGroup: 3
                },
                1440: {
                    slidesPerView: 5, slidesPerGroup: 5
                }
            }}
                    spaceBetween={30}
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper slider">
                {this.props.news && newMovie}
                {this.props.select && selectMovie}
                {this.props.best && bestMovie}
                {this.props.top && topMovie}
                {this.props.suggest && suggestMovie}
            </Swiper>
        )
    }
}