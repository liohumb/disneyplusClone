import {Component, StrictMode} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ScrollToTop from 'react-router-scroll-top'

import Nav from './navigations/nav/Nav'
import Movie from './pages/movie/Movie'
import Studio from './pages/studio/Studio'
import Home from './pages/home/Home'
import Footer from './navigations/footer/Footer'

import './App.scss'

export default class App extends Component {
    render() {
        return (
            <>
                <Router>
                    <StrictMode>
                        <ScrollToTop>
                            <Nav/>
                            <Switch>
                                <Route path="/brand/:brand" component={Studio}/>
                                <Route path="/movie/:title/:id" component={Movie}/>
                                <Route exact path="/" component={Home}/>
                            </Switch>
                            <Footer/>
                        </ScrollToTop>
                    </StrictMode>
                </Router>
            </>
        )
    }
}