import {Component} from 'react'

import './modal.scss'

export default class Modal extends Component {
    render() {
        const {show, onClose, link, title} = this.props
        return (
            show && (
                <div className="modal" onClick={onClose}>
                    <iframe src={`${link}?autoplay=1`} title={title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media;"
                            className="modal__video"
                            allowFullScreen></iframe>
                </div>
            )
        )
    }
}