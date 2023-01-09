import {View, Text, ScrollView} from 'react-native'
import React from 'react'
import Spacer from '../components/spacer.component'
import WelcomeCard from '../components/welcome-card.component'

const WelcomeContainer = () => {
  return (
    <View
      style={{
        backgroundColor: '#d9d9d9',
        borderBottomLeftRadius: 36,
        borderBottomRightRadius: 36,
        paddingVertical: 22,
      }}>
      <Text
        style={{
          fontSize: 42,
          fontWeight: '600',
          alignSelf: 'center',
          color: '#e4a576',
          fontFamily: 'DancingScript-Bold',
        }}>
        Welcome
      </Text>
      <Spacer hSpace={12} />
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <WelcomeCard
          cardBackground="#fff9e8"
          avatarBackground="#ffe7a2"
          name="Sahil"
          position="UI/UX Designer"
          join="Joined Today"
        />
        <WelcomeCard
          cardBackground="#e9f8fe"
          avatarBackground="#c0e9fb"
          name="Megha"
          position="UI/UX Designer"
          join="Joined Today"
        />
        <WelcomeCard
          cardBackground="#fdebef"
          avatarBackground="#fbc4d0"
          name="Ravi"
          position="UI/UX Designer"
          join="Joined Today"
        />
      </ScrollView>
    </View>
  )
}

export default WelcomeContainer
