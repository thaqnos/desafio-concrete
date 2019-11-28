import React, { Fragment } from 'react'

const Input = (props) => {
    const {classe} = props
    return(
        <Fragment>
            <input className={classe}></input>
        </Fragment>
    )
}

export default Input