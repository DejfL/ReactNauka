// class App extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       text: "tes",
//     };
//   }

//   handleClick = () => {
//     this.setState({
//       text: this.state.text + "a",
//     });
//   };

//   render() {
//     return (
//       <>
//         <button onClick={this.handleClick}>Klik</button>
//         <PanelResult text={this.state.text} />
//       </>
//     );
//   }
// }

// const PanelResult = (props) => {
//   return <h1>{props.text}</h1>;
// };

/////////////////////////////////////////////////////////////

// class App extends React.Component {
//   state = {
//     value: "",
//   };

//   chandleInputChange = (e) => {
//     this.setState({
//       value: e.target.value,
//     });
//   };

//   resetValue = () => {
//     this.setState({ value: "" });
//   };

//   render() {
//     return (
//       <>
//         <input
//           value={this.state.value}
//           onChange={this.chandleInputChange}
//           type="text"
//         />
//         <button onClick={this.resetValue}>Reset</button>
//         <h1 className="title">{this.state.value}</h1>
//       </>
//     );
//   }
// }

/////////////////////////////////////////////

// class App extends React.Component {
//   state = {
//     showText: false,
//   };

//   get buttonText() {
//     if (this.state.showText) {
//       return "Ukryj";
//     } else {
//       return "Pokaz";
//     }
//   }

//   handleClick = () => {
//     this.setState((prevState) => ({
//       showText: !prevState.showText,
//     }));
//   };

//   render() {
//     return (
//       <>
//         <button onClick={this.handleClick}>{this.buttonText}</button>
//         {this.state.showText ? <p>asdsadsasad</p> : null}
//       </>
//     );
//   }
// }

///////////////////////////////////

// class App extends React.Component {
//   state = {
//     count: 0,
//     value: this.props.value,
//   };

//   handleClick = (type) => {
//     if (type == "increment") {
//       this.increment();
//     } else if (type == "decrement") {
//       this.decrement();
//     } else if ((type = "reset")) {
//       this.resetValue();
//     }

//     this.setState({
//       count: this.state.count + 1,
//     });
//   };

//   resetValue = () => {
//     this.setState({
//       value: 0,
//     });
//   };

//   increment = () => {
//     this.setState({
//       value: this.state.value + 1,
//     });
//   };

//   decrement = (test) => {
//     this.setState({
//       value: this.state.value - 1,
//     });
//   };

//   render() {
//     return (
//       <>
//         <h1>{this.props.name}</h1>
//         <MathButton name="-1" click={() => this.handleClick("decrement")} />
//         <MathButton name="+1" click={() => this.handleClick("increment")} />
//         <MathButton name="reset" click={() => this.handleClick("reset")} />
//         <ResultPanel value={this.state.value} count={this.state.count} />
//       </>
//     );
//   }

//   static defaultProps = {
//     name: "Appka",
//   };
// }

// const MathButton = (props) => {
//   return <button onClick={props.click}>{props.name}</button>;
// };

// const ResultPanel = (props) => {
//   return (
//     <>
//       <h1>Wynik: {props.value}</h1>
//       {props.value > 10 ? <span>uuuu</span> : null}
//       <h1>Liczbka klikow: {props.count}</h1>
//     </>
//   );
// };

// const startValue = parseInt(10);

//////////////////////////////////////////

// class App extends React.Component {
//   state = {
//     isCheckBoxChecked: false,
//   };

//   handleCheckBox = () => {
//     this.setState({
//       isCheckBoxChecked: !this.state.isCheckBoxChecked,
//     });
//   };

//   displayMessage = () => {
//     if (this.state.isCheckBoxChecked) {
//       return <PositiveMessage />;
//     } else {
//       return <NegativeMessage />;
//     }
//   };

//   render() {
//     console.log(this.state.isCheckBoxChecked);
//     return (
//       <>
//         <h1>Kup bilet na horror roku!</h1>
//         <input
//           type="checkbox"
//           id="ageCheckBox"
//           checked={this.state.isCheckBoxChecked}
//           onChange={this.handleCheckBox}
//         />
//         <label htmlFor="ageCheckBox">Mam 18 lat</label>
//         {this.displayMessage()}
//       </>
//     );
//   }
// }

// const PositiveMessage = () => {
//   return <p>Mozesz obejrzec film</p>;
// };

// const NegativeMessage = () => {
//   return <p>Nie mozesz ogladac</p>;
// };

///////////////////////////////////////////////

// class App extends React.Component {
//   state = {
//     availableProducts: 7,
//     shoppingCart: 0,
//   };

//   handleRemoveFromCard = () => {
//     this.setState({
//       shoppingCart: this.state.shoppingCart - 1,
//     });
//   };

//   handleAddToCard = () => {
//     this.setState({
//       shoppingCart: this.state.shoppingCart + 1,
//     });
//   };

//   handleBuy = () => {
//     this.setState({
//       availableProducts: this.state.availableProducts - this.state.shoppingCart,
//       shoppingCart: 0,
//     });
//   };

//   render() {
//     const { shoppingCart, availableProducts } = this.state;
//     const syle = this.state.shoppingCart === 0 ? { opacity: 0.3 } : {};

//     return (
//       <>
//         <button
//           onClick={this.handleRemoveFromCard}
//           disabled={shoppingCart == 0 ? true : false}
//         >
//           -
//         </button>
//         <span style={syle}>{shoppingCart}</span>
//         <button
//           onClick={this.handleAddToCard}
//           disabled={shoppingCart == availableProducts ? true : false}
//         >
//           +
//         </button>
//         {shoppingCart > 0 && <button onClick={this.handleBuy}>Kup</button>}
//       </>
//     );
//   }
// }

///////////////////////////////////////

// const data = {
//   users: [
//     {
//       id: 1,
//       age: 29,
//       name: "Marek",
//       sex: "male",
//     },
//     {
//       id: 2,
//       age: 19,
//       name: "Klaudia",
//       sex: "female",
//     },
//     {
//       id: 3,
//       age: 25,
//       name: "Jarek",
//       sex: "male",
//     },
//     {
//       id: 4,
//       age: 25,
//       name: "Pauliina",
//       sex: "female",
//     },
//   ],
// };

// const Item = ({ user }) => (
//   <div className="userInfo">
//     <h1>{user.name}</h1>
//     <p>Informacje o uzytkowniku</p>
//     <p>
//       Wiek uzytkownika: <strong>{user.age}</strong>
//     </p>
//     <p>Płec uzytkownika: {user.sex}</p>
//   </div>
// );

// class App extends React.Component {
//   state = {
//     select: "all",
//   };

//   usersList = () => {
//     let users = this.props.data.users;

//     if (this.state.select === "male") {
//       users = users.filter((user) => user.sex == "male");
//     } else if (this.state.select == "female") {
//       users = users.filter((user) => user.sex == "female");
//     }

//     return (users = users.map((user) => <Item key={user.id} user={user} />));
//   };

//   handleUsersFilter = (filter) => {
//     this.setState({
//       select: filter,
//     });
//   };

//   render() {
//     return (
//       <>
//         <button onClick={() => this.handleUsersFilter("all")}>
//           Pokaz wszystko
//         </button>
//         <button onClick={() => this.handleUsersFilter("female")}>
//           Pokaz baby
//         </button>
//         <button onClick={() => this.handleUsersFilter("male")}>
//           Pokaz chlopy
//         </button>
//         {this.usersList()}
//       </>
//     );
//   }
// }

// ReactDOM.render(<App data={data} />, document.getElementById("root"));

// class App extends React.Component {
//   state = {
//     items: [
//       { id: 1, name: "herbata", active: true },
//       { id: 2, name: "ziemniaki", active: false },
//       { id: 3, name: "kasza", active: true },
//       { id: 4, name: "mefedron", active: false },
//       { id: 5, name: "chlebek", active: false },
//       { id: 6, name: "kasza", active: true },
//     ],
//   };

//   handleChangeStatus = (id) => {
//     const items = this.state.items.map((item) => {
//       if (item.id === id) {
//         item.active = !item.active;
//       }

//       return item;
//     });

//     this.setState({
//       items: items,
//     });
//   };

//   render() {
//     return (
//       <>
//         <Header items={this.state.items}></Header>
//         <ListItems
//           items={this.state.items}
//           changeStatus={this.handleChangeStatus}
//         />
//       </>
//     );
//   }
// }

//////////////////////////////////////////

// class App extends React.Component {
//   state = {
//     city: "Dzn",
//     description: "",
//     isLoved: false,
//     number: 2,
//   };

//   handleChange = (event) => {
//     if (event.target.type === "checkbox") {
//       this.setState({
//         [event.target.name]: event.target.checked,
//       });
//     } else {
//       this.setState({
//         [event.target.name]: event.target.value,
//       });
//     }
//   };

//   render() {
//     return (
//       <div>
//         <label>
//           Podaj miasto:
//           <input
//             name="city"
//             value={this.state.city}
//             onChange={this.handleChange}
//             type="text"
//           />
//         </label>

//         <br />
//         <label>
//           Opis miasta:
//           <textarea
//             name="description"
//             value={this.state.description}
//             onChange={this.handleChange}
//             rows="5"
//           ></textarea>
//         </label>
//         <br />
//         <label>
//           Czy lubisz to miasto?
//           <input
//             name="isLoved"
//             checked={this.state.isLoved}
//             onChange={this.handleChange}
//             type="checkbox"
//           />
//         </label>
//         <br />
//         <label>
//           Ile razy
//           <select
//             name="number"
//             value={this.state.number}
//             onChange={this.handleChange}
//           >
//             <option value="1">1</option>
//             <option value="2">2</option>
//             <option value="3">3</option>
//             <option value="more">wiecej</option>
//           </select>
//         </label>
//       </div>
//     );
//   }
// }

//////////////////////////////////////////

// const Cash = (props) => {
//   const value =
//     props.cash <= 0
//       ? ""
//       : ((props.cash / props.ratio) * props.price).toFixed(2);

//   return (
//     <div>
//       {props.title}
//       {value}
//     </div>
//   );
// };

// class App extends React.Component {
//   state = {
//     amount: "",
//     product: "electricity",
//   };

//   static defaultProps = {
//     currencies: [
//       {
//         id: 1,
//         name: "euro",
//         ratio: 4.3,
//         title: "Wartość w euro:",
//       },
//       {
//         id: 2,
//         name: "dolar",
//         ratio: 5.3,
//         title: "Wartosc w dolarach",
//       },
//       {
//         id: 3,
//         name: "funt",
//         ratio: 8.3,
//         title: "Wartosc w funtach",
//       },
//     ],
//     prices: {
//       electricity: 0.51,
//       gas: 4.82,
//       oranges: 3.75,
//     },
//   };

//   handleChange = (e) => {
//     this.setState({
//       amount: e.target.value,
//     });
//   };

//   handleProductChange = (e) => {
//     this.setState({
//       product: e.target.value,
//       amount: "",
//     });
//   };

//   insertSuffix = () => {
//     if (this.state.product === "electricity") {
//       return <em>Kw</em>;
//     } else if (this.state.product === "gas") {
//       return <em>Litry</em>;
//     } else if (this.state.product === "oranges") {
//       return <em>Kg</em>;
//     }
//   };

//   selectPrice = (product) => {
//     return this.props.prices[product];
//   };

//   render() {
//     const price = this.selectPrice(this.state.product);

//     const calculators = this.props.currencies.map((item) => (
//       <Cash
//         key={item.id}
//         title={item.title}
//         cash={this.state.amount}
//         ratio={item.ratio}
//         price={price}
//       />
//     ));

//     return (
//       <div className="app">
//         <label>
//           Wybierz produkt:
//           <select
//             value={this.state.product}
//             onChange={this.handleProductChange}
//           >
//             <option value="electricity">prad</option>
//             <option value="gas">benzyna</option>
//             <option value="oranges">pomaracze</option>
//           </select>
//         </label>
//         <br />
//         <label>
//           <input
//             type="number"
//             value={this.state.amount}
//             onChange={this.handleChange}
//           />
//           {this.insertSuffix()}
//         </label>
//         {calculators}
//       </div>
//     );
//   }
// }

///////////////////////////////////////////

// class App extends React.Component {
//   state = {
//     inputText: "",
//     wylosowanaWrozba: "",
//     wrozby: ["pierwsza", "druga", "trzecia"],
//   };

//   handleShowButton = () => {
//     const wrozba =
//       this.state.wrozby[Math.floor(Math.random() * this.state.wrozby.length)];
//     this.setState({
//       wylosowanaWrozba: wrozba,
//     });
//   };

//   handleAddButton = () => {
//     if (this.state.inputText != "") {
//       this.setState({
//         wrozby: this.state.wrozby.concat(this.state.inputText),
//         inputText: "",
//       });
//     }
//   };

//   handleTextChanged = (e) => {
//     this.setState({
//       inputText: e.target.value,
//     });
//   };

//   render() {
//     return (
//       <>
//         <button onClick={this.handleShowButton}>Zobacz</button>
//         <br />
//         <input
//           value={this.state.inputText}
//           onChange={this.handleTextChanged}
//           type="text"
//         />
//         <button onClick={this.handleAddButton}>Dodaj</button>
//         <br />
//         {!!this.state.wylosowanaWrozba ? (
//           <h4>{this.state.wylosowanaWrozba}</h4>
//         ) : null}
//       </>
//     );
//   }
// }

///////////////////////////////////////

// class App extends React.Component {
//   state = {
//     persons: [
//       {
//         id: 1,
//         name: "Dawid",
//       },
//       {
//         id: 2,
//         name: "Paweł",
//       },
//       {
//         id: 3,
//         name: "Klaudia",
//       },
//       {
//         id: 4,
//         name: "Rawał",
//       },
//     ],
//   };

//   handleDeletePerson = (id) => {
//     const newArray = this.state.persons.filter((e) => e.id !== id);

//     this.setState({
//       persons: newArray,
//     });

//     console.table(newArray);
//   };

//   render() {
//     const personsList = this.state.persons.map((person) => (
//       <ListItem
//         key={person.id}
//         person={person}
//         delete={this.handleDeletePerson}
//       />
//     ));

//     return (
//       <>
//         <ul>{personsList}</ul>
//       </>
//     );
//   }
// }

// const ListItem = (props) => {
//   return (
//     <li key={props.person.id}>
//       <span>{props.person.name}</span>
//       <button onClick={() => props.delete(props.person.id)}>Usun</button>
//     </li>
//   );
// };

///////////////////////////////////////////////////

// class App extends React.Component {
//   state = { value: 1, ratio: 2 };

//   handleButtonClick = () => {
//     console.log(1);
//     this.setState({
//       value: (this.state.value * this.state.ratio).toFixed(0),
//     });
//   };

//   componentDidUpdate() {
//     console.log(2);
//     if (this.state.value >= 1000 && this.state.ratio === 2) {
//       this.setState({
//         ratio: 0.5,
//       });
//     } else if (this.state.value <= 1 && this.state.ratio === 0.5) {
//       this.setState({
//         ratio: 2,
//       });
//     }
//   }

//   render() {
//     return (
//       <>
//         <button onClick={this.handleButtonClick}>Pomoz przez 2</button>
//         <h1>{this.state.value}</h1>
//       </>
//     );
//   }
// }

class App extends React.Component {
  state = {
    clockIsActive: true,
  };

  handleClick = () => {
    this.setState({ clockIsActive: !this.state.clockIsActive });
  };

  render() {
    return (
      <>
        {this.state.clockIsActive && <Clock />}
        <button onClick={this.handleClick}>
          {this.state.clockIsActive ? "pokaz" : "ukryj"}
        </button>
      </>
    );
  }
}

class Clock extends React.Component {
  interval = "";

  state = { time: this.getTime() };

  componentDidMount() {
    this.interval = setInterval(this.tick, 1000);
  }

  // componentWillUnmount() {
  //   clearInterval(this.interval);
  // }

  getTime() {
    const date = new Date();

    return {
      hours: date.getHours(),
      minutes: date.getMinutes(),
      seconds: date.getSeconds(),
    };
  }

  tick = () => {
    this.setState({
      time: this.getTime(),
    });
  };

  render() {
    const { hours, minutes, seconds } = this.state.time;

    return (
      <h1>
        {hours}:{minutes}:{seconds}
      </h1>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
