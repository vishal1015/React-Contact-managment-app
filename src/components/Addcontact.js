import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const Addcontact = ({ addcontactHandler }) => {
  const navigate = useNavigate();

  const [state, setState] = useState({
    name: "",
    email: ""
  });

  const add = (e) => {
    e.preventDefault();

    if (state.name === '' || state.email === '') {
      alert('All the fields are mandatory');
      return;
    }

    addcontactHandler(state);

    // Clear state values
    setState({ name: '', email: '' });

    // Navigate to the home route
    navigate('/');
  };

  return (
    <div>
      <h2>Add Contact </h2> 
      <form onSubmit={add}>
        <div>
          <div>
            <label htmlFor="name">Name</label>
            <input 
              type="text" 
              name="name" 
              placeholder="Name" 
              value={state.name}
              onChange={(e) => setState({ ...state, name: e.target.value })} 
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              name="email" 
              placeholder="Email" 
              value={state.email}
              onChange={(e) => setState({ ...state, email: e.target.value })}
            />
          </div>
          <button>ADD</button>
        </div>
      </form>
    </div>
  );
};

export default Addcontact;



// import React from "react";

// //state in class component
// class Addcontact extends React.Component{
//     state = {
//         name:"",
//         email:""
//     }
//     add = (e) => {
//         e.preventDefault(); // i am using preventdefault because now want  to refresh the page 
//         if (this.state.name === '' || this.state.email === '') {
//            alert('All the fields are mandatory');
//         return;
//     }
//      this.props.addcontactHandler(this.state);
//      // Don't clear state values
//     this.setState({ name: '', email: '' });
// };
//     render(){
//         return(
//         <div>
//             <h2>Add Contact </h2> 
//             <form onSubmit={this.add}>
//                 <div>
//                    <div>
//                       <lable htmlFor="name">Name</lable>
//                       <input 
//                         type="text" 
//                         name = "name" 
//                         placeholder="Name" 
//                         value={this.state.name}
//                         onChange={(e)=>this.setState({name:e.target.value})} 
//                         />
//                    </div>
//                    <div>
//                       <lable htmlFor="email">Email</lable>
//                       <input 
//                       type="email" 
//                       name = "email" 
//                       placeholder=" Email" 
//                       value={this.state.email}
//                       onChange={(e)=>this.setState({email:e.target.value})}/>
//                     </div>
//                     <button>ADD</button>
//                 </div>
//             </form>
//         </div>
//         );
//     }

// }
// export default Addcontact;

// // we can also make a class component but we have to to render first then return 
