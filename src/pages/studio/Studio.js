import {Component} from 'react'
import Header from '../../components/header/Header'
import Slider from '../../components/slider/Slider'

import './studio.scss'
import SliderAlt from '../../components/sliderAlt/SliderAlt'

export default class Studio extends Component {
    state = {studio: []}

    async getStudio(studio) {
        const data = await fetch(`${process.env.REACT_APP_API_URL}company/${studio}`).then(response => response.json())
        this.setState({studio: data})
    }

    componentDidMount() {
        this.getStudio(this.props.match.params.brand)
    }

    render() {
        return (
            <main className="studio">
                <Header studio={this.props.match.params.brand}/>
                <div className="studio__containers">
                    <div className="studio__container">
                        <h1 className="section__title">{this.props.match.params.brand === 'star' || this.props.match.params.brand === 'nationalgeographic' ? '' : 'À la une'}</h1>
                        <div className="studio__content">
                            <Slider studio={this.props.match.params.brand} top/>
                        </div>
                    </div>
                    <h1 className="studio__title">{this.props.match.params.brand === 'star' || this.props.match.params.brand === 'nationalgeographic' ? 'Bientôt' : ''}</h1>
                    <div className="studio__container">
                        <h1 className="section__title">{this.props.match.params.brand === 'star' || this.props.match.params.brand === 'nationalgeographic' ? '' : `Les films ${this.props.match.params.brand.toUpperCase()}`}</h1>
                        <div className="studio__content">
                            <SliderAlt studio={this.props.match.params.brand} movie/>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}