import React, { Fragment } from 'react'

const Button = (props) => {
    const { classe } = props
    return (
        <Fragment>
            <button className={classe}>{props.children}</button>
        </Fragment>
    )
}

export default Button