import {View, Text, Image} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'

interface CelebrationCardProps {
  backgroundColor: string
  textColor: string
}

const CelebrationCard: React.FC<CelebrationCardProps> = (
  props: CelebrationCardProps,
) => {
  const {backgroundColor, textColor} = props

  return (
    <View
      style={{
        backgroundColor: backgroundColor ?? '#c1f1ca',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical: 28,
        borderRadius: 16,
      }}>
      <Text style={{color: '#000', fontSize: 18, fontWeight: '600'}}>
        Birthday
      </Text>
      <View
        style={{
          position: 'absolute',
          alignItems: 'center',
          justifyContent: 'center',
          left: 80,
          backgroundColor: backgroundColor ?? '#c1f1ca',
          height: 110,
          width: 110,
          borderRadius: 50,
          zIndex: -1,
        }}>
        <Image
          source={require('../assets/avatar.png')}
          style={{
            height: 56,
            width: 56,
          }}
        />
      </View>
      <Text
        style={{
          color: textColor ?? '#3b941f',
          fontSize: 22,
          fontWeight: '600',
          marginLeft: 70,
        }}>
        Shubham
      </Text>
      <Icon name="arrow-forward-ios" size={22} />
    </View>
  )
}

export default CelebrationCard
