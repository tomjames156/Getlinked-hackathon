import whiteStar from '../assets/images/animated/white_star.png'
import PropTypes from 'prop-types'

function WhiteStar({id}) {

  return (
    <img className='star' id={id} src={whiteStar} alt="white-star" />
  )
}

WhiteStar.propTypes = {
  id: PropTypes.string
}

WhiteStar.defaultProps = {
  id: 'white-1'
}


export default WhiteStar