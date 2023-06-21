// import React  from 'react'


// // show all comments from here => data comes from DishDetails.js
//  {/* <p style={{color:"black"}}>Commnets..........</p> */}

// const LoadComponent = (comments) => {

//     console.log(comments);
//     return(
//         <div>
           
//             {
//              comments.map((c)=>{
//                 return(
//                     <div key={c.id}>
//                         <p>{c.author}</p>
//                         <p>{c.comment}</p>
//                         <p>{c.date}</p>
//                     </div>
//                 );
//              })
//             }
//         </div>
//      );
    

    
// }

// export default LoadComponent;



import React from 'react';

const LoadComponent = ({ comments}) => {
  // console.log(comments);

  const comment = comments.map((c)=>{
    return(<div key={c.id}>
      <p>{c.author}</p>
      <p>{c.comment}</p>
      <p>{c.date}</p>
    </div>)
  })
    
  return (
    <div>
     <div style={{color:"black"}}> {comment}</div>
    </div>
  );
};

export default LoadComponent;
