import './Pokecard.css';


const imgApi = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";
let padThree = (number)=>(number <= 999 ? `00${number}`.slice(-3) : number);
const Pokecard=(props)=>{
    const imgSrc = `${imgApi}${padThree(props.id)}.png`

    return (
        <div className="Pokecard">
            <h1 className="Pokecard-title" >{props.name}</h1>
            <div className="Pokecard-image">
            <img src={imgSrc} alt={props.name} className="Pokecard-img"/>
            </div>
            <div className="Pokecard-description">
            <div className="Pokecard-data">Type:{props.type}</div>
            <div className="Pokecard-data">Exp: {props.exp}</div>
            </div>
        </div>
    )

}
export default Pokecard;