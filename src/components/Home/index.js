// Write your code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {dataFull: [], isLoader: true}

  componentDidMount() {
    this.getAllTeamsList()
  }

  getAllTeamsList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    console.log(response)
    const data = await response.json()
    console.log(data)
    const {teams} = data
    const updatedData = teams.map(eachObject => ({
      id: eachObject.id,
      name: eachObject.name,
      teamImageUrl: eachObject.team_image_url,
    }))
    console.log(updatedData)

    this.setState({dataFull: updatedData, isLoader: false})
  }

  render() {
    const {dataFull, isLoader} = this.state

    return (
      <div className="bgHome">
        <div className="bgHomeHead">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="bgHomeHeadLogo"
          />
          <h1>IPL Dashboard</h1>
        </div>
        {isLoader ? (
          <Loader type="Oval" color="#ffffff" height={50} width={50} />
        ) : (
          <ul className="bgHomeUl">
            {dataFull.map(eachObject => (
              <TeamCard eachObject={eachObject} key={eachObject.id} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default Home
