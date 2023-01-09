import {Text, TouchableOpacity, TouchableOpacityProps} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

interface LinkCardProps extends TouchableOpacityProps {
  title: string
}

const LinkCard: React.FC<LinkCardProps> = (props: LinkCardProps) => {
  const {title, onPress, ...rest} = props

  return (
    <TouchableOpacity
      style={{
        flex: 1,
        backgroundColor: '#def6fa',
        padding: 14,
        borderRadius: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}
      onPress={onPress}
      {...rest}>
      <Text
        style={{
          fontSize: 16,
          fontWeight: '500',
          color: '#2a353f',
        }}>
        {title}
      </Text>
      <Icon
        style={{
          position: 'absolute',
          top: 4,
          right: 4,
        }}
        name="arrow-top-right"
        color="#637381"
        size={18}
      />
    </TouchableOpacity>
  )
}

export default LinkCard
