import React, { useState } from 'react';
import { CheckCircle, Circle } from 'react-feather';

interface CheckboxProps {
    disabled?: boolean;
}

const Checkbox: React.FC<CheckboxProps> = ({ disabled }) => {
    const [checked, setChecked] = useState(false);
    const [intermediate, setIntermediate] = useState(false);

    const handleToggle = () => {
        if (!disabled) {
            if (checked) {
                setChecked(false);
                setIntermediate(false);
            } else {
                setIntermediate(true);
                setTimeout(() => {
                    setChecked(true);
                    setIntermediate(false);
                }, 500);
            }   
        }
    };

    return (
        <div
            className={`relative flex items-center cursor-pointer ${
                disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : ''
            }`}
            onClick={handleToggle}
        >
            {checked ? (
                <CheckCircle className=" text-system-success-light dark:text-system-success-dark" />
            ) : (
                <Circle className=" text-system-highlight-light dark:text-system-highlight-dark" />
            )}
            {intermediate && (
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                    <Circle className=" text-system-warning-light dark:text-system-warning animate-pulse" />
                </div>
            )}
        </div>
    );
};

export default Checkbox;