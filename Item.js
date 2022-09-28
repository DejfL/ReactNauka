const Item = (props) => {
  return (
    <li
      onClick={() => props.onChange(props.value.id)}
      className={props.value.active ? "enabled" : "disabled"}
    >
      {props.value.name}
    </li>
  );
};
