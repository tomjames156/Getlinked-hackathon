import purpleStar from '../assets/images/animated/purple_star.png'
import PropTypes from 'prop-types'

function PurpleStar({id}) {
  return (
    <img className='star' id={id} src={purpleStar} alt="purple-star" />
  )
}

PurpleStar.propTypes = {
    id: PropTypes.string
}
  
PurpleStar.defaultProps = {
  id: 'purple-1'
}

export default PurpleStar