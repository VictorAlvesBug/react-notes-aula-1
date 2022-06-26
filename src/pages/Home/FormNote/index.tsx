import { ChangeEvent, FormEvent, FormEventHandler, TextareaHTMLAttributes, useState } from "react";
import Button from "../../../components/Button";
import Checkbox from "../../../components/Checkbox";
import { api } from "../../../services/api";
import { Note } from "../../../services/notes/types";
import Textarea from "../Textarea";
import { Form } from "./styles";

interface FormValues {
  text: string;
  urgent: boolean;
}

interface FormNoteProps {
  handleAddNote: (note: Note) => void;
}

function FormNote({ handleAddNote }: FormNoteProps) {
  const [formValues, setFormValues] = useState<FormValues>({
    text: '',
    urgent: false
  });

  const handleChangeText = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setFormValues({...formValues, text: event.target.value})
  };


  const handleChangeUrgent = () => {
    setFormValues({...formValues, urgent: !formValues.urgent})
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const response = await api.post('/notes', formValues);

    handleAddNote(response.data);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Textarea
        value={formValues.text}
        onChange={handleChangeText}
        autoFocus
        placeholder="Insira o texto da nota"
      />
      <Checkbox
        label="Urgente?"
        checked={formValues.urgent}
        handleChange={handleChangeUrgent}
      />
      <Button handleClick={() => {}}>Salvar</Button>
    </Form>
  );
}

export default FormNote;
