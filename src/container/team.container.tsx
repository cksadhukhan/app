import {View, Text} from 'react-native'
import React from 'react'
import Container from './base.container'
import TeamCard from '../components/team-card.component'
import Spacer from '../components/spacer.component'

const TeamContainer = () => {
  return (
    <Container title="My Team" onPress={() => {}}>
      <TeamCard name="Reshmi" position="Trainee" isPresent={true} />
      <Spacer hSpace={12} />
      <TeamCard name="Manisha" position="HR" isPresent={true} />
      <Spacer hSpace={12} />
      <TeamCard name="Abhishek" position="Developer" isPresent={true} />
      <Spacer hSpace={12} />
      <TeamCard name="Aditya" position="Trainee" isPresent={false} />
      <Spacer hSpace={12} />
      <TeamCard name="Neeraj" position="HR" isPresent={false} />
      <Spacer hSpace={12} />
    </Container>
  )
}

export default TeamContainer
