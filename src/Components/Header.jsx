import { Symbol } from "../ui/Symbols/Symbol";



export function Header({options}) {
    return (
        <header className="header">
            <div className="header-side">
                <span>Joueur 1</span>
                <Symbol name={options.player1.symbol} color={options.player1.color} />
            </div>
            <h1 className="page-title"><a href="/">Morpion</a></h1>
            <div className="header-side">
                <span>Joueur 2</span>
                <Symbol name={options.player2.symbol} color={options.player2.color} />
            </div>
        </header>
    )
}