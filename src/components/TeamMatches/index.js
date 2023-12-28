// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import MatchCard from '../MatchCard/index'
import LatestMatch from '../LatestMatch/index'
import './index.css'

class TeamMatches extends Component {
  state = {
    url: '',
    recentMatchesArrOfObj: [],
    latestMatchDetailsObj: {},
    isLoader: true,
  }

  componentDidMount() {
    this.getAllTeams()
  }

  getAllTeams = async () => {
    console.log(this.props)
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    // console.log(response)
    const data = await response.json()
    // console.log(data)
    const updatedData = {
      Url: data.team_banner_url,
      RecentMatchesArrOfObj: data.recent_matches,
      LatestMatchDetailsObj: data.latest_match_details,
      isLoader: false,
    }

    // console.log(updatedData, '27')
    const {Url, RecentMatchesArrOfObj, LatestMatchDetailsObj} = updatedData

    this.setState({
      url: Url,
      recentMatchesArrOfObj: RecentMatchesArrOfObj,
      latestMatchDetailsObj: LatestMatchDetailsObj,
      isLoader: false,
    })
  }

  render() {
    // console.log(this.state)
    // console.log(this.props)
    const {match} = this.props
    const {params} = match
    const {id} = params
    const {
      url,
      recentMatchesArrOfObj,
      latestMatchDetailsObj,
      isLoader,
    } = this.state
    console.log(id)
    // console.log(recentMatchesArrOfObj)
    // console.log(latestMatchDetailsObj)
    return isLoader ? (
      <Loader type="Oval" color="#ffffff" height={50} width={50} />
    ) : (
      <div className="teamMatchBg">
        <img src={url} alt="team banner" />
        <LatestMatch
          latestMatchDetailsObj={latestMatchDetailsObj}
          key={latestMatchDetailsObj.id}
        />
        <ul className="ulList">
          {recentMatchesArrOfObj.map(eachObject => (
            <MatchCard eachObject={eachObject} key={eachObject.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default TeamMatches
