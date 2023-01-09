import {View, Text, TouchableOpacity} from 'react-native'
import React from 'react'
import MIcon from 'react-native-vector-icons/MaterialIcons'
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons'

const ClockCard = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: '#e9f8fe',
        paddingHorizontal: 8,
        paddingVertical: 16,
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <MCIcon name="clock" size={56} color="#0289c8" />
      <View>
        <Text style={{fontSize: 14, color: '#212b36', fontWeight: '500'}}>
          03/01/23
        </Text>
        <Text style={{fontSize: 14, color: '#212b36', fontWeight: '500'}}>
          Clock In - 12:00 AM
        </Text>
        <Text style={{fontSize: 14, color: '#212b36', fontWeight: '500'}}>
          Clock Out - 12:00 PM
        </Text>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: '#0289c8',
          paddingVertical: 8,
          paddingHorizontal: 12,
          borderRadius: 8,
        }}>
        <Text style={{fontSize: 16, fontWeight: '500', color: '#fff'}}>
          Clock In
        </Text>
      </TouchableOpacity>
      <MIcon name="arrow-forward-ios" size={22} />
    </View>
  )
}

export default ClockCard
