import * as React from 'react'
import "../styles/tailwind.css"

interface Props { 
  autoFocus?: boolean, 
  classes?: string, 
  defaultValue?: string,
  disabled?: boolean,
  id?: string,
  name?: string,
  onChange?:any,
  placeholder?: string,
  type?: string,
  value?: string
}

export const InputComponent = (
  {  
    autoFocus, 
    classes, 
    defaultValue,
    disabled,
    id,
    name,
    onChange,
    placeholder,
    type,
    value 
  }: Props) => {
  return (
    <input 
      autoFocus={autoFocus}
      className={classes}
      defaultValue={defaultValue}
      disabled={disabled}
      id={id}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
      value={value}
    />
  )
}
