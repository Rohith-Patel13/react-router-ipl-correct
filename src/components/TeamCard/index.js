// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {eachObject} = props
  const {id, name, teamImageUrl} = eachObject
  return (
    <Link to={`/team-matches/${id}`}>
      <li className="teamCardBg">
        <img src={teamImageUrl} alt={name} className="teamCardBgLogo" />
        <div>
          <p className="teamCardBgText">{name}</p>
        </div>
      </li>
    </Link>
  )
}

export default TeamCard
