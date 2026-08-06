import { NavLink } from "react-router-dom"
function Header(){
    return(
        <Header className = "header">
            <div className ="logo">
                <h2>Mini React Website</h2>

            </div>
            <NavLink to = "/" className={({isActive}) => (isActive ? "active" : "")}> Home</NavLink>
             <NavLink to = "/about" className={({isActive}) => (isActive ? "active" : "")}> About</NavLink>
              <NavLink to = "/contact" className={({isActive}) => (isActive ? "active" : "")}> Contact</NavLink>        </Header>
</header>
    )
}
export default Header;