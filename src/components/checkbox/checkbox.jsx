
function Checkbox(props) {
  return (
    <div>
        <label htmlFor="">
            <input type="checkbox" name="" id={props.pId} />
            {props.children}
        </label>
    </div>
  )
}

export default Checkbox
