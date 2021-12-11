const Content = () => {
  const handleNameChange = () => {
    const names = ['Bob', 'George', 'John'];
    const int = Math.floor(Math.random() * names.length);
    return names[int];
  };
  return (
    <main>
      <p>Hello {handleNameChange()}</p>
    </main>
  );
};

export default Content;
