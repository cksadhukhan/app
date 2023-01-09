import {View, Text} from 'react-native'
import React from 'react'

interface SpacerProps {
  vSpace?: number
  hSpace?: number
}

const Spacer: React.FC<SpacerProps> = (props: SpacerProps) => {
  const {vSpace, hSpace} = props
  return <View style={{width: vSpace ?? 0, height: hSpace ?? 0}}></View>
}

export default Spacer
