import { Image, StyleSheet, Text, Touchable, View } from 'react-native';
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';
import { Link } from 'expo-router';

const FoodCard = ({ item, index }: any) => {
    return (
        <Animatable.View
            delay={index * 120}
            animation={"slideInRight"}
            className='w-56 h-70 mr-6 my-2 py-2 rounded-3xl'
            style={{
                backgroundColor: 'rgba(255,255,255,0.2)'
            }}
        >
            <View className='flex-row justify-center'>
                <Image source={item.image} className='w-32 h-32' />
            </View>
            <View className='flex-1 px-3 py-2 space-y-2'>
                <Text className='text-gray-200 text-xl font-medium tracking-normal'>{item.name}</Text>
                <Text className='text-gray-400'>{
                    item.ingredients.length > 32 ? item.ingredients.slice(0, 32) + "..." : item.ingredients
                }</Text>
            </View>
            <View className='flex-row justify-between items-center px-1'>
                <Text className='text-2xl font-semibold text-gray-100'>${item.price}</Text>
                <Link href={{
                    pathname: '/FoodDetailsScreen',
                    params: item
                }}
                    className='bg-gray-100 p-3 rounded-full'
                >
                    <FontAwesome name="shopping-basket" size={20} color="black" />
                </Link>
            </View>
        </Animatable.View>
    )
}

export default FoodCard

const styles = StyleSheet.create({})