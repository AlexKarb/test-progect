import { Input } from './TypeHelp.styled';

export const AdditionalInputInfo = ({ selected, service }) => {
  const { type, details } = service;
  const { inputType, required, view } = details;
  const isTypeSelected = selected?.find(s => s === type);

  return (
    <>
      {isTypeSelected && (
        <Input
          type={inputType}
          name={`additional.${type}`}
          required={required}
          placeholder={view}
          autoComplete={'off'}
        />
      )}
    </>
  );
};
