import { TextInput } from 'module/Form/component/TextInput/TextInput';
import { CheckBox } from 'module/Utils/CheckBox/CheckBox';
import { Wrapper } from './TypeHelpItem.styled';

export const TypeHelpItem = ({
  isSelected,
  data: { name, label, details },
}) => (
  <Wrapper key={name}>
    <CheckBox
      value={name}
      label={label}
      name="typeHelp"
      theme="ligth"
      width={'160px'}
    />

    {isSelected && (
      <TextInput
        name={`additional.${name}`}
        placeholder={details.view}
        required={details.required}
      />
    )}
  </Wrapper>
);
