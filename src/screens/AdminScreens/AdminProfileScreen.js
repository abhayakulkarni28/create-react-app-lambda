import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Navigation from '../../components/Navigation'
import { Component } from 'react'
import AdminNavigation from '../../components/AdminComponents/AdminNavigation'
import admin_profile_img from '../../images/admin-profile.jpg'

export default class AdminProfileScreen extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Navigation/>
        <AdminNavigation/>
        <div style={{marginTop:"5%"}}>
          <img style={{marginLeft:"40%"}} src={admin_profile_img} alt="admin_profile_img"></img>
        </div>
        <Footer/>
      </div>
    )
  }
}