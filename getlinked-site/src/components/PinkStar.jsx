import pinkStar from '../assets/images/animated/pink_star.png'
import PropTypes from 'prop-types'

function PinkStar({id}) {
  return (
    <img className='star' id={id} src={pinkStar} alt="pink-star" />
  )
}

PinkStar.propTypes = {
  id: PropTypes.string
}  

PinkStar.defaultProps = {
  id: 'pink-1'
}

export default PinkStar