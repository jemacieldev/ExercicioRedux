
import InputMask from "react-input-mask";
import styled from "styled-components";

const MaskedInput = styled(InputMask)`
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 100%;
    box-sizing: border-box;
`;

interface PhoneInputProps {
    value: string;
    onChange: (value: string) => void;
}

const PhoneInput: React.FC<PhoneInputProps> = ({ value, onChange }) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value);
    };

    return (
        <MaskedInput
            mask="(99) 99999-9999"
            value={value}
            onChange={handleChange}
            placeholder="(00) 00000-0000"
        />
    );
};

export default PhoneInput;
