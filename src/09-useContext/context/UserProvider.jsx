import { UserContext } from "./UserContext"

const user  = {
  id:123,
  name:'Jordy',
  email:'jhv@email.com'
}


/* eslint-disable react/prop-types */
export const UserProvider = ({children}) => {
  return (
    <UserContext.Provider value={{hola:'Mundo', user}}>
        {children}
    </UserContext.Provider>
  )
}
