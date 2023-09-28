import Nav from "./Nav"
import Logout from "./Logout"
export default function authenticated(){
    return(
        <div>
            <h2>Welcome!</h2>
          <Nav /> 
          <Logout />
        </div>
    )
}