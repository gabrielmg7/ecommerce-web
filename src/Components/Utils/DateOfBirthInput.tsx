import { TextField } from "@mui/material";
import React, { ChangeEvent } from "react";


interface DateOfBirthInputProps {
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const DateOfBirthInput: React.FunctionComponent<DateOfBirthInputProps> = ({ value, onChange }) => {
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        const formattedValue = formatDateString(inputValue);

        onChange({
            target: {
                name: 'dataNascimento',
                value: formattedValue,
            },
        } as ChangeEvent<HTMLInputElement>);
    };

    const formatDateString = (inputValue: string): string => {
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
    return (
        <TextField
            name="dataNascimento"
            label="Data de Nascimento"
            placeholder="dd/mm/aaaa"
            value={value}
            onChange={handleInputChange}
            fullWidth
        />
    );
};