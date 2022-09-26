import React from 'react'
import { Vortex } from 'react-loader-spinner'
import './spinner.css'

const Spinner = () => {
    return (
        <>
            <div className="loader">
                <Vortex
                    visible={true}
                    height="120"
                    width="120"
                    ariaLabel="vortex-loading"
                    wrapperStyle={{}}
                    wrapperClass="vortex-wrapper"
                    colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
                />
            </div>
        </>
    )
}

export default Spinner