import { getSearchBook } from 'api/bookApi';
import SearchedBookList from 'components/SearchedBookList';
import SearchInput from 'components/SearchInput';
import { fetcher } from 'queryClient';
import React, {
  MouseEventHandler,
  KeyboardEventHandler,
  useState
} from 'react';
import { Container } from './styles';
import { CREATE_BOOK } from 'graphql/book';
import { useHistory } from 'react-router-dom';
import ButtonsContainer from 'containers/ButtonsContainer';

interface SearchedBook {
  author: string;
  image: string;
  isbn: string;
  title: string;
  description?: string;
  discount?: string;
  link?: string;
  price?: string;
  pubdate?: string;
  publisher?: string;
}

const trimedTitle = (title: string) => {
  let newTitle = '';
  let copyTitle = title.split('');
  let isTitle = true;
  let isLparen = false;

  for (let i = 0; i < copyTitle.length; i++) {
    if (copyTitle[i] === '<') isTitle = false;
    if (copyTitle[i] === '(') isLparen = true;
    if (isTitle && !isLparen) newTitle += copyTitle[i];
    if (copyTitle[i] === '>') isTitle = true;
    if (copyTitle[i] === ')') isLparen = false;
  }
  return newTitle;
};

export default function SearchingBookContainer() {
  const [searchedBook, setSearchedBook] = useState([
    { id: '', title: '', author: '', image: '', isChecked: false }
  ]);
  const [isFail, setIsFail] = useState(false);
  const [selectedBook, setSelectedBook] = useState({
    id: '',
    title: '',
    author: '',
    image: ''
  });
  const history = useHistory();

  const onKeyPress: KeyboardEventHandler<HTMLInputElement> = async e => {
    const element = e.currentTarget as HTMLInputElement;
    const value = element.value;

    if (e.key !== 'Enter' || !value.trim()) return null;
    const res = await getSearchBook(value);
    const newRes = res.map((res: SearchedBook) => {
      return {
        id: res.isbn,
        title: trimedTitle(res.title),
        author: res.author,
        image: res.image,
        isChecked: false
      };
    });
    setSearchedBook(newRes);
    newRes.length ? setIsFail(false) : setIsFail(true);
  };

  const onClick = (id: string) => {
    const newData = searchedBook.map(old =>
      old.id === id
        ? { ...old, isChecked: !old.isChecked }
        : { ...old, isChecked: false }
    );
    setSearchedBook(newData);

    const newSelectedBook = newData.filter(book => book.id === id);
    getSelectedBook(newSelectedBook);
  };

  const getSelectedBook = (
    newSelectedBook: Array<{
      id: string;
      title: string;
      author: string;
      image: string;
    }>
  ) => {
    const { id, title, author, image } = newSelectedBook[0];
    if (selectedBook.id === id)
      setSelectedBook({ id: '', title: '', author: '', image: '' });
    else setSelectedBook({ id, title, author, image });
  };

  const onSubmit: MouseEventHandler<HTMLButtonElement> = async () => {
    if (!selectedBook.id) return null;
    const { title, author, image } = selectedBook;
    await fetcher(CREATE_BOOK, { title, author, image });
    history.push('/');
  };

  return (
    <>
      <ButtonsContainer
        pageName='needToContirm'
        onSubmit={onSubmit}
        readyToSubmit={!!selectedBook.id}
      />
      <Container>
        <SearchInput onKeyPress={onKeyPress} />
        <SearchedBookList
          searchedBook={searchedBook}
          onClick={onClick}
          isFail={isFail}
        />
      </Container>
    </>
  );
}
