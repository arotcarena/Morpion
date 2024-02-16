import { symbolWrapper } from "./symbolWrapper";

function Close({color, ...props}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48" {...props}>
        <path fill={color} d="m12.45 37.65-2.1-2.1L21.9 24 10.35 12.45l2.1-2.1L24 21.9l11.55-11.55 2.1 2.1L26.1 24l11.55 11.55-2.1 2.1L24 26.1Z"/>
    </svg>
  )
}


export default symbolWrapper(Close);