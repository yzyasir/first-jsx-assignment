import React from 'react';


// making a functional component next
const Header = () => {
    return(
        <> 
        {/* what i am doing by getting rid of the div is getting rid of the extra div in the inspect tool, while still satisfying jsx requirements */}
            <h1>Hello Dojo</h1>
            <h3>Things I need to do</h3>
            <ul>
                <li>Learn React</li>
                <li>Climb Mount Everest</li>
                <li>Run a Marathon</li>
                <li>Feed the Dogs</li>
            </ul>
        </>
    )
}
export default Header;

// import React, {Fragment} from 'react';
// // what im doing with the curly brakets here is destructuring

// // making a functional component next
// const Header = () => {
//     return(
//         <Fragment>
//             <h1>My First React Component</h1>
//         </Fragment>
//     )
// }
// export default Header;

// THIS IS THE LOGHAND FORM OF WAY OF WRITING THIS