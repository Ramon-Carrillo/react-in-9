import Header from './Header';
import SearchItem from './SearchItem';
import AddItem from './AddItem';
import Content from './Content';
import Footer from './Footer';
import { useState } from 'react';

function App() {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('shoppinglist')));
  const [newItem, setNewItem] = useState('');
  const [search, setSearch] = useState('');
  const setAndSaveItem = (newItems) => {
    setItems(newItems);
    localStorage.setItem('shoppinglist', JSON.stringify(newItems));
  };

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const listItems = [...items, myNewItem];
    setAndSaveItem(listItems);
  };

  const handleChecked = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item,
    );
    setAndSaveItem(listItems);
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setAndSaveItem(listItems);
  };

  const handleSubmit = (e) => {
    e.preventDefault(e);
    if (!newItem) return;
    addItem(newItem);
    setNewItem('');
  };

  return (
    <div className='App'>
      <Header title='Groceries' />
      <AddItem newItem={newItem} setNewItem={setNewItem} handleSubmit={handleSubmit} />
      <SearchItem search={search} setSearch={setSearch} />
      <Content
        items={items.filter((item) => item.item.toLowerCase().includes(search.toLowerCase()))}
        handleChecked={handleChecked}
        handleDelete={handleDelete}
      />
      <Footer length={items.length} />
    </div>
  );
}

export default App;
