import { memo } from "react";
import { PLAYER_ONE, PLAYER_TWO } from "./Grid";
import { Symbol } from "../../ui/Symbols/Symbol";


export const GridBox = memo(({name, value, options}) => {

  // console.log('render de '+name);

  if(value === null) {
    return (
      <div data-name={name} className="grid-box active"> </div>
    )
  }

  let player = '';
  if(value === PLAYER_ONE) {
    player = 'player1';
  } else if(value === PLAYER_TWO) {
    player = 'player2';
  }


  return (
    <div data-name={name} className="grid-box">
        <Symbol name={options[player]?.symbol} color={options[player]?.color} />
    </div>
  )
}) 
  
