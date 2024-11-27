import React from 'react'
import HeroPage from '../comp/heroPage'
import FavoriteCourses from '../comp/Courses'
import SkillsTraining from '../comp/digitalLiteracy'
import CareerResources from '../comp/careerResources'
import CommunityForum from '../comp/communityForum'
import MentorDashboard from '../comp/mentorDashboard'
import Navbar from '../comp/navBar'
import Footer from '../comp/footer'

const Home = () => {
  return (
    <>
    <Navbar/>
      <HeroPage />
      <FavoriteCourses />
      <SkillsTraining />
      <CareerResources />
      <CommunityForum />
      <Footer/>
    </>
  )
}

export default Home
