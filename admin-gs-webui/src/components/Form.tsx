import React, {ReactNode} from 'react';

export interface FormProps {
    onSubmit: () => void;
    submitText: string;
}

export const Form: React.FC<FormProps> = ({onSubmit, submitText, children}) => (
    <form onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
    }}>
        {children}
        <input type="submit" value={submitText}/>
    </form>
);

export interface FieldProps {
    label: string;
    id: string;
    tooltip?: string;
}

export const Field: React.FC<FieldProps> = ({label, id, tooltip, children}) => (
    <div className="field">
        <label htmlFor={id}>{label} {tooltip && (
            <span className="tooltip" data-tooltip={tooltip}><i className="fas fa-question"/></span>
        )}</label>
        {children}
    </div>
);

export interface IntProps extends FieldProps {
    value: number;
    onChange: (value: number) => void;
    placeholder?: string;
}

export function IntField({value, onChange, id, placeholder, ...field}: IntProps) {
    return (
        <Field id={id} {...field}>
            <input id={id} type="number" value={value} onChange={e => onChange(parseInt(e.target.value))}
                   placeholder={placeholder}/>
        </Field>
    );
}

export interface TextProps extends FieldProps {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
}

export function TextField({value, onChange, id, placeholder, ...field}: TextProps) {
    return (
        <Field id={id} {...field}>
            <input id={id} type="text" value={value} onChange={e => onChange(e.target.value)}
                   placeholder={placeholder}/>
        </Field>
    );
}

export interface SelectProps<T> extends FieldProps {
    options: T[];
    getKey: (item: T) => string;
    getLabel: (item: T) => ReactNode;
    value: T | undefined;
    onChange: (item: T | undefined) => void;
    placeholder: string;
    disabled?: boolean;
}

export function SelectField<T>({options, getKey, value, onChange, id, placeholder, getLabel, disabled, ...field}: SelectProps<T>) {
    return (
        <Field id={id} {...field}>
            <select id={id} value={value && getKey(value)}
                    disabled={disabled}
                    onChange={e => onChange(options.find(opt => getKey(opt) === e.target.value))}>
                <option>{placeholder}</option>
                {options.map((option) => (
                    <option value={getKey(option)} key={getKey(option)}>
                        {getLabel(option)}
                    </option>
                ))}
            </select>
        </Field>
    );
}

type EntitySelectProps<T> = Omit<SelectProps<T>, 'getKey' | 'getLabel'>

export function EntitySelectField<T extends { id: string, name: string }>(props: EntitySelectProps<T>) {
    return <SelectField {...props} getKey={e => e.id} getLabel={e => e.name}/>
}
