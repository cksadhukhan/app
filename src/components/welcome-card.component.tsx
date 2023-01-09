import {View, Text, Image} from 'react-native'
import React from 'react'

interface WelcomeCardProps {
  cardBackground: string
  avatarBackground: string
  name: string
  position: string
  join: string
}

const WelcomeCard: React.FC<WelcomeCardProps> = (props: WelcomeCardProps) => {
  const {cardBackground, avatarBackground, name, position, join} = props

  return (
    <View
      style={{
        backgroundColor: cardBackground ?? '#e9f8fe',
        padding: 16,
        borderWidth: 1,
        borderColor: avatarBackground ?? '#87d7fb',
        borderRadius: 24,
        alignItems: 'center',
        justifyContent: 'center',
        width: 160,
        margin: 12,
      }}>
      <Image
        source={require('../assets/avatar.png')}
        style={{
          height: 80,
          width: 80,
          borderRadius: 40,
          backgroundColor: avatarBackground ?? '#c0e9fb',
        }}
      />
      <Text
        style={{
          fontSize: 22,
          fontWeight: '600',
          color: '#005f8c',
          marginTop: 8,
        }}>
        {name}
      </Text>
      <Text
        style={{
          fontSize: 18,
          fontWeight: '600',
          color: '#788794',
          marginVertical: 4,
        }}>
        {position}
      </Text>
      <Text style={{fontSize: 18, fontWeight: '600', color: '#788794'}}>
        {join}
      </Text>
    </View>
  )
}

export default WelcomeCard
