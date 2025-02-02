#useContext(global state): 
--------------------------

1. Make a component in separete file : 
    export const userContext = React.createContext()  [import React from "react"]
    
2. import the component (userContext) in the parent component and wrapping . 

    const [user, setUser] = usestate({id:101, name:"Ashraful});

    <UserContext.Provider value = {{user, other object pass here}} >
        <Component 2> 
    <UserContext.Provider>
    
    
3. Receive the props which already provided in UserContext.Provider
    
    import React, {useContext} from "react";
    
    import {UserContext} from "./UserContext"; //our custom context. 
    
    const Component4 = () => {
    
    const user = useContext(UserContext); 
    
    return (
        <div>
            <h3>{{user.id}</h3>
            <h3>{{user.name}</h3>
        </div>
    );
    
    }; 
    
    
    

