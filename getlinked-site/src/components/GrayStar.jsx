import grayStar from '../assets/images/animated/gray_star.png'
import PropTypes from 'prop-types'

function GrayStar({id}) {
  return (
    <img className='star' id={id} src={grayStar} alt="gray-star" />
  )
}

GrayStar.propTypes = {
    id: PropTypes.string
}  

GrayStar.defaultProps = {
  id: 'gray-1'
}

export default GrayStar