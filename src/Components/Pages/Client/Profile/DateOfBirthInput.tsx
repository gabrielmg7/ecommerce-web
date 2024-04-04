import { TextField } from "@mui/material";
import React, { ChangeEvent } from "react";
import useFormatValidation from "../../../../hooks/useFormatValidation";


interface DateOfBirthInputProps {
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const DateOfBirthInput: React.FunctionComponent<DateOfBirthInputProps> = ({ value, onChange }) => {

    const { validateDateString } = useFormatValidation();

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        const formattedValue = validateDateString(inputValue);

        onChange({
            target: {
                name: 'dataNascimento',
                value: formattedValue,
            },
        } as ChangeEvent<HTMLInputElement>);
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