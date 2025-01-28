import React from 'react'
import "./checkbox.css"

export const Checkbox = ({children, ...props}) => {
  return (
    <div className='checkbox-input'>
        <input type='checkbox' {...props} />
        <div className=''>{children}</div>
    </div>
  )
}
