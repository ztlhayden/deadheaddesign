import React from 'react'
import clientConfig from '../util/client-config'
import BasePortableText from '@sanity/block-content-to-react'
import serializers from '../atoms/serializers'

const PortableText = ({blocks}) => (
  <BasePortableText blocks={blocks} serializers={serializers} {...clientConfig.sanity} />
)

export default PortableText