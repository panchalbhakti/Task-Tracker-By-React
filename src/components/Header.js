import PropTypes from 'prop-types'

const Header = ({title}) => {

  return (
    <header className='header'>
      <br></br>
      <h1>{title}</h1>
  
    </header>
  )
}


Header.defaultProps = {
  title: 'Task Tracker',
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Header
