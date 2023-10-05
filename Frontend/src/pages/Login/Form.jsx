import { Link } from 'react-router-dom'

const Form = ({ goRegisterPage, handdleSubmit, setImputName, setImputPassword }) => {
  return (
    <div className='flex flex-col justify-center items-center '>

      <form onSubmit={handdleSubmit} className='flex flex-col justify-center border-2 border-solid border-black p-[10%]'>
        <div className='flex justify-center'>
          <h2 className='text-textIconsColor text-[30px] uppercase '>
            Login
          </h2>
        </div>

        <label htmlFor='username'>Name:</label>
        <input
          name='username' id='username' type='text' placeholder='User Name' onChange={(e) => setImputName(e.target.value)}
        />

        <label htmlFor='password'>Crea una contraseña:</label>
        <input
          name='password' id='password' type='password' placeholder='Create Password' minLength={8} required
          onChange={(e) => setImputPassword(e.target.value)}
        />
        <span>
          No tienes Cuenta?
          <b>
            <Link onClick={() => goRegisterPage()}>register</Link>
          </b>
        </span>
        <input name='Submit' type='Submit' />
      </form>
    </div>

  )
}

export default Form
