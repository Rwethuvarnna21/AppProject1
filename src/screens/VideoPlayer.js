import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Video from 'react-native-video'

const VideoPlayer = () => {
  return (
    <View>
      <Video

        source={{ uri: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" }}
        onError={(error) => console.error('Video Error:', error)}
        style={styles.video}
        controls={true}
      />
    </View>
  )
}

export default VideoPlayer

const styles = StyleSheet.create({
  video: {
    width: '120%',
    height: 300,
  },
})