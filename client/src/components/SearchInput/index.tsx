import React, {
  ChangeEventHandler,
  FC,
  useState,
  KeyboardEvent,
  useRef
} from 'react';
import { DeleteIcon, Container } from './styles';

interface Props {
  onKeyDown: (e: KeyboardEvent<HTMLInputElement>) => void;
}

const SearchInput: FC<Props> = ({ onKeyDown }) => {
  const [text, setText] = useState('');
  const inputEl = useRef<HTMLInputElement>(null);

  const onChange: ChangeEventHandler<HTMLInputElement> = e => {
    setText(e.target.value);
  };

  const onClick = () => {
    setText('');
    if (inputEl.current) {
      inputEl.current.focus();
    }
  };

  return (
    <Container $text={text.length}>
      <input
        type='search'
        placeholder='어떤 책을 읽으셨나요?'
        value={text}
        onChange={onChange}
        onKeyDown={onKeyDown}
        ref={inputEl}
        autoFocus
      />
      <DeleteIcon onClick={onClick} />
    </Container>
  );
};

export default SearchInput;
