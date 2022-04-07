import PropTypes from 'prop-types'

function Button ({ color, text }) {
  const onClick = (e) => {
    console.log(e)
  }

  return (
    <button onClick={onClick} style={{ backgroundColor: color }}
    className='btn'>
    { text }
    </button >
    )
}

Button.defaultProps = {
  color: 'steelblue',
}

export default Button