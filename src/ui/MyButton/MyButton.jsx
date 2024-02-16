import './myButton.css';

export function MyButton({children, onClick}) {
  return (
      <button onClick={onClick} className="my-button">
        {children}
      </button>
  )
}
