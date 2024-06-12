import { createApi } from 'unsplash-js'
import { globals } from './Globals'

const api = createApi({
   accessKey: 'h27icyLwsEZdsJW_vEdcVstxTwNyRBMVx5V_kSZHBvA'
})

export const getRawPhotosFromApi = async (
   query,
   count = globals.NUM_PHOTOS_FROM_API,
   rawPhotos = []
) => {
   let max = 30

   if (count === 0) {
      return rawPhotos
   } else if (count < max) {
      max = count
   }

   try {
      const res = await api.photos.getRandom({ query: query, count: max })
      const photos = res.response
      rawPhotos.push(...photos)
      return await getRawPhotosFromApi(query, count - max, rawPhotos)
   } catch (error) {
      return false
   }
}
