import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

function Footer() {
    return (
        <footer className="footer mt-auto py-4 bg-dark">
            <div className="container">
                <span className="text-muted"><a className="text-muted" href="https://github.com/hayden-nesbit" target="_blank"><FontAwesomeIcon icon={faGithub} size="lg"/></a>  Hayden Nesbit, 2020</span>
            </div>
        </footer>
    )
}

export default Footer