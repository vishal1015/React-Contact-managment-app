import React from "react";
class Addcontact extends React.Component{
    render(){
        return(
        <div>
            <h2>Add Contact </h2> 
            <form>
                <div>
                   <div>
                      <lable>Name</lable>
                      <input type="text" name = "name" placeholder="name" />
                   </div>
                   <div>
                      <lable>Email</lable>
                      <input type="email" name = "email" placeholder=" email" />
                    </div>
                    <button>ADD</button>
                </div>
            </form>
        </div>
        );
    }

}
export default Addcontact;

// we can also make a class component but we have to to render first then return 