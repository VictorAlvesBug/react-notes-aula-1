import { ChangeEvent } from 'react';
import { TextareaStyled } from './styles'

interface TextareaProps{
    value?: string;
    onInput?: (event: Event) => void;
    onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
    autoFocus?: boolean;
    placeholder?: string;
}

export default function Textarea({ value, onInput, ...rest }: TextareaProps){
    return <TextareaStyled {...rest} value={value} />
}