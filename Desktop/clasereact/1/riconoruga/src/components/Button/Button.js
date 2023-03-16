const Button = (props) => {
    console.log(props)
    return (
      <button
        onClick={() => props.callback(props.showPrompt)}
        style={{ backgroundColor: 'black', color: 'white'}}
      >
        {props.label}
      </button>
    )
  }
  
  export default Button
  