import {Component} from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Navigation} from 'swiper'
import {Link} from 'react-router-dom'

import 'swiper/css'
import 'swiper/css/navigation'
import './sliderAlt.scss'

export default class SliderAlt extends Component {
    state = {
        movies: [],
        studio: []
    }

    async getMovies() {
        const data = await fetch(`${process.env.REACT_APP_API_URL}suggest`).then(response => response.json())
        this.setState({movies: data})
    }

    async getStudio(studio) {
        const data = await fetch(`${process.env.REACT_APP_API_URL}company/${studio}`).then(response => response.json())
        this.setState({studio: data})
    }

    componentDidMount() {
        this.getMovies()
        this.getStudio(this.props.studio)
    }

    render() {
        const movies = this.state.movies.sort(() => .5 - Math.random())
        const suggestMovie = movies.slice(0, 3).map((movie) => {
            return (
                <SwiperSlide key={movie.id} className="sliderAlt__card">
                    <Link to={`/movie/${movie.title}/${movie.id}`}>
                        <img src={movie.poster} alt={movie.title} className="sliderAlt__image"/>
                    </Link>
                </SwiperSlide>
            )
        })

        const studioMovie = this.state.studio.map((movie) => {
            return (
                <SwiperSlide key={movie.id} className="sliderAlt__card">
                    <Link to={`/movie/${movie.title}/${movie.id}`}>
                        <img src={movie.poster} alt={movie.title} className="sliderAlt__image"/>
                    </Link>
                </SwiperSlide>
            )
        })

        return (
            <Swiper slidesPerView={1}
                    slidesPerGroup={1}
                    breakpoints={{
                        425: {
                            slidesPerView: 2, slidesPerGroup: 2
                        },
                        768: {
                            slidesPerView: 3, slidesPerGroup: 3
                        }
                    }}
                    navigation={true}
                    modules={[Navigation]}
                    spaceBetween={30}
                    className="mySwiper sliderAlt">
                {this.props.suggest && suggestMovie}
                {this.props.movie && studioMovie}
            </Swiper>
        )
    }
}