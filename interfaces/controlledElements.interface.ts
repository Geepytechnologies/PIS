import { icons } from "lucide-react";
import { Control, FieldError, FieldValues, Path } from "react-hook-form";

export interface FormInputs {
    [key: string]: string | number | boolean;
}

export interface Rule {
    required?: string | boolean;
    min?: string | number;
    max?: string | number;
    // Add other validation rules as needed
}

export interface ControlledInputProps<TFieldValues extends FieldValues> {
    control: Control<TFieldValues>;
    name: Path<TFieldValues>;
    placeholder: string;
    label?: string;
    type?: string;
    error?: FieldError;
    rules?: Rule;
    isRequired?: boolean;
    accept?: string;
    classNames?: string;
    labelClassNames?: string;
}

export interface ControlledTextAreaProps<TFieldValues extends FieldValues> {
    control: Control<TFieldValues>;
    name: Path<TFieldValues>;
    placeholder: string;
    label?: string;
    error?: FieldError;
    rules?: Rule;
    isRequired?: boolean;
    cols?: number;
    rows?: number;
}

export interface ControlledModifiedInputProps<TFieldValues extends FieldValues> {
    control: Control<TFieldValues>;
    name: Path<TFieldValues>;
    placeholder: string;
    label?: string;
    type?: string;
    error?: FieldError;
    rules?: Rule;
    isRequired?: boolean;
    inputRef?: React.Ref<HTMLInputElement>;
    className?: string;
    onInputChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface ControlledModifiedInputWithIconProps<TFieldValues extends FieldValues> {
    control: Control<TFieldValues>;
    name: Path<TFieldValues>;
    placeholder: string;
    label?: string;
    type?: string;
    error?: FieldError;
    rules?: Rule;
    isRequired?: boolean;
    inputRef?: React.Ref<HTMLInputElement>;
    className?: string;
    asteriskClassName?: string;
    accept?: string;
    icon?: keyof typeof icons;
    iconPosition?: "left" | "right";
    iconClassName?: string;
    onInputChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface SelectOption {
    value: string;
    label: string;
}

export interface ExportableColumn {
    label: string;
    property: string;
}

export interface ControlledSelectProps<TFieldValues extends FieldValues> {
    control: Control<TFieldValues>;
    name: Path<TFieldValues>;
    options: SelectOption[];
    label?: string;
    placeholder?: string;
    error?: FieldError;
    rules?: Rule;
    isRequired?: boolean;
    allowEmpty?: boolean;
    isLoading?: boolean;
    className?: string;
    onEndOfRow?: (_x: boolean) => void;
    onValueChange?: (value: string) => void;
}

export interface ControlledComboBoxProps<TFieldValues extends FieldValues> {
    control: Control<TFieldValues>;
    name: Path<TFieldValues>;
    label?: string;
    placeholder?: string;
    error?: FieldError;
    rules?: Rule;
    options: SelectOption[];
    isRequired?: boolean;
    isLoading?: boolean;
    onEndOfRow?: (_x: boolean) => void;
}

export interface ControlledDatePickerProps<TFieldValues extends FieldValues> {
    control: Control<TFieldValues>;
    name: Path<TFieldValues>;
    label?: string;
    placeHolder?: string;
    error?: FieldError;
    rules?: Rule;
    isRequired?: boolean;
    disableFuture?: boolean;
    dateFormat?: string;
    className?: React.HTMLAttributes<HTMLDivElement>;
    buttonClassName?: string;
    iconClassName?: string;
    calendarClassName?: string;
}

export interface ControlledEditorProps<TFieldValues extends FieldValues> {
    control: Control<TFieldValues>;
    name: Path<TFieldValues>;
    label?: string;
    error?: FieldError;
    rules?: Rule;
    isRequired?: boolean;
}

export interface ControlledMultipleSelectProps<TFieldValues extends FieldValues> {
    control: Control<TFieldValues>;
    name: Path<TFieldValues>;
    label?: string;
    placeholder?: string;
    error?: FieldError;
    rules?: Rule;
    options: SelectOption[];
    className?: string;
    buttonClassName?: string;
    isRequired?: boolean;
    displaySelected: boolean;
    isLoading?: boolean;
    onEndOfRow?: (_x: boolean) => void;
}