const Header = (props) => {
  const activeItems = props.items.filter((item) => item.active);
  const toPay = activeItems.length * 10;

  return (
    <header>
      <h2>Wielkosc zamowienia: {activeItems.length}</h2>
      <h2>Do zapłaty: {toPay}</h2>
    </header>
  );
};
