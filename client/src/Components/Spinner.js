import React from 'react'
import spinner from '../images/spinner.gif'

const Spinner = () => {
    return (
        <div>
            <img style={{ width: '50px', height: '50px' }} src={spinner} alt='Loading' />
        </div>
    )
}

export default Spinner