import React from 'react'
import { View, Text, Image } from 'react-native'

import styles from './company.style'
import { icons } from '../../../constants'
import { checkImageURL } from '../../../utils'

type CompanyProps = {
  companyLogo: string,
  jobTitle: string,
  companyName: string,
  location: string
}

const Company = ({
  companyLogo,
  jobTitle,
  companyName,
  location }: CompanyProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        {checkImageURL(companyLogo) ? (
          <Image
            source={{ uri: companyLogo }}
            resizeMode='contain'
            style={styles.logoImage} />
        ) : (
          <Text style={styles.imageNull}>
            {companyName[0]}
          </Text>
        )}
      </View>
    </View>
  )
}

export default Company