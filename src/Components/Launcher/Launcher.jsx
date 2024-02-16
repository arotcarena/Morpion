import React, { useState } from 'react'
import './launcher.css';
import Close from '../../ui/Symbols/Close';
import Circle from '../../ui/Symbols/Circle';
import { MyCenterButton } from '../../ui/MyButton/MyCenterButton';
import { INITIAL_OPTIONS } from '../../App';
import { PrevButton } from '../../ui/MyButton/PrevButton';
import { NextButton } from '../../ui/MyButton/NextButton';

function Launcher({onStart, options, setOptions}) {

  const [step, setStep] = useState(0);

  const handleStart = () => {
    onStart();
  }

  const handleChoice = e => {
    setOptions(options => ({
        ...options,
        ['player'+step]: {
            ...options['player'+step],
            [e.target.dataset.name]: e.target.dataset.value
        }
    }));
  }

  const handleNextStep = () => {
    setStep(step => step + 1);
  }

  const handlePrevStep = () => {
    if(step === 2) {
      setOptions(options => ({
        ...options,
        player2: {
          color: null,
          symbol: null
        }
      }));
    } else if(step === 1) {
      setOptions(INITIAL_OPTIONS);
    }
    setStep(step => step - 1);
  }


  return (
    <div className="launcher-container">
        {
            step === 0 
            ?
            <MyCenterButton onClick={handleNextStep}>Nouvelle partie</MyCenterButton>
            :
            <div className={`launcher step${step}`}>
                <PrevButton onClick={handlePrevStep} />
                <div className="container-column">
                    <h1>Joueur {step},</h1>
                    <h2>choisissez votre symbole</h2>
                    <div className="horizontal">
                        <Close color="secondary" className={`block ${options['player'+step].symbol === 'close' && 'selected'}`} data-name="symbol" data-value="close" onClick={handleChoice} />
                        <Circle color="secondary" className={`block ${options['player'+step].symbol === 'circle' && 'selected'}`} data-name="symbol" data-value="circle" onClick={handleChoice} />
                    </div>
                    <h2>et votre couleur</h2>
                    <div className="horizontal">
                        <div className={`block-small ${options['player'+step].color === 'primary' && 'selected'}`} data-name="color" data-value="primary" style={{backgroundColor: 'rgb(0, 161, 121)'}} onClick={handleChoice} />
                        <div className={`block-small ${options['player'+step].color === 'secondary' && 'selected'}`} data-name="color" data-value="secondary" style={{backgroundColor: 'rgb(1, 80, 60)'}} onClick={handleChoice} />
                    </div>
                </div>
                <NextButton onClick={step <= 1 ? handleNextStep: handleStart} />
            </div>
        }
    </div>
  )
}

export default Launcher;


