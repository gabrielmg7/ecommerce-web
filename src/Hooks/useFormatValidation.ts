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

    return { isValidEmail, isValidCEP, validateEmail, validateCEP };
};

export default useFormatValidation;