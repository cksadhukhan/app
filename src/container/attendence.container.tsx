import {View, Text} from 'react-native'
import React from 'react'
import Container from './base.container'
import AttendenceCard from '../components/attendence-card.conponent'
import Spacer from '../components/spacer.component'

const AttendenceContainer = () => {
  return (
    <Container title="My Tasks">
      <AttendenceCard title="Attendence" value={17} color="#e2dafb" />
      <Spacer hSpace={16} />
      <AttendenceCard title="Leave" value={8} color="#bfe9fc" />
      <Spacer hSpace={16} />
      <AttendenceCard title="Job Offers" value={11} color="#fbcad5" />
      <Spacer hSpace={16} />
      <AttendenceCard title="Interview Schedule" value={4} color="#ffebb2" />
    </Container>
  )
}

export default AttendenceContainer
