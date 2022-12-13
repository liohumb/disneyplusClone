import SliderAlt from '../../components/sliderAlt/SliderAlt'

import './suggest.scss'

export default function Suggest() {
    return (
        <section className="suggest section">
            <div className="suggest__container">
                <h1 className="section__title">Suggestions</h1>
                <div className="suggest__content">
                    <SliderAlt suggest/>
                </div>
            </div>
        </section>
    )
}