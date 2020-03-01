const express = require('express');
const router = express.Router();

router.get('/slidedata', (req, res) => {
  res.json([
    {
      id: 1,
      img: 'https://resource.smartisan.com/resource/c2912045426c6125c3559b46e4babdc7.png?x-oss-process=image/resize,w_1220/quality,Q_100',
      link: 'category',
      type: 'shop'
    },
    {
      id: 2,
      img: 'https://resource.smartisan.com/resource/af18ae7dfa15f0a73a24a1765e0f8262.png?x-oss-process=image/resize,w_1220/quality,Q_100',
      link: 'category',
      type: 'shop'
    },
    {
      id: 3,
      img: 'https://resource.smartisan.com/resource/47c62043cd795ca067db4d3d569a9a29.jpg?x-oss-process=image/resize,w_1220/quality,Q_100',
      link: 'category',
      type: 'shop'
    },
    {
      id: 4,
      img: 'https://resource.smartisan.com/resource/ee2507e25b40c1544706a1a30c537098.jpg?x-oss-process=image/resize,w_1220/quality,Q_100',
      link: 'category',
      type: 'shop'
    },
  ])
})

router.get('/activity', (req, res) => {
  res.json([
    {
      id: 1,
      img: 'https://resource.smartisan.com/resource/eca4f286fde41cebb778dc4f8bf055df.jpg?x-oss-process=image/resize,w_600/format,webp',
      link: 'category',
      type: 'shop'
    },
    {
      id: 2,
      img: 'https://resource.smartisan.com/resource/fe2f969d1f297e1a1eec6eb8e9f77277.jpg?x-oss-process=image/resize,w_600/format,webp',
      link: 'category',
      type: 'shop'
    },
    {
      id: 3,
      img: 'https://resource.smartisan.com/resource/33ea4bfa05068e0741b7278fec9da8a6.jpg?x-oss-process=image/resize,w_600/format,webp',
      link: 'category',
      type: 'shop'
    },
    {
      id: 4,
      img: 'https://resource.smartisan.com/resource/fdc4370d1ce14a67fadc35d74209ac0f.jpg?x-oss-process=image/resize,w_600/format,webp',
      link: 'category',
      type: 'shop'
    },
  ])
})

router.get('/hotgoods', (req, res) => {
  res.json({
    title: '热门商品',
    data: [
      {
        id: 1,
        title: '坚果 Pro 3',
        default_desc: '高通骁龙855Plus · 4800 万模范四摄Smartisan',
        hover_desc: '（春暖花开 好里相陪）坚果Pro 3 限时大促',
        tag: {
          text: '直降',
          class: 'yellow'
        },
        types: [
          {
            color: '#0e0c0d',
            img: 'https://resource.smartisan.com/resource/f195e666e089d4e3775ce67d8e9523ce.png?x-oss-process=image/resize,w_270/format,webp',
            current_price: 2300.00,
            original_price: 2800.00
          },
          {
            color: '#efefef',
            img: 'https://resource.smartisan.com/resource/9934374dda26c292555dd1ec0887e17b.png?x-oss-process=image/resize,w_270/format,webp',
            current_price: 2500.00,
            original_price: 2800.00

          },
          {
            color: '#269b78',
            img: 'https://resource.smartisan.com/resource/a4c73e549097c7f5cf2c5e0d87e56d13.png?x-oss-process=image/resize,w_270/format,webp',
            current_price: 2800.00,
            original_price: 2800.00
          },
        ],
      },
      {
        id: 2,
        title: 'smartisan 颈挂蓝牙耳机',
        default_desc: '铁圈一代代表作',
        hover_desc: '（春暖花开 好里相陪）精选配件 限时直降',
        tag: {
          text: '买赠',
          class: 'red'
        },
        types: [
          {
            color: '#1b1b1b',
            img: 'https://resource.smartisan.com/resource/d159521e479b26f3c97a1e4f00a5aefd.jpg?x-oss-process=image/resize,w_270/format,webp',
            current_price: 179.00,
            original_price: 199.00
          },
          {
            color: '#a9c5bb',
            img: 'https://resource.smartisan.com/resource/a5b6bf1f38fb88dceeb1e917bec288da.jpg?x-oss-process=image/resize,w_270/format,webp',
            current_price: 159.00,
            original_price: 199.00
          },
        ]
      },
      {
        id: 3,
        title: '惠普（HP）Smart Tank 511 彩色喷墨连供多功能打印机',
        default_desc: '',
        hover_desc: '打印机开学季直降',
        tag: {
          text: '买赠',
          class: 'red'
        },
        types: [
          {
            color: '',
            img: 'https://resource.smartisan.com/resource/6921edba9842f86b651c60e3735c5993.jpg?x-oss-process=image/resize,w_216/format,webp',
            current_price: 179.00,
            original_price: 199.00
          }
        ]
      },
      {
        id: 4,
        title: '坚果快充移动电源 20000mAh（45W MAX)',
        default_desc: '“充电狂人的大满足”',
        hover_desc: '购移动电源赠CTO C数据线1条',
        tag: {
          text: '买赠',
          class: 'red'
        },
        types: [
          {
            color: '#ffffff',
            img: 'https://resource.smartisan.com/resource/de1274f4c70fe3768417bb0454320089.png?x-oss-process=image/resize,w_216/format,webp',
            current_price: 249.00,
            original_price: 289.00
          }
        ],
      },
      {
        id: 5,
        title: '地平线 8号 旅行箱',
        default_desc: '简约设计、德国拜耳PC箱体',
        hover_desc: '（春暖花开 好里相陪）精选配件 限时直降',
        tag: {
          text: '直降',
          class: 'red'
        },
        types: [
          {
            color: '#3f3f3f',
            img: 'https://resource.smartisan.com/resource/db4895e45ee6f3339037dbf7200e63f2.png?x-oss-process=image/resize,w_216/format,webp',
            current_price: 236.00,
            original_price: 279.00
          },
          {
            color: '#5d5d5d',
            img: 'https://resource.smartisan.com/resource/fc092e830c0420b5d8db2871fec82b35.png?x-oss-process=image/resize,w_216/format,webp',
            current_price: 159.00,
            original_price: 199.00
          },
          {
            color: '#57667e',
            img: 'https://resource.smartisan.com/resource/406f785ab2bf3ed281f7c9c08f8bf22c.png?x-oss-process=image/resize,w_216/format,webp',
            current_price: 212.00,
            original_price: 231.00
          }
        ]
      },
      {
        id: 6,
        title: '科沃斯扫地机器人 DK35',
        default_desc: '智能规划',
        hover_desc: '科沃斯DK35直降200元',
        tag: {
          text: '买赠',
          class: 'yellow'
        },
        types: [
          {
            color: '',
            img: 'https://resource.smartisan.com/resource/b6db8976d3fe9a04b0a58dc82099838b.jpg?x-oss-process=image/resize,w_216/format,webp',
            current_price: 1499.00,
            original_price: 2000.00
          },
        ]
      },
      {
        id: 7,
        title: 'Smartisan 真无线蓝牙耳机',
        default_desc: '智能配对 开盖即连',
        hover_desc: '限量购买耳机，赠送坚果彩虹数据线1条',
        tag: {
          text: '买赠',
          class: 'yellow'
        },
        types: [
          {
            color: '#fff',
            img: 'https://resource.smartisan.com/resource/e991f946530a7cfab3d9670dd8b1371b.png?x-oss-process=image/resize,w_216/format,webp',
            current_price: 1499.00,
            original_price: 2000.00
          },
        ]
      },
      {
        id: 8,
        title: 'Smartisan 真无线蓝牙耳机',
        default_desc: '智能配对 开盖即连',
        hover_desc: '限量购买耳机，赠送坚果彩虹数据线1条',
        tag: {
          text: '买赠',
          class: 'yellow'
        },
        types: [
          {
            color: '',
            img: 'https://resource.smartisan.com/resource/8e822aa7cbab24fec7eacf0bbb2f6526.jpg?x-oss-process=image/resize,w_216/format,webp',
            current_price: 25.00,
            original_price: '',
          },
        ]
      },
    ]
  })
})

router.get('/allgoodswrap', (req, res) => {
  res.json(
    [
      // 第一组数据
      {
        title: '坚果Pro 3 及配件',
        firstData: {
          id: 1,
          img: 'https://resource.smartisan.com/resource/7fde2fda75d10f1618b918fd791fc960.png?x-oss-process=image/resize,w_600/format,webp'
        },
        // 注意里面的数据最多智能包含6个
        mainData: [
          {
            id: 1,
            title: '坚果 Pro 3',
            default_desc: '高通骁龙855Plus · 4800 万模范四摄Smartisan',
            hover_desc: '（春暖花开 好里相陪）坚果Pro 3 限时大促',
            tag: {
              text: '直降',
              class: 'yellow'
            },
            types: [
              {
                color: '#0e0c0d',
                img: 'https://resource.smartisan.com/resource/f195e666e089d4e3775ce67d8e9523ce.png?x-oss-process=image/resize,w_270/format,webp',
                current_price: 2300.00,
                original_price: 2800.00
              },
              {
                color: '#efefef',
                img: 'https://resource.smartisan.com/resource/9934374dda26c292555dd1ec0887e17b.png?x-oss-process=image/resize,w_270/format,webp',
                current_price: 2500.00,
                original_price: 2800.00

              },
              {
                color: '#269b78',
                img: 'https://resource.smartisan.com/resource/a4c73e549097c7f5cf2c5e0d87e56d13.png?x-oss-process=image/resize,w_270/format,webp',
                current_price: 2800.00,
                original_price: 2800.00
              },
            ],
          },
          {
            id: 2,
            title: 'smartisan 颈挂蓝牙耳机',
            default_desc: '铁圈一代代表作',
            hover_desc: '（春暖花开 好里相陪）精选配件 限时直降',
            tag: {
              text: '买赠',
              class: 'red'
            },
            types: [
              {
                color: '#1b1b1b',
                img: 'https://resource.smartisan.com/resource/d159521e479b26f3c97a1e4f00a5aefd.jpg?x-oss-process=image/resize,w_270/format,webp',
                current_price: 179.00,
                original_price: 199.00
              },
              {
                color: '#a9c5bb',
                img: 'https://resource.smartisan.com/resource/a5b6bf1f38fb88dceeb1e917bec288da.jpg?x-oss-process=image/resize,w_270/format,webp',
                current_price: 159.00,
                original_price: 199.00
              },
            ]
          },
          {
            id: 3,
            title: '惠普（HP）Smart Tank 511 彩色喷墨连供多功能打印机',
            default_desc: '',
            hover_desc: '打印机开学季直降',
            tag: {
              text: '买赠',
              class: 'red'
            },
            types: [
              {
                color: '',
                img: 'https://resource.smartisan.com/resource/6921edba9842f86b651c60e3735c5993.jpg?x-oss-process=image/resize,w_216/format,webp',
                current_price: 179.00,
                original_price: 199.00
              }
            ]
          },
          {
            id: 4,
            title: '坚果 Pro 3',
            default_desc: '高通骁龙855Plus · 4800 万模范四摄Smartisan',
            hover_desc: '（春暖花开 好里相陪）坚果Pro 3 限时大促',
            tag: {
              text: '买赠',
              class: 'red'
            },
            types: [
              {
                color: '#0e0c0d',
                img: 'https://resource.smartisan.com/resource/f195e666e089d4e3775ce67d8e9523ce.png?x-oss-process=image/resize,w_270/format,webp',
                current_price: 2300.00,
                original_price: 2800.00
              },
              {
                color: '#efefef',
                img: 'https://resource.smartisan.com/resource/9934374dda26c292555dd1ec0887e17b.png?x-oss-process=image/resize,w_270/format,webp',
                current_price: 2500.00,
                original_price: 2800.00

              },
              {
                color: '#269b78',
                img: 'https://resource.smartisan.com/resource/a4c73e549097c7f5cf2c5e0d87e56d13.png?x-oss-process=image/resize,w_270/format,webp',
                current_price: 2800.00,
                original_price: 2800.00
              },
            ],
          },
          {
            id: 5,
            title: 'smartisan 颈挂蓝牙耳机',
            default_desc: '铁圈一代代表作',
            hover_desc: '（春暖花开 好里相陪）精选配件 限时直降',
            tag: {
              text: '买赠',
              class: 'red'
            },
            types: [
              {
                color: '#1b1b1b',
                img: 'https://resource.smartisan.com/resource/d159521e479b26f3c97a1e4f00a5aefd.jpg?x-oss-process=image/resize,w_270/format,webp',
                current_price: 179.00,
                original_price: 199.00
              },
              {
                color: '#a9c5bb',
                img: 'https://resource.smartisan.com/resource/a5b6bf1f38fb88dceeb1e917bec288da.jpg?x-oss-process=image/resize,w_270/format,webp',
                current_price: 159.00,
                original_price: 199.00
              },
            ]
          },
          {
            id: 6,
            title: 'smartisan 颈挂蓝牙耳机',
            default_desc: '铁圈一代代表作',
            hover_desc: '（春暖花开 好里相陪）精选配件 限时直降',
            tag: {
              text: '买赠',
              class: 'red'
            },
            types: [
              {
                color: '#1b1b1b',
                img: 'https://resource.smartisan.com/resource/d159521e479b26f3c97a1e4f00a5aefd.jpg?x-oss-process=image/resize,w_270/format,webp',
                current_price: 179.00,
                original_price: 199.00
              },
              {
                color: '#a9c5bb',
                img: 'https://resource.smartisan.com/resource/a5b6bf1f38fb88dceeb1e917bec288da.jpg?x-oss-process=image/resize,w_270/format,webp',
                current_price: 159.00,
                original_price: 199.00
              },
            ]
          },
        ]
      },
      // 第二组数据
      {
        title: '坚果Pro 3 及配件',
        firstData: {
          id: 1,
          img: 'https://resource.smartisan.com/resource/93cf790c0f09d7ed2996508100b0cca5.png?x-oss-process=image/resize,w_600/format,webp'
        },
        // 注意里面的数据最多智能包含6个
        mainData: [
          {
            id: 1,
            title: '坚果 Pro 3',
            default_desc: '高通骁龙855Plus · 4800 万模范四摄Smartisan',
            hover_desc: '（春暖花开 好里相陪）坚果Pro 3 限时大促',
            tag: {
              text: '直降',
              class: 'yellow'
            },
            types: [
              {
                color: '#0e0c0d',
                img: 'https://resource.smartisan.com/resource/f195e666e089d4e3775ce67d8e9523ce.png?x-oss-process=image/resize,w_270/format,webp',
                current_price: 2300.00,
                original_price: 2800.00
              },
              {
                color: '#efefef',
                img: 'https://resource.smartisan.com/resource/9934374dda26c292555dd1ec0887e17b.png?x-oss-process=image/resize,w_270/format,webp',
                current_price: 2500.00,
                original_price: 2800.00

              },
              {
                color: '#269b78',
                img: 'https://resource.smartisan.com/resource/a4c73e549097c7f5cf2c5e0d87e56d13.png?x-oss-process=image/resize,w_270/format,webp',
                current_price: 2800.00,
                original_price: 2800.00
              },
            ],
          },
          {
            id: 2,
            title: 'smartisan 颈挂蓝牙耳机',
            default_desc: '铁圈一代代表作',
            hover_desc: '（春暖花开 好里相陪）精选配件 限时直降',
            tag: {
              text: '买赠',
              class: 'red'
            },
            types: [
              {
                color: '#1b1b1b',
                img: 'https://resource.smartisan.com/resource/d159521e479b26f3c97a1e4f00a5aefd.jpg?x-oss-process=image/resize,w_270/format,webp',
                current_price: 179.00,
                original_price: 199.00
              },
              {
                color: '#a9c5bb',
                img: 'https://resource.smartisan.com/resource/a5b6bf1f38fb88dceeb1e917bec288da.jpg?x-oss-process=image/resize,w_270/format,webp',
                current_price: 159.00,
                original_price: 199.00
              },
            ]
          },
          {
            id: 3,
            title: '惠普（HP）Smart Tank 511 彩色喷墨连供多功能打印机',
            default_desc: '',
            hover_desc: '打印机开学季直降',
            tag: {
              text: '买赠',
              class: 'red'
            },
            types: [
              {
                color: '',
                img: 'https://resource.smartisan.com/resource/6921edba9842f86b651c60e3735c5993.jpg?x-oss-process=image/resize,w_216/format,webp',
                current_price: 179.00,
                original_price: 199.00
              }
            ]
          },
          {
            id: 4,
            title: '坚果 Pro 3',
            default_desc: '高通骁龙855Plus · 4800 万模范四摄Smartisan',
            hover_desc: '（春暖花开 好里相陪）坚果Pro 3 限时大促',
            tag: {
              text: '买赠',
              class: 'red'
            },
            types: [
              {
                color: '#0e0c0d',
                img: 'https://resource.smartisan.com/resource/f195e666e089d4e3775ce67d8e9523ce.png?x-oss-process=image/resize,w_270/format,webp',
                current_price: 2300.00,
                original_price: 2800.00
              },
              {
                color: '#efefef',
                img: 'https://resource.smartisan.com/resource/9934374dda26c292555dd1ec0887e17b.png?x-oss-process=image/resize,w_270/format,webp',
                current_price: 2500.00,
                original_price: 2800.00

              },
              {
                color: '#269b78',
                img: 'https://resource.smartisan.com/resource/a4c73e549097c7f5cf2c5e0d87e56d13.png?x-oss-process=image/resize,w_270/format,webp',
                current_price: 2800.00,
                original_price: 2800.00
              },
            ],
          },
          {
            id: 5,
            title: 'smartisan 颈挂蓝牙耳机',
            default_desc: '铁圈一代代表作',
            hover_desc: '（春暖花开 好里相陪）精选配件 限时直降',
            tag: {
              text: '买赠',
              class: 'red'
            },
            types: [
              {
                color: '#1b1b1b',
                img: 'https://resource.smartisan.com/resource/d159521e479b26f3c97a1e4f00a5aefd.jpg?x-oss-process=image/resize,w_270/format,webp',
                current_price: 179.00,
                original_price: 199.00
              },
              {
                color: '#a9c5bb',
                img: 'https://resource.smartisan.com/resource/a5b6bf1f38fb88dceeb1e917bec288da.jpg?x-oss-process=image/resize,w_270/format,webp',
                current_price: 159.00,
                original_price: 199.00
              },
            ]
          },
          {
            id: 6,
            title: 'smartisan 颈挂蓝牙耳机',
            default_desc: '铁圈一代代表作',
            hover_desc: '（春暖花开 好里相陪）精选配件 限时直降',
            tag: {
              text: '买赠',
              class: 'red'
            },
            types: [
              {
                color: '#1b1b1b',
                img: 'https://resource.smartisan.com/resource/d159521e479b26f3c97a1e4f00a5aefd.jpg?x-oss-process=image/resize,w_270/format,webp',
                current_price: 179.00,
                original_price: 199.00
              },
              {
                color: '#a9c5bb',
                img: 'https://resource.smartisan.com/resource/a5b6bf1f38fb88dceeb1e917bec288da.jpg?x-oss-process=image/resize,w_270/format,webp',
                current_price: 159.00,
                original_price: 199.00
              },
            ]
          },
        ]
      },
      // 第三组数据
      {
        title: '足迹系列保护套',
        firstData: {
          id: 1,
          img: 'https://resource.smartisan.com/resource/a5e102c24a38ee7d7a38d88b18ea157e.png?x-oss-process=image/resize,w_600/format,webp'
        },
        // 注意里面的数据最多智能包含6个
        mainData: [
          {
            id: 1,
            title: '坚果 Pro 3',
            default_desc: '高通骁龙855Plus · 4800 万模范四摄Smartisan',
            hover_desc: '（春暖花开 好里相陪）坚果Pro 3 限时大促',
            tag: {
              text: '直降',
              class: 'yellow'
            },
            types: [
              {
                color: '#0e0c0d',
                img: 'https://resource.smartisan.com/resource/f195e666e089d4e3775ce67d8e9523ce.png?x-oss-process=image/resize,w_270/format,webp',
                current_price: 2300.00,
                original_price: 2800.00
              },
              {
                color: '#efefef',
                img: 'https://resource.smartisan.com/resource/9934374dda26c292555dd1ec0887e17b.png?x-oss-process=image/resize,w_270/format,webp',
                current_price: 2500.00,
                original_price: 2800.00

              },
              {
                color: '#269b78',
                img: 'https://resource.smartisan.com/resource/a4c73e549097c7f5cf2c5e0d87e56d13.png?x-oss-process=image/resize,w_270/format,webp',
                current_price: 2800.00,
                original_price: 2800.00
              },
            ],
          },
          {
            id: 2,
            title: 'smartisan 颈挂蓝牙耳机',
            default_desc: '铁圈一代代表作',
            hover_desc: '（春暖花开 好里相陪）精选配件 限时直降',
            tag: {
              text: '买赠',
              class: 'red'
            },
            types: [
              {
                color: '#1b1b1b',
                img: 'https://resource.smartisan.com/resource/d159521e479b26f3c97a1e4f00a5aefd.jpg?x-oss-process=image/resize,w_270/format,webp',
                current_price: 179.00,
                original_price: 199.00
              },
              {
                color: '#a9c5bb',
                img: 'https://resource.smartisan.com/resource/a5b6bf1f38fb88dceeb1e917bec288da.jpg?x-oss-process=image/resize,w_270/format,webp',
                current_price: 159.00,
                original_price: 199.00
              },
            ]
          },
          {
            id: 3,
            title: '惠普（HP）Smart Tank 511 彩色喷墨连供多功能打印机',
            default_desc: '',
            hover_desc: '打印机开学季直降',
            tag: {
              text: '买赠',
              class: 'red'
            },
            types: [
              {
                color: '',
                img: 'https://resource.smartisan.com/resource/6921edba9842f86b651c60e3735c5993.jpg?x-oss-process=image/resize,w_216/format,webp',
                current_price: 179.00,
                original_price: 199.00
              }
            ]
          },
          {
            id: 4,
            title: '坚果 Pro 3',
            default_desc: '高通骁龙855Plus · 4800 万模范四摄Smartisan',
            hover_desc: '（春暖花开 好里相陪）坚果Pro 3 限时大促',
            tag: {
              text: '买赠',
              class: 'red'
            },
            types: [
              {
                color: '#0e0c0d',
                img: 'https://resource.smartisan.com/resource/f195e666e089d4e3775ce67d8e9523ce.png?x-oss-process=image/resize,w_270/format,webp',
                current_price: 2300.00,
                original_price: 2800.00
              },
              {
                color: '#efefef',
                img: 'https://resource.smartisan.com/resource/9934374dda26c292555dd1ec0887e17b.png?x-oss-process=image/resize,w_270/format,webp',
                current_price: 2500.00,
                original_price: 2800.00

              },
              {
                color: '#269b78',
                img: 'https://resource.smartisan.com/resource/a4c73e549097c7f5cf2c5e0d87e56d13.png?x-oss-process=image/resize,w_270/format,webp',
                current_price: 2800.00,
                original_price: 2800.00
              },
            ],
          },
          {
            id: 5,
            title: 'smartisan 颈挂蓝牙耳机',
            default_desc: '铁圈一代代表作',
            hover_desc: '（春暖花开 好里相陪）精选配件 限时直降',
            tag: {
              text: '买赠',
              class: 'red'
            },
            types: [
              {
                color: '#1b1b1b',
                img: 'https://resource.smartisan.com/resource/d159521e479b26f3c97a1e4f00a5aefd.jpg?x-oss-process=image/resize,w_270/format,webp',
                current_price: 179.00,
                original_price: 199.00
              },
              {
                color: '#a9c5bb',
                img: 'https://resource.smartisan.com/resource/a5b6bf1f38fb88dceeb1e917bec288da.jpg?x-oss-process=image/resize,w_270/format,webp',
                current_price: 159.00,
                original_price: 199.00
              },
            ]
          },
          {
            id: 6,
            title: 'smartisan 颈挂蓝牙耳机',
            default_desc: '铁圈一代代表作',
            hover_desc: '（春暖花开 好里相陪）精选配件 限时直降',
            tag: {
              text: '买赠',
              class: 'red'
            },
            types: [
              {
                color: '#1b1b1b',
                img: 'https://resource.smartisan.com/resource/d159521e479b26f3c97a1e4f00a5aefd.jpg?x-oss-process=image/resize,w_270/format,webp',
                current_price: 179.00,
                original_price: 199.00
              },
              {
                color: '#a9c5bb',
                img: 'https://resource.smartisan.com/resource/a5b6bf1f38fb88dceeb1e917bec288da.jpg?x-oss-process=image/resize,w_270/format,webp',
                current_price: 159.00,
                original_price: 199.00
              },
            ]
          },
        ]
      },
      // 第四组数据
      {
        title: '畅呼吸系列产品',
        firstData: {
          id: 1,
          img: 'https://resource.smartisan.com/resource/05f67c9066f0cad9f3f2f5500c3442a9.png?x-oss-process=image/resize,w_600/format,webp'
        },
        // 注意里面的数据最多智能包含6个
        mainData: [
          {
            id: 1,
            title: '畅呼吸除甲醛超级活性炭滤芯',
            default_desc: '家装等场景适用的专业除甲醛超级活性炭滤芯',
            hover_desc: '家装等场景适用的专业除甲醛超级活性炭滤芯',
            tag: {
              text: '',
              class: ''
            },
            types: [
              {
                color: '#252525',
                img: 'https://resource.smartisan.com/resource/4d83d72c5ecc288e8d5ddd9d06b80f99.jpg?x-oss-process=image/resize,w_216/format,webp',
                current_price: 599.00,
                original_price: 800.00
              }
            ],
          },
          {
            id: 2,
            title: '畅呼吸桌面式加湿器',
            default_desc: '自然蒸发、无雾更健康',
            hover_desc: '',
            tag: {
              text: '',
              class: ''
            },
            types: [
              {
                color: '#ffffff',
                img: 'https://resource.smartisan.com/resource/e4085f0d2c84bfe1963b1290b9699c33.jpg?x-oss-process=image/resize,w_216/format,webp',
                current_price: 999.00,
                original_price: 1200.00
              }
            ]
          }
        ]
      }
    ]
  )
});


module.exports = router;
