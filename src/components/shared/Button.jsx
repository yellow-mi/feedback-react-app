import PropTypes from 'prop-types'

function Button({ children, version, type, isDisabled }) {
  return (
    <button
    className={`btn btn-${version}`}
    isDisabled={isDisabled}
    type={type}>
      {children}
    </button>
  )
}

Button.defaultProps = {
  isDisabled: false,
  type: 'button',
  version: 'primary'
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  isDisabled: PropTypes.bool,
  type: PropTypes.string,
  version: PropTypes.string
}

export default Button