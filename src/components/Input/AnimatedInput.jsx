import React, { useState } from 'react'
import './index.css'

const AnimatedInput = ({
  classNames,
  label,
  inputType,
  labelStyle,
  inputStyle,
  focusStyle,
  blurStyle,
  onChange,
}) => {
  const [inputValue, setInputValue] = useState('')
  const [isFocused, setIsFocused] = useState(false)

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
    if (onChange) {
      onChange(e.target.value)
    }
  }

  const handleFocus = () => {
    setIsFocused(true)
  }

  const handleBlur = (e) => {
    if (!inputValue) {
      setIsFocused(false)
    }
  }

  return (
    <div className={`input-container relative ${classNames}`}>
      <label
        className={`absolute transition-transform duration-300 text-header ${labelStyle} ${
          isFocused || inputValue !== '' ? focusStyle : blurStyle
        }`}
        style={{ pointerEvents: 'none' }}
      >
        {label}
      </label>
      <input
        type={inputType}
        placeholder=" "
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleInputChange}
        value={inputValue}
        className={`w-full border-b border-header py-1 outline-none text-lg placeholder-highlight bg-transparent ${inputStyle} 
        ${inputValue !== '' && inputType === 'text' ? 'filledSearch' : ''}
        ${inputValue !== '' && inputType !== 'text' ? 'filledCredentials' : ''}
        `}
      />
    </div>
  )
}

export default AnimatedInput
