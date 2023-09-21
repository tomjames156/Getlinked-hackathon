import PropTypes from 'prop-types'
import checkmark from '../assets/icons/checkmark.svg'


function PolicyTerm({term}) {
  return (
    <li>
        <img src={checkmark} alt='checkmark green background'/>
        <p>{term}</p>
    </li>
  )
}

PolicyTerm.apply.propTypes = {
    term: PropTypes.string
}

export default PolicyTerm