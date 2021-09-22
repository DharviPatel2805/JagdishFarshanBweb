function Navbar(props){
    return(
        <li className="nav-item">
              <a className="nav-link" href="/">{props.menu}</a>
            </li>
    )
}

export default Navbar;