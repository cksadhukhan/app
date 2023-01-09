import {View, Text, Image} from 'react-native'
import React from 'react'
import {Container} from '.'
import Spacer from '../components/spacer.component'
import Icon from 'react-native-vector-icons/MaterialIcons'
import CelebrationCard from '../components/celebration-card.component'

const Celebration = () => {
  return (
    <Container title="Celebrations">
      <Spacer hSpace={18} />
      <CelebrationCard backgroundColor="#c1f1ca" textColor="#3b941f" />
      <Spacer hSpace={36} />
      <CelebrationCard backgroundColor="#c4ebfc" textColor="#0f89be" />
      <Spacer hSpace={36} />
      <CelebrationCard backgroundColor="#dbd2fb" textColor="#5653a7" />
      <Spacer hSpace={36} />
      <CelebrationCard backgroundColor="#ffdaa7" textColor="#bd7e2c" />
      <Spacer hSpace={18} />
    </Container>
  )
}

export default Celebration
