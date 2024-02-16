import { useEffect, useState } from "react";
import { Grid } from "./Grid/Grid";
import { Message } from "./Message/Message";
import { Timer } from "./Timer/Timer";
// import { Timer } from "./Timer/Timer";


// PLAYSTEPS
export const PLAYER_ONE_MUST_PLAY = 'player_one_must_play';
export const PLAYER_TWO_MUST_PLAY = 'player_two_must_play';
export const PLAYER_ONE_WIN = 'player_one_win';
export const PLAYER_TWO_WIN = 'player_two_win';

export function Morpion({started, stop, options}) {
    
    const [state, setState] = useState({
        gameStatus: null,
        turn: null
    });

    useEffect(() => {
        if(started) {
            setState(({
                gameStatus: PLAYER_ONE_MUST_PLAY, 
                turn: 1
            }))
        }
        // eslint-disable-next-line
    }, [started]);

    const handlePlay = () => {
        if(state.gameStatus === PLAYER_ONE_MUST_PLAY) {
            setState(state => ({
                gameStatus: PLAYER_TWO_MUST_PLAY,
                turn: state.turn + 1
            }));
        } else {
            setState(state => ({
                gameStatus: PLAYER_ONE_MUST_PLAY,
                turn: state.turn + 1
            }));
        }
    };

    const handleWin = () => {
        if(state.gameStatus === PLAYER_ONE_MUST_PLAY) {
            setState(({
                turn: null,
                gameStatus: PLAYER_ONE_WIN
            }));
            stop();
        } else {
            setState(({
                turn: null,
                gameStatus: PLAYER_TWO_WIN
            }));
            stop();
        }
    }

    const handleTimeOver = () => {
        if(state.gameStatus === PLAYER_ONE_MUST_PLAY) {
            setState(({
                turn: null,
                gameStatus: PLAYER_TWO_WIN
            }));
            stop();
        } else {
            setState(({
                turn: null,
                gameStatus: PLAYER_ONE_WIN
            }));
            stop();
        }
    }


    return (
        <div className="morpion">
            <Message gameStatus={state.gameStatus} />
            <Grid started={started} gameStatus={state.gameStatus} onPlay={handlePlay} onWin={handleWin} options={options} />
            <Timer turn={state.turn} onTimeOver={handleTimeOver} />
        </div>
    )
}

