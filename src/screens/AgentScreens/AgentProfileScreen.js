import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Navigation from '../../components/Navigation'
import AgentNavigation from '../../components/AgentComponents/AgentNavigation'
import { Component } from 'react'
import agent_profile_img from '../../images/agent-profile.jfif'
export default class AgentProfileScreen extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Navigation/>
        <AgentNavigation/>
        <div style={{marginTop:"5%"}}>
          <img style={{marginLeft:"40%"}} src={agent_profile_img} alt="agent_profile_img"></img>
        </div>
        <Footer/>
      </div>
    )
  }
}