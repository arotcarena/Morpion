import './myButton.css';

export function NextButton({onClick}) {
  return (
      <button onClick={onClick} className="my-button next-button">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
            <path fill="currentColor" stroke="currentColor" d="m24 40-2.1-2.15L34.25 25.5H8v-3h26.25L21.9 10.15 24 8l16 16Z"/>
          </svg>
      </button>
  )
}