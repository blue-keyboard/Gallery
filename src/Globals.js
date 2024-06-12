export const globals = {
   currentPhotos: [],

   divsArray: [],

   NUM_PHOTOS_FROM_API: 60,

   MEDIA_QUERIES: [700, 925, 1150, 1360],

   currentCols: [700, 925, 1150, 1360].reduce(
      (acc, num) => (window.innerWidth > num ? acc + 1 : acc + 0),
      2
   ),

   matchMedias: {
      mobileWindow: undefined,
      columns3: undefined,
      columns4: undefined,
      columns5: undefined,
      columns6: undefined,
      handlerMobile: undefined,
      handlerColumns3: undefined,
      handlerColumns4: undefined,
      handlerColumns5: undefined,
      handlerColumns6: undefined,
      removeAllListeners: () => {
         globals.matchMedias.mobileWindow.removeEventListener(
            'change',
            globals.matchMedias.handlerMobile
         )
         globals.matchMedias.columns3.removeEventListener(
            'change',
            globals.matchMedias.handlerColumns3
         )
         globals.matchMedias.columns4.removeEventListener(
            'change',
            globals.matchMedias.handlerColumns4
         )
         globals.matchMedias.columns5.removeEventListener(
            'change',
            globals.matchMedias.handlerColumns5
         )
         globals.matchMedias.columns6.removeEventListener(
            'change',
            globals.matchMedias.handlerColumns6
         )
      }
   },

   boilerplatePhotos: [
      {
         src: 'https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTgxOTA0MjN8&ixlib=rb-4.0.3',
         author: 'Mark Harpur',
         alt: 'brown wooden dock between lavender flower field near body of water during golden hour',
         referalAuthor:
            'https://unsplash.com/@luckybeanz?utm_source=gallery&utm_medium=referral',
         download:
            'https://unsplash.com/photos/brown-wooden-dock-between-lavender-flower-field-near-body-of-water-during-golden-hour-K2s_YE031CA',
         resize:
            'https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTgxOTA0MjN8&ixlib=rb-4.0.3&fit=crop&w=816&h=400',
         class: 'horizontal'
      },
      {
         src: 'https://images.unsplash.com/photo-1544892504-5a42d285ab6f?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTgxOTA0MjN8&ixlib=rb-4.0.3',
         author: 'Tarek Correa',
         alt: 'purple petaled flower field at daytime',
         referalAuthor:
            'https://unsplash.com/@tarek_correa?utm_source=gallery&utm_medium=referral',
         download:
            'https://unsplash.com/photos/purple-petaled-flower-field-at-daytime-K50_EI8qwDE',
         resize:
            'https://images.unsplash.com/photo-1544892504-5a42d285ab6f?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTgxOTA0MjN8&ixlib=rb-4.0.3&fit=crop&w=400&h=400',
         class: 'square'
      },
      {
         src: 'https://images.unsplash.com/photo-1462216589242-9e3e00a47a48?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTgxOTA0MjN8&ixlib=rb-4.0.3',
         author: 'Aaron Burden',
         alt: 'white dandelion closeup photography',
         referalAuthor:
            'https://unsplash.com/@aaronburden?utm_source=gallery&utm_medium=referral',
         download:
            'https://unsplash.com/photos/white-dandelion-closeup-photography-XxvXRmsH860',
         resize:
            'https://images.unsplash.com/photo-1462216589242-9e3e00a47a48?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTgxOTA0MjN8&ixlib=rb-4.0.3&fit=crop&w=400&h=400',
         class: 'square'
      },
      {
         src: 'https://images.unsplash.com/photo-1541675154750-0444c7d51e8e?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTgxOTA0MjN8&ixlib=rb-4.0.3',
         author: 'Sebin Thomas',
         alt: 'trees and plants',
         referalAuthor:
            'https://unsplash.com/@sebinthomas?utm_source=gallery&utm_medium=referral',
         download: 'https://unsplash.com/photos/trees-and-plants-OdBFUurPHjo',
         resize:
            'https://images.unsplash.com/photo-1541675154750-0444c7d51e8e?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTgxOTA0MjN8&ixlib=rb-4.0.3&fit=crop&w=400&h=400',
         class: 'square'
      },
      {
         src: 'https://images.unsplash.com/photo-1479030160180-b1860951d696?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTgxOTA0MjN8&ixlib=rb-4.0.3',
         author: 'Ashim D’Silva',
         alt: 'scenery of mountain canyon',
         referalAuthor:
            'https://unsplash.com/@randomlies?utm_source=gallery&utm_medium=referral',
         download:
            'https://unsplash.com/photos/scenery-of-mountain-canyon-WeYamle9fDM',
         resize:
            'https://images.unsplash.com/photo-1479030160180-b1860951d696?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTgxOTA0MjN8&ixlib=rb-4.0.3&fit=crop&w=816&h=400',
         class: 'horizontal'
      },
      {
         src: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTgxOTA0MjN8&ixlib=rb-4.0.3',
         author: 'Benjamin Voros',
         alt: 'snow mountain under stars',
         referalAuthor:
            'https://unsplash.com/@vorosbenisop?utm_source=gallery&utm_medium=referral',
         download:
            'https://unsplash.com/photos/snow-mountain-under-stars-phIFdC6lA4E',
         resize:
            'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTgxOTA0MjN8&ixlib=rb-4.0.3&fit=crop&w=816&h=400',
         class: 'horizontal'
      },
      {
         src: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTgxOTA0MjN8&ixlib=rb-4.0.3',
         author: 'Ivana Cajina',
         alt: 'mountains under white mist at daytime',
         referalAuthor:
            'https://unsplash.com/@von_co?utm_source=gallery&utm_medium=referral',
         download:
            'https://unsplash.com/photos/mountains-under-white-mist-at-daytime-HDd-NQ_AMNQ',
         resize:
            'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTgxOTA0MjN8&ixlib=rb-4.0.3&fit=crop&w=400&h=816',
         class: 'vertical'
      },
      {
         src: 'https://images.unsplash.com/photo-1444464666168-49d633b86797?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTgxOTA0MjN8&ixlib=rb-4.0.3',
         author: 'Vincent van Zalinge',
         alt: 'selective focus photography of blue kingfisher',
         referalAuthor:
            'https://unsplash.com/@vincentvanzalinge?utm_source=gallery&utm_medium=referral',
         download:
            'https://unsplash.com/photos/selective-focus-photography-of-blue-kingfisher-vUNQaTtZeOo',
         resize:
            'https://images.unsplash.com/photo-1444464666168-49d633b86797?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTgxOTA0MjN8&ixlib=rb-4.0.3&fit=crop&w=816&h=400',
         class: 'horizontal'
      },
      {
         src: 'https://images.unsplash.com/photo-1500829243541-74b677fecc30?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTgxOTA0MjN8&ixlib=rb-4.0.3',
         author: 'Daniil Silantev',
         alt: 'green leaves',
         referalAuthor:
            'https://unsplash.com/@betagamma?utm_source=gallery&utm_medium=referral',
         download: 'https://unsplash.com/photos/green-leaves-F6Da4r2x5to',
         resize:
            'https://images.unsplash.com/photo-1500829243541-74b677fecc30?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTgxOTA0MjN8&ixlib=rb-4.0.3&fit=crop&w=816&h=400',
         class: 'horizontal'
      },
      {
         src: 'https://images.unsplash.com/photo-1511497584788-876760111969?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTgxOTA0MjN8&ixlib=rb-4.0.3',
         author: 'Sergei A',
         alt: 'pine trees field near mountain under sunset',
         referalAuthor:
            'https://unsplash.com/@sakulich?utm_source=gallery&utm_medium=referral',
         download:
            'https://unsplash.com/photos/pine-trees-field-near-mountain-under-sunset--heLWtuAN3c',
         resize:
            'https://images.unsplash.com/photo-1511497584788-876760111969?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTgxOTA0MjN8&ixlib=rb-4.0.3&fit=crop&w=816&h=400',
         class: 'horizontal'
      },
      {
         src: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTgxOTA0MjN8&ixlib=rb-4.0.3',
         author: 'Robert Lukeman',
         alt: 'green grass field during sunset',
         referalAuthor:
            'https://unsplash.com/@robertlukeman?utm_source=gallery&utm_medium=referral',
         download:
            'https://unsplash.com/photos/green-grass-field-during-sunset-_RBcxo9AU-U',
         resize:
            'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTgxOTA0MjN8&ixlib=rb-4.0.3&fit=crop&w=816&h=400',
         class: 'horizontal'
      },
      {
         src: 'https://images.unsplash.com/photo-1542856391-010fb87dcfed?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTgxOTA0MjN8&ixlib=rb-4.0.3',
         author: 'Joel Vodell',
         alt: '2 person on boat at lake during daytime',
         referalAuthor:
            'https://unsplash.com/@joelvodell?utm_source=gallery&utm_medium=referral',
         download:
            'https://unsplash.com/photos/2-person-on-boat-at-lake-during-daytime-TApAkERW5pQ',
         resize:
            'https://images.unsplash.com/photo-1542856391-010fb87dcfed?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTgxOTA0MjN8&ixlib=rb-4.0.3&fit=crop&w=816&h=400',
         class: 'horizontal'
      },
      {
         src: 'https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTgxOTA0MjN8&ixlib=rb-4.0.3',
         author: 'Quino Al',
         alt: 'waves of body of water splashing on sand',
         referalAuthor:
            'https://unsplash.com/@quinoal?utm_source=gallery&utm_medium=referral',
         download:
            'https://unsplash.com/photos/waves-of-body-of-water-splashing-on-sand-mBQIfKlvowM',
         resize:
            'https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTgxOTA0MjN8&ixlib=rb-4.0.3&fit=crop&w=816&h=400',
         class: 'horizontal'
      },
      {
         src: 'https://images.unsplash.com/photo-1420745981456-b95fe23f5753?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTgxOTA0MjN8&ixlib=rb-4.0.3',
         author: 'Jason Ortego',
         alt: 'low-angle photography of green leaf trees at daytime',
         referalAuthor:
            'https://unsplash.com/@jasonortego?utm_source=gallery&utm_medium=referral',
         download:
            'https://unsplash.com/photos/low-angle-photography-of-green-leaf-trees-at-daytime-buF62ewDLcQ',
         resize:
            'https://images.unsplash.com/photo-1420745981456-b95fe23f5753?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTgxOTA0MjN8&ixlib=rb-4.0.3&fit=crop&w=816&h=400',
         class: 'horizontal'
      },
      {
         src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTgxOTA0MjN8&ixlib=rb-4.0.3',
         author: 'Urban Vintage',
         alt: 'landscape photography of mountain hit by sun rays',
         referalAuthor:
            'https://unsplash.com/@urban_vintage?utm_source=gallery&utm_medium=referral',
         download:
            'https://unsplash.com/photos/landscape-photography-of-mountain-hit-by-sun-rays-78A265wPiO4',
         resize:
            'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTgxOTA0MjN8&ixlib=rb-4.0.3&fit=crop&w=816&h=400',
         class: 'horizontal'
      },
      {
         src: 'https://images.unsplash.com/photo-1508669232496-137b159c1cdb?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTgxOTA0MjN8&ixlib=rb-4.0.3',
         author: 'eberhard 🖐 grossgasteiger',
         alt: 'aerial view of brown fores and black mountains',
         referalAuthor:
            'https://unsplash.com/@eberhardgross?utm_source=gallery&utm_medium=referral',
         download:
            'https://unsplash.com/photos/aerial-view-of-brown-fores-and-black-mountains-BXasVMRGsuo',
         resize:
            'https://images.unsplash.com/photo-1508669232496-137b159c1cdb?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTgxOTA0MjN8&ixlib=rb-4.0.3&fit=crop&w=400&h=816',
         class: 'vertical'
      },
      {
         src: 'https://images.unsplash.com/photo-1586348943529-beaae6c28db9?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTgxOTA0MjN8&ixlib=rb-4.0.3',
         author: 'Dave Hoefler',
         alt: 'silhouette of trees near body of water during sunset',
         referalAuthor:
            'https://unsplash.com/@iamthedave?utm_source=gallery&utm_medium=referral',
         download:
            'https://unsplash.com/photos/silhouette-of-trees-near-body-of-water-during-sunset-lsoogGC_5dg',
         resize:
            'https://images.unsplash.com/photo-1586348943529-beaae6c28db9?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTgxOTA0MjN8&ixlib=rb-4.0.3&fit=crop&w=400&h=400',
         class: 'square'
      },
      {
         src: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTgxOTA0MjN8&ixlib=rb-4.0.3',
         author: 'John Lee',
         alt: 'scenery of mountain',
         referalAuthor:
            'https://unsplash.com/@john_artifexfilm?utm_source=gallery&utm_medium=referral',
         download:
            'https://unsplash.com/photos/scenery-of-mountain-oMneOBYhJxY',
         resize:
            'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTgxOTA0MjN8&ixlib=rb-4.0.3&fit=crop&w=400&h=400',
         class: 'square'
      },
      {
         src: 'https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTgxOTA0MjN8&ixlib=rb-4.0.3',
         author: 'ian dooley',
         alt: 'assorted hot air balloons flying at high altitude during daytime',
         referalAuthor:
            'https://unsplash.com/@sadswim?utm_source=gallery&utm_medium=referral',
         download:
            'https://unsplash.com/photos/assorted-hot-air-balloons-flying-at-high-altitude-during-daytime-hpTH5b6mo2s',
         resize:
            'https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTgxOTA0MjN8&ixlib=rb-4.0.3&fit=crop&w=400&h=816',
         class: 'vertical'
      },
      {
         src: 'https://images.unsplash.com/photo-1509515837298-2c67a3933321?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTgxOTA0MjN8&ixlib=rb-4.0.3',
         author: 'Casey Horner',
         alt: 'stars overlooking body of water during nighttime',
         referalAuthor:
            'https://unsplash.com/@mischievous_penguins?utm_source=gallery&utm_medium=referral',
         download:
            'https://unsplash.com/photos/stars-overlooking-body-of-water-during-nighttime-fsJB3KT2rj8',
         resize:
            'https://images.unsplash.com/photo-1509515837298-2c67a3933321?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTgxOTA0MjN8&ixlib=rb-4.0.3&fit=crop&w=400&h=816',
         class: 'vertical'
      },
      {
         src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTgxOTA0MjN8&ixlib=rb-4.0.3',
         author: 'v2osk',
         alt: 'foggy mountain summit',
         referalAuthor:
            'https://unsplash.com/@v2osk?utm_source=gallery&utm_medium=referral',
         download:
            'https://unsplash.com/photos/foggy-mountain-summit-1Z2niiBPg5A',
         resize:
            'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTgxOTA0MjN8&ixlib=rb-4.0.3&fit=crop&w=816&h=400',
         class: 'horizontal'
      },
      {
         src: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTgxOTA0MjN8&ixlib=rb-4.0.3',
         author: 'Jake Blucker',
         alt: 'black concrete road surrounded by brown rocks',
         referalAuthor:
            'https://unsplash.com/@jakeblucker?utm_source=gallery&utm_medium=referral',
         download:
            'https://unsplash.com/photos/black-concrete-road-surrounded-by-brown-rocks-tMzCrBkM99Y',
         resize:
            'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTgxOTA0MjN8&ixlib=rb-4.0.3&fit=crop&w=400&h=816',
         class: 'vertical'
      },
      {
         src: 'https://images.unsplash.com/photo-1492724724894-7464c27d0ceb?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTgxOTA0MjN8&ixlib=rb-4.0.3',
         author: 'Kevin Lanceplaine',
         alt: 'brown cliff',
         referalAuthor:
            'https://unsplash.com/@lanceplaine?utm_source=gallery&utm_medium=referral',
         download: 'https://unsplash.com/photos/brown-cliff-sO-JmQj95ec',
         resize:
            'https://images.unsplash.com/photo-1492724724894-7464c27d0ceb?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTgxOTA0MjN8&ixlib=rb-4.0.3&fit=crop&w=400&h=400',
         class: 'square'
      },
      {
         src: 'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTgxOTA0MjN8&ixlib=rb-4.0.3',
         author: 'Dawid Zawiła',
         alt: 'trees under cloudy sky during sunset',
         referalAuthor:
            'https://unsplash.com/@davealmine?utm_source=gallery&utm_medium=referral',
         download:
            'https://unsplash.com/photos/trees-under-cloudy-sky-during-sunset--G3rw6Y02D0',
         resize:
            'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTgxOTA0MjN8&ixlib=rb-4.0.3&fit=crop&w=816&h=400',
         class: 'horizontal'
      },
      {
         src: 'https://images.unsplash.com/photo-1422205512921-12dac7b3b603?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTgxOTA0MjN8&ixlib=rb-4.0.3',
         author: 'Kien Do',
         alt: 'selective focus photo of pink petaled flowers',
         referalAuthor:
            'https://unsplash.com/@kiendo?utm_source=gallery&utm_medium=referral',
         download:
            'https://unsplash.com/photos/selective-focus-photo-of-pink-petaled-flowers-NjT4O7WYmwk',
         resize:
            'https://images.unsplash.com/photo-1422205512921-12dac7b3b603?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTgxOTA0MjN8&ixlib=rb-4.0.3&fit=crop&w=816&h=400',
         class: 'horizontal'
      },
      {
         src: 'https://images.unsplash.com/photo-1533387520709-752d83de3630?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTgxOTA0MjN8&ixlib=rb-4.0.3',
         author: 'Jakub Kriz',
         alt: 'aerial view of mountain during golden hour',
         referalAuthor:
            'https://unsplash.com/@jakubkriz?utm_source=gallery&utm_medium=referral',
         download:
            'https://unsplash.com/photos/aerial-view-of-mountain-during-golden-hour-4r_tHA3gsUY',
         resize:
            'https://images.unsplash.com/photo-1533387520709-752d83de3630?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTgxOTA0MjN8&ixlib=rb-4.0.3&fit=crop&w=400&h=816',
         class: 'vertical'
      },
      {
         src: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTgxOTA0MjN8&ixlib=rb-4.0.3',
         author: 'Sergey Shmidt',
         alt: 'orange petaled flowers',
         referalAuthor:
            'https://unsplash.com/@monstercritic?utm_source=gallery&utm_medium=referral',
         download:
            'https://unsplash.com/photos/orange-petaled-flowers-koy6FlCCy5s',
         resize:
            'https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTgxOTA0MjN8&ixlib=rb-4.0.3&fit=crop&w=816&h=400',
         class: 'horizontal'
      },
      {
         src: 'https://images.unsplash.com/photo-1553114836-026cecec9778?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTgxOTA0MjN8&ixlib=rb-4.0.3',
         author: 'Daniel Seßler',
         alt: 'trees surrounded by body water during daytime',
         referalAuthor:
            'https://unsplash.com/@danielsessler?utm_source=gallery&utm_medium=referral',
         download:
            'https://unsplash.com/photos/trees-surrounded-by-body-water-during-daytime-hnw3Al47-KE',
         resize:
            'https://images.unsplash.com/photo-1553114836-026cecec9778?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTgxOTA0MjN8&ixlib=rb-4.0.3&fit=crop&w=400&h=816',
         class: 'vertical'
      },
      {
         src: 'https://images.unsplash.com/photo-1572099606223-6e29045d7de3?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTgxOTA0MjN8&ixlib=rb-4.0.3',
         author: 'Sabeer Darr',
         alt: 'herd of sheep on green grassy hill during cloudy day',
         referalAuthor:
            'https://unsplash.com/@sabeerdarr?utm_source=gallery&utm_medium=referral',
         download:
            'https://unsplash.com/photos/herd-of-sheep-on-green-grassy-hill-during-cloudy-day-Upz-tnx2v2s',
         resize:
            'https://images.unsplash.com/photo-1572099606223-6e29045d7de3?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTgxOTA0MjN8&ixlib=rb-4.0.3&fit=crop&w=816&h=400',
         class: 'horizontal'
      },
      {
         src: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTgxOTA0MjN8&ixlib=rb-4.0.3',
         author: 'Blake Verdoorn',
         alt: 'gray concrete bridge and waterfalls during daytime',
         referalAuthor:
            'https://unsplash.com/@blakeverdoorn?utm_source=gallery&utm_medium=referral',
         download:
            'https://unsplash.com/photos/gray-concrete-bridge-and-waterfalls-during-daytime-cssvEZacHvQ',
         resize:
            'https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTgxOTA0MjN8&ixlib=rb-4.0.3&fit=crop&w=400&h=816',
         class: 'vertical'
      },
      {
         src: 'https://images.unsplash.com/photo-1491147334573-44cbb4602074?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTgxOTA0MjR8&ixlib=rb-4.0.3',
         author: 'Ren Ran',
         alt: 'green and white leafed plants',
         referalAuthor:
            'https://unsplash.com/@renran?utm_source=gallery&utm_medium=referral',
         download:
            'https://unsplash.com/photos/green-and-white-leafed-plants-bBiuSdck8tU',
         resize:
            'https://images.unsplash.com/photo-1491147334573-44cbb4602074?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTgxOTA0MjR8&ixlib=rb-4.0.3&fit=crop&w=400&h=816',
         class: 'vertical'
      },
      {
         src: 'https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTgxOTA0MjR8&ixlib=rb-4.0.3',
         author: 'Daniela Kokina',
         alt: 'green grass and gray rocky mountain during daytime',
         referalAuthor:
            'https://unsplash.com/@danielakokina?utm_source=gallery&utm_medium=referral',
         download:
            'https://unsplash.com/photos/green-grass-and-gray-rocky-mountain-during-daytime-hOhlYhAiizc',
         resize:
            'https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTgxOTA0MjR8&ixlib=rb-4.0.3&fit=crop&w=400&h=816',
         class: 'vertical'
      },
      {
         src: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTgxOTA0MjR8&ixlib=rb-4.0.3',
         author: 'Mark Basarab',
         alt: 'blue starry night',
         referalAuthor:
            'https://unsplash.com/@markbasarabvisuals?utm_source=gallery&utm_medium=referral',
         download: 'https://unsplash.com/photos/blue-starry-night-1OtUkD_8svc',
         resize:
            'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTgxOTA0MjR8&ixlib=rb-4.0.3&fit=crop&w=816&h=400',
         class: 'horizontal'
      },
      {
         src: 'https://images.unsplash.com/photo-1439853949127-fa647821eba0?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTgxOTA0MjR8&ixlib=rb-4.0.3',
         author: 'Daniel Roe',
         alt: 'photo of two mountains',
         referalAuthor:
            'https://unsplash.com/@danielroe?utm_source=gallery&utm_medium=referral',
         download:
            'https://unsplash.com/photos/photo-of-two-mountains-lpjb_UMOyx8',
         resize:
            'https://images.unsplash.com/photo-1439853949127-fa647821eba0?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTgxOTA0MjR8&ixlib=rb-4.0.3&fit=crop&w=400&h=816',
         class: 'vertical'
      },
      {
         src: 'https://images.unsplash.com/photo-1504870712357-65ea720d6078?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTgxOTA0MjR8&ixlib=rb-4.0.3',
         author: 'Etienne Bösiger',
         alt: 'aerial photography of grey and brown mountain',
         referalAuthor:
            'https://unsplash.com/@etienne_boesiger?utm_source=gallery&utm_medium=referral',
         download:
            'https://unsplash.com/photos/aerial-photography-of-grey-and-brown-mountain-OWsdJ-MllYA',
         resize:
            'https://images.unsplash.com/photo-1504870712357-65ea720d6078?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTgxOTA0MjR8&ixlib=rb-4.0.3&fit=crop&w=400&h=400',
         class: 'square'
      },
      {
         src: 'https://images.unsplash.com/photo-1414609245224-afa02bfb3fda?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTgxOTA0MjR8&ixlib=rb-4.0.3',
         author: 'Rachel Cook',
         alt: 'body of water wave photo during golden time',
         referalAuthor:
            'https://unsplash.com/@grafixgurl247?utm_source=gallery&utm_medium=referral',
         download:
            'https://unsplash.com/photos/body-of-water-wave-photo-during-golden-time-mOcdke2ZQoE',
         resize:
            'https://images.unsplash.com/photo-1414609245224-afa02bfb3fda?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTgxOTA0MjR8&ixlib=rb-4.0.3&fit=crop&w=400&h=816',
         class: 'vertical'
      },
      {
         src: 'https://images.unsplash.com/photo-1475656106224-d72c2ab53e8d?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTgxOTA0MjR8&ixlib=rb-4.0.3',
         author: 'Mike Erskine',
         alt: 'green grass during golden hour',
         referalAuthor:
            'https://unsplash.com/@mikejerskine?utm_source=gallery&utm_medium=referral',
         download:
            'https://unsplash.com/photos/green-grass-during-golden-hour--rSka4Bw-EU',
         resize:
            'https://images.unsplash.com/photo-1475656106224-d72c2ab53e8d?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTgxOTA0MjR8&ixlib=rb-4.0.3&fit=crop&w=816&h=400',
         class: 'horizontal'
      },
      {
         src: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTgxOTA0MjR8&ixlib=rb-4.0.3',
         author: 'Carles Rabada',
         alt: 'aerial view of beach',
         referalAuthor:
            'https://unsplash.com/@carlesrgm?utm_source=gallery&utm_medium=referral',
         download:
            'https://unsplash.com/photos/aerial-view-of-beach-DD1fSz2HF1s',
         resize:
            'https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTgxOTA0MjR8&ixlib=rb-4.0.3&fit=crop&w=400&h=816',
         class: 'vertical'
      },
      {
         src: 'https://images.unsplash.com/photo-1533371452382-d45a9da51ad9?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTgxOTA0MjR8&ixlib=rb-4.0.3',
         author: 'Yousef Espanioly',
         alt: 'seashore',
         referalAuthor:
            'https://unsplash.com/@yespanioly?utm_source=gallery&utm_medium=referral',
         download: 'https://unsplash.com/photos/seashore-DA_tplYgTow',
         resize:
            'https://images.unsplash.com/photo-1533371452382-d45a9da51ad9?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTgxOTA0MjR8&ixlib=rb-4.0.3&fit=crop&w=816&h=400',
         class: 'horizontal'
      },
      {
         src: 'https://images.unsplash.com/photo-1519821172144-4f87d85de2a1?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTgxOTA0MjR8&ixlib=rb-4.0.3',
         author: 'David Bruyndonckx',
         alt: 'pathway between green trees',
         referalAuthor:
            'https://unsplash.com/@david_bxl?utm_source=gallery&utm_medium=referral',
         download:
            'https://unsplash.com/photos/pathway-between-green-trees-F_hft1Wiyj8',
         resize:
            'https://images.unsplash.com/photo-1519821172144-4f87d85de2a1?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTgxOTA0MjR8&ixlib=rb-4.0.3&fit=crop&w=400&h=816',
         class: 'vertical'
      },
      {
         src: 'https://images.unsplash.com/photo-1510797215324-95aa89f43c33?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTgxOTA0MjR8&ixlib=rb-4.0.3',
         author: 'Justin Kauffman',
         alt: 'eagle-eye view photography of brown pathway',
         referalAuthor:
            'https://unsplash.com/@justindkauffman?utm_source=gallery&utm_medium=referral',
         download:
            'https://unsplash.com/photos/eagle-eye-view-photography-of-brown-pathway-a8lTjWJJgLA',
         resize:
            'https://images.unsplash.com/photo-1510797215324-95aa89f43c33?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTgxOTA0MjR8&ixlib=rb-4.0.3&fit=crop&w=400&h=400',
         class: 'square'
      },
      {
         src: 'https://images.unsplash.com/photo-1470770903676-69b98201ea1c?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTgxOTA0MjR8&ixlib=rb-4.0.3',
         author: 'Luca Bravo',
         alt: 'boat docked near house',
         referalAuthor:
            'https://unsplash.com/@lucabravo?utm_source=gallery&utm_medium=referral',
         download:
            'https://unsplash.com/photos/boat-docked-near-house-VowIFDxogG4',
         resize:
            'https://images.unsplash.com/photo-1470770903676-69b98201ea1c?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTgxOTA0MjR8&ixlib=rb-4.0.3&fit=crop&w=816&h=400',
         class: 'horizontal'
      },
      {
         src: 'https://images.unsplash.com/photo-1552083375-1447ce886485?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTgxOTA0MjR8&ixlib=rb-4.0.3',
         author: 'Fabian Quintero',
         alt: 'green-leafed trees',
         referalAuthor:
            'https://unsplash.com/@onefabian?utm_source=gallery&utm_medium=referral',
         download: 'https://unsplash.com/photos/green-leafed-trees-UWQP2mh5YJI',
         resize:
            'https://images.unsplash.com/photo-1552083375-1447ce886485?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTgxOTA0MjR8&ixlib=rb-4.0.3&fit=crop&w=816&h=400',
         class: 'horizontal'
      },
      {
         src: 'https://images.unsplash.com/photo-1504567961542-e24d9439a724?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTgxOTA0MjR8&ixlib=rb-4.0.3',
         author: 'Aaron Burden',
         alt: 'closeup photo of yellow sunflowers',
         referalAuthor:
            'https://unsplash.com/@aaronburden?utm_source=gallery&utm_medium=referral',
         download:
            'https://unsplash.com/photos/closeup-photo-of-yellow-sunflowers-GVnUVP8cs1o',
         resize:
            'https://images.unsplash.com/photo-1504567961542-e24d9439a724?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTgxOTA0MjR8&ixlib=rb-4.0.3&fit=crop&w=400&h=400',
         class: 'square'
      },
      {
         src: 'https://images.unsplash.com/photo-1533119408463-b0f487583ff6?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTgxOTA0MjR8&ixlib=rb-4.0.3',
         author: 'Dmytro Tolokonov',
         alt: 'tree leaves macro photography',
         referalAuthor:
            'https://unsplash.com/@dtolokonov?utm_source=gallery&utm_medium=referral',
         download:
            'https://unsplash.com/photos/tree-leaves-macro-photography-Jq3WI9IQgEs',
         resize:
            'https://images.unsplash.com/photo-1533119408463-b0f487583ff6?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTgxOTA0MjR8&ixlib=rb-4.0.3&fit=crop&w=400&h=400',
         class: 'square'
      },
      {
         src: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTgxOTA0MjR8&ixlib=rb-4.0.3',
         author: 'Marita Kavelashvili',
         alt: 'aerial photo of green trees',
         referalAuthor:
            'https://unsplash.com/@maritaextrabold?utm_source=gallery&utm_medium=referral',
         download:
            'https://unsplash.com/photos/aerial-photo-of-green-trees-ugnrXk1129g',
         resize:
            'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTgxOTA0MjR8&ixlib=rb-4.0.3&fit=crop&w=816&h=400',
         class: 'horizontal'
      },
      {
         src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTgxOTA0MjR8&ixlib=rb-4.0.3',
         author: 'Sean Oulashin',
         alt: 'seashore during golden hour',
         referalAuthor:
            'https://unsplash.com/@oulashin?utm_source=gallery&utm_medium=referral',
         download:
            'https://unsplash.com/photos/seashore-during-golden-hour-KMn4VEeEPR8',
         resize:
            'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTgxOTA0MjR8&ixlib=rb-4.0.3&fit=crop&w=816&h=400',
         class: 'horizontal'
      },
      {
         src: 'https://images.unsplash.com/photo-1473081556163-2a17de81fc97?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTgxOTA0MjR8&ixlib=rb-4.0.3',
         author: 'Rodion Kutsaiev',
         alt: 'closeup photo of green leafed plant',
         referalAuthor:
            'https://unsplash.com/@frostroomhead?utm_source=gallery&utm_medium=referral',
         download:
            'https://unsplash.com/photos/closeup-photo-of-green-leafed-plant-049M_crau5k',
         resize:
            'https://images.unsplash.com/photo-1473081556163-2a17de81fc97?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTgxOTA0MjR8&ixlib=rb-4.0.3&fit=crop&w=400&h=816',
         class: 'vertical'
      },
      {
         src: 'https://images.unsplash.com/photo-1465147264724-326b45c3c59b?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTgxOTA0MjR8&ixlib=rb-4.0.3',
         author: 'Henry Be',
         alt: 'orange petaled flowers near green trees at daytime',
         referalAuthor:
            'https://unsplash.com/@henry_be?utm_source=gallery&utm_medium=referral',
         download:
            'https://unsplash.com/photos/orange-petaled-flowers-near-green-trees-at-daytime-NLF6hTe4PAg',
         resize:
            'https://images.unsplash.com/photo-1465147264724-326b45c3c59b?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTgxOTA0MjR8&ixlib=rb-4.0.3&fit=crop&w=816&h=400',
         class: 'horizontal'
      },
      {
         src: 'https://images.unsplash.com/photo-1527701963793-33e969bca5ee?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTgxOTA0MjR8&ixlib=rb-4.0.3',
         author: 'Dave Hoefler',
         alt: 'green trees',
         referalAuthor:
            'https://unsplash.com/@iamthedave?utm_source=gallery&utm_medium=referral',
         download: 'https://unsplash.com/photos/green-trees-UFnHt94r91w',
         resize:
            'https://images.unsplash.com/photo-1527701963793-33e969bca5ee?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTgxOTA0MjR8&ixlib=rb-4.0.3&fit=crop&w=400&h=400',
         class: 'square'
      },
      {
         src: 'https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTgxOTA0MjR8&ixlib=rb-4.0.3',
         author: 'Boris Baldinger',
         alt: 'aerial view of mountain',
         referalAuthor:
            'https://unsplash.com/@borisbaldinger?utm_source=gallery&utm_medium=referral',
         download:
            'https://unsplash.com/photos/aerial-view-of-mountain-eUFfY6cwjSU',
         resize:
            'https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTgxOTA0MjR8&ixlib=rb-4.0.3&fit=crop&w=400&h=816',
         class: 'vertical'
      },
      {
         src: 'https://images.unsplash.com/photo-1507692812060-98338d07aca3?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTgxOTA0MjR8&ixlib=rb-4.0.3',
         author: 'Meriç Dağlı',
         alt: 'a close up of a rock formation in the desert',
         referalAuthor:
            'https://unsplash.com/@meric?utm_source=gallery&utm_medium=referral',
         download:
            'https://unsplash.com/photos/a-close-up-of-a-rock-formation-in-the-desert-2RJB9Euaj7M',
         resize:
            'https://images.unsplash.com/photo-1507692812060-98338d07aca3?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTgxOTA0MjR8&ixlib=rb-4.0.3&fit=crop&w=400&h=400',
         class: 'square'
      },
      {
         src: 'https://images.unsplash.com/photo-1503435824048-a799a3a84bf7?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTgxOTA0MjR8&ixlib=rb-4.0.3',
         author: 'Filip Zrnzević',
         alt: 'green leafed trees during daytime',
         referalAuthor:
            'https://unsplash.com/@filipz?utm_source=gallery&utm_medium=referral',
         download:
            'https://unsplash.com/photos/green-leafed-trees-during-daytime-_EMkxLdko9k',
         resize:
            'https://images.unsplash.com/photo-1503435824048-a799a3a84bf7?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTgxOTA0MjR8&ixlib=rb-4.0.3&fit=crop&w=400&h=816',
         class: 'vertical'
      },
      {
         src: 'https://images.unsplash.com/photo-1473773508845-188df298d2d1?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTgxOTA0MjR8&ixlib=rb-4.0.3',
         author: 'Geranimo',
         alt: 'low angle photo of pine trees',
         referalAuthor:
            'https://unsplash.com/@geraninmo?utm_source=gallery&utm_medium=referral',
         download:
            'https://unsplash.com/photos/low-angle-photo-of-pine-trees-WJkc3xZjSXw',
         resize:
            'https://images.unsplash.com/photo-1473773508845-188df298d2d1?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTgxOTA0MjR8&ixlib=rb-4.0.3&fit=crop&w=400&h=400',
         class: 'square'
      },
      {
         src: 'https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTgxOTA0MjR8&ixlib=rb-4.0.3',
         author: 'Shifaaz shamoon',
         alt: 'body of water on beach shore',
         referalAuthor:
            'https://unsplash.com/@sotti?utm_source=gallery&utm_medium=referral',
         download:
            'https://unsplash.com/photos/body-of-water-on-beach-shore-9K9ipjhDdks',
         resize:
            'https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTgxOTA0MjR8&ixlib=rb-4.0.3&fit=crop&w=400&h=816',
         class: 'vertical'
      },
      {
         src: 'https://images.unsplash.com/photo-1470137430626-983a37b8ea46?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTgxOTA0MjR8&ixlib=rb-4.0.3',
         author: 'Jonas Weckschmied',
         alt: 'selective focus photography of water droplets on grasses',
         referalAuthor:
            'https://unsplash.com/@jweckschmied?utm_source=gallery&utm_medium=referral',
         download:
            'https://unsplash.com/photos/selective-focus-photography-of-water-droplets-on-grasses--N_UwPdUs7E',
         resize:
            'https://images.unsplash.com/photo-1470137430626-983a37b8ea46?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTgxOTA0MjR8&ixlib=rb-4.0.3&fit=crop&w=816&h=400',
         class: 'horizontal'
      }
   ]
}
