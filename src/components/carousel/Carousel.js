import {Component} from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Autoplay, Pagination, Navigation} from 'swiper'
import {Link} from 'react-router-dom'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './carousel.scss'

export default class Carousel extends Component {
    state = {movies: []}

    async getMovie() {
        const data = await fetch(`${process.env.REACT_APP_API_URL}movies`).then(response => response.json())
        this.setState({movies: data})
    }

    componentDidMount() {
        this.getMovie()
    }

    render() {
        const highlighted = this.state.movies.filter(movie => movie.highlighted)
        const listMovies = highlighted.map((movie) => {
            return (
                <SwiperSlide key={movie.id}>
                    <Link to={`/movie/${movie.title}/${movie.id}`}>
                        <img src={movie.cover} alt={movie.title} className="carousel__image"/>
                    </Link>
                </SwiperSlide>
            )
        })

        return (
            <Swiper spaceBetween={30} centeredSlides={true}
                    autoplay={{delay: 5000, disableOnInteraction: true}}
                    loop pagination={{clickable: true, type: 'bullets'}}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper carousel">
                {listMovies}
            </Swiper>
        )
    }

}