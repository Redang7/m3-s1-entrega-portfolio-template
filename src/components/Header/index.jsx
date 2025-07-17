import { username } from "../../data/user"
export const Header = () =>{
    return (
      <header>
        <div className="header-container">
          <h1 className="logo">{username}</h1>
          <nav className="nav-menu">
            <button>Home</button>
            <button>Projects</button>
            <button>Contatos</button>
            <button>Midias Digit ais</button>
          </nav>
        </div>
      </header>
    )

}