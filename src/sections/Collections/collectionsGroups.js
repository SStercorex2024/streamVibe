import categoriesItems from "@/sections/Categories/categoriesItems";

const collectionsGroups = [
  {
    isActive: true,
    title: 'Movies',
    items: [
      {
        title: 'Our Genres',
        categoryItems: categoriesItems,
      },
      {
        title: 'Popular Top 10 In Genres',
        categoryItems: [
          {
            title: 'Action',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/action/1.jpg',
              '/src/assets/images/categories/action/2.jpg',
              '/src/assets/images/categories/action/3.jpg',
              '/src/assets/images/categories/action/4.jpg',
            ],
          },
          {
            title: 'Adventure',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/adventure/1.jpg',
              '/src/assets/images/categories/adventure/2.jpg',
              '/src/assets/images/categories/adventure/3.jpg',
              '/src/assets/images/categories/adventure/4.jpg',
            ],
          },
          {
            title: 'Comedy',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/comedy/1.jpg',
              '/src/assets/images/categories/comedy/2.jpg',
              '/src/assets/images/categories/comedy/3.jpg',
              '/src/assets/images/categories/comedy/4.jpg',
            ],
          },
          {
            title: 'Drama',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/drama/1.jpg',
              '/src/assets/images/categories/drama/2.jpg',
              '/src/assets/images/categories/drama/3.jpg',
              '/src/assets/images/categories/drama/4.jpg',
            ],
          },
          {
            title: 'Action',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/action/1.jpg',
              '/src/assets/images/categories/action/2.jpg',
              '/src/assets/images/categories/action/3.jpg',
              '/src/assets/images/categories/action/4.jpg',
            ],
          },
          {
            title: 'Adventure',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/adventure/1.jpg',
              '/src/assets/images/categories/adventure/2.jpg',
              '/src/assets/images/categories/adventure/3.jpg',
              '/src/assets/images/categories/adventure/4.jpg',
            ],
          },
          {
            title: 'Comedy',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/comedy/1.jpg',
              '/src/assets/images/categories/comedy/2.jpg',
              '/src/assets/images/categories/comedy/3.jpg',
              '/src/assets/images/categories/comedy/4.jpg',
            ],
          },
          {
            title: 'Drama',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/drama/1.jpg',
              '/src/assets/images/categories/drama/2.jpg',
              '/src/assets/images/categories/drama/3.jpg',
              '/src/assets/images/categories/drama/4.jpg',
            ],
          },
          {
            title: 'Action',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/action/1.jpg',
              '/src/assets/images/categories/action/2.jpg',
              '/src/assets/images/categories/action/3.jpg',
              '/src/assets/images/categories/action/4.jpg',
            ],
          },
          {
            title: 'Adventure',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/adventure/1.jpg',
              '/src/assets/images/categories/adventure/2.jpg',
              '/src/assets/images/categories/adventure/3.jpg',
              '/src/assets/images/categories/adventure/4.jpg',
            ],
          },
          {
            title: 'Comedy',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/comedy/1.jpg',
              '/src/assets/images/categories/comedy/2.jpg',
              '/src/assets/images/categories/comedy/3.jpg',
              '/src/assets/images/categories/comedy/4.jpg',
            ],
          },
          {
            title: 'Drama',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/drama/1.jpg',
              '/src/assets/images/categories/drama/2.jpg',
              '/src/assets/images/categories/drama/3.jpg',
              '/src/assets/images/categories/drama/4.jpg',
            ],
          },
          {
            title: 'Action',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/action/1.jpg',
              '/src/assets/images/categories/action/2.jpg',
              '/src/assets/images/categories/action/3.jpg',
              '/src/assets/images/categories/action/4.jpg',
            ],
          },
          {
            title: 'Adventure',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/adventure/1.jpg',
              '/src/assets/images/categories/adventure/2.jpg',
              '/src/assets/images/categories/adventure/3.jpg',
              '/src/assets/images/categories/adventure/4.jpg',
            ],
          },
          {
            title: 'Comedy',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/comedy/1.jpg',
              '/src/assets/images/categories/comedy/2.jpg',
              '/src/assets/images/categories/comedy/3.jpg',
              '/src/assets/images/categories/comedy/4.jpg',
            ],
          },
          {
            title: 'Drama',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/drama/1.jpg',
              '/src/assets/images/categories/drama/2.jpg',
              '/src/assets/images/categories/drama/3.jpg',
              '/src/assets/images/categories/drama/4.jpg',
            ],
          },
        ],
        sliderParams: {
          spaceBetween: 30,
          breakpoints: {
            0: {
              slidesPerView: 1.6,
              slidesPerGroup: 1,
            },
            481: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 20,
            },
            1024: {
              spaceBetween: 20,
            },
            1441: {
              slidesPerView: 4,
              slidesPerGroup: 4,
              spaceBetween: 30,
            }
          }
        }
      },
      {
        title: 'Trending Now',
        movieItems: [
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/1.jpg',
            duration: '1h 30min',
            views: '2K',
          },
          {
            title: 'Jaan',
            imgSrc: '/src/assets/images/movies/2.jpg',
            duration: '1h 57min',
            views: '1.5K',
          },
          {
            title: 'Mangal',
            imgSrc: '/src/assets/images/movies/3.jpg',
            duration: '2h 10min',
            views: '1.8K',
          },
          {
            title: 'Pathan',
            imgSrc: '/src/assets/images/movies/4.jpg',
            duration: '2h 20min',
            views: '3K',
          },
          {
            title: 'Anti-man',
            imgSrc: '/src/assets/images/movies/5.jpg',
            duration: '1h 42min',
            views: '5K',
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/1.jpg',
            duration: '1h 30min',
            views: '2K',
          },
          {
            title: 'Jaan',
            imgSrc: '/src/assets/images/movies/2.jpg',
            duration: '1h 57min',
            views: '1.5K',
          },
          {
            title: 'Mangal',
            imgSrc: '/src/assets/images/movies/3.jpg',
            duration: '2h 10min',
            views: '1.8K',
          },
          {
            title: 'Pathan',
            imgSrc: '/src/assets/images/movies/4.jpg',
            duration: '2h 20min',
            views: '3K',
          },
          {
            title: 'Anti-man',
            imgSrc: '/src/assets/images/movies/5.jpg',
            duration: '1h 42min',
            views: '5K',
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/1.jpg',
            duration: '1h 30min',
            views: '2K',
          },
          {
            title: 'Jaan',
            imgSrc: '/src/assets/images/movies/2.jpg',
            duration: '1h 57min',
            views: '1.5K',
          },
          {
            title: 'Mangal',
            imgSrc: '/src/assets/images/movies/3.jpg',
            duration: '2h 10min',
            views: '1.8K',
          },
          {
            title: 'Pathan',
            imgSrc: '/src/assets/images/movies/4.jpg',
            duration: '2h 20min',
            views: '3K',
          },
          {
            title: 'Anti-man',
            imgSrc: '/src/assets/images/movies/5.jpg',
            duration: '1h 42min',
            views: '5K',
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/1.jpg',
            duration: '1h 30min',
            views: '2K',
          },
          {
            title: 'Jaan',
            imgSrc: '/src/assets/images/movies/2.jpg',
            duration: '1h 57min',
            views: '1.5K',
          },
          {
            title: 'Mangal',
            imgSrc: '/src/assets/images/movies/3.jpg',
            duration: '2h 10min',
            views: '1.8K',
          },
          {
            title: 'Pathan',
            imgSrc: '/src/assets/images/movies/4.jpg',
            duration: '2h 20min',
            views: '3K',
          },
          {
            title: 'Anti-man',
            imgSrc: '/src/assets/images/movies/5.jpg',
            duration: '1h 42min',
            views: '5K',
          },
        ],
        sliderParams: {
          spaceBetween: 30,
          breakpoints: {
            0: {
              slidesPerView: 1.6,
              slidesPerGroup: 1,
            },
            481: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              slidesPerGroup: 4,
              spaceBetween: 20,
            },
            1441: {
              slidesPerView: 5,
              slidesPerGroup: 5,
              spaceBetween: 30,
            }
          }
        }
      },
      {
        title: 'New Releases',
        movieItems: [
          {
            title: 'Adipurush',
            imgSrc: '/src/assets/images/new-releases/1.jpg',
            released: {
              label: '14 April 2023',
              dateTime: '2023-04-14',
            }
          },
          {
            title: 'China',
            imgSrc: '/src/assets/images/movies/2.jpg',
            released: {
              label: '22 April 2023',
              dateTime: '2023-04-22',
            }
          },
          {
            title: 'Sin City',
            imgSrc: '/src/assets/images/new-releases/3.jpg',
            released: {
              label: '13 April 2023',
              dateTime: '2023-04-13',
            }
          },
          {
            title: 'The tomorrow war',
            imgSrc: '/src/assets/images/new-releases/4.jpg',
            released: {
              label: '19 April 2023',
              dateTime: '2023-04-19',
            }
          },
          {
            title: 'Misfire',
            imgSrc: '/src/assets/images/new-releases/5.jpg',
            released: {
              label: '11 April 2023',
              dateTime: '2023-04-11',
            }
          },
          {
            title: 'Adipurush',
            imgSrc: '/src/assets/images/new-releases/1.jpg',
            released: {
              label: '14 April 2023',
              dateTime: '2023-04-14',
            }
          },
          {
            title: 'China',
            imgSrc: '/src/assets/images/movies/2.jpg',
            released: {
              label: '22 April 2023',
              dateTime: '2023-04-22',
            }
          },
          {
            title: 'Sin City',
            imgSrc: '/src/assets/images/new-releases/3.jpg',
            released: {
              label: '13 April 2023',
              dateTime: '2023-04-13',
            }
          },
          {
            title: 'The tomorrow war',
            imgSrc: '/src/assets/images/new-releases/4.jpg',
            released: {
              label: '19 April 2023',
              dateTime: '2023-04-19',
            }
          },
          {
            title: 'Misfire',
            imgSrc: '/src/assets/images/new-releases/5.jpg',
            released: {
              label: '11 April 2023',
              dateTime: '2023-04-11',
            }
          },
          {
            title: 'Adipurush',
            imgSrc: '/src/assets/images/new-releases/1.jpg',
            released: {
              label: '14 April 2023',
              dateTime: '2023-04-14',
            }
          },
          {
            title: 'China',
            imgSrc: '/src/assets/images/movies/2.jpg',
            released: {
              label: '22 April 2023',
              dateTime: '2023-04-22',
            }
          },
          {
            title: 'Sin City',
            imgSrc: '/src/assets/images/new-releases/3.jpg',
            released: {
              label: '13 April 2023',
              dateTime: '2023-04-13',
            }
          },
          {
            title: 'The tomorrow war',
            imgSrc: '/src/assets/images/new-releases/4.jpg',
            released: {
              label: '19 April 2023',
              dateTime: '2023-04-19',
            }
          },
          {
            title: 'Misfire',
            imgSrc: '/src/assets/images/new-releases/5.jpg',
            released: {
              label: '11 April 2023',
              dateTime: '2023-04-11',
            }
          },
          {
            title: 'Adipurush',
            imgSrc: '/src/assets/images/new-releases/1.jpg',
            released: {
              label: '14 April 2023',
              dateTime: '2023-04-14',
            }
          },
          {
            title: 'China',
            imgSrc: '/src/assets/images/movies/2.jpg',
            released: {
              label: '22 April 2023',
              dateTime: '2023-04-22',
            }
          },
          {
            title: 'Sin City',
            imgSrc: '/src/assets/images/new-releases/3.jpg',
            released: {
              label: '13 April 2023',
              dateTime: '2023-04-13',
            }
          },
          {
            title: 'The tomorrow war',
            imgSrc: '/src/assets/images/new-releases/4.jpg',
            released: {
              label: '19 April 2023',
              dateTime: '2023-04-19',
            }
          },
          {
            title: 'Misfire',
            imgSrc: '/src/assets/images/new-releases/5.jpg',
            released: {
              label: '11 April 2023',
              dateTime: '2023-04-11',
            }
          }
        ],
        sliderParams: {
          spaceBetween: 30,
          breakpoints: {
            0: {
              slidesPerView: 1.6,
              slidesPerGroup: 1,
            },
            481: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              slidesPerGroup: 4,
              spaceBetween: 20,
            },
            1441: {
              slidesPerView: 5,
              slidesPerGroup: 5,
              spaceBetween: 30,
            }
          }
        }
      },
      {
        title: 'Must - Watch Movies',
        movieItems: [
          {
            title: 'Adipurush',
            imgSrc: '/src/assets/images/must-watch/1.jpg',
            duration: '1h 57min',
            rating: {
              value: 4.5,
              views: '20k',
            }
          },
          {
            title: 'Adipurush',
            imgSrc: '/src/assets/images/must-watch/1.jpg',
            duration: '1h 57min',
            rating: {
              value: 4.5,
              views: '20k',
            }
          },
          {
            title: 'Adipurush',
            imgSrc: '/src/assets/images/must-watch/2.jpg',
            duration: '1h 57min',
            rating: {
              value: 4.5,
              views: '20k',
            }
          },
          {
            title: 'Adipurush',
            imgSrc: '/src/assets/images/must-watch/3.jpg',
            duration: '1h 57min',
            rating: {
              value: 4.5,
              views: '20k',
            }
          },
          {
            title: 'Adipurush',
            imgSrc: '/src/assets/images/must-watch/1.jpg',
            duration: '1h 57min',
            rating: {
              value: 4.5,
              views: '20k',
            }
          },
          {
            title: 'Adipurush',
            imgSrc: '/src/assets/images/must-watch/1.jpg',
            duration: '1h 57min',
            rating: {
              value: 4.5,
              views: '20k',
            }
          },
          {
            title: 'Adipurush',
            imgSrc: '/src/assets/images/must-watch/2.jpg',
            duration: '1h 57min',
            rating: {
              value: 4.5,
              views: '20k',
            }
          },
          {
            title: 'Adipurush',
            imgSrc: '/src/assets/images/must-watch/3.jpg',
            duration: '1h 57min',
            rating: {
              value: 4.5,
              views: '20k',
            }
          },
          {
            title: 'Adipurush',
            imgSrc: '/src/assets/images/new-releases/1.jpg',
            duration: '1h 57min',
            rating: {
              value: 4.5,
              views: '20k',
            }
          },
          {
            title: 'Adipurush',
            imgSrc: '/src/assets/images/must-watch/1.jpg',
            duration: '1h 57min',
            rating: {
              value: 4.5,
              views: '20k',
            }
          },
          {
            title: 'Adipurush',
            imgSrc: '/src/assets/images/must-watch/2.jpg',
            duration: '1h 57min',
            rating: {
              value: 4.5,
              views: '20k',
            }
          },
          {
            title: 'Adipurush',
            imgSrc: '/src/assets/images/must-watch/3.jpg',
            duration: '1h 57min',
            rating: {
              value: 4.5,
              views: '20k',
            }
          },
          {
            title: 'Adipurush',
            imgSrc: '/src/assets/images/new-releases/1.jpg',
            duration: '1h 57min',
            rating: {
              value: 4.5,
              views: '20k',
            }
          },
          {
            title: 'Adipurush',
            imgSrc: '/src/assets/images/must-watch/1.jpg',
            duration: '1h 57min',
            rating: {
              value: 4.5,
              views: '20k',
            }
          },
          {
            title: 'Adipurush',
            imgSrc: '/src/assets/images/must-watch/2.jpg',
            duration: '1h 57min',
            rating: {
              value: 4.5,
              views: '20k',
            }
          },
          {
            title: 'Adipurush',
            imgSrc: '/src/assets/images/must-watch/3.jpg',
            duration: '1h 57min',
            rating: {
              value: 4.5,
              views: '20k',
            }
          },
          {
            title: 'Adipurush',
            imgSrc: '/src/assets/images/new-releases/1.jpg',
            duration: '1h 57min',
            rating: {
              value: 4.5,
              views: '20k',
            }
          },
          {
            title: 'Adipurush',
            imgSrc: '/src/assets/images/must-watch/1.jpg',
            duration: '1h 57min',
            rating: {
              value: 4.5,
              views: '20k',
            }
          },
          {
            title: 'Adipurush',
            imgSrc: '/src/assets/images/must-watch/2.jpg',
            duration: '1h 57min',
            rating: {
              value: 4.5,
              views: '20k',
            }
          },
          {
            title: 'Adipurush',
            imgSrc: '/src/assets/images/must-watch/3.jpg',
            duration: '1h 57min',
            rating: {
              value: 4.5,
              views: '20k',
            }
          },
        ],
        sliderParams: {
          spaceBetween: 30,
          breakpoints: {
            0: {
              slidesPerView: 1.6,
              slidesPerGroup: 1,
            },
            481: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 20,
            },
            1024: {
              spaceBetween: 20,
            },
            1441: {
              slidesPerView: 4,
              slidesPerGroup: 4,
              spaceBetween: 30,
            }
          }
        },
      },
    ]
  },
  {
    title: 'Shows',
    items: [
      {
        title: 'Our Genres',
        categoryItems: categoriesItems,
      },
      {
        title: 'Popular Top 10 In Genres',
        categoryItems: [
          {
            title: 'Action',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/action/1.jpg',
              '/src/assets/images/categories/action/2.jpg',
              '/src/assets/images/categories/action/3.jpg',
              '/src/assets/images/categories/action/4.jpg',
            ],
          },
          {
            title: 'Adventure',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/adventure/1.jpg',
              '/src/assets/images/categories/adventure/2.jpg',
              '/src/assets/images/categories/adventure/3.jpg',
              '/src/assets/images/categories/adventure/4.jpg',
            ],
          },
          {
            title: 'Comedy',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/comedy/1.jpg',
              '/src/assets/images/categories/comedy/2.jpg',
              '/src/assets/images/categories/comedy/3.jpg',
              '/src/assets/images/categories/comedy/4.jpg',
            ],
          },
          {
            title: 'Drama',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/drama/1.jpg',
              '/src/assets/images/categories/drama/2.jpg',
              '/src/assets/images/categories/drama/3.jpg',
              '/src/assets/images/categories/drama/4.jpg',
            ],
          },
          {
            title: 'Action',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/action/1.jpg',
              '/src/assets/images/categories/action/2.jpg',
              '/src/assets/images/categories/action/3.jpg',
              '/src/assets/images/categories/action/4.jpg',
            ],
          },
          {
            title: 'Adventure',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/adventure/1.jpg',
              '/src/assets/images/categories/adventure/2.jpg',
              '/src/assets/images/categories/adventure/3.jpg',
              '/src/assets/images/categories/adventure/4.jpg',
            ],
          },
          {
            title: 'Comedy',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/comedy/1.jpg',
              '/src/assets/images/categories/comedy/2.jpg',
              '/src/assets/images/categories/comedy/3.jpg',
              '/src/assets/images/categories/comedy/4.jpg',
            ],
          },
          {
            title: 'Drama',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/drama/1.jpg',
              '/src/assets/images/categories/drama/2.jpg',
              '/src/assets/images/categories/drama/3.jpg',
              '/src/assets/images/categories/drama/4.jpg',
            ],
          },
          {
            title: 'Action',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/action/1.jpg',
              '/src/assets/images/categories/action/2.jpg',
              '/src/assets/images/categories/action/3.jpg',
              '/src/assets/images/categories/action/4.jpg',
            ],
          },
          {
            title: 'Adventure',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/adventure/1.jpg',
              '/src/assets/images/categories/adventure/2.jpg',
              '/src/assets/images/categories/adventure/3.jpg',
              '/src/assets/images/categories/adventure/4.jpg',
            ],
          },
          {
            title: 'Comedy',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/comedy/1.jpg',
              '/src/assets/images/categories/comedy/2.jpg',
              '/src/assets/images/categories/comedy/3.jpg',
              '/src/assets/images/categories/comedy/4.jpg',
            ],
          },
          {
            title: 'Drama',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/drama/1.jpg',
              '/src/assets/images/categories/drama/2.jpg',
              '/src/assets/images/categories/drama/3.jpg',
              '/src/assets/images/categories/drama/4.jpg',
            ],
          },
          {
            title: 'Action',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/action/1.jpg',
              '/src/assets/images/categories/action/2.jpg',
              '/src/assets/images/categories/action/3.jpg',
              '/src/assets/images/categories/action/4.jpg',
            ],
          },
          {
            title: 'Adventure',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/adventure/1.jpg',
              '/src/assets/images/categories/adventure/2.jpg',
              '/src/assets/images/categories/adventure/3.jpg',
              '/src/assets/images/categories/adventure/4.jpg',
            ],
          },
          {
            title: 'Comedy',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/comedy/1.jpg',
              '/src/assets/images/categories/comedy/2.jpg',
              '/src/assets/images/categories/comedy/3.jpg',
              '/src/assets/images/categories/comedy/4.jpg',
            ],
          },
          {
            title: 'Drama',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/drama/1.jpg',
              '/src/assets/images/categories/drama/2.jpg',
              '/src/assets/images/categories/drama/3.jpg',
              '/src/assets/images/categories/drama/4.jpg',
            ],
          },
        ],
        sliderParams: {
          spaceBetween: 30,
          breakpoints: {
            0: {
              slidesPerView: 1.6,
              slidesPerGroup: 1,
            },
            481: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 20,
            },
            1024: {
              spaceBetween: 20,
            },
            1441: {
              slidesPerView: 4,
              slidesPerGroup: 4,
              spaceBetween: 30,
            }
          }
        }
      },
      {
        title: 'Trending Shows Now',
        movieItems: [
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/shows/1.jpg',
            duration: '1h 30min',
            season: '4 Season',
            href: '/show',
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/shows/2.jpg',
            duration: '1h 30min',
            season: '4 Season',
            href: '/show',
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/shows/3.jpg',
            duration: '1h 30min',
            season: '4 Season',
            href: '/show',
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/shows/4.jpg',
            duration: '1h 30min',
            season: '4 Season',
            href: '/show',
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/shows/1.jpg',
            duration: '1h 30min',
            season: '4 Season',
            href: '/show',
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/shows/2.jpg',
            duration: '1h 30min',
            season: '4 Season',
            href: '/show',
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/shows/3.jpg',
            duration: '1h 30min',
            season: '4 Season',
            href: '/show',
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/shows/4.jpg',
            duration: '1h 30min',
            season: '4 Season',
            href: '/show',
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/shows/1.jpg',
            duration: '1h 30min',
            season: '4 Season',
            href: '/show',
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/shows/2.jpg',
            duration: '1h 30min',
            season: '4 Season',
            href: '/show',
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/shows/3.jpg',
            duration: '1h 30min',
            season: '4 Season',
            href: '/show',
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/shows/4.jpg',
            duration: '1h 30min',
            season: '4 Season',
            href: '/show',
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/shows/1.jpg',
            duration: '1h 30min',
            season: '4 Season',
            href: '/show',
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/shows/2.jpg',
            duration: '1h 30min',
            season: '4 Season',
            href: '/show',
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/shows/3.jpg',
            duration: '1h 30min',
            season: '4 Season',
            href: '/show',
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/shows/4.jpg',
            duration: '1h 30min',
            season: '4 Season',
            href: '/show',
          },

        ],
        sliderParams: {
          spaceBetween: 30,
          breakpoints: {
            0: {
              slidesPerView: 1.6,
              slidesPerGroup: 1,
            },
            481: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 20,
            },
            1024: {
              spaceBetween: 20,
            },
            1441: {
              slidesPerView: 4,
              slidesPerGroup: 4,
              spaceBetween: 30,
            }
          }
        },
      },
      {
        title: 'New Released Shows',
        movieItems: [
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/shows/1.jpg',
            duration: '1h 30min',
            season: '4 Season',
            href: '/show',
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/shows/2.jpg',
            duration: '1h 30min',
            season: '4 Season',
            href: '/show',
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/shows/3.jpg',
            duration: '1h 30min',
            season: '4 Season',
            href: '/show',
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/shows/4.jpg',
            duration: '1h 30min',
            season: '4 Season',
            href: '/show',
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/shows/1.jpg',
            duration: '1h 30min',
            season: '4 Season',
            href: '/show',
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/shows/2.jpg',
            duration: '1h 30min',
            season: '4 Season',
            href: '/show',
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/shows/3.jpg',
            duration: '1h 30min',
            season: '4 Season',
            href: '/show',
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/shows/4.jpg',
            duration: '1h 30min',
            season: '4 Season',
            href: '/show',
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/shows/1.jpg',
            duration: '1h 30min',
            season: '4 Season',
            href: '/show',
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/shows/2.jpg',
            duration: '1h 30min',
            season: '4 Season',
            href: '/show',
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/shows/3.jpg',
            duration: '1h 30min',
            season: '4 Season',
            href: '/show',
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/shows/4.jpg',
            duration: '1h 30min',
            season: '4 Season',
            href: '/show',
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/shows/1.jpg',
            duration: '1h 30min',
            season: '4 Season',
            href: '/show',
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/shows/2.jpg',
            duration: '1h 30min',
            season: '4 Season',
            href: '/show',
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/shows/3.jpg',
            duration: '1h 30min',
            season: '4 Season',
            href: '/show',
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/shows/4.jpg',
            duration: '1h 30min',
            season: '4 Season',
            href: '/show',
          },

        ],
        sliderParams: {
          spaceBetween: 30,
          breakpoints: {
            0: {
              slidesPerView: 1.6,
              slidesPerGroup: 1,
            },
            481: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 20,
            },
            1024: {
              spaceBetween: 20,
            },
            1441: {
              slidesPerView: 4,
              slidesPerGroup: 4,
              spaceBetween: 30,
            }
          }
        },
      },
      {
        title: 'Must - Watch Shows',
        movieItems: [
          {
            title: 'Adipurush',
            imgSrc: '/src/assets/images/must-watch/1.jpg',
            duration: '1h 57min',
            rating: {
              value: 4.5,
              views: '20k',
            }
          },
          {
            title: 'Adipurush',
            imgSrc: '/src/assets/images/must-watch/1.jpg',
            duration: '1h 57min',
            rating: {
              value: 4.5,
              views: '20k',
            }
          },
          {
            title: 'Adipurush',
            imgSrc: '/src/assets/images/must-watch/2.jpg',
            duration: '1h 57min',
            rating: {
              value: 4.5,
              views: '20k',
            }
          },
          {
            title: 'Adipurush',
            imgSrc: '/src/assets/images/must-watch/3.jpg',
            duration: '1h 57min',
            rating: {
              value: 4.5,
              views: '20k',
            }
          },
          {
            title: 'Adipurush',
            imgSrc: '/src/assets/images/must-watch/1.jpg',
            duration: '1h 57min',
            rating: {
              value: 4.5,
              views: '20k',
            }
          },
          {
            title: 'Adipurush',
            imgSrc: '/src/assets/images/must-watch/1.jpg',
            duration: '1h 57min',
            rating: {
              value: 4.5,
              views: '20k',
            }
          },
          {
            title: 'Adipurush',
            imgSrc: '/src/assets/images/must-watch/2.jpg',
            duration: '1h 57min',
            rating: {
              value: 4.5,
              views: '20k',
            }
          },
          {
            title: 'Adipurush',
            imgSrc: '/src/assets/images/must-watch/3.jpg',
            duration: '1h 57min',
            rating: {
              value: 4.5,
              views: '20k',
            }
          },
          {
            title: 'Adipurush',
            imgSrc: '/src/assets/images/new-releases/1.jpg',
            duration: '1h 57min',
            rating: {
              value: 4.5,
              views: '20k',
            }
          },
          {
            title: 'Adipurush',
            imgSrc: '/src/assets/images/must-watch/1.jpg',
            duration: '1h 57min',
            rating: {
              value: 4.5,
              views: '20k',
            }
          },
          {
            title: 'Adipurush',
            imgSrc: '/src/assets/images/must-watch/2.jpg',
            duration: '1h 57min',
            rating: {
              value: 4.5,
              views: '20k',
            }
          },
          {
            title: 'Adipurush',
            imgSrc: '/src/assets/images/must-watch/3.jpg',
            duration: '1h 57min',
            rating: {
              value: 4.5,
              views: '20k',
            }
          },
          {
            title: 'Adipurush',
            imgSrc: '/src/assets/images/new-releases/1.jpg',
            duration: '1h 57min',
            rating: {
              value: 4.5,
              views: '20k',
            }
          },
          {
            title: 'Adipurush',
            imgSrc: '/src/assets/images/must-watch/1.jpg',
            duration: '1h 57min',
            rating: {
              value: 4.5,
              views: '20k',
            }
          },
          {
            title: 'Adipurush',
            imgSrc: '/src/assets/images/must-watch/2.jpg',
            duration: '1h 57min',
            rating: {
              value: 4.5,
              views: '20k',
            }
          },
          {
            title: 'Adipurush',
            imgSrc: '/src/assets/images/must-watch/3.jpg',
            duration: '1h 57min',
            rating: {
              value: 4.5,
              views: '20k',
            }
          },
          {
            title: 'Adipurush',
            imgSrc: '/src/assets/images/new-releases/1.jpg',
            duration: '1h 57min',
            rating: {
              value: 4.5,
              views: '20k',
            }
          },
          {
            title: 'Adipurush',
            imgSrc: '/src/assets/images/must-watch/1.jpg',
            duration: '1h 57min',
            rating: {
              value: 4.5,
              views: '20k',
            }
          },
          {
            title: 'Adipurush',
            imgSrc: '/src/assets/images/must-watch/2.jpg',
            duration: '1h 57min',
            rating: {
              value: 4.5,
              views: '20k',
            }
          },
          {
            title: 'Adipurush',
            imgSrc: '/src/assets/images/must-watch/3.jpg',
            duration: '1h 57min',
            rating: {
              value: 4.5,
              views: '20k',
            }
          },
        ],
        sliderParams: {
          spaceBetween: 30,
          breakpoints: {
            0: {
              slidesPerView: 1.6,
              slidesPerGroup: 1,
            },
            481: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 20,
            },
            1024: {
              spaceBetween: 20,
            },
            1441: {
              slidesPerView: 4,
              slidesPerGroup: 4,
              spaceBetween: 30,
            }
          }
        },
      },
    ]
  },
]

export default collectionsGroups