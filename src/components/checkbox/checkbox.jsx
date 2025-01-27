import "./checkbox.css"
function Checkbox(props) {
  return (
    <div>
        <label>
            <input type="checkbox" className="check" onChange={props.onchange} value={props.price}/>
            {props.children}
        </label>
    </div>
  )
}

export default Checkbox
