import React from "react";
import "./custom-checkbox.css";

interface CustomCheckboxProps {
    id: string;
    checked: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({ id, checked, onChange }) => {
    
    return (
        <div className="checkbox">
            <input
                type="checkbox"
                id={id}
                checked={checked}
                onChange={onChange}
                className="custom-checkbox"
            />
            <label htmlFor={id} className="custom-checkbox-label">
            </label>
        </div>
    );
}

export default CustomCheckbox;