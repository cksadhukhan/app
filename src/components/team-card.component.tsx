import {View, Text, Image} from 'react-native'
import React from 'react'

interface TeamCardProps {
  avatar?: string
  name: string
  position: string
  isPresent: boolean
}

const TeamCard: React.FC<TeamCardProps> = (props: TeamCardProps) => {
  const {name, position, avatar, isPresent} = props

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          flex: 1,
        }}>
        <Image
          source={require('../assets/avatar.png')}
          style={{
            backgroundColor: '#fcbbb7',
            height: 60,
            width: 60,
            borderRadius: 30,
          }}
        />
        <Text
          style={{
            fontSize: 18,
            fontWeight: '500',
            color: '#212b36',
            marginStart: 16,
          }}>
          {name}
        </Text>
      </View>
      <View
        style={{
          marginStart: 18,
          flexDirection: 'row',
          flex: 1,
          //   alignItems: 'flex-start',
          justifyContent: 'space-between',
        }}>
        <Text
          style={{fontSize: 16, fontWeight: '500', color: '#637381', flex: 1}}>
          {position}
        </Text>
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
          <View
            style={{
              height: 16,
              width: 16,
              borderRadius: 8,
              backgroundColor: isPresent ? '#42ab56' : '#f2443d',
            }}></View>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '400',
              color: '#637381',
              marginStart: 6,
            }}>
            {isPresent ? 'Present' : 'Absent'}
          </Text>
        </View>
      </View>
    </View>
  )
}

export default TeamCard
