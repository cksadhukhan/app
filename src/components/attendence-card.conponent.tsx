import {View, Text, TouchableOpacity, TouchableOpacityProps} from 'react-native'
import React from 'react'

interface AttendenceCardProps extends TouchableOpacityProps {
  title: string
  value: number
  color?: string
}

const AttendenceCard: React.FC<AttendenceCardProps> = (
  props: AttendenceCardProps,
) => {
  const {title, value, color, onPress, ...rest} = props

  return (
    <View
      style={{
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: color ?? '#dad0fb',
        borderRadius: 16,
        paddingHorizontal: 18,
        paddingVertical: 24,
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text style={{fontSize: 18, color: '#212b36', fontWeight: '500'}}>
          {title}
        </Text>
        <Text
          style={{
            fontSize: 18,
            color: '#95a0aa',
            fontWeight: '500',
            marginEnd: 24,
          }}>
          {value}
        </Text>
      </View>
      <TouchableOpacity style={{}} onPress={onPress} {...rest}>
        <Text
          style={{
            fontSize: 18,
            color: '#42ab56',
            fontWeight: '500',
            borderBottomWidth: 2,
            borderColor: '#42ab56',
          }}>
          View
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default AttendenceCard
