import axios from 'axios'

const KEY = 'xxx';

// youtube用のHTTPインスタンスの生成
const youtube = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3'
})

const params = {
  part: 'snippet',
  maxResults: 40,
  key: KEY,
  regionCode: 'JP',
  type: 'video',
}

// youtubeAPIから情報を取得している https://developers.google.com/youtube/v3/docs/videos/list?hl=ja
export const fetchPopularData = async () => {
  return await youtube.get('/videos', {
    params: {
      ...params,
      chart: 'mostPopular'
    }
  })
}

// youtubeAPIから動画詳細を取得している
export const fetchSelectedData = async (id) => {
  return await youtube.get('videos', {
    params: {
      ...params,
      id
    }
  })
}

// youtubeAPIから関連動画を取得している
export const fetchRelatedData = async (id) => {
  return await youtube.get('/search', {
    params: {
      ...params,
      relatedToVideoId: id
    }
  })
}

// youtubeAPIから検索結果を取得している
export const fetchSearchData = async (query) => {
  return await youtube.get('/search', {
    params: {
      ...params,
      q: query
    }
  })
}