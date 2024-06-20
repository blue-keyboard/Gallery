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
      // SUGGESTIONS
      return false
   }
}

//
// Alternative, more varied each iteration over the same query but maybe less 'relevant' results,
// probably error if the query searched has low results, can fix it with another api call
//
// export const getRawPhotosFromApi = async (
//    query,
//    count = globals.NUM_PHOTOS_FROM_API,
//    rawPhotos = []
// ) => {
//    let max = 30

//    if (count === 0) {
//       return rawPhotos
//    } else if (count < max) {
//       max = count
//    }

//    let randomPage = Math.floor(Math.random() * 100) + 1
//    console.log(randomPage)

//    try {
//       const res = await api.search.getPhotos({
//          query: query,
//          page: randomPage,
//          perPage: max
//       })

//       // console.log(page)

//       console.log(res)

//       const photos = res.response.results
//       rawPhotos.push(...photos)
//       return await getRawPhotosFromApi(query, count - max, rawPhotos)
//    } catch (error) {
//       // SUGGESTIONS
//       return false
//    }
// }
