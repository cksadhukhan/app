import {View, Text} from 'react-native'
import React from 'react'
import ClockCard from '../components/clock-card.component'

const ClockContainer = () => {
  return (
    <View
      style={{
        backgroundColor: '#fff',
        paddingHorizontal: 24,
        paddingVertical: 32,
      }}>
      <ClockCard />
    </View>
  )
}

export default ClockContainer
