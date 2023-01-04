import "./navbar.css"
import {Link} from "react-router-dom"
// import { useContext } from "react"
// import { AuthContext } from "../../context/AuthContext"

const Navbar = () => {

//const{user}=useContext(AuthContext)

  return (
    <div>
         <h1 className='text-white bg-info p-3'>my <em><u><b>spending</b></u></em> trend</h1>
    </div>
  )
}

export default Navbar