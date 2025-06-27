import {Link} from "react-router-dom"

function Nav(){

    return(
         <nav>
        <Link to="/">Home</Link>
        <Link to="/users/mrbeast">Mr Beast</Link>
        <Link to="/users/kyliejenner">Kylie Jenner</Link>   
        <Link to="/users/pamosia">Pamosia</Link>
       
      </nav>
    )
}

export default Nav;