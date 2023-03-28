import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import styles from './popularjobcard.style'
import { checkImageURL } from '../../../../utils'

export type itemData = {
  employer_logo: string,
  employer_name: string,
  job_title: string,
  job_country: string,
}


export type PopularJobCardProps = {
  item: itemData[],
  selectedJob: number,
  handleCardPress?: () => void
}


const PopularJobCard = ({ item, selectedJob, handleCardPress }: PopularJobCardProps) => {
  return (
    <TouchableOpacity
      style={styles.container(selectedJob, item)}
      onPress={() => handleCardPress(item)}
    >
      <TouchableOpacity style={styles.logoContainer(selectedJob, item)}>
        {checkImageURL(item.employer_logo) ? (
          <Image
            source={{ uri: item.employer_logo }}
            resizeMode='contain'
            style={styles.logoImage} />
        ) : (
          <Text style={styles.imageNull}>
            {item.employer_name[0]}
          </Text>
        )}

      </TouchableOpacity>
      <Text
        style={styles.companyName}
        numberOfLines={1}>
        {item.employer_name}
      </Text>
      <View style={styles.infoContainer}>
        <Text style={styles.jobName(selectedJob, item)} numberOfLines={1}>
          {item.job_title}
        </Text>
        <Text style={styles.location}>From: {item.job_country}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default PopularJobCard