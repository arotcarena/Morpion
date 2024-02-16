import { PLAYER_ONE_MUST_PLAY, PLAYER_ONE_WIN, PLAYER_TWO_MUST_PLAY, PLAYER_TWO_WIN } from "../Morpion";
import './message.css';

export function Message({gameStatus}) {

  let message = '';

  switch(gameStatus) {
    case PLAYER_ONE_MUST_PLAY:
      message = 'Joueur 1, c\'est à vous !';
      break;
    case PLAYER_TWO_MUST_PLAY:
      message = 'Joueur 2, c\'est à vous !';
      break;
    case PLAYER_ONE_WIN:
      message = 'Le joueur 1 a gagné !';
      break;
    case PLAYER_TWO_WIN:
      message = 'Le joueur 2 a gagné !';
      break;
    default:
      message = 'Bienvenue !';
  }

  return (
    <div className="message">{message}</div>
  )
}
