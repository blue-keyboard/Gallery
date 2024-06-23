import { createApi } from 'unsplash-js'
import { globals } from './Globals'

const api = createApi({
   // accessKey: 'h27icyLwsEZdsJW_vEdcVstxTwNyRBMVx5V_kSZHBvA'
   accessKey: 'jb_PBC9ZGSoX-sinX5XkOAODCOIt95J6y7u4k1aa874'
})

// It uses recursion becouse I want to retrieve 60 results and 30 is the max results i can retrieve
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
      if (error.message === 'expected JSON response from server.') {
         return 403
      } else {
         return 404
      }
      // Im not handling a possible error on their end yet, like their server having problems etc...
      // These 2 cases are the only ones I found, either no results retrieved
      // or I consumed to much Api calls and they deny me access
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
