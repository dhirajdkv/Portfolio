// import React from 'react'
// import ReactDOM from 'react-dom';

// const Demo = props =>{
//     const [text, setText] = useState("there");
//     return props.logic(text, setText);
// };

// const App = () => {
//     const [text, setText] = useState("hello");

//     const componentDidMount = () =>{
//         setText("hey");
//     };
//     useEffect(componentDidMount, []);

//     const logic = (word, setWord) => (
//         <div>
//             <h1>{word}</h1>
//             <input type="text" value={word} onChange={e => setWord(e.target.value)}></input>
//             <h1>{text}</h1>
//             <input type="text" value={text} onChange={e => setText(e.target.value)}></input>
//         </div>
//     );
//     return <Demo logic={logic} />;
// };

// ReactDOM.render(<App />,document.getElementById("root"));