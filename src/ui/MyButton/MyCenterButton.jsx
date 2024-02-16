import './myButton.css';

export function MyCenterButton({children, onClick}) {
  return (
      <button onClick={onClick} className="my-button center-button">
        {children}
      </button>
  )
}