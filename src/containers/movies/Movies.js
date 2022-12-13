import Slider from '../../components/slider/Slider'

import './movies.scss'

export default function Movies() {
    return (
        <section className="movies section">
            <div className="movies__container">
                <h1 className="section__title">Nouveau sur Disney+</h1>
                <div className="movies__content">
                    <Slider news/>
                </div>
            </div>
            <div className="movies__container">
                <h1 className="section__title">Notre sélection pour vous</h1>
                <div className="movies__content">
                    <Slider select/>
                </div>
            </div>
            <div className="movies__container">
                <h1 className="section__title">Les immanquables</h1>
                <div className="movies__content">
                    <Slider best/>
                </div>
            </div>
        </section>
    )
}