import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const allName = [" ABDULLAH AL NOMAN", " FAHIMA MAHJABIN ESHA", " RAKIB HOSSAIN", "Airin Akther", "Sanjida"];
  const grope = [" SCIENCE", " COMMERCE"];
  const trabling = [' JOB', ' TRABLING', ' TUTION', ' LOVE', 'Immotional'];

  const peersonalDetails = [
    { name: "Abdullah Al Noman", roll: "13298", group: "Commerce", hobby: "Cricket" },
    { name: "Fahima Mehjabin", roll: "1998", group: "Science", hobby: "Love" },
    { name: "Abdur Rahaman", roll: "19998", group: "Science", hobby: "Football" },
    { name: "Rakib Hossin", roll: "17788", group: "Commerce", hobby: "Cabady" },
  ];

  return (
    <div className="App">
      <header className="App-header">
       
        <Counter></Counter>
        <Users></Users>
        {
          peersonalDetails.map(singlePerson => <PhotoShope personHisabKorbo={singlePerson}></PhotoShope>)
        }
        <Person name={allName[0]} grope={grope[1]} hobby={trabling[0]}></Person>
        <Person name={allName[1]} grope={grope[0]} hobby={trabling[1]}></Person>
        <Person name={allName[2]} grope={grope[1]} hobby={trabling[2]}></Person>
        <Person name={allName[3]} grope={grope[0]} hobby={trabling[3]}></Person>
        <Person name={allName[4]} grope={grope[1]} hobby={trabling[4]}></Person>
      </header>
    </div>
  );
}



function Counter() {

  const [count,setCount]=useState(1);

  return (
    <div>
      <h2> Count : {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count -1)} >Decrease</button>
    </div>
  )
}



function Users(){

const [users,setUsers]=useState([]);
useEffect(()=>{

  fetch('https://jsonplaceholder.typicode.com/users')
  .then( res => res.json())
  .then( data => setUsers(data))
  
  },[])
  console.log(users);
return(
  <div>
        {
          users.map(user => <h3>{user.phone}</h3>)
        }
  </div>
)


}




function PhotoShope(props) {

  const stylePhotoshop = {

    color: 'red',
    borderRadius: '10px',
    border: '1px solid blue',
    backgroundColor: '#ddd',
    padding: '40px',
    margin: '20px',
    width: '500px'

  }
  const { name, roll, group, hobby } = props.personHisabKorbo
  return (
    <div style={stylePhotoshop}>
      <h2>{name}</h2>
      <h4>Roll:{roll}</h4>
      <h4>Grope:{group}</h4>
      <h4>Hobby:{hobby}</h4>
      <button style={{ cursor: 'pointer', padding: '10px', backgroundColor: 'blue', borderRadius: '5px', border: 'none' }}>Details</button>

    </div>

  );

}







function Person(props) {

  const style = {
    border: '1px solid blue',
    width: '700px',
    margin: '10px',
    borderRadius: '10px',
    backgroundColor: 'orange',
    display: 'grid',

  }


  return (
    <div style={style}>
      <h1 style={{ color: 'blue' }}>Name:{props.name}</h1>
      <p style={{ color: 'red' }}>GRPUPE:{props.grope}</p>
      <h3 style={{ color: 'blueviolet' }}>HOBBY:{props.hobby}</h3>
    </div>

  );
}

export default App;
