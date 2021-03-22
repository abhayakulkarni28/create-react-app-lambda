import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Navigation from '../../components/Navigation'
import { Component } from 'react'
import ManagerNavigation from '../../components/ManagerComponents/ManagerNavigation'
import manager_profile_img from '../../images/manager-profile.jfif'

export default class ManagerProfileScreen extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Navigation/>
        <ManagerNavigation/>
        <div style={{marginTop:"5%"}}>
            <img style={{marginLeft:"40%"}} src={manager_profile_img} alt="manager_profile_img"></img>
        </div>
        <Footer/>
      </div>
    )
  }
}