import react from "react"


export default function Header() {
    return(
        <header>
            <nav className="nav">
            <img src={require("./../images/logo.png")} className="logo"/>
            <h1>Meme Generator</h1>
            </nav>
        </header>
    )
}