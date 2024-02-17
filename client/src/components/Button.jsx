const Button = ({formToggle, currentState}) => {
  return (
    <button className="add-btn" onClick={formToggle} 
      style={{backgroundColor: currentState ? "red": "green"}}>
        {currentState ? "Close" : "Add"}
    </button>
  )
}

export default Button