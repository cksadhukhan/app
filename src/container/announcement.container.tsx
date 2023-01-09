import {View, Text, TextInput, TouchableOpacity, ScrollView} from 'react-native'
import React from 'react'
import IIcon from 'react-native-vector-icons/Ionicons'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import AnnouncementCard from '../components/announcement-card.component'

const AnnouncementContainer = () => {
  return (
    <View
      style={{
        backgroundColor: '#d9d9d9',
        paddingVertical: 36,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#fff',
            borderRadius: 12,
            paddingHorizontal: 12,
            width: 260,
          }}>
          <IIcon
            name="search"
            size={18}
            color="#a4adb5"
            style={{marginEnd: 12}}
          />
          <TextInput
            value=""
            onChange={() => {}}
            placeholder="Search"
            style={{width: 220, fontSize: 16}}
            placeholderTextColor="#181919"
          />
        </View>
        <Icon name="chat" size={36} color="#42ab56" style={{marginStart: 8}} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginVertical: 18,
          paddingHorizontal: 22,
        }}>
        <Text
          style={{
            fontSize: 18,
            color: '#000',
            fontWeight: 'bold',
            marginVertical: 16,
          }}>
          Announcements
        </Text>
        <TouchableOpacity onPress={() => {}}>
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
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <AnnouncementCard
          cardBackgroundColor="#e0c8ae"
          iconBackgroundColor="#fede67"
        />
        <AnnouncementCard
          cardBackgroundColor="#e0adad"
          iconBackgroundColor="#fca588"
        />
        <AnnouncementCard
          cardBackgroundColor="#e0c8ae"
          iconBackgroundColor="#fede67"
        />
        <AnnouncementCard
          cardBackgroundColor="#e0adad"
          iconBackgroundColor="#fca588"
        />
      </ScrollView>
    </View>
  )
}

export default AnnouncementContainer
