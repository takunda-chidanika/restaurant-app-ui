import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';
import { categories, food_items } from '../../constant';
import * as Animatable from 'react-native-animatable';
import FoodCard from '../../components/FoodCard';

const welcomeScreen = () => {
  const [activeCategory, setActiveCategory] = useState("Burger")

  return (
    <View className='flex-1 relative'>
      <Image blurRadius={5} source={require("../../assets/images/background-image.jpg")} className='absolute w-full h-full' />
      <View className='flex-1 mt-2'>
        <View className='flex-row justify-between items-center mx-4'>
          <View className='bg-white  shadow-md rounded-2xl p-2 '>
            <FontAwesome name="bars" size={24} color="black" />
          </View>
          <View className='rounded-2xl'
            style={{
              backgroundColor: 'rgba(255,255,255,0.7)',
              padding: 3
            }}
          >
            <Image
              className='h-12 w-12 rounded-2xl'
              source={require("../../assets/images/background-image.jpg")}
              style={{
                backgroundColor: "rgba(255,255,255,255)"
              }} />
          </View>
        </View>
        {/* Banner */}
        <View className='my-2 space-y-2'>
          <Text className='mx-4 text-5xl font-medium text-gray-400'>
            Fast and
          </Text>
          <Text className='mx-4 text-5xl font-medium text-gray-400'>
            <Text className='font-extrabold'>Delicious</Text> Food
          </Text>
        </View>
        {/* Search Sections */}
        <View className='mx-4 flex-row justify-between items-center space-x-2'>
          <View className='flex-row flex-1 p-4 bg-white rounded-2xl items-center'>
            <FontAwesome name="search" size={24} color="gray" />
            <TextInput placeholder='Food' value='Search' className='ml-2 text-gray-800' />
          </View>
          <View className='bg-white rounded-2xl p-4'>
            <FontAwesome name="filter" size={24} color="black" />
          </View>
        </View>

        {/* categories */}
        <ScrollView
          className='mt-6 pt-6 max-h-20'
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: 20
          }}>
          {
            categories.map((category, index) => {
              let isActive = category == activeCategory;
              let textClass = isActive ? 'font-bold' : ''
              return (
                <Animatable.View
                  delay={index * 120}
                  animation={'slideInDown'}
                  key={index}>
                  <TouchableOpacity
                    className='mr-9'
                    onPress={() => {
                      setActiveCategory(category)
                    }}
                  >
                    <Text className={`text-gray-300 text-base tracking-widest + ${textClass}`}>
                      {category}
                    </Text>
                    {
                      isActive ? (
                        <View className='flex-row justify-center'>
                          <View className='divide-x-[3px]' />
                        </View>
                      ) : (
                        <></>
                      )
                    }
                  </TouchableOpacity>
                </Animatable.View>

              )
            })
          }
        </ScrollView>
        <ScrollView
          horizontal
          contentContainerStyle={{
            paddingHorizontal: 20,
          }}
          showsHorizontalScrollIndicator={false}

        >
          {
            food_items.map((item, index) => (
              <FoodCard item={item} index={index} key={index} />
            ))
          }
        </ScrollView>
        {/* SafeAreaView */}
      </View>
    </View>
  )
}

export default welcomeScreen

const styles = StyleSheet.create({})