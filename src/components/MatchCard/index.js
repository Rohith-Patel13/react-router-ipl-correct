// Write your code here
import './index.css'

const MatchCard = props => {
  console.log('In MatchCard component', props)
  const {eachObject} = props
  const updatedEachObject = {
    competingTeam: eachObject.competing_team,
    competingTeamLogo: eachObject.competing_team_logo,
    date: eachObject.date,
    firstInnings: eachObject.first_innings,
    id: eachObject.id,
    manOfTheMatch: eachObject.man_of_the_match,
    matchStatus: eachObject.match_status,
    result: eachObject.result,
    secondInnings: eachObject.second_innings,
    umpires: eachObject.umpires,
    venue: eachObject.venue,
  }

  const {
    competingTeam,
    competingTeamLogo,

    matchStatus,
    result,
  } = updatedEachObject

  return (
    <li className="liList">
      <img src={competingTeamLogo} alt={`competing team ${competingTeam}`} />
      <p>{competingTeam}</p>
      <p>{matchStatus}</p>
      <p>{result}</p>
    </li>
  )
}

export default MatchCard
