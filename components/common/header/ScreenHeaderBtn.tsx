import React from 'react'
import { TouchableOpacity, Image } from 'react-native'

import styles from './screenheader.style'

type ScreenHeaderBtnProps = {
  iconUrl: String;
  dimension?: String;
  handlePress?: () => void;
}

const ScreenHeaderBtn = ({
  iconUrl,
  dimension,
  handlePress
}: ScreenHeaderBtnProps) => {
  return (
    <TouchableOpacity
      style={styles.btnContainer}
      onPress={handlePress}>
      <Image
        source={iconUrl}
        resizeMode='cover'
        style={styles.btnImg(dimension)}
      />
    </TouchableOpacity>
  )
}

export default ScreenHeaderBtn