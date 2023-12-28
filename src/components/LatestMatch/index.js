// Write your code here

import './index.css'

const LatestMatch = props => {
  const {latestMatchDetailsObj} = props
  console.log(latestMatchDetailsObj)

  const updatedLatestMatchDetailsObj = {
    competingTeam: latestMatchDetailsObj.competing_team,
    competingTeamLogo: latestMatchDetailsObj.competing_team_logo,
    date: latestMatchDetailsObj.date,
    firstInnings: latestMatchDetailsObj.first_innings,
    id: latestMatchDetailsObj.id,
    manOfTheMatch: latestMatchDetailsObj.man_of_the_match,
    matchStatus: latestMatchDetailsObj.match_status,
    result: latestMatchDetailsObj.result,
    secondInnings: latestMatchDetailsObj.second_innings,
    umpires: latestMatchDetailsObj.umpires,
    venue: latestMatchDetailsObj.venue,
  }

  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    manOfTheMatch,

    result,
    secondInnings,
    umpires,
    venue,
  } = updatedLatestMatchDetailsObj

  return (
    <>
      <h1>Latest Matches</h1>
      <div className="latestMatchCard">
        <div>
          <p>{competingTeam}</p>
          <p>{date}</p>
          <p>{venue}</p>
          <p>{result}</p>
        </div>
        <div>
          <img src={competingTeamLogo} alt={`latest match ${competingTeam}`} />
        </div>
        <div>
          <h1>First Innings</h1>
          <p>{firstInnings}</p>
          <h1>Second Innings</h1>
          <p>{secondInnings}</p>
          <h1>Man Of The Match</h1>
          <p>{manOfTheMatch}</p>
          <h1>Umpires</h1>
          <p>{umpires}</p>
        </div>
      </div>
    </>
  )
}

export default LatestMatch

/*
    const updatedLatestMatchDetailsObj = {
      competingTeam: LatestMatchDetailsObj.competing_team,
      competingTeamLogo: LatestMatchDetailsObj.competing_team_logo,
      date: LatestMatchDetailsObj.date,
      firstInnings: LatestMatchDetailsObj.first_innings,
      id: LatestMatchDetailsObj.id,
      manOfTheMatch: LatestMatchDetailsObj.man_of_the_match,
      match_status: LatestMatchDetailsObj.match_status,
      result: LatestMatchDetailsObj.result,
      secondInnings: LatestMatchDetailsObj.second_innings,
      umpires: LatestMatchDetailsObj.umpires,
      venue: LatestMatchDetailsObj.venue,
    }

*/
