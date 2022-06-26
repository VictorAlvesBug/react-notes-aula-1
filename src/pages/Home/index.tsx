import { EventHandler, useCallback, useEffect, useState } from 'react';
import CardNote from '../../components/CardNote';
import FabButton from '../../components/FabButton';
import FormNote from './FormNote';
import Modal from '../../components/Modal';
import { NotesService } from '../../services/notes/note-service';
import { Note } from '../../services/notes/types';
import { Container } from './styles';
import Textarea from './Textarea';
import Button from '../../components/Button';
import { api } from '../../services/api';
import SpinLoader from '../../components/SpinLoader';

/* Componente onde ficam os elementos da aplicação */
export default function Home() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [isModalOpen, setModalOpen] = useState(false);

  /*
  O hook 'useEffect' pode receber 1 ou 2 argumentos.

  --> O primeiro argumento é uma função de callback que será executada como 
      forma de efeito colateral (side effect) em determinado momento.

      A função que o useEffect recebe por parâmetro não pode ser async.
      Por conta disso, para rodar uma função async no useEffect é necessário 
      fazer da seguinte forma:
      (async () => {})();

  --> O segundo argumento é uma array de dependências. Este argumento é 
      responsável por definir quando a função de callback será executada:

      - Caso o segundo argumento não seja informado, a função de callback será 
        executada quando o componente for renderizado e sempre que alguma 
        variável do componente sofrer qualquer alteração de valor.
        Ex: useEffect(() => {});

      - Caso seja passado uma array vazia como segundo argumento, a função de 
        callback será executada apenas na renderização do componente.
        Ex: useEffect(() => {}, []);

      - Ao informar uma array com um ou mais elementos, a função de callback 
        será executada quando o componente for renderizado e sempre que ao 
        menos uma das variáveis listadas nas dependências sofrer alteração.
        Ex: useEffect(() => {}, [var1, var2]);

      É uma boa prática declarar na lista de dependências (2º parâmetro do 
      useEffect) todas as variáveis utilizadas dentro da função do 
      useEffect.
  */

  useEffect(() => {
    //(async () => {})();

    (async () => {
      const response = await api.get('/notes');
      // response.data --> body da requisição

      setNotes(response.data);
      setLoading(false);
    })();

    // O return da função do useEffect será executada quando o componente for
    // 'desmontado' (equivalente ao didUnmount)
    return () => {
      // Ex: se desinscrever
    };
  }, []);

  /*
  Quando declaramos uma função de callback da forma convencional, sempre que o 
  componente atual é renderizado as funções de callback são redeclaradas, 
  causando a renderização dos componentes filho e provocando um efeito cascata 
  entre os componentes internos.
  O hook 'useCallback' evita a redeclaração de funções de callback, evitando 
  assim que o componente filho seja renderização novamente.
  O primeiro argumento deste hook é a declaração da função de callback.
  O segundo argumento é um array que define as dependências da função.
  Caso alguma das dependências tiver seu valor alterado, a função é redeclarada.
  */

  const handleRemoveNote = useCallback((idToRemove: number) => {
    setNotes((prevState) => prevState.filter((note) => note.id !== idToRemove));
    api.delete(`/notes/${idToRemove}`);
  }, []);

  /* Utilizar o atributo 'key' sempre que for necessário exibir uma lista de 
  componentes similares, para servir como a identidade de cada componente */
  const listNotes = notes.map((note) => (
    <CardNote key={note.id} note={note} handleRemoveNote={() => handleRemoveNote(note.id)} />
  ));

  const handleAddNote = useCallback((note: Note) => {
    setNotes((prevState) => [...prevState, note]);
    setModalOpen(false);
  }, []);

  //if (isLoading) return <div>Loading...</div>;
  if (isLoading) return <SpinLoader />;

  return (
    <>
      {/* !!! implementar modal */}
      <Container>
        <div className="list-notes">{listNotes}</div>
        <FabButton
          handleClick={() => {
            setModalOpen(true);
          }}
        >
          +
        </FabButton>
        <Modal
          title="Nova nota"
          handleClose={() => {
            setModalOpen(false);
          }}
          isOpen={isModalOpen}
        >
          <FormNote handleAddNote={handleAddNote} />
        </Modal>
      </Container>
    </>
  );
}
