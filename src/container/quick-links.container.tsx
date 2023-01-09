import {View} from 'react-native'
import React from 'react'
import {Container} from '.'
import LinkCard from '../components/link-card.component'
import Spacer from '../components/spacer.component'

const QuickLinks = () => {
  return (
    <Container title="Quick Links">
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <LinkCard title={`Holiday \nCalendar`} />
        <Spacer vSpace={12} />
        <LinkCard title={`Leave \nPolicy`} />
        <Spacer vSpace={12} />
        <LinkCard title={`Payroll \nManual`} />
      </View>
    </Container>
  )
}

export default QuickLinks
