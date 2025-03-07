import PropTypes from 'prop-types'

const Button = ( {color, text, onClick} ) => {
  return (
    <div>
       <button onClick={onClick} style={{backgroundColor: 'green'}}className='btn'>{text}</button>
    </div>
  )
}

Button.defaultProps = {
    color: 'steelblue'
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func
}

export default Button
