import { useState } from "react"

const ButtonComponent = (props) =>{
    const [count, setCount] = useState(props.score)
    const customStyle ={
      marginTop: '15px'
    }
return <button style={{backgroundColor: props.bgColor || "", ...customStyle}} onClick={() => setCount((count) => count +1)}>{`${props.label } ${count}` || 'button'}</button>
}
export default ButtonComponent