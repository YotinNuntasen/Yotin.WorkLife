import React from 'react'
import './notpage.css'
function NotPage() {



    return (
        <div className='container '>
            <div className='d-flex justify-content-center align-items-start flex-column ' style={{ height: 900 }}>
                <div className="oop_404">
                    <div className="fs-1 text_404">
                        <h1>404</h1>
                    </div>
                    <h2>Oops! This Page Could Not Be Found</h2>
                    <p>Sorry but the page you are looking for does not exist, have been removed. name changed or is temporarily unavailable</p>
                    <div className="button">
                        <a href="/" className="btn">Go To Homepage</a>

                    </div>
                </div>

            </div>

        </div>
    )
}

export default NotPage
