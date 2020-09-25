import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { FormFieldWrapper, Label, Input, Icon } from './styles'; 

function FormField({
  label, type, name, value, onChange, suggestions,
}) {
  const fieldId = `id_${name}`;
  const isTypeTextArea = type === 'textarea';
  const tag = isTypeTextArea ? 'textarea' : 'input';

  const hasSuggestion = Boolean(suggestions.length);
  return (
    <FormFieldWrapper>
      <Label htmlFor={fieldId}>
        <Icon>
          <FaSearch size="60%" />
        </Icon>
        <Input
          as={tag}
          id={fieldId}
          type={type}
          value={value}
          name={name}
          onChange={onChange}
          autoComplete={hasSuggestion ? 'off' : undefined}
          list={hasSuggestion ? `sug_${fieldId}` : undefined}
        />
        <Label.Text>
          {label}
          :
        </Label.Text>
        {
          hasSuggestion && (
            <datalist id={`sug_${fieldId}`}>
              {
                suggestions.map((s, i) => (
                  <option value={s.titulo} key={`option_${i}`}>
                    {s.titulo}
                  </option>
                ))
              }
            </datalist>
          )
        }
      </Label>
    </FormFieldWrapper>
  );
}

/*
FormField.defaultProps = {
  type: 'text',
  value: '',
  onChange: () => {},
  suggestions: [],
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  suggestions: PropTypes.arrayOf(PropTypes.string),
};
*/
export default FormField;
