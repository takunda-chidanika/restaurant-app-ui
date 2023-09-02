import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Link, useLocalSearchParams } from 'expo-router';
import * as Animatable from 'react-native-animatable';

import { FontAwesome } from '@expo/vector-icons';
import { SlideInUp } from 'react-native-reanimated';

const FoodDetailsScreen = () => {
    const item = useLocalSearchParams();

    return (
        <ScrollView>
            <View className='flex-1 bg-gray-100'>
                <Image
                    source={require("../../assets/images/background-image.jpg")}
                    blurRadius={5}
                    style={{
                        borderBottomLeftRadius: 50,
                        borderBottomRightRadius: 50,
                    }}
                    className='h-96 w-full absolute' />
                <View>
                    <View className='flex-row justify-between mx-4 items-center mt-2'>
                        <Link href={"/HomeScreen"} className='bg-gray-100 rounded-2xl p-2 shadow'>
                            <FontAwesome name="chevron-left" size={24} color="black" />
                        </Link>
                        <TouchableOpacity className='bg-gray-100 rounded-2xl p-3 shadow'>
                            <FontAwesome name="heart-o" size={24} color="black" />
                        </TouchableOpacity>
                    </View>
                    <View className='flex justify-center items-center'>
                        {/* @ts-ignore */}
                        <Image className='h-56 w-56' source={item.image} />
                        <Text className='text-3xl text-gray-100'>{item.name}</Text>
                    </View>
                    <View className='flex-row justify-center items-center mt-6'>
                        <View className='flex-row justify-between items-center bg-gray-200 rounded-2xl space-x-3'>
                            <TouchableOpacity className='rounded-2xl border-2 p-3 bg-gray-100 border-gray-300'>
                                <FontAwesome name="minus" size={20} color="black" />
                            </TouchableOpacity>
                            <Text className='text-xl'>1</Text>
                            <TouchableOpacity className='rounded-2xl border-2 p-3 bg-gray-100 border-gray-300'>
                                <FontAwesome name="plus" size={20} color="black" />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View
                        className='flex-row justify-between items-center mx-4 overflow-hidden h-20 mt-8'
                    >
                        <Animatable.View
                            delay={180}
                            animation={"slideInDown"}
                            className='flex items-center space-y-2'>
                            <Image source={require("../../assets/images/fire-icon.jpg")} className='h-8 w-8 rounded-md' />
                            <Text className='font-semibold'>
                                130 cal
                            </Text>
                        </Animatable.View>
                        <Animatable.View
                            delay={280}
                            animation={"slideInDown"}
                            className='flex items-center space-y-2'>
                            <Image source={require("../../assets/images/clock.webp")} className='h-8 w-8 rounded-md' />
                            <Text className='font-semibold'>
                                15-20 min
                            </Text>
                        </Animatable.View>
                        <Animatable.View
                            delay={380}
                            animation={"slideInDown"}
                            className='flex items-center space-y-2'>
                            <Image source={require("../../assets/images/chats.webp")} className='h-8 w-8 rounded-md' />
                            <Text className='font-semibold'>
                                4,6 votes
                            </Text>
                        </Animatable.View>
                        <Animatable.View
                            delay={480}
                            animation={"slideInDown"}
                            className='flex items-center space-y-2'>
                            <Image source={require("../../assets/images/scale.webp")} className='h-8 w-8 rounded-md' />
                            <Text className='font-semibold'>
                                350 g
                            </Text>
                        </Animatable.View>
                    </View>

                    <View className='mx-4 space-y-2 mt-6 mb-8'>
                        <Animatable.Text
                            animation={'slideInUp'}
                            className='text-3xl font-semibold text-gray-800'>Description</Animatable.Text>
                        <Animatable.Text
                            animation={"slideInUp"}
                            delay={100}
                            className='text-gray-600 tracking-widest'>{item.desc}</Animatable.Text>
                    </View>
                    <View className='mx-4 flex-row justify-between items-center'>
                        <Animatable.Text
                            animation={'slideInLeft'}
                            delay={100}
                            className='text-3xl font-semibold text-gray-600'>${item.price}</Animatable.Text>
                        <Animatable.View
                            animation={'slideInLeft'}
                            delay={100}
                        >
                            <TouchableOpacity className='bg-gray-800 rounded-lg px-10'>
                                <Text className='text-white text-xl font-semibold'>Add to Cart</Text>
                            </TouchableOpacity>
                        </Animatable.View>
                    </View>

                    {/* SafeAreaView */}
                </View>
            </View>
        </ScrollView>
    )
}

export default FoodDetailsScreen

const styles = StyleSheet.create({})