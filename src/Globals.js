export const globals = {
   currentPhotos: [],

   divsArray: [],

   NUM_PHOTOS_FROM_API: 60,

   MEDIA_QUERIES: [539, 700, 864, 1050],

   currentCols: [539, 700, 864, 1050].reduce(
      (acc, num) => (window.innerWidth >= num ? acc + 1 : acc + 0),
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

   suggestions: [
      {
         topic: 'Nature',
         resize: {
            vertical:
               'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTg3MzUxODd8&ixlib=rb-4.0.3&fit=crop&w=400&h=816',
            square:
               'https://images.unsplash.com/photo-1462216589242-9e3e00a47a48?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTg3MzUzNDl8&ixlib=rb-4.0.3&fit=crop&w=400&h=400',
            horizontal:
               'https://images.unsplash.com/photo-1511497584788-876760111969?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTg3MzU0MTJ8&ixlib=rb-4.0.3&fit=crop&w=816&h=400'
         }
      },
      {
         topic: 'Wallpapers',
         resize: {
            vertical:
               'https://images.unsplash.com/photo-1454817481404-7e84c1b73b4a?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTg3MzU1MTN8&ixlib=rb-4.0.3&fit=crop&w=400&h=816',
            square:
               'https://images.unsplash.com/photo-1541727687969-ce40493cd847?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTg3MzU1MTN8&ixlib=rb-4.0.3&fit=crop&w=400&h=400',
            horizontal:
               'https://images.unsplash.com/photo-1479030574009-1e48577746e8?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTg3MzU2NjV8&ixlib=rb-4.0.3&fit=crop&w=816&h=400'
         }
      },
      {
         topic: 'Animals',
         resize: {
            vertical:
               'https://images.unsplash.com/photo-1535748715526-1941af3fc315?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTg3MzU3MTR8&ixlib=rb-4.0.3&fit=crop&w=400&h=816',
            square:
               'https://images.unsplash.com/photo-1603632088148-3680d7e5dda2?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTg3MzU3MTV8&ixlib=rb-4.0.3&fit=crop&w=400&h=400',
            horizontal:
               'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTg3MzU3MTR8&ixlib=rb-4.0.3&fit=crop&w=816&h=400'
         }
      },
      {
         topic: 'Art',
         resize: {
            vertical:
               'https://images.unsplash.com/photo-1579783928621-7a13d66a62d1?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTg3MzU4Mjd8&ixlib=rb-4.0.3&fit=crop&w=400&h=816',
            square:
               'https://images.unsplash.com/photo-1579783901837-c78c2310be05?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTg3MzU4Mjd8&ixlib=rb-4.0.3&fit=crop&w=400&h=400',
            horizontal:
               'https://images.unsplash.com/photo-1547891654-e66ed7ebb968?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTg3MzU5MjF8&ixlib=rb-4.0.3&fit=crop&w=816&h=400'
         }
      },
      {
         topic: 'Sculpture',
         resize: {
            vertical:
               'https://images.unsplash.com/photo-1608649299213-85b3ee68d74e?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTg3MzYyNDd8&ixlib=rb-4.0.3&fit=crop&w=400&h=816',
            square:
               'https://images.unsplash.com/photo-1600173293426-65190a24be72?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTg3MzU5NTZ8&ixlib=rb-4.0.3&fit=crop&w=400&h=400',
            horizontal:
               'https://images.unsplash.com/photo-1596612123511-69ab0390ab64?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTg3MzU5NTZ8&ixlib=rb-4.0.3&fit=crop&w=816&h=400'
         }
      },
      {
         topic: 'Architecture',
         resize: {
            vertical:
               'https://images.unsplash.com/photo-1568887759898-723db7949b52?ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.0.3&fit=crop&w=400&h=816',
            square:
               'https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTg3MzY0MjN8&ixlib=rb-4.0.3&fit=crop&w=400&h=400',
            horizontal:
               'https://images.unsplash.com/photo-1496564203457-11bb12075d90?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTg3MzY1MDN8&ixlib=rb-4.0.3&fit=crop&w=816&h=400'
         }
      },
      {
         topic: 'Travel',
         resize: {
            vertical:
               'https://images.unsplash.com/photo-1511135570219-bbad9a02f103?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTg3Mzc2MDF8&ixlib=rb-4.0.3&fit=crop&w=400&h=816',
            square:
               'https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTg3Mzc2MDF8&ixlib=rb-4.0.3&fit=crop&w=400&h=400',
            horizontal:
               'https://images.unsplash.com/photo-1482192505345-5655af888cc4?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTg3Mzc2MDF8&ixlib=rb-4.0.3&fit=crop&w=816&h=400'
         }
      },
      {
         topic: 'Landscapes',
         resize: {
            vertical:
               'https://images.unsplash.com/photo-1614983647365-2094080e311f?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTg3Mzc3MTV8&ixlib=rb-4.0.3&fit=crop&w=400&h=816',
            square:
               'https://images.unsplash.com/photo-1618232397405-90bb514c6658?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTg3Mzc3MTZ8&ixlib=rb-4.0.3&fit=crop&w=400&h=400',
            horizontal:
               'https://images.unsplash.com/photo-1632742707012-4c69a38f8b42?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTg3Mzc3MTZ8&ixlib=rb-4.0.3&fit=crop&w=816&h=400'
         }
      },
      {
         topic: 'Archival',
         resize: {
            vertical:
               'https://images.unsplash.com/photo-1585157603822-6ea06da9a49a?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTg3Mzc4NjB8&ixlib=rb-4.0.3&fit=crop&w=400&h=816',
            square:
               'https://images.unsplash.com/photo-1580715911143-b1539cf48046?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTg3Mzc4NjB8&ixlib=rb-4.0.3&fit=crop&w=400&h=400',
            horizontal:
               'https://images.unsplash.com/photo-1687382130074-11fddbb48e8f?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTg3Mzc4NjB8&ixlib=rb-4.0.3&fit=crop&w=816&h=400'
         }
      },
      {
         topic: 'Experimental',
         resize: {
            vertical:
               'https://images.unsplash.com/photo-1611567434809-25527eeddf9f?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTg3MzgxMTB8&ixlib=rb-4.0.3&fit=crop&w=400&h=816',
            square:
               'https://images.unsplash.com/photo-1625827625113-4f004c73cc9c?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTg3MzgxMTB8&ixlib=rb-4.0.3&fit=crop&w=400&h=400',
            horizontal:
               'https://images.unsplash.com/photo-1550638565-e658cf328e4a?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTg3MzgxMTB8&ixlib=rb-4.0.3&fit=crop&w=816&h=400'
         }
      },
      {
         topic: 'Interiors',
         resize: {
            vertical:
               'https://images.unsplash.com/photo-1603561128926-9a7ff92e77ad?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTg3MzgyNzB8&ixlib=rb-4.0.3&fit=crop&w=400&h=816',
            square:
               'https://images.unsplash.com/photo-1616593871468-2a9452218369?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTg3MzgyNzF8&ixlib=rb-4.0.3&fit=crop&w=400&h=400',
            horizontal:
               'https://images.unsplash.com/photo-1615873968403-89e068629265?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTg3MzgyNzB8&ixlib=rb-4.0.3&fit=crop&w=816&h=400'
         }
      },
      {
         topic: 'People',
         resize: {
            vertical:
               'https://images.unsplash.com/photo-1513171920216-2640b288471b?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTg3Mzg0MTl8&ixlib=rb-4.0.3&fit=crop&w=400&h=816',
            square:
               'https://images.unsplash.com/photo-1564156280315-1d42b4651629?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTg3Mzg0MTl8&ixlib=rb-4.0.3&fit=crop&w=400&h=400',
            horizontal:
               'https://images.unsplash.com/photo-1519295918781-d590afd8e95d?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTg3Mzg0MTl8&ixlib=rb-4.0.3&fit=crop&w=816&h=400'
         }
      },
      {
         topic: 'Nightlife',
         resize: {
            vertical:
               'https://images.unsplash.com/photo-1629309703506-839fab3963d9?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTg3Mzg1NTZ8&ixlib=rb-4.0.3&fit=crop&w=400&h=816',
            square:
               'https://images.unsplash.com/photo-1576315894913-feddffad825f?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTg3Mzg1NTd8&ixlib=rb-4.0.3&fit=crop&w=400&h=400',
            horizontal:
               'https://images.unsplash.com/photo-1588782550189-47b3b2d3263f?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTg3Mzg1NTd8&ixlib=rb-4.0.3&fit=crop&w=816&h=400'
         }
      },
      {
         topic: 'Street photography',
         resize: {
            vertical:
               'https://images.unsplash.com/photo-1548783300-70b41bc84f56?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTg3Mzg4NDJ8&ixlib=rb-4.0.3&fit=crop&w=400&h=816',
            square:
               'https://images.unsplash.com/photo-1560785901-e26f1d800c0e?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTg3Mzg4NDJ8&ixlib=rb-4.0.3&fit=crop&w=400&h=400',
            horizontal:
               'https://images.unsplash.com/photo-1501396358880-2d8f6ace3fc7?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTg3Mzg4NDJ8&ixlib=rb-4.0.3&fit=crop&w=816&h=400'
         }
      },
      {
         topic: 'Sports',
         resize: {
            vertical:
               'https://images.unsplash.com/photo-1579156618447-e967604df979?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTg3Mzg5ODZ8&ixlib=rb-4.0.3&fit=crop&w=400&h=816',
            square:
               'https://images.unsplash.com/photo-1606925797300-0b35e9d1794e?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTg3Mzg5ODZ8&ixlib=rb-4.0.3&fit=crop&w=400&h=400',
            horizontal:
               'https://images.unsplash.com/photo-1502904550040-7534597429ae?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTg3Mzg5ODZ8&ixlib=rb-4.0.3&fit=crop&w=816&h=400'
         }
      },
      {
         topic: 'Fashion & Beauty',
         resize: {
            vertical:
               'https://images.unsplash.com/photo-1589304306485-f97c9683c1c0?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTg3MzkyNTB8&ixlib=rb-4.0.3&fit=crop&w=400&h=816',
            square:
               'https://images.unsplash.com/photo-1526413425697-1d271fdbe7a9?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTg3MzkyNTB8&ixlib=rb-4.0.3&fit=crop&w=400&h=400',
            horizontal:
               'https://images.unsplash.com/photo-1483181957632-8bda974cbc91?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTg3MzkyNTB8&ixlib=rb-4.0.3&fit=crop&w=816&h=400'
         }
      },
      {
         topic: 'Textures',
         resize: {
            vertical:
               'https://images.unsplash.com/photo-1620812097331-ff636155488f?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTg3MzkzOTh8&ixlib=rb-4.0.3&fit=crop&w=400&h=816',
            square:
               'https://images.unsplash.com/photo-1596120717633-dabb19da51f1?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTg3MzkzOTh8&ixlib=rb-4.0.3&fit=crop&w=400&h=400',
            horizontal:
               'https://images.unsplash.com/photo-1519606247872-0440aae9b827?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTg3MzkzOTh8&ixlib=rb-4.0.3&fit=crop&w=816&h=400'
         }
      },
      {
         topic: 'Patterns',
         resize: {
            vertical:
               'https://images.unsplash.com/photo-1567863053904-2894d131aa26?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTg3Mzk1MjR8&ixlib=rb-4.0.3&fit=crop&w=400&h=816',
            square:
               'https://images.unsplash.com/photo-1551442150-ba8a17b9343e?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTg3Mzk1MjR8&ixlib=rb-4.0.3&fit=crop&w=400&h=400',
            horizontal:
               'https://images.unsplash.com/photo-1588594276800-2de0522b3b73?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTg3Mzk1MjR8&ixlib=rb-4.0.3&fit=crop&w=816&h=400'
         }
      },
      {
         topic: 'Spirituality',
         resize: {
            vertical:
               'https://images.unsplash.com/photo-1625888593864-afef418841e7?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTg3Mzk2NjB8&ixlib=rb-4.0.3&fit=crop&w=400&h=816',
            square:
               'https://images.unsplash.com/photo-1627202447028-70174fa42e97?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTg3Mzk2NjB8&ixlib=rb-4.0.3&fit=crop&w=400&h=400',
            horizontal:
               'https://images.unsplash.com/photo-1595754069947-f9896fed5b38?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTg3Mzk2NjB8&ixlib=rb-4.0.3&fit=crop&w=816&h=400'
         }
      },
      {
         topic: 'Food & Drink',
         resize: {
            vertical:
               'https://images.unsplash.com/photo-1546456674-8aa8c81b9b8e?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTg3Mzk4NDB8&ixlib=rb-4.0.3&fit=crop&w=400&h=816',
            square:
               'https://images.unsplash.com/photo-1559058800-ab841e33ec85?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTg3Mzk4NDB8&ixlib=rb-4.0.3&fit=crop&w=400&h=400',
            horizontal:
               'https://images.unsplash.com/photo-1614874044863-95c6cc6b6cf3?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTg3Mzk4NDB8&ixlib=rb-4.0.3&fit=crop&w=816&h=400'
         }
      },
      {
         topic: 'Dreamy',
         resize: {
            vertical:
               'https://images.unsplash.com/photo-1561324555-88df4bfae809?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTg3NDAxMDJ8&ixlib=rb-4.0.3&fit=crop&w=400&h=816',
            square:
               'https://images.unsplash.com/photo-1567503670730-0abdbef32cdc?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTg3NDAxMDJ8&ixlib=rb-4.0.3&fit=crop&w=400&h=400',
            horizontal:
               'https://images.unsplash.com/photo-1633521184156-d49158a41804?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTg3NDAxMDJ8&ixlib=rb-4.0.3&fit=crop&w=816&h=400'
         }
      },
      {
         topic: 'Spring',
         resize: {
            vertical:
               'https://images.unsplash.com/photo-1558818236-76d8ccfa8a17?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTg3NDAzNzd8&ixlib=rb-4.0.3&fit=crop&w=400&h=816',
            square:
               'https://images.unsplash.com/photo-1596314380942-5d0db6e93478?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTg3NDAzNzd8&ixlib=rb-4.0.3&fit=crop&w=400&h=400',
            horizontal:
               'https://images.unsplash.com/photo-1601120102192-0fa7cb74ae4c?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTg3NDAzNzd8&ixlib=rb-4.0.3&fit=crop&w=816&h=400'
         }
      },
      {
         topic: 'Summer',
         resize: {
            vertical:
               'https://images.unsplash.com/photo-1561571994-3c61c554181a?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTg3NDA2NjB8&ixlib=rb-4.0.3&fit=crop&w=400&h=816',
            square:
               'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTg3NDA2NjB8&ixlib=rb-4.0.3&fit=crop&w=400&h=400',
            horizontal:
               'https://images.unsplash.com/photo-1618064541372-289bdb6f5b7b?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTg3NDA2NjB8&ixlib=rb-4.0.3&fit=crop&w=816&h=400'
         }
      },
      {
         topic: 'Autumn',
         resize: {
            vertical:
               'https://images.unsplash.com/photo-1513986615308-8f59cc8a16e1?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTg3NDA4NjJ8&ixlib=rb-4.0.3&fit=crop&w=400&h=816',
            square:
               'https://images.unsplash.com/photo-1508490385390-2b0baa98f428?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTg3NDA4NjJ8&ixlib=rb-4.0.3&fit=crop&w=400&h=400',
            horizontal:
               'https://images.unsplash.com/photo-1573328770826-ef726293380f?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTg3NDA4NjJ8&ixlib=rb-4.0.3&fit=crop&w=816&h=400'
         }
      },
      {
         topic: 'Winter',
         resize: {
            vertical:
               'https://images.unsplash.com/photo-1513016805932-501981d32562?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTg3NDEyMjd8&ixlib=rb-4.0.3&fit=crop&w=400&h=816',
            square:
               'https://images.unsplash.com/photo-1482331336918-c80fab6c90f2?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTg3NDEyMjd8&ixlib=rb-4.0.3&fit=crop&w=400&h=400',
            horizontal:
               'https://images.unsplash.com/photo-1491002052546-bf38f186af56?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTg3NDEyMjd8&ixlib=rb-4.0.3&fit=crop&w=816&h=400'
         }
      }
   ]
}
