import React from 'react'

//Styles
import './LoadingDots.scss'

const LoadingDots = ({cls}) => {
    return (
        <div className='loading-dots'>
            <div className="snippet " data-title=".dot-pulse">
                <div className="stage">
                    <div className={`dot-pulse ${cls}`}></div>
                </div>
            </div>
        </div>
    )
}

export default LoadingDots
