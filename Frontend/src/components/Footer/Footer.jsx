import ListIcons from './components/ListIcons'

const Footer = ({ footerFlag }) => {
  return (
    <>
      {footerFlag
        ? (
          <footer role='footer' className='footer'>
            <div role='header' className='footerHeaderContainer'>
              <h3 role='h3' className='footerText'>
                Tecnologías usadas en el desarrollo de esta aplicación.
              </h3>
              <ListIcons />
            </div>
            <div role='footerCopy' className='footerCopy'>
              <h4>&copy; 2023 USDM</h4>
            </div>
          </footer>
          )
        : null}
    </>
  )
}

export default Footer
