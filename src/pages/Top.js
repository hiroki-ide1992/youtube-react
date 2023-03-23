import React, { useEffect, useContext } from 'react';
import Layout from '../components/Layout/Layout';
import { fetchPopularData } from '../apis/index';
import { Store } from '../store/index';
import VideoGrid from '../components/VideoGrid/VideoGrid';
import VideoGridItem from '../components/VideoGridItem/VideoGridItem';

const Top = () => {
  const { globalState, setGlobalState } = useContext(Store); //useContextにStoreを渡すことでStore内の値をそれぞれ分割代入している
  useEffect(() => {
    fetchPopularData().then((res) => {
      console.log('data', res)
      setGlobalState({type: 'SET_POPULAR', payload: {popular: res.data.items}})
    })
   // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    /* Layoutで囲むことで Layout.js 内の{children}に囲った内容が渡される */
    <Layout>
      <VideoGrid>
        {
          globalState.popular && globalState.popular.map((popular) => {
            return (
              <VideoGridItem
                id={popular.id}
                key={popular.id}
                src={popular.snippet.thumbnails.standard.url}
                title={popular.snippet.title} />
            )
          })
        }
      </VideoGrid>
    </Layout>
  )
}

export default Top
