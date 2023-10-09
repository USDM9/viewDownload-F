import ListIcons from './components/ListIcons'

const Footer = () => {
  return (
    <footer role='footer'>
      <header role='header'>
        <h3 role='h3'>Tecnologias  usadas para crear esta app</h3>
      </header>
      <main role='constainerListIcons'>
        <ListIcons />
      </main>
      <footer role='footerCopy'>
        <h4>copy USDM </h4>
      </footer>
    </footer>
  )
}

export default Footer
