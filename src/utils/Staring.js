import { StyleSheet, Text, View, Image, } from 'react-native'
import React from 'react'

const Staring = ({ rating, filledStars, emptyStar, maxStar = 5 }) => {
    const filledStar = Math.floor(rating);
    const HalfStar = rating - filledStar >= 0.5
    return (
        <View style={{ flexDirection: 'row' }}>
            {Array(maxStar)
                .fill(0)
                .map((_, index) => (
                    <Image
                        key={index}
                        // source={index<filledStars?filledStar:index===filledStars&&halfStar?filledStar:emptyStar}
                        source={index < filledStars ? filledStar : index === filledStars && HalfStar ? filledStar : emptyStar}
                        style={{ width: 24, height: 24, marginRight: 4 }}


                    />
                ))
            }
        </View>
    )
}

export default Staring

const styles = StyleSheet.create({})