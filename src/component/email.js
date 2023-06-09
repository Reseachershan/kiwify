import React, { useState } from "react";
import clsx from 'clsx'

const Email = ({ label, setEmail, email }) => {
    const [isValidEmail, setIsValidEmail] = useState(true);
    const [isValidEmpty, setIsValidEmpty] = useState(true);

    const handleEmail = (value) => {
        setEmail(value)
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (regex.test(value)) {
            setIsValidEmail(regex.test(value))
        }
    }

    const validateEmail = () => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    const handleBlur = () => {
        if (!email) {
            setIsValidEmpty(false)
        } else {
            setIsValidEmail(validateEmail());
            setIsValidEmpty(true)
        }
    }

    const componentClasses = clsx(
        'form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full',
        { 'form-input block py-2 px-3 border border-red-500 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full': !isValidEmail || !isValidEmpty },
      );

    return (
        <>
            <div>
                <label for="email" className="block text-sm font-medium leading-5 mb-1 text-gray-700">
                    {label}
                </label>
                <div>
                    <input onBlur={handleBlur} value={email} onChange={(e) => handleEmail(e.target.value)} type="text" autocomplete="username" name="email" className={componentClasses} />
                </div>
            </div>
            {!isValidEmpty ? <div><div class="text-xs text-red-500  mt-2">Esse campo é obrigatório</div></div> :
                !isValidEmail ? <div><div class="text-xs text-red-500  mt-2">O e-mail deve ser válido</div></div>
                    : ''
            }

        </>
    )
}

export default Email