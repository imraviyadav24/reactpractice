// import React from "react";

// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }
// export default Welcome;

// import React from "react";
// class Welcome extends React.Component {
//   render() {
//     return <h1>Hello, {this.props.name}</h1>;
//   }
// }

// export default Welcome;

// import React from "react";

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>The Practice begins.</h1>
//         <h2>Lets do it together.</h2>
//         <p>The paragraph is here</p>
//       </div>
//     );
//   }
// }
// export default App;

// import React from "react";

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>The Practice begins</h1>
//         <h2>Lets do it together</h2>
//         <p data-demoAttribute="demo">The paragraph is here</p>
//       </div>
//     );
//   }
// }

// export default App;

// import React from "react";

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1 className="hello">The Practice begins</h1>
//         <p data-demoAttribute="demo">The Paragraph is here</p>
//       </div>
//     );
//   }
// }
// export default App;

// import React from "react";

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1 className="hello">{25 + 20}</h1>
//       </div>
//     );
//   }
// }

// export default App;

// import React from "react";

// class App extends React.Component {
//   render() {
//     var myStyle = {
//       fontSize: 80,
//       fontFamily: "Courier",
//       color: "green",
//     };
//     return (
//       <div>
//         <h1 style={myStyle}>WWW.javatpoint.com</h1>
//       </div>
//     );
//   }
// }

// export default App;

// import React from "react";

// class App extends React.Component {
//   render() {
//     var i = 5;
//     return (
//       <div>
//         <h1>{i == 1 ? "True!" : "False!"}</h1>
//       </div>
//     );
//   }
// }

// export default App;
// import React from "react";

// function WelcomeMessage(props) {
//   return <h1>Welcome to the, {props.name}</h1>;
// }

// export default WelcomeMessage;

// import React from "react";

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <First />
//         <Second />
//       </div>
//     );
//   }
// }

// class First extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>JavaTpoint</h1>
//       </div>
//     );
//   }
// }

// class Second extends React.Component {
//   render() {
//     return (
//       <div>
//         <h2>WWW.javatpoint.com</h2>
//         <p>This websites contains the great CS tutorial</p>
//       </div>
//     );
//   }
// }

// export default App;
// import React from "react";

// class MyComponent extends React.Component {
//   render() {
//     return <div>This is main component.</div>;
//   }
// }

// export default MyComponent;

// import React from "react";

// class App extends React.Component {
//   constructor() {
//     super();

//     this.state = {
//       data: [
//         {
//           name: "Abhishek",
//         },
//         {
//           name: "Saharsh",
//         },
//         {
//           name: "Ajay",
//         },
//       ],
//     };
//   }
//   render() {
//     return (
//       <div>
//         <StudentName />
//         <ul>
//           {this.state.data.map((item) => (
//             <List data={item} />
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }
// class StudentName extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>Student Name Detail</h1>
//       </div>
//     );
//   }
// }
// class List extends React.Component {
//   render() {
//     return (
//       <ul>
//         <li>{this.props.data.name}</li>
//       </ul>
//     );
//   }
// }
// export default App;

// import React from "react";

// class App extends React.Component {
//   constructor() {
//     super();

//     this.state = { displayBio: true };
//   }

//   render() {
//     const bio = this.state.displayBio ? (
//       <div>
//         <p>
//           <h3>
//             Javatpoint is one of the best Java training institute in Noida,
//             Delhi, Gurugram{" "}
//           </h3>
//         </p>
//       </div>
//     ) : null;
//     return (
//       <div>
//         <h1>Welcome to JavaTpoint!!</h1>
//         {bio}
//       </div>
//     );
//   }
// }
// export default App;

// import React from "react";

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = { displayBio: false };
//     console.log("Component this", this);
//     this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
//   }
//   toggleDisplayBio() {
//     this.setState({ displayBio: !this.state.displayBio });
//   }
//   render() {
//     return (
//       <div>
//         <h1>Welcome to JavaTpoint!!</h1>
//         {this.state.displayBio ? (
//           <div>
//             <p>
//               <h4>
//                 Javatpoint is one of the best Java training institute in Noida,
//                 Delhi, Gurugram, Ghaziabad and Faridabad. We have a team of
//                 experienced Java developers and trainers from multinational
//                 companies to teach our campus students.
//               </h4>
//             </p>
//             <button onClick={this.toggleDisplayBio}>Show Less</button>
//           </div>
//         ) : (
//           <div>
//             <button onClick={this.toggleDisplayBio}>Read More</button>
//           </div>
//         )}
//       </div>
//     );
//   }
// }
// export default App;

// import React from "react";

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>Welcome to {this.props.name}</h1>
//         <p>
//           <h4>Javatpoint is one of the best java training</h4>
//         </p>
//       </div>
//     );
//   }
// }
// export default App;

// import React from "react";

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>Default Props Example</h1>
//         <h3>Welcome to {this.props.name}</h3>
//         <p>Javatpoint is one of the best Java training Program</p>
//       </div>
//     );
//   }
// }
// App.defaultProps = {
//   name: "JavaTpoint",
// };

// export default App;

// import React from "react";

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: "JavaTpoint",
//     };
//   }
//   render() {
//     return (
//       <div>
//         <JTP jtpProp={this.state.name} />
//       </div>
//     );
//   }
// }

// class JTP extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>State & Props Example</h1>
//         <h3>Welcome to {this.props.jtpProp}</h3>
//         <p>JavatPoint is one of the best Java training institute</p>
//       </div>
//     );
//   }
// }

// export default App;

// import React from 'react'
// import PropTypes from 'prop-types';

// class App extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1>ReactJS Props validation example</h1>
//                 <table>
//                     <tr>
//                         <th>Type</th>
//                         <th>Value</th>
//                         <th>Valid</th>
//                     </tr>
//                     <tr>
//                         <td>Array</td>
//         <td>{this.props.propArray}</td>
//         <td>{this.props.propArray ? "true": "False"}</td>

//                     </tr>
//                     <tr>
//                         <td>Boolean</td>
//                         <td>{this.props.propBool ? "true": "False"}
//                         </td>
//                         <td>{this.props.propBool ? "true" : "False"}</td>
//                     </tr>
//                     <tr>
//                         <td>Function</td>
//                         <td>{this.props.propFunc(5)}</td>
//                         <td>
//                             {this.props.propFunc(5)? "true" : "False"}
//                         </td>
//                     </tr>
//                     <tr>
//                         <td>Number</td>
//                         <td>{this.props.propNumber}</td>
//                         <td></td>
//                     </tr>
//                 </table>
//             </div>
//         )
//     }
// }
