import {View, ScrollView} from 'react-native'
import React from 'react'
import QuickLinks from '../container/quick-links.container'
import Spacer from '../components/spacer.component'
import Celebration from '../container/celebration.container'
import AttendenceContainer from '../container/attendence.container'
import TeamContainer from '../container/team.container'
import WelcomeContainer from '../container/welcome.container'
import AnnouncementContainer from '../container/announcement.container'
import ClockContainer from '../container/clock.container'

const HomeScreen: React.FC = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <AnnouncementContainer />
      <Spacer hSpace={18} />
      <WelcomeContainer />
      <ClockContainer />
      <View style={{paddingHorizontal: 16, backgroundColor: '#fff'}}>
        <TeamContainer />
        <Spacer hSpace={22} />
        <QuickLinks />
        <Spacer hSpace={36} />
        <Celebration />
        <Spacer hSpace={36} />
        <AttendenceContainer />
        <Spacer hSpace={36} />
      </View>
    </ScrollView>
  )
}

export default HomeScreen
