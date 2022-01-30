import ReactDom , {render} from 'react-dom';
import React from 'react';
import styled from 'styled-components';
// import ExpenseItem from './expense';

// const expenses = [
//   {
//     id: 'e1',
//     title: 'Toilet Paper',
//     amount: 94.12,
//     date: new Date(2020, 7, 14),
//   },
//   { 
//     id: 'e2',
//     title: 'New TV', 
//     amount: 799.49, 
//     date: new Date(2021, 2, 12) 
//   },
//   {
//     id: 'e3',
//     title: 'Car Insurance',
//     amount: 294.67,
//     date: new Date(2021, 2, 28),
//   },
//   {
//     id: 'e4',
//     title: 'New Desk (Wooden)',
//     amount: 450,
//     date: new Date(2021, 5, 12),
//   },
// ];

// function ExpenseItems()
// {
//   return (
//     <section>
//       <ExpenseItem />
//     </section>
//   );
// }

// class Clock extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {
//       date: new Date()
//     }
//   }
//   componentDidMount() {
//     this.timerID = setInterval(
//       ()=>this.tick(),
//       1000
//     );
//   }
//   componentDidUnmount() {
//     clearInterval(this.timerId);
//   }
//   tick() {
//     this.setState({
//       date: new Date()
//     })
//   }
//   render(){
//     return(
//       <div>
//         <h1>{this.state.date.toLocaleTimeString()}</h1>
//       </div>
//     );
//   }
// }



//   function Tick(){
//     ReactDom.render(
//       <Clock />,
//       document.getElementById("root1")
//     )

//   }


//conditional operators

  // function UserGreetings(props) {
  //   return(
  //     <div>
  //       <h1>Hi, Welcome</h1>
  //     </div>
  //   );
  // }

  // function JustGreetings(props) {
  //   return(
  //     <div>
  //       <h1>Please login</h1>
  //     </div>
  //   );
  // }

  // class GreetMe extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     this.state={
  //     isToggle: true,
  //     };
  //    this.changeGreeting = this.changeGreeting.bind(this)
  //   }
  //   changeGreeting () {
  //     const toggleVal = this.state.isToggle;
  //     this.setState({
  //       isToggle: !toggleVal
  //     })
  //   }
  //   render() {
  //     return(
  //       <div>
  //         <h2 onClick={this.changeGreeting}>Change msg</h2>
  //         {(this.state.isToggle) ? <JustGreetings /> : <UserGreetings />}
  //       </div>
  //     );
  //   }
    
  // }


  //lists and props

  // const ListItems = props => {
  //   const numbers = props.numbers;
  //   const listItems = numbers.map((number)=> {
  //     return (<li key={number.toString()} id={number.toString(  )}>{number}</li>)
  //   })
  //   return(
  //     <ul>{listItems}</ul>
  //   )
  // }

  // const numbers = [1,2,3,4,5];

  //creating a form 
  // class Form extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       value: 'hi',
  //       options: []
  //     };
  //     this.handleChange = this.handleChange.bind(this);
  //     this.handleSubmit = this.handleSubmit.bind(this);
  //     this.handleSelect = this.handleSelect.bind(this);

  //   }
  //   handleChange(e) {
  //     this.setState({
  //       value : e.target.value

  //     })
  //   }
  //   handleSubmit(e) {
  //     e.preventDefault();
  //     console.log(`name ${this.state.value} options ${this.state.options}`)
  //   }
  //   handleSelect(e) {
  //     this.setState({
  //       options: e.target.value
  //     });
  //   }
  //   render(){
  //     return (
  //       <form onSubmit={this.handleSubmit}>
  //       <label>
  //         Name
  //       </label>
  //       <input type="text" onChange={this.handleChange} value={this.state.value} />
  //       <select multiple={true}  value={[]} onChange={this.handleSelect}>
  //       <option value="a">a</option>
  //       <option value="d">d</option>
  //       <option value="s">s</option>
  //       <option value="v">v</option>
  //       </select>
  //       <button type="submit">Submit</button>
  //     </form>
  //     )
  //   }
  // }

//lifting state up
// function BoilingVerdict(props) {
//   if(props.celsius >= 100) {
//     return <p>The water would boil</p>;
//   } 
//   return <p>The water would not boil</p>
// }

// class Temperature extends React.Component {
//   constructor(props) {

//   }
//   render() {
//     return(
//       <div>
//       <legend>
//       Enter temperature in Celsius:
//     </legend>
//     <input 
//     value={this.props.temperature}
  
//     />
//       </div>

//     )
//   }
// }
// const scaleNames = {
//   c: 'Celsius',
//   f: 'Fahrenheit'
// };

// function toCelsius(fahrenheit) {
//   return (fahrenheit - 32) * 5 / 9;
// }
// function toFahrenheit(celsius) {
//   return (celsius * 9 / 5) + 32;
// }

// function tryConvert(temperature, convert) {
//   const input = parseFloat(temperature);
//   if(Number.isNaN(input)){
//     return '';
//   }
//   const output = convert(input);
//   const rounded = Math.round(output * 1000) / 1000;
//   return rounded.toString();
// }

// class TemperatureInput extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleChange = this.handleChange.bind(this);
//   }
//   handleChange(e) {
//     this.props.onTemperatureChange(e.target.value)
//   }
//   render(){
//     const temperature = this.props.temperature;
//     const scale = this.props.scale;
//     return(
//       <fieldset>
//         <legend>
//           Enter temperature in {scaleNames[scale]}
//         </legend>
//         <input value={temperature} onChange={this.handleChange} />
//       </fieldset>
//     );
//   }
// }
// class Calculator extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
//     this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
//     this.state = {
//       temperature: '',
//       scale: ''
//     };
//   }
//   handleCelsiusChange(temperature) {
//     this.setState({
//       scale: 'c',
//       temperature
//     })
//   }
//   handleFahrenheitChange(temperature) {
//     this.setState({
//       scale: 'f',
//       temperature
//     })
//   }
//   render(){
//     const scale = this.state.scale;
//     const temperature = this.state.temperature;
//     const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
//     const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
//     return(
//       <fieldset>
//        <TemperatureInput scale="c" 
//         temperature={celsius}
//         onTemperatureChange={this.handleCelsiusChange}
//        />
//        <TemperatureInput scale="f"
//         temperature = {fahrenheit}
//         onTemperatureChange = {this.handleFahrenheitChange}
//        />
//        <BoilingVerdict
//        celsius={parseFloat(celsius)}
//        />
//       </fieldset>
//     )
//   }
// }
const PRODUCTS = [
  {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
  {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
  {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
  {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
  {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
  {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];

class ProductRow extends React.Component {

  render(){
    const DIV = styled.div`
    display: flex;
    justify-content: space-between;
    font-weight: bold;
    `;
    const product = this.props.product;
    const name = product.stocked ? product.name :
    <span style={{color: 'red'}} >
      {product.name}
    </span>
    return(
      
        <tr>
          <td>{name}</td>
          <td>{product.price}</td>
        </tr>
    )
  }
}

class ProductCategoryRow extends React.Component {

  render() {
    const category = this.props.category;
    return(
      <tr>
        <th colSpan="2">
          {category}
        </th>
      </tr>
    )
  }
}

class ProductTable extends React.Component {

  render() {
    const rows = [];
    let lastCategory = null;
    this.props.products.forEach((product) => {
      if(product.name.indexOf(this.props.filterText) === -1){
        return
      }
      if(this.props.inStockOnly && !product.stocked){
        return
      } 
      if(product.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow 
          category={product.category}
          key={product.category}
          />
        );
      }
      rows.push(
        <ProductRow
        product={product}
        key={product.name}
        />
      )
      lastCategory = product.category;
    })
    return(
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    )
  }
}

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);

  }
  handleFilterTextChange(event) {
    this.props.onFilterTextChange(event.target.value);
  }
  handleInStockChange(event) {
    this.props.onInStockChange(event.target.value);
  }

  render(){
    return(
      <form>
        <input type="text" placeholder='Search....'  
        value={this.props.filterText}
        onChange={this.handleFilterTextChange}
        
        />
        <p>
          <input type='checkbox' checked={this.props.inStockOnly}
          
          onChange={this.handleInStockChange}/>
          {' '}
          only show product in stock
        </p>
      </form>
    )
  }
}

class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      inStockOnly: false
    }
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
  }
  handleFilterTextChange(filterText) {
    this.setState({
      filterText: filterText
    });
  }
  handleInStockChange(inStockOnly) {
    this.setState({
      inStockOnly: inStockOnly
    })
  }
  render() {
    return(
      <div>
        <SearchBar
         filterText = {this.state.filterText}
         inStockOnly={this.state.inStockOnly}
         onFilterTextChange={this.handleFilterTextChange}
         onInStockChange={this.handleInStockChange}
         
         />
        <ProductTable  filterText = {this.state.filterText} inStockOnly={this.state.inStockOnly} products={this.props.products} />
      </div>
    )
  }
}

  //
  ReactDom.render(
    <FilterableProductTable products={PRODUCTS} />,
    document.getElementById("root")
  )

  // setInterval(Tick(),1000);

