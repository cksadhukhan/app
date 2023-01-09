import {View, Text} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

interface AnnouncementCardProps {
  cardBackgroundColor: string
  iconBackgroundColor: string
}

const AnnouncementCard: React.FC<AnnouncementCardProps> = (
  props: AnnouncementCardProps,
) => {
  const {cardBackgroundColor, iconBackgroundColor} = props

  return (
    <View
      style={{
        backgroundColor: cardBackgroundColor ?? '#e0c8ae',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 16,
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 18,
        width: 320,
      }}>
      <Icon
        name="clock"
        size={32}
        color="#fc863f"
        style={{
          backgroundColor: iconBackgroundColor ?? '#fede67',
          padding: 12,
          borderRadius: 12,
        }}
      />
      <View style={{padding: 16, marginRight: 12}}>
        <Text
          numberOfLines={1}
          style={{fontSize: 18, fontWeight: '600', color: '#212b36'}}>
          Employees Are Expected To Clockkkkkkkkkkkk
        </Text>
        <Text style={{fontSize: 16, fontWeight: '600', color: '#6c7984'}}>
          1 hour ago
        </Text>
      </View>
    </View>
  )
}

export default AnnouncementCard
