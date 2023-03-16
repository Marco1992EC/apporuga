import logo from './assets/PIN Rincon-01[43939].png'
import Button from '../Button/Button'

const Navbar = () => {
  const handleClick = (showPrompt) => {
    if (showPrompt) {
      const promptValue = prompt('Ingresa la cantidad')
      console.log(promptValue)
    } else {
      console.log('El prompt no está habilitado')
    }
  }

  return (
    <nav className="Navbar">
      <h1>Rincon Oruga</h1>
      <img src={logo} alt='logo'/>
      <div className="btn-toolbar" role="toolbar" aria-label="Botones">
        <div className="btn-group mr-3" role="group" aria-label="Grupo 1">
          <button className="btn btn-primary">Extras</button>
        </div>
        <div className="btn-group mr-3" role="group" aria-label="Grupo 2">
          <Button label="Desayunos Saludables" callback={(showPrompt) => handleClick(showPrompt)} showPrompt={true}/>
          <Button label="Almuerzos Saludables" callback={() => console.log('Almuerzos Saludables')} showPrompt={false}/>
          <Button label="Charla de Nutrición" callback={() => console.log('Charla de Nutrición')} showPrompt={false}/>
        </div>
        <div className="btn-group mr-3" role="group" aria-label="Grupo 3">
          <button className="btn btn-info">Terapias Personalizadas</button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
