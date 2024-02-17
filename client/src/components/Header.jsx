import Button from "./Button"

const Header = ({formToggle, currentState}) => {
  return (
    <header className="header">
        <h1>ToDo List</h1>
        <Button formToggle={formToggle} currentState={currentState}/>
    </header>
  )
}

export default Header