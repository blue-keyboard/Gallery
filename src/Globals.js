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
         src: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTcxNTg2Mzh8&ixlib=rb-4.0.3',
         author: 'Matt Hardy',
         referalAuthor:
            'https://unsplash.com/@matthardy?utm_source=gallery&utm_medium=referral',
         resize:
            'https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTcxNTg2Mzh8&ixlib=rb-4.0.3&fit=crop&w=816&h=400',
         class: 'horizontal'
      },
      {
         src: 'https://images.unsplash.com/photo-1504567961542-e24d9439a724?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTcxNTg2Mzh8&ixlib=rb-4.0.3',
         author: 'Aaron Burden',
         referalAuthor:
            'https://unsplash.com/@aaronburden?utm_source=gallery&utm_medium=referral',
         resize:
            'https://images.unsplash.com/photo-1504567961542-e24d9439a724?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTcxNTg2Mzh8&ixlib=rb-4.0.3&fit=crop&w=400&h=400',
         class: 'square'
      },
      {
         src: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTcxNTg2Mzh8&ixlib=rb-4.0.3',
         author: 'Casey Horner',
         referalAuthor:
            'https://unsplash.com/@mischievous_penguins?utm_source=gallery&utm_medium=referral',
         resize:
            'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTcxNTg2Mzh8&ixlib=rb-4.0.3&fit=crop&w=400&h=816',
         class: 'vertical'
      },
      {
         src: 'https://images.unsplash.com/photo-1600240644455-3edc55c375fe?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTcxNTg2Mzh8&ixlib=rb-4.0.3',
         author: 'Alessio Furlan',
         referalAuthor:
            'https://unsplash.com/@alessiofurlan?utm_source=gallery&utm_medium=referral',
         resize:
            'https://images.unsplash.com/photo-1600240644455-3edc55c375fe?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTcxNTg2Mzh8&ixlib=rb-4.0.3&fit=crop&w=400&h=816',
         class: 'vertical'
      },
      {
         src: 'https://images.unsplash.com/photo-1528184039930-bd03972bd974?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTcxNTg2Mzh8&ixlib=rb-4.0.3',
         author: 'Simon Wilkes',
         referalAuthor:
            'https://unsplash.com/@simonfromengland?utm_source=gallery&utm_medium=referral',
         resize:
            'https://images.unsplash.com/photo-1528184039930-bd03972bd974?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTcxNTg2Mzh8&ixlib=rb-4.0.3&fit=crop&w=816&h=400',
         class: 'horizontal'
      },
      {
         src: 'https://images.unsplash.com/photo-1523528283115-9bf9b1699245?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTcxNTg2Mzh8&ixlib=rb-4.0.3',
         author: 'TOMOKO UJI',
         referalAuthor:
            'https://unsplash.com/@ujitomo?utm_source=gallery&utm_medium=referral',
         resize:
            'https://images.unsplash.com/photo-1523528283115-9bf9b1699245?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTcxNTg2Mzh8&ixlib=rb-4.0.3&fit=crop&w=400&h=816',
         class: 'vertical'
      },
      {
         src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTcxNTg2Mzh8&ixlib=rb-4.0.3',
         author: 'v2osk',
         referalAuthor:
            'https://unsplash.com/@v2osk?utm_source=gallery&utm_medium=referral',
         resize:
            'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTcxNTg2Mzh8&ixlib=rb-4.0.3&fit=crop&w=816&h=400',
         class: 'horizontal'
      },
      {
         src: 'https://images.unsplash.com/photo-1470137430626-983a37b8ea46?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTcxNTg2Mzh8&ixlib=rb-4.0.3',
         author: 'Jonas Weckschmied',
         referalAuthor:
            'https://unsplash.com/@jweckschmied?utm_source=gallery&utm_medium=referral',
         resize:
            'https://images.unsplash.com/photo-1470137430626-983a37b8ea46?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTcxNTg2Mzh8&ixlib=rb-4.0.3&fit=crop&w=816&h=400',
         class: 'horizontal'
      },
      {
         src: 'https://images.unsplash.com/photo-1473773508845-188df298d2d1?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTcxNTg2Mzh8&ixlib=rb-4.0.3',
         author: 'Geranimo',
         referalAuthor:
            'https://unsplash.com/@geraninmo?utm_source=gallery&utm_medium=referral',
         resize:
            'https://images.unsplash.com/photo-1473773508845-188df298d2d1?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTcxNTg2Mzh8&ixlib=rb-4.0.3&fit=crop&w=400&h=400',
         class: 'square'
      },
      {
         src: 'https://images.unsplash.com/photo-1475113548554-5a36f1f523d6?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTcxNTg2Mzh8&ixlib=rb-4.0.3',
         author: 'Sapan Patel',
         referalAuthor:
            'https://unsplash.com/@sapanpatel123?utm_source=gallery&utm_medium=referral',
         resize:
            'https://images.unsplash.com/photo-1475113548554-5a36f1f523d6?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTcxNTg2Mzh8&ixlib=rb-4.0.3&fit=crop&w=400&h=816',
         class: 'vertical'
      },
      {
         src: 'https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTcxNTg2Mzh8&ixlib=rb-4.0.3',
         author: 'Jay Mantri',
         referalAuthor:
            'https://unsplash.com/@jaymantri?utm_source=gallery&utm_medium=referral',
         resize:
            'https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTcxNTg2Mzh8&ixlib=rb-4.0.3&fit=crop&w=816&h=400',
         class: 'horizontal'
      },
      {
         src: 'https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTcxNTg2Mzh8&ixlib=rb-4.0.3',
         author: 'Matheus Ferrero',
         referalAuthor:
            'https://unsplash.com/@matheusferrero?utm_source=gallery&utm_medium=referral',
         resize:
            'https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTcxNTg2Mzh8&ixlib=rb-4.0.3&fit=crop&w=816&h=400',
         class: 'horizontal'
      },
      {
         src: 'https://images.unsplash.com/photo-1504392022767-a8fc0771f239?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTcxNTg2Mzh8&ixlib=rb-4.0.3',
         author: 'Aaron Burden',
         referalAuthor:
            'https://unsplash.com/@aaronburden?utm_source=gallery&utm_medium=referral',
         resize:
            'https://images.unsplash.com/photo-1504392022767-a8fc0771f239?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTcxNTg2Mzh8&ixlib=rb-4.0.3&fit=crop&w=400&h=400',
         class: 'square'
      },
      {
         src: 'https://images.unsplash.com/photo-1470770903676-69b98201ea1c?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTcxNTg2Mzh8&ixlib=rb-4.0.3',
         author: 'Luca Bravo',
         referalAuthor:
            'https://unsplash.com/@lucabravo?utm_source=gallery&utm_medium=referral',
         resize:
            'https://images.unsplash.com/photo-1470770903676-69b98201ea1c?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTcxNTg2Mzh8&ixlib=rb-4.0.3&fit=crop&w=816&h=400',
         class: 'horizontal'
      },
      {
         src: 'https://images.unsplash.com/photo-1458929526027-052f5d6a3c5e?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTcxNTg2Mzh8&ixlib=rb-4.0.3',
         author: 'Rodion Kutsaiev',
         referalAuthor:
            'https://unsplash.com/@frostroomhead?utm_source=gallery&utm_medium=referral',
         resize:
            'https://images.unsplash.com/photo-1458929526027-052f5d6a3c5e?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTcxNTg2Mzh8&ixlib=rb-4.0.3&fit=crop&w=816&h=400',
         class: 'horizontal'
      },
      {
         src: 'https://images.unsplash.com/photo-1516205651411-aef33a44f7c2?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTcxNTg2Mzh8&ixlib=rb-4.0.3',
         author: 'Meriç Dağlı',
         referalAuthor:
            'https://unsplash.com/@meric?utm_source=gallery&utm_medium=referral',
         resize:
            'https://images.unsplash.com/photo-1516205651411-aef33a44f7c2?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTcxNTg2Mzh8&ixlib=rb-4.0.3&fit=crop&w=400&h=400',
         class: 'square'
      },
      {
         src: 'https://images.unsplash.com/photo-1503756234508-e32369269deb?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTcxNTg2Mzh8&ixlib=rb-4.0.3',
         author: 'Kees Streefkerk',
         referalAuthor:
            'https://unsplash.com/@kees_streefkerk?utm_source=gallery&utm_medium=referral',
         resize:
            'https://images.unsplash.com/photo-1503756234508-e32369269deb?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTcxNTg2Mzh8&ixlib=rb-4.0.3&fit=crop&w=400&h=400',
         class: 'square'
      },
      {
         src: 'https://images.unsplash.com/photo-1465147264724-326b45c3c59b?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTcxNTg2Mzh8&ixlib=rb-4.0.3',
         author: 'Henry Be',
         referalAuthor:
            'https://unsplash.com/@henry_be?utm_source=gallery&utm_medium=referral',
         resize:
            'https://images.unsplash.com/photo-1465147264724-326b45c3c59b?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTcxNTg2Mzh8&ixlib=rb-4.0.3&fit=crop&w=816&h=400',
         class: 'horizontal'
      },
      {
         src: 'https://images.unsplash.com/photo-1463107971871-fbac9ddb920f?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTcxNTg2Mzh8&ixlib=rb-4.0.3',
         author: 'Joey Kyber',
         referalAuthor:
            'https://unsplash.com/@jtkyber1?utm_source=gallery&utm_medium=referral',
         resize:
            'https://images.unsplash.com/photo-1463107971871-fbac9ddb920f?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTcxNTg2Mzh8&ixlib=rb-4.0.3&fit=crop&w=816&h=400',
         class: 'horizontal'
      },
      {
         src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTcxNTg2Mzh8&ixlib=rb-4.0.3',
         author: 'David Marcu',
         referalAuthor:
            'https://unsplash.com/@davidmarcu?utm_source=gallery&utm_medium=referral',
         resize:
            'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTcxNTg2Mzh8&ixlib=rb-4.0.3&fit=crop&w=816&h=400',
         class: 'horizontal'
      },
      {
         src: 'https://images.unsplash.com/photo-1469827160215-9d29e96e72f4?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTcxNTg2Mzh8&ixlib=rb-4.0.3',
         author: 'Jeff King',
         referalAuthor:
            'https://unsplash.com/@jeffkingla?utm_source=gallery&utm_medium=referral',
         resize:
            'https://images.unsplash.com/photo-1469827160215-9d29e96e72f4?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTcxNTg2Mzh8&ixlib=rb-4.0.3&fit=crop&w=816&h=400',
         class: 'horizontal'
      },
      {
         src: 'https://images.unsplash.com/photo-1586348943529-beaae6c28db9?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTcxNTg2Mzh8&ixlib=rb-4.0.3',
         author: 'Dave Hoefler',
         referalAuthor:
            'https://unsplash.com/@iamthedave?utm_source=gallery&utm_medium=referral',
         resize:
            'https://images.unsplash.com/photo-1586348943529-beaae6c28db9?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTcxNTg2Mzh8&ixlib=rb-4.0.3&fit=crop&w=400&h=400',
         class: 'square'
      },
      {
         src: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTcxNTg2Mzh8&ixlib=rb-4.0.3',
         author: 'Kalen Emsley',
         referalAuthor:
            'https://unsplash.com/@kalenemsley?utm_source=gallery&utm_medium=referral',
         resize:
            'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTcxNTg2Mzh8&ixlib=rb-4.0.3&fit=crop&w=816&h=400',
         class: 'horizontal'
      },
      {
         src: 'https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTcxNTg2Mzh8&ixlib=rb-4.0.3',
         author: 'ian dooley',
         referalAuthor:
            'https://unsplash.com/@sadswim?utm_source=gallery&utm_medium=referral',
         resize:
            'https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTcxNTg2Mzh8&ixlib=rb-4.0.3&fit=crop&w=400&h=816',
         class: 'vertical'
      },
      {
         src: 'https://images.unsplash.com/photo-1533387520709-752d83de3630?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTcxNTg2Mzh8&ixlib=rb-4.0.3',
         author: 'Jakub Kriz',
         referalAuthor:
            'https://unsplash.com/@jakubkriz?utm_source=gallery&utm_medium=referral',
         resize:
            'https://images.unsplash.com/photo-1533387520709-752d83de3630?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTcxNTg2Mzh8&ixlib=rb-4.0.3&fit=crop&w=400&h=816',
         class: 'vertical'
      },
      {
         src: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTcxNTg2Mzh8&ixlib=rb-4.0.3',
         author: 'Tim Swaan',
         referalAuthor:
            'https://unsplash.com/@timswaanphotography?utm_source=gallery&utm_medium=referral',
         resize:
            'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTcxNTg2Mzh8&ixlib=rb-4.0.3&fit=crop&w=816&h=400',
         class: 'horizontal'
      },
      {
         src: 'https://images.unsplash.com/photo-1508669232496-137b159c1cdb?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTcxNTg2Mzh8&ixlib=rb-4.0.3',
         author: 'eberhard 🖐 grossgasteiger',
         referalAuthor:
            'https://unsplash.com/@eberhardgross?utm_source=gallery&utm_medium=referral',
         resize:
            'https://images.unsplash.com/photo-1508669232496-137b159c1cdb?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTcxNTg2Mzh8&ixlib=rb-4.0.3&fit=crop&w=400&h=816',
         class: 'vertical'
      },
      {
         src: 'https://images.unsplash.com/photo-1439853949127-fa647821eba0?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTcxNTg2Mzh8&ixlib=rb-4.0.3',
         author: 'Daniel Roe',
         referalAuthor:
            'https://unsplash.com/@danielroe?utm_source=gallery&utm_medium=referral',
         resize:
            'https://images.unsplash.com/photo-1439853949127-fa647821eba0?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTcxNTg2Mzh8&ixlib=rb-4.0.3&fit=crop&w=400&h=816',
         class: 'vertical'
      },
      {
         src: 'https://images.unsplash.com/photo-1503435824048-a799a3a84bf7?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTcxNTg2Mzh8&ixlib=rb-4.0.3',
         author: 'Filip Zrnzević',
         referalAuthor:
            'https://unsplash.com/@filipz?utm_source=gallery&utm_medium=referral',
         resize:
            'https://images.unsplash.com/photo-1503435824048-a799a3a84bf7?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTcxNTg2Mzh8&ixlib=rb-4.0.3&fit=crop&w=400&h=816',
         class: 'vertical'
      },
      {
         src: 'https://images.unsplash.com/photo-1455218873509-8097305ee378?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTcxNTg2Mzh8&ixlib=rb-4.0.3',
         author: 'Thomas Kelley',
         referalAuthor:
            'https://unsplash.com/@thkelley?utm_source=gallery&utm_medium=referral',
         resize:
            'https://images.unsplash.com/photo-1455218873509-8097305ee378?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTcxNTg2Mzh8&ixlib=rb-4.0.3&fit=crop&w=400&h=816',
         class: 'vertical'
      },
      {
         src: 'https://images.unsplash.com/photo-1505028106030-e07ea1bd80c3?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTcxNTg2Mzl8&ixlib=rb-4.0.3',
         author: 'Leo_Visions',
         referalAuthor:
            'https://unsplash.com/@leo_visions_?utm_source=gallery&utm_medium=referral',
         resize:
            'https://images.unsplash.com/photo-1505028106030-e07ea1bd80c3?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTcxNTg2Mzl8&ixlib=rb-4.0.3&fit=crop&w=400&h=400',
         class: 'square'
      },
      {
         src: 'https://images.unsplash.com/photo-1502472584811-0a2f2feb8968?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTcxNTg2Mzl8&ixlib=rb-4.0.3',
         author: 'Grant Ritchie',
         referalAuthor:
            'https://unsplash.com/@grantritchie?utm_source=gallery&utm_medium=referral',
         resize:
            'https://images.unsplash.com/photo-1502472584811-0a2f2feb8968?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTcxNTg2Mzl8&ixlib=rb-4.0.3&fit=crop&w=816&h=400',
         class: 'horizontal'
      },
      {
         src: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTcxNTg2Mzl8&ixlib=rb-4.0.3',
         author: 'John Lee',
         referalAuthor:
            'https://unsplash.com/@john_artifexfilm?utm_source=gallery&utm_medium=referral',
         resize:
            'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTcxNTg2Mzl8&ixlib=rb-4.0.3&fit=crop&w=400&h=400',
         class: 'square'
      },
      {
         src: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTcxNTg2Mzl8&ixlib=rb-4.0.3',
         author: 'Benjamin Voros',
         referalAuthor:
            'https://unsplash.com/@vorosbenisop?utm_source=gallery&utm_medium=referral',
         resize:
            'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTcxNTg2Mzl8&ixlib=rb-4.0.3&fit=crop&w=816&h=400',
         class: 'horizontal'
      },
      {
         src: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTcxNTg2Mzl8&ixlib=rb-4.0.3',
         author: 'Marita Kavelashvili',
         referalAuthor:
            'https://unsplash.com/@maritaextrabold?utm_source=gallery&utm_medium=referral',
         resize:
            'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTcxNTg2Mzl8&ixlib=rb-4.0.3&fit=crop&w=816&h=400',
         class: 'horizontal'
      },
      {
         src: 'https://images.unsplash.com/photo-1484542603127-984f4f7d14cb?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTcxNTg2Mzl8&ixlib=rb-4.0.3',
         author: 'Brady Bellini',
         referalAuthor:
            'https://unsplash.com/@brady_bellini?utm_source=gallery&utm_medium=referral',
         resize:
            'https://images.unsplash.com/photo-1484542603127-984f4f7d14cb?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTcxNTg2Mzl8&ixlib=rb-4.0.3&fit=crop&w=816&h=400',
         class: 'horizontal'
      },
      {
         src: 'https://images.unsplash.com/photo-1541675154750-0444c7d51e8e?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTcxNTg2Mzl8&ixlib=rb-4.0.3',
         author: 'Sebin Thomas',
         referalAuthor:
            'https://unsplash.com/@sebinthomas?utm_source=gallery&utm_medium=referral',
         resize:
            'https://images.unsplash.com/photo-1541675154750-0444c7d51e8e?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTcxNTg2Mzl8&ixlib=rb-4.0.3&fit=crop&w=400&h=400',
         class: 'square'
      },
      {
         src: 'https://images.unsplash.com/photo-1438786657495-640937046d18?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTcxNTg2Mzl8&ixlib=rb-4.0.3',
         author: 'Claudel Rheault',
         referalAuthor:
            'https://unsplash.com/@claudelrheault?utm_source=gallery&utm_medium=referral',
         resize:
            'https://images.unsplash.com/photo-1438786657495-640937046d18?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTcxNTg2Mzl8&ixlib=rb-4.0.3&fit=crop&w=816&h=400',
         class: 'horizontal'
      },
      {
         src: 'https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTcxNTg2Mzl8&ixlib=rb-4.0.3',
         author: 'Shifaaz shamoon',
         referalAuthor:
            'https://unsplash.com/@sotti?utm_source=gallery&utm_medium=referral',
         resize:
            'https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTcxNTg2Mzl8&ixlib=rb-4.0.3&fit=crop&w=400&h=816',
         class: 'vertical'
      },
      {
         src: 'https://images.unsplash.com/uploads/1412026095116d2b0c90e/3bf33993?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTcxNTg2Mzl8&ixlib=rb-4.0.3',
         author: 'Jeremy Cai',
         referalAuthor:
            'https://unsplash.com/@j?utm_source=gallery&utm_medium=referral',
         resize:
            'https://images.unsplash.com/uploads/1412026095116d2b0c90e/3bf33993?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTcxNTg2Mzl8&ixlib=rb-4.0.3&fit=crop&w=816&h=400',
         class: 'horizontal'
      },
      {
         src: 'https://images.unsplash.com/photo-1510797215324-95aa89f43c33?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTcxNTg2Mzl8&ixlib=rb-4.0.3',
         author: 'Justin Kauffman',
         referalAuthor:
            'https://unsplash.com/@justindkauffman?utm_source=gallery&utm_medium=referral',
         resize:
            'https://images.unsplash.com/photo-1510797215324-95aa89f43c33?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTcxNTg2Mzl8&ixlib=rb-4.0.3&fit=crop&w=400&h=400',
         class: 'square'
      },
      {
         src: 'https://images.unsplash.com/photo-1461301214746-1e109215d6d3?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTcxNTg2Mzl8&ixlib=rb-4.0.3',
         author: 'Kace  Rodriguez',
         referalAuthor:
            'https://unsplash.com/@kace?utm_source=gallery&utm_medium=referral',
         resize:
            'https://images.unsplash.com/photo-1461301214746-1e109215d6d3?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTcxNTg2Mzl8&ixlib=rb-4.0.3&fit=crop&w=816&h=400',
         class: 'horizontal'
      },
      {
         src: 'https://images.unsplash.com/photo-1504803900752-c2051699d0e8?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTcxNTg2Mzl8&ixlib=rb-4.0.3',
         author: 'Michael Martinelli',
         referalAuthor:
            'https://unsplash.com/@michaelmartinelli?utm_source=gallery&utm_medium=referral',
         resize:
            'https://images.unsplash.com/photo-1504803900752-c2051699d0e8?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTcxNTg2Mzl8&ixlib=rb-4.0.3&fit=crop&w=400&h=400',
         class: 'square'
      },
      {
         src: 'https://images.unsplash.com/photo-1496769336828-c522a3a7e33c?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTcxNTg2Mzl8&ixlib=rb-4.0.3',
         author: 'Philipp Torres',
         referalAuthor:
            'https://unsplash.com/@phito?utm_source=gallery&utm_medium=referral',
         resize:
            'https://images.unsplash.com/photo-1496769336828-c522a3a7e33c?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTcxNTg2Mzl8&ixlib=rb-4.0.3&fit=crop&w=816&h=400',
         class: 'horizontal'
      },
      {
         src: 'https://images.unsplash.com/photo-1503903587778-5124b6d043b8?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTcxNTg2Mzl8&ixlib=rb-4.0.3',
         author: 'Elif koyuturk',
         referalAuthor:
            'https://unsplash.com/@elifkoyuturk?utm_source=gallery&utm_medium=referral',
         resize:
            'https://images.unsplash.com/photo-1503903587778-5124b6d043b8?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTcxNTg2Mzl8&ixlib=rb-4.0.3&fit=crop&w=400&h=816',
         class: 'vertical'
      },
      {
         src: 'https://images.unsplash.com/photo-1552083375-1447ce886485?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTcxNTg2Mzl8&ixlib=rb-4.0.3',
         author: 'Fabian Quintero',
         referalAuthor:
            'https://unsplash.com/@onefabian?utm_source=gallery&utm_medium=referral',
         resize:
            'https://images.unsplash.com/photo-1552083375-1447ce886485?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTcxNTg2Mzl8&ixlib=rb-4.0.3&fit=crop&w=816&h=400',
         class: 'horizontal'
      },
      {
         src: 'https://images.unsplash.com/photo-1567647753830-de3fe7ce9f28?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTcxNTg2Mzl8&ixlib=rb-4.0.3',
         author: 'Ampersand Studios',
         referalAuthor:
            'https://unsplash.com/@ampersand_studios?utm_source=gallery&utm_medium=referral',
         resize:
            'https://images.unsplash.com/photo-1567647753830-de3fe7ce9f28?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTcxNTg2Mzl8&ixlib=rb-4.0.3&fit=crop&w=400&h=816',
         class: 'vertical'
      },
      {
         src: 'https://images.unsplash.com/photo-1508459855340-fb63ac591728?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTcxNTg2Mzl8&ixlib=rb-4.0.3',
         author: 'Nathan Anderson',
         referalAuthor:
            'https://unsplash.com/@nathananderson?utm_source=gallery&utm_medium=referral',
         resize:
            'https://images.unsplash.com/photo-1508459855340-fb63ac591728?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTcxNTg2Mzl8&ixlib=rb-4.0.3&fit=crop&w=400&h=816',
         class: 'vertical'
      },
      {
         src: 'https://images.unsplash.com/photo-1500829243541-74b677fecc30?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTcxNTg2Mzl8&ixlib=rb-4.0.3',
         author: 'Daniil Silantev',
         referalAuthor:
            'https://unsplash.com/@betagamma?utm_source=gallery&utm_medium=referral',
         resize:
            'https://images.unsplash.com/photo-1500829243541-74b677fecc30?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTcxNTg2Mzl8&ixlib=rb-4.0.3&fit=crop&w=816&h=400',
         class: 'horizontal'
      },
      {
         src: 'https://images.unsplash.com/photo-1509515837298-2c67a3933321?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTcxNTg2Mzl8&ixlib=rb-4.0.3',
         author: 'Casey Horner',
         referalAuthor:
            'https://unsplash.com/@mischievous_penguins?utm_source=gallery&utm_medium=referral',
         resize:
            'https://images.unsplash.com/photo-1509515837298-2c67a3933321?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTcxNTg2Mzl8&ixlib=rb-4.0.3&fit=crop&w=400&h=816',
         class: 'vertical'
      },
      {
         src: 'https://images.unsplash.com/photo-1492273840898-6102ad35701e?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTcxNTg2Mzl8&ixlib=rb-4.0.3',
         author: 'Andre Benz',
         referalAuthor:
            'https://unsplash.com/@trapnation?utm_source=gallery&utm_medium=referral',
         resize:
            'https://images.unsplash.com/photo-1492273840898-6102ad35701e?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTcxNTg2Mzl8&ixlib=rb-4.0.3&fit=crop&w=816&h=400',
         class: 'horizontal'
      }
   ]
}
