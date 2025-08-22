const mockMovieData = [
  {
    id: 1,
    title: "How to Train Your Dragon",
    year: 2025,
    rating: 7.9,
    quality: "HD",
    poster: "https://imgix.hoyts.com.au/mx/posters/nz/how-to-train-your-dragon-20d2a983.jpg"
  },
  {
    id: 2,
    title: "KPop Demon Hunters",
    year: 2025,
    rating: 7.7,
    quality: "HD",
    poster: "https://media2.firstshowing.net/firstshowing/img17/Kpopdemonhuntsbigmainpost592.jpg"
  },
  {
    id: 3,
    title: "The Dark Knight",
    year: 2008,
    rating: 9.0,
    quality: "HD",
    poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg"
  },
  {
    id: 4,
    title: "Ne Zha 2",
    year: 2025,
    rating: 8.1,
    quality: "HD",
    poster: "https://cdn.moviefone.com/image-assets/980477/cb5NyNrqiCNNoDkA8FfxHAtypdG.jpg?d=360x540&q=50"
  },
  {
    id: 5,
    title: "Spirited Away",
    year: 2001,
    rating: 8.6,
    quality: "HD",
    poster: "https://a.ltrbxd.com/resized/sm/upload/1g/fk/4g/3c/ynXoOxmDHNQ4UAy0oU6avW71HVW-0-230-0-345-crop.jpg?k=53d4d12e06"
  },
  {
    id: 6,
    title: "Interstellar",
    year: 2014,
    rating: 8.6,
    quality: "HD",
    poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg"
  },
  {
    id: 7,
    title: "Guardians of the Galaxy",
    year: 2014,
    rating: 8,
    quality: "HD",
    poster: "https://tse2.mm.bing.net/th/id/OIP.39_RWIX2lm1Zvpp4BPN-5wHaLH?rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    id: 8,
    title: "Avengers: Endgame",
    year: 2019,
    rating: 8.4,
    quality: "HD",
    poster: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg"
  },
  {
    id: 9,
    title: "Blade Runner 2049",
    year: 2017,
    rating: 8,
    quality: "HD",
    poster: "https://image.tmdb.org/t/p/original/muYiihFhXEpPcS2WltlSOgmOL0j.jpg"
  },
  {
    id: 10,
    title: "Fury",
    year: 2014,
    rating: 7.6,
    quality: "HD",
    poster: "https://www.themoviedb.org/t/p/original/ykWW3qvd9puwY0RHMP8G56LWUKU.jpg"
  },
  {
    id: 11,
    title: "Wall-E",
    year: 2008,
    rating: 8.4,
    quality: "HD",
    poster: "https://www.lighthousecinema.ie/themes/user/site/lighthouse/images/walle_1_.webp"
  },
  {
    id: 12,
    title: "Demon Slayer: Kimetsu no Yaiba Infinity Castle",
    year: 2025,
    rating: 8.8,
    quality: "CAM",
    poster: "https://cdn.oneesports.gg/cdn-data/2024/07/Anime_DemonSlayerMovieTrilogy_InfinityCastleArc_Poster.jpg"
  },
    {
    id: 13,
    title: "Howl's Moving Castle",
    year: 2004,
    rating: 8.2,
    quality: "HD",
    poster: "https://tse2.mm.bing.net/th/id/OIP.d97EyMCON2iXzqGE1hmbZgHaLH?rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    id: 14,
    title: "Dune",
    year: 2021,
    rating: 8.1,
    quality: "HD",
    poster: "https://theculturednerd.org/wp-content/uploads/2020/12/Dune-Poster-695x1024.png"
  },
  {
    id: 15,
    title: "Ratatouille",
    year: 2007,
    rating: 8.0,
    quality: "HD",
    poster: "https://upload.wikimedia.org/wikipedia/en/5/50/RatatouillePoster.jpg"
  },
  {
    id: 16,
    title: "Deadpool & Wolverine",
    year: 2016,
    rating: 7.5,
    quality: "HD",
    poster: "https://akcdn.detik.net.id/community/media/visual/2024/07/25/film-deadpool-wolverinefoto-marvel-studios.jpeg?w=620&q=90"
  },
  {
    id: 17,
    title: "Kung Fu Panda 4",
    year: 2025,
    rating: 7.8,
    quality: "CAM",
    poster: "https://tse1.mm.bing.net/th/id/OIP.wgje0tOcZ397qcpjuXWt7gHaLu?rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    id: 18,
    title: "Mission Impossible: The Final Reckoning",
    year: 2025,
    rating: 8.3,
    quality: "CAM",
    poster: "https://tse1.mm.bing.net/th/id/OIP.y1ZRanTfkxyCFXT2jFs76AHaK5?rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    id: 19,
    title: "Tangled",
    year: 2010,
    rating: 7.7,
    quality: "HD",
    poster: "https://th.bing.com/th/id/R.2920e79776377270ebb9551daf6c89e1?rik=8IevnwmOnx26nA&riu=http%3a%2f%2f2.bp.blogspot.com%2f_Fxf2MsuHlys%2fTKU1cOa-zGI%2fAAAAAAAAAEk%2fPpS2EghmYo8%2fs1600%2fPoster%2bof%2bTangled.jpg&ehk=qzCCYtdnc05GVM7Y8VA0EM4iLxrXB9pJ9G1tmXBFwGw%3d&risl=&pid=ImgRaw&r=0"
  },
    {
    id: 20,
    title: "Suzume",
    year: 2022,
    rating: 7.6,
    quality: "HD",
    poster: "https://www.themoviedb.org/t/p/original/vIeu8WysZrTSFb2uhPViKjX9EcC.jpg"
  },
  {
    id: 21,
    title: "Avatar: The Way of Water",
    year: 2022,
    rating: 7.8,
    quality: "HD",
    poster: "https://static1.srcdn.com/wordpress/wp-content/uploads/2023/05/avater-the-way-of-water-poster.jpg"
  },
  {
    id: 22,
    title: "Spy x Family: Code White",
    year: 2023,
    rating: 8.0,
    quality: "HD",
    poster: "https://inforadar.disway.id/upload/077769745c3cd3595cb9b085b085ffb6.jpeg"
  },
    {
    id: 23,
    title: "Vinland Saga",
    year: 2019,
    rating: 8.5,
    quality: "HD",
    poster: "https://www.themoviedb.org/t/p/original/AuUgiPuvwkBq20kagz4ZcyhkPTY.jpg"
  },
  {
    id: 24,
    title: "Kingdom of Heaven",
    year: 2005,
    rating: 7.2,
    quality: "HD",
    poster: "https://tse3.mm.bing.net/th/id/OIP.ieM1ibTLmZ7jBvO2DtNmagHaLH?rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    id: 25,
    title: "Troy",
    year: 2004,
    rating: 7.3,
    quality: "HD",
    poster: "https://cdn-images-1.medium.com/max/1200/1*MTej8TejwS7fm9vbXlklRQ.jpeg"
  },
  {
    id: 26,
    title: "300: Rise of an Empire",
    year: 2014,
    rating: 6.2,
    quality: "HD",
    poster: "https://movieposters.ie/wp-content/uploads/2013/06/300-rise-empire-poster-811x1200.jpg"
  },
  {
    id: 27,
    title: "Grave of the Fireflies",
    year: 1988,
    rating: 8.5,
    quality: "HD",
    poster: "https://image.tmdb.org/t/p/original/fs9rvMCDCqZMr6AGciakP0Ds7og.jpg"
  },
  {
    id: 28,
    title: "My Neighbor Totoro",
    year: 1988,
    rating: 8.2,
    quality: "HD",
    poster: "https://i.pinimg.com/736x/f7/3e/ca/f73eca98ae27d6ae174c707f44c610bb.jpg"
  }
];