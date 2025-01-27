import "./button.css"
function Button(props) {
  return (
    <div>
      <button className={props.class} type={props.typeB} onClick={props.onclick}> {props.buttonTitle} </button>
    </div>
  )
}

export default Button
