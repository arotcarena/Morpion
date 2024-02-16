import { useEffect, useState } from 'react';
import { match } from '../../helpers/match';
import { PLAYER_ONE_MUST_PLAY, PLAYER_TWO_MUST_PLAY } from '../Morpion';
import './grid.css';
import { GridBox } from './GridBox';

export const PLAYER_ONE = 'player_one';
export const PLAYER_TWO = 'player_two';
const STARTING_STATE = {
  topLeft: null,
  topCenter: null,
  topRight: null,
  centerLeft: null,
  center: null,
  centerRight: null,
  bottomLeft: null, 
  bottomCenter: null,
  bottomRight: null
};

export function Grid({started, gameStatus, onPlay, onWin, options}) {

  const [state, setState] = useState(STARTING_STATE);
  
  useEffect(() => {
    if(started) {
      console.log('init');
        setState(STARTING_STATE);
    };
      // eslint-disable-next-line
  }, [started]);

  let player = null;
  if(gameStatus === PLAYER_ONE_MUST_PLAY) {
    player = PLAYER_ONE;
  } else if(gameStatus === PLAYER_TWO_MUST_PLAY) {
    player = PLAYER_TWO;
  }

  const handleClick = e => {
    const name = e.target.dataset.name;
    if(state[name] === null && player !== null) {
        setState(state => ({
          ...state,
          [name]: player
        }));
        if(match(state, player, name)) {
          onWin();
        } else {
          onPlay();
        }
    }
  };


  return (
    <div className="grid" onClick={handleClick}>
      <div className="grid-line">
        <GridBox name="topLeft" value={state.topLeft} options={options} />
        <GridBox name="topCenter" value={state.topCenter} options={options} />
        <GridBox name="topRight" value={state.topRight} options={options} />
      </div>
      
      <div className="grid-line">
        <GridBox name="centerLeft" value={state.centerLeft} options={options} />
        <GridBox name="center" value={state.center} options={options} />
        <GridBox name="centerRight" value={state.centerRight} options={options} />
      </div>
      
      <div className="grid-line">
        <GridBox name="bottomLeft" value={state.bottomLeft} options={options} />
        <GridBox name="bottomCenter" value={state.bottomCenter} options={options} />
        <GridBox name="bottomRight" value={state.bottomRight} options={options} />
      </div>
    </div>
  )
}
