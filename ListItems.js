const ListItems = (props) => {
  const items = props.items.map((item) => (
    <Item key={item.id} value={item} onChange={props.changeStatus} />
  ));

  return (
    <>
      <h4>Twoje zamowienie</h4>
      <ul>{items}</ul>
    </>
  );
};
