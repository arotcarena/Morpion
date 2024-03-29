import './myButton.css';

export function PrevButton({onClick}) {
  return (
      <button onClick={onClick} className="my-button prev-button">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
            <path fill="currentColor" stroke="currentColor" d="M24 40 8 24 24 8l2.1 2.1-12.4 12.4H40v3H13.7l12.4 12.4Z"/>
          </svg>
      </button>
  )
}
