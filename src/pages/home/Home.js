import Hero from '../../containers/hero/Hero'
import Movies from '../../containers/movies/Movies'
import Suggest from '../../containers/suggest/Suggest'

import './home.scss'

export default function Home() {
    return (
        <main className="home">
            <Hero/>
            <Movies/>
            <Suggest/>
        </main>
    )
}