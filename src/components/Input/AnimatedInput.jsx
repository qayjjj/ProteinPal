import React, { useState } from 'react';

const AnimatedInput = ({ inputText, inputType, onChange }) => {
    const [inputValue, setInputValue] = useState('');
    const [isFocused, setIsFocused] = useState(false);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
        if (onChange) {
            onChange(e.target.value);
        }
    };

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = (e) => {
        if (!inputValue) {
            setIsFocused(false);
        }
    };

    return (
        <div className="input-container">
            <label className={`absolute px-6 py-3 transition-transform duration-300 text-header ${isFocused ? '-translate-y-3 text-sm text-highlight' : 'translate-y-2 text-base'
                }`}
                style={{ pointerEvents: 'none' }}
            >
                {inputText}
            </label>
            <input
                type={inputType}
                placeholder=" "
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={handleInputChange}
                value={inputValue}
                className="border-b outline-none bg-background-alt p-0 m-5 text-2xl text-header placeholder-highlight"
            />
        </div>
    );
};

export default AnimatedInput;
