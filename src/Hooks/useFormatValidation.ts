// Hook criado para validação de inputs que precisam estar em um 
// determinado formato para serem enviados para API's externas

import { useState } from 'react';

const useFormatValidation = () => {
    const [isValidEmail, setIsValidEmail] = useState(true);
    const [isValidCEP, setIsValidCEP] = useState(true);

    const validateEmail = (email: string) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setIsValidEmail(regex.test(email));
    };

    const validateCEP = (cep: string) => {
        const regex = /^\d{5}-\d{3}$/;
        setIsValidCEP(regex.test(cep));
    };

    const validateDateString = (inputValue: string): string => {
        // Remove caracteres não numéricos
        const numericValue = inputValue.replace(/\D/g, '');
        // Adiciona a máscara dd/mm/aaaa
        if (numericValue.length >= 3 && numericValue.length < 5) {
            return `${numericValue.slice(0, 2)}/${numericValue.slice(2)}`;
        } else if (numericValue.length >= 5) {
            return `${numericValue.slice(0, 2)}/${numericValue.slice(2, 4)}/${numericValue.slice(4, 8)}`;
        }

        return numericValue;
    };

    return { isValidEmail, isValidCEP, validateEmail, validateCEP, validateDateString };
};

export default useFormatValidation;