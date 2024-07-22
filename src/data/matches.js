const matches = [
    {
      date: 'GROUP STAGE ROUND 1: June 14',
      teams: [
        { name: 'Germany', flag: '🇩🇪' },
        { name: 'Scotland', flag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿' },
      ],
      score: '5 - 1',
      highlights: 'https://www.youtube.com/embed/-VT9i_v4_fA'
    },
    {
      date: 'GROUP STAGE ROUND 1: June 15',
      teams: [
        { name: 'Hungary', flag: '🇭🇺' },
        { name: 'Switzerland', flag: '🇨🇭' },
      ],
      score: '1 - 3',
      highlights: 'https://www.youtube.com/embed/IQdKxMv-H2k'
    },
    {
      date: 'GROUP STAGE ROUND 1: June 15',
      teams: [
        { name: 'Spain', flag: '🇪🇸' },
        { name: 'Croatia', flag: '🇭🇷' },
      ],
      score: '3 - 0',
      highlights: 'https://www.youtube.com/embed/4VQjBYaZUMM'
    },
    {
      date: 'GROUP STAGE ROUND 1: June 15',
      teams: [
        { name: 'Italy', flag: '🇮🇹' },
        { name: 'Albania', flag: '🇦🇱' },
      ],
      score: '2 - 1',
      highlights: 'https://www.youtube.com/embed/PKunEIyfhjw'
    },

    {
      date: 'GROUP STAGE ROUND 1: June 16',
      teams: [
        { name: 'Poland', flag: '🇵🇱' },
        { name: 'Netherland', flag: '󠁧󠁢󠁳🇳🇱' },
      ],
      score: '1 - 2',
      highlights: 'https://www.youtube.com/embed/1StXs09Nhhg'
    },
    {
      date: 'GROUP STAGE ROUND 1: June 16',
      teams: [
        { name: 'Slovenia', flag: '🇸🇮' },
        { name: 'Denmark', flag: '🇩🇰' },
      ],
      score: '1 - 1',
      highlights: 'https://www.youtube.com/embed/YSt8um0bv50'
    },
    {
      date: 'GROUP STAGE ROUND 1: June 16',
      teams: [
        { name: 'Serbia', flag: '🇷🇸' },
        { name: 'England', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿' },
      ],
      score: '0 - 1',
      highlights: 'https://www.youtube.com/embed/JLyODkZeOSA'
    },
    {
      date: 'GROUP STAGE ROUND 1: June 17',
      teams: [
        { name: 'Romania', flag: '🇷🇴' },
        { name: 'Ukraine', flag: '🇺🇦' },
      ],
      score: '3 - 0',
      highlights: 'https://www.youtube.com/embed/mHk8Rv_PIQQ'
    },
    {
      date: 'GROUP STAGE ROUND 1: June 17',
      teams: [
        { name: 'Belgium', flag: '🇧🇪' },
        { name: 'Slovakia', flag: '🇸🇰' },
      ],
      score: '0 - 1',
      highlights: 'https://www.youtube.com/embed/dllCBmgMSFc'
    },
    {
      date: 'GROUP STAGE ROUND 1: June 17',
      teams: [
        { name: 'Austria', flag: '🇦🇹' },
        { name: 'France', flag: '🇫🇷' },
      ],
      score: '0 - 1',
      highlights: 'https://www.youtube.com/embed/f4rZspJxBQw'
    },
    {
      date: 'GROUP STAGE ROUND 1: June 18',
      teams: [
        { name: 'Turkiye', flag: '🇹🇷' },
        { name: 'Georgia', flag: '🇬🇪' },
      ],
      score: '3 - 1',
      highlights: 'https://www.youtube.com/embed/A66NNrfsUsw'
    },
    {
      date: 'GROUP STAGE ROUND 1: June 18',
      teams: [
        { name: 'Portugal', flag: '🇵🇹' },
        { name: 'Czechia', flag: '🇨🇿' },
      ],
      score: '5 - 1',
      highlights: 'https://www.youtube.com/embed/U08MnyreKg4'
    },
    {
      date: 'GROUP STAGE ROUND 2: June 19',
      teams: [
        { name: 'Croatia', flag: '🇭🇷' },
        { name: 'Albania', flag: '🇦🇱' },
      ],
      score: '2 - 2',
      highlights: 'https://www.youtube.com/embed/2lp3VoViFVo'
    },
    {
      date: 'GROUP STAGE ROUND 2: June 19',
      teams: [
        { name: 'Germany', flag: '🇩🇪' },
        { name: 'Hungary', flag: '🇭🇺' },
      ],
      score: '2 - 0',
      highlights: 'https://www.youtube.com/embed/tTBtLdncLk8'
    },
    {
      date: 'GROUP STAGE ROUND 2: June 19',
      teams: [
        { name: 'Scotland', flag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿' },
        { name: 'Switzerland', flag: '🇨🇭' },
      ],
      score: '1 - 1',
      highlights: 'https://www.youtube.com/embed/1iojVKxEF5k'
    },
    {
      date: 'GROUP STAGE ROUND 2: June 20',
      teams: [
        { name: 'Slovenia', flag: '🇸🇮' },
        { name: 'Serbia', flag: '🇷🇸' },
      ],
      score: '1 - 1',
      highlights: 'https://www.youtube.com/embed/33KlxHObt8I'
    },
    {
      date: 'GROUP STAGE ROUND 2: June 20',
      teams: [
        { name: 'Denmark', flag: '🇩🇰' },
        { name: 'England', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿' },
      ],
      score: '1 - 1',
      highlights: 'https://www.youtube.com/embed/IvzdvIjpYto'
    },
    {
      date: 'GROUP STAGE ROUND 2: June 20',
      teams: [
        { name: 'Spain', flag: '🇪🇸' },
        { name: 'Italy', flag: '🇮🇹' },
      ],
      score: '1 - 0',
      highlights: 'https://www.youtube.com/embed/u5nYscbBgdU'
    },
    {
      date: 'GROUP STAGE ROUND 2: June 21',
      teams: [
        { name: 'Slovakia', flag: '🇸🇰' },
        { name: 'Ukraine', flag: '🇺🇦' },
      ],
      score: '1 - 2',
      highlights: 'https://www.youtube.com/embed/8xeWKuSiAMw'
    },
    {
      date: 'GROUP STAGE ROUND 2: June 21',
      teams: [
        { name: 'Poland', flag: '🇵🇱' },
        { name: 'Austria', flag: '🇦🇹' },
      ],
      score: '1 - 3',
      highlights: 'https://www.youtube.com/embed/QrRt_ZA8QRw'
    },
    {
      date: 'GROUP STAGE ROUND 2: June 21',
      teams: [
        { name: 'Netherlands', flag: '󠁧󠁢󠁳🇳🇱' },
        { name: 'France', flag: '🇫🇷' },
      ],
      score: '0 - 0',
      highlights: 'https://www.youtube.com/embed/bYPEEXv3Ki8'
    },
    {
      date: 'GROUP STAGE ROUND 2: June 22',
      teams: [
        { name: 'Georgia', flag: '🇬🇪' },
        { name: 'Czechia', flag: '🇨🇿' },
      ],
      score: '1 - 1',
      highlights: 'https://www.youtube.com/embed/AGlTWEYdph4'
    },
    {
      date: 'GROUP STAGE ROUND 2: June 22',
      teams: [
        { name: 'Netherlands', flag: '󠁧󠁢󠁳🇳🇱' },
        { name: 'France', flag: '🇫🇷' },
      ],
      score: '0 - 0',
      highlights: 'https://www.youtube.com/embed/bYPEEXv3Ki8'
    },
    {
      date: 'GROUP STAGE ROUND 2: June 22',
      teams: [
        { name: 'Turkiye', flag: '󠁧󠁢󠁳🇹🇷' },
        { name: 'Portugal', flag: '🇵🇹' },
      ],
      score: '0 - 3',
      highlights: 'https://www.youtube.com/embed/DYKespAlxH0'
    },
    {
      date: 'GROUP STAGE ROUND 2: June 22',
      teams: [
        { name: 'Belgium', flag: '󠁧󠁢󠁳🇧🇪' },
        { name: 'Romania', flag: '🇷🇴' },
      ],
      score: '2 - 0',
      highlights: 'https://www.youtube.com/embed/9PhDL6A7bcA'
    },
    {
      date: 'GROUP STAGE ROUND 2: June 22',
      teams: [
        { name: 'Netherlands', flag: '󠁧󠁢󠁳🇳🇱' },
        { name: 'France', flag: '🇫🇷' },
      ],
      score: '0 - 0',
      highlights: 'https://www.youtube.com/embed/bYPEEXv3Ki8'
    },
    {
      date: 'GROUP STAGE ROUND 3: June 23',
      teams: [
        { name: 'Switzerland', flag: '󠁧󠁢󠁳🇨🇭' },
        { name: 'Germany', flag: '🇩🇪' },
      ],
      score: '1 - 1',
      highlights: 'https://www.youtube.com/embed/4e3a8PnQzhQ'
    },
    {
      date: 'GROUP STAGE ROUND 3: June 23',
      teams: [
        { name: 'Scotland', flag: '󠁧󠁢󠁳🏴󠁧󠁢󠁳󠁣󠁴󠁿' },
        { name: 'Hungary', flag: '🇭🇺' },
      ],
      score: '0 - 1',
      highlights: 'https://www.youtube.com/embed/jyYc0jpvW-M'
    },
    {
      date: 'GROUP STAGE ROUND 3: June 24',
      teams: [
        { name: 'Albania', flag: '󠁧󠁢󠁳🇦🇱' },
        { name: 'Spain', flag: '🇪🇸' },
      ],
      score: '0 - 1',
      highlights: 'https://www.youtube.com/embed/ZusYg26VAw4'
    },
    {
      date: 'GROUP STAGE ROUND 3: June 24',
      teams: [
        { name: 'Croatia', flag: '󠁧󠁢󠁳🇭🇷' },
        { name: 'Italy', flag: '🇮🇹' },
      ],
      score: '1 - 1',
      highlights: 'https://www.youtube.com/embed/VRHyI9g7zUw'
    },
    {
      date: 'GROUP STAGE ROUND 3: June 25',
      teams: [
        { name: 'Poland', flag: '󠁧󠁢󠁳🇵🇱' },
        { name: 'France', flag: '🇫🇷' },
      ],
      score: '1 - 1',
      highlights: 'https://www.youtube.com/embed/4LJA1FcKW60'
    },
    {
      date: 'GROUP STAGE ROUND 3: June 25',
      teams: [
        { name: 'Denmark', flag: '󠁧󠁢󠁳🇩🇰' },
        { name: 'Serbia', flag: '🇷🇸' },
      ],
      score: '0 - 0',
      highlights: 'https://www.youtube.com/embed/2WNtD9OKB3c'
    },
    {
      date: 'GROUP STAGE ROUND 3: June 25',
      teams: [
        { name: 'Netherlands', flag: '󠁧󠁢󠁳🇳🇱' },
        { name: 'Austria', flag: '🇦🇹' },
      ],
      score: '2 - 3',
      highlights: 'https://www.youtube.com/embed/7OQSuBqGQh4'
    },
    {
      date: 'GROUP STAGE ROUND 3: June 25',
      teams: [
        { name: 'England', flag: '󠁧󠁢󠁳🏴󠁧󠁢󠁥󠁮󠁧󠁿' },
        { name: 'Slovenia', flag: '🇸🇮' },
      ],
      score: '0 - 0',
      highlights: 'https://www.youtube.com/embed/IwwU-D50SeA'
    },
    {
      date: 'GROUP STAGE ROUND 3: June 26',
      teams: [
        { name: 'Slovakia', flag: '󠁧󠁢󠁳🇸🇰' },
        { name: 'Romania', flag: '🇷🇴' },
      ],
      score: '1 - 1',
      highlights: 'https://www.youtube.com/embed/TtkRoHZ1QTY'
    },
    {
      date: 'GROUP STAGE ROUND 3: June 26',
      teams: [
        { name: 'Georgia', flag: '󠁧󠁢󠁳🇬🇪' },
        { name: 'Portugal', flag: '🇵🇹' },
      ],
      score: '2 - 0',
      highlights: 'https://www.youtube.com/embed/X3Ui-9aMTtQ'
    },
    {
      date: 'GROUP STAGE ROUND 3: June 26',
      teams: [
        { name: 'Ukraine', flag: '󠁧󠁢󠁳🇺🇦' },
        { name: 'Belgium', flag: '🇧🇪' },
      ],
      score: '0 - 0',
      highlights: 'https://www.youtube.com/embed/xmzaSh1aOgI'
    },
    {
      date: 'GROUP STAGE ROUND 3: June 26',
      teams: [
        { name: 'Czechia', flag: '󠁧󠁢󠁳🇨🇿' },
        { name: 'Turkiye', flag: '🇹🇷' },
      ],
      score: '1 - 2',
      highlights: 'https://www.youtube.com/embed/FUcny3b-3KQ'
    },
    {
      date: 'ROUND OF 16: June 29',
      teams: [
        { name: 'Switzerland', flag: '󠁧󠁢󠁳🇨🇭' },
        { name: 'Italy', flag: '🇮🇹' },
      ],
      score: '2 - 0',
      highlights: 'https://www.youtube.com/embed/rkdrLEWVWIk'
    },
    {
      date: 'ROUND OF 16: June 29',
      teams: [
        { name: 'Germany', flag: '󠁧󠁢󠁳🇩🇪' },
        { name: 'Denmark', flag: '🇩🇰' },
      ],
      score: '2 - 0',
      highlights: 'https://www.youtube.com/embed/Xp_YXMt7RBU'
    },
    {
      date: 'ROUND OF 16: June 30',
      teams: [
        { name: 'England', flag: '󠁧󠁢󠁳🏴󠁧󠁢󠁥󠁮󠁧󠁿' },
        { name: 'Slovakia', flag: '🇸🇰' },
      ],
      score: '2 - 1',
      highlights: 'https://www.youtube.com/embed/qK2kldlnX4Q'
    },
    {
      date: 'ROUND OF 16: June 30',
      teams: [
        { name: 'Spain', flag: '󠁧󠁢󠁳🇪🇸' },
        { name: 'Georgia', flag: '🇬🇪' },
      ],
      score: '4 - 1',
      highlights: 'https://www.youtube.com/embed/daFpo3nKgdg'
    },
    {
      date: 'ROUND OF 16: July 1',
      teams: [
        { name: 'France', flag: '󠁧󠁢󠁳🇫🇷' },
        { name: 'Belgium', flag: '🇧🇪' },
      ],
      score: '1 -0',
      highlights: 'https://www.youtube.com/embed/vHBDfV9fu3g'
    },
    {
      date: 'ROUND OF 16: July 1',
      teams: [
        { name: 'Portugal', flag: '󠁧󠁢󠁳🇵🇹' },
        { name: 'Slovenia', flag: '🇸🇮' },
      ],
      score: '0 (3) - 0 (0)',
      highlights: 'https://www.youtube.com/embed/w_fP76GWoK0'
    },
    {
      date: 'ROUND OF 16: July 2',
      teams: [
        { name: 'Netherlands', flag: '󠁧󠁢󠁳🇳🇱' },
        { name: 'Romania', flag: '🇷🇴' },
      ],
      score: '3 - 0',
      highlights: 'https://www.youtube.com/embed/6jHFkZtLvl8'
    },
    {
      date: 'ROUND OF 16: July 2',
      teams: [
        { name: 'Austria', flag: '󠁧󠁢󠁳🇦🇹' },
        { name: 'Turkiye', flag: '🇹🇷' },
      ],
      score: '1 - 2',
      highlights: 'https://www.youtube.com/embed/vHOi_k5KLiE'
    },
    {
      date: 'QUARTER-FINALS: July 5',
      teams: [
        { name: 'Spain', flag: '󠁧󠁢󠁳🇪🇸' },
        { name: 'Germany', flag: '🇩🇪' },
      ],
      score: '2 - 1',
      highlights: 'https://www.youtube.com/embed/Lpm9xxPtxdU'
    },
    {
      date: 'QUARTER-FINALS: July 5',
      teams: [
        { name: 'Portugal', flag: '󠁧󠁢󠁳🇵🇹' },
        { name: 'France', flag: '🇫🇷' },
      ],
      score: '0 (3) - 0 (5)',
      highlights: 'https://www.youtube.com/embed/vJ3AhNtdsvI'
    },
    {
      date: 'QUARTER-FINALS: July 6',
      teams: [
        { name: 'England', flag: '󠁧󠁢󠁳🏴󠁧󠁢󠁥󠁮󠁧󠁿' },
        { name: 'Switzerland', flag: '🇨🇭' },
      ],
      score: '1 (5) - 1 (3)',
      highlights: 'https://www.youtube.com/embed/oNODOPwObLM'
    },
    {
      date: 'QUARTER-FINALS: July 6',
      teams: [
        { name: 'Netherlands', flag: '󠁧󠁢󠁳🇳🇱' },
        { name: 'Turkiye', flag: '🇹🇷' },
      ],
      score: '2 - 1',
      highlights: 'https://www.youtube.com/embed/2Iw9zpQXWI8'
    },
    {
      date: 'SEMI-FINALS: July 9',
      teams: [
        { name: 'Spain', flag: '󠁧󠁢󠁳🇪🇸' },
        { name: 'France', flag: '🇫🇷' },
      ],
      score: '2 - 1',
      highlights: 'https://www.youtube.com/embed/h415-tvLoZw'
    },
    {
      date: 'SEMI-FINALS: July 10',
      teams: [
        { name: 'Netherlands', flag: '󠁧󠁢󠁳🇳🇱' },
        { name: 'England', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿' },
      ],
      score: '1 - 2',
      highlights: 'https://www.youtube.com/embed/lrbcOOYUX5Y'
    },
    {
      date: 'FINALS: July 14',
      teams: [
        { name: 'Spain', flag: '󠁧󠁢󠁳🇪🇸' },
        { name: 'England', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿' },
      ],
      score: '2 - 1',
      highlights: 'https://www.youtube.com/embed/BoIf9rWoqpk'
    }

  
  ];

export default matches;