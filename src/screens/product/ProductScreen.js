/**
 * @flow
 * Created by Dima Portenko on 07.05.2020
 */
import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native-ui-lib';
import { useRoute } from '@react-navigation/native';

import type { Product } from '../../logic/types/magento';
import { useProductDetails } from '../../logic/product/useProductDetails';
import { MediaGallery } from '../../components/media/MediaGallery';

export const ProductScreen = () => {
  const route = useRoute();
  const [product: Product] = useState(route.params.product);
  const { mediaGalleryEntries, productDetails } = useProductDetails({ product });

  console.warn('mediaGalleryEntries', mediaGalleryEntries);

  return (
    <View flex>
      <MediaGallery entries={mediaGalleryEntries} />
      <Text>{product.name}</Text>
    </View>
  );
};