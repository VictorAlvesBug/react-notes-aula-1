import { Note } from "../../services/notes/types";
import { formatDate } from "../../services/utils";
import { Container } from "./styles";

interface NoteProps {
  note: Note;
  handleRemoveNote: Function;
}

function CardNote({ note, handleRemoveNote }: NoteProps) {

  const formattedDate = formatDate(new Date(note.date));

  const spanPriority =
    (note.urgent) &&
    <span className="material-icons" id="priority">
      priority_high
    </span>

  return (
    <>
      <Container>
        <p>{formattedDate}</p>
        <p>{note.text}</p>
        { /** !!! implementar renderização condicional */
          spanPriority
        }
        <span
          className="material-icons"
          onClick={(e) => {
            e.stopPropagation();
            handleRemoveNote(note.id);
          }}> delete_forever </span>
      </Container>
    </>
  );
}

export default CardNote;
