const groups = [
    {
      name: 'Group A',
      teams: [
        { name: '🇩🇪 Germany', ranking: 1, status: 'Qualified', ga: 2, gf: 8, gd: 6, points: 7 },
        { name: '🇨🇭 Switzerland', ranking: 2, status: 'Qualified', ga: 3, gf: 5, gd: 2, points: 5 },
        { name: '🇭🇺 Hungary', ranking: 3, status: 'NQ', ga: 5, gf: 2, gd: -3, points: 3 },
        { name: '🏴󠁧󠁢󠁳󠁣󠁴󠁿 Scotland', ranking: 4, status: 'NQ', ga: 7, gf: 2, gd: -5, points: 1 },
      ],
    },
    {
      name: 'Group B',
      teams: [
        { name: '🇪🇸 Spain', ranking: 1, status: 'Qualified', ga: 0, gf: 5, gd: 5, points: 9 },
        { name: '🇮🇹 Italy', ranking: 2, status: 'Qualified', ga: 3, gf: 3, gd: 0, points: 4 },
        { name: '🇭🇷 Croatia', ranking: 3, status: 'NQ', ga: 6, gf: 3, gd: -3, points: 2 },
        { name: '🇦🇱 Albania', ranking: 4, status: 'NQ', ga: 5, gf: 3, gd: -2, points: 1 },
      ],
    },
    {
      name: 'Group C',
      teams: [
        { name: '🏴󠁧󠁢󠁥󠁮󠁧󠁿 England', ranking: 1, status: 'Qualified', ga: 1, gf: 2, gd: 1, points: 5 },
        { name: '🇩🇰 Denmark', ranking: 2, status: 'Qualified', ga: 2, gf: 2, gd: 0, points: 3 },
        { name: '🇸🇮 Slovenia', ranking: 3, status: 'Qualified', ga: 2, gf: 2, gd: 0, points: 3 },
        { name: '🇷🇸 Serbia', ranking: 4, status: 'NQ', ga: 2, gf: 1, gd: -1, points: 2 },
      ],
    },
    {
      name: 'Group D',
      teams: [
        { name: '🇦🇹 Austria', ranking: 1, status: 'Qualified', ga: 4, gf: 6, gd: 2, points: 6 },
        { name: '🇫🇷 France', ranking: 2, status: 'Qualified', ga: 1, gf: 2, gd: 1, points: 5 },
        { name: '🇳🇱 Netherlands', ranking: 3, status: 'Qualified', ga: 4, gf: 4, gd: 0, points: 4 },
        { name: '🇵🇱 Poland', ranking: 4, status: 'NQ', ga: 6, gf: 3, gd: -3, points: 1 },
      ],
    },
    {
      name: 'Group E',
      teams: [
        { name: '🇷🇴 Romania', ranking: 1, status: 'Qualified', ga: 3, gf: 4, gd: 1, points: 4 },
        { name: '🇧🇪 Belgium', ranking: 2, status: 'Qualified', ga: 1, gf: 2, gd: 1, points: 4 },
        { name: '🇸🇰 Slovakia', ranking: 3, status: 'Qualified', ga: 3, gf: 3, gd: 0, points: 4 },
        { name: '🇺🇦 Ukraine', ranking: 4, status: 'NQ', ga: 4, gf: 2, gd: -2, points: 4 },
      ],
    },
    {
      name: 'Group F',
      teams: [
        { name: '🇵🇹 Portugal', ranking: 1, status: 'Qualified', ga: 3, gf: 5, gd: 2, points: 6 },
        { name: '🇹🇷 Turkey', ranking: 2, status: 'Qualified', ga: 5, gf: 5, gd: 0, points: 6 },
        { name: '🇬🇪 Georgia', ranking: 3, status: 'Qualified', ga: 4, gf: 4, gd: 0, points: 4 },
        { name: '🇨🇿 Czechia', ranking: 4, status: 'NQ', ga: 5, gf: 3, gd: -2, points: 1 },
      ],
    }
    
  ]

  export default groups;