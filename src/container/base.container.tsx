import {View, Text, TouchableOpacity, TouchableOpacityProps} from 'react-native'
import React from 'react'

interface ContainerProps extends TouchableOpacityProps {
  title: string
  children: React.ReactNode
}

const Container: React.FC<ContainerProps> = (props: ContainerProps) => {
  const {title, children, onPress, ...rest} = props

  return (
    <View
      style={{
        flexDirection: 'column',
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderColor: '#e3e3e3',
        borderRadius: 16,
        padding: 16,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: 18,
            color: '#000',
            fontWeight: 'bold',
            marginVertical: 16,
          }}>
          {title}
        </Text>
        {onPress && (
          <TouchableOpacity onPress={onPress} {...rest}>
            <Text
              style={{
                fontSize: 16,
                color: '#42ab56',
                fontWeight: '500',
                marginVertical: 16,
                borderBottomWidth: 1,
                borderColor: '#42ab56',
              }}>
              View All
            </Text>
          </TouchableOpacity>
        )}
      </View>
      {children}
    </View>
  )
}

export default Container
