import "./button.css"
function Button(props) {
  return (
    <div>
      <button className={props.class} onClick={props.onclick}> {props.buttonTitle} </button>
    </div>
  )
}

export default Button
