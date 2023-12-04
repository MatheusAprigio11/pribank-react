import React from 'react'

const Button = ({title, classname, onClick}) => {
  return (
    <button className={classname} onClick={onClick}>
        {title}
    </button>
  )
}

export default Button