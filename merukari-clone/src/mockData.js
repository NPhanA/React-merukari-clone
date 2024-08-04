const mockItem = [
  {
    id: 1,
    name: "ナイキ",
    link: "https://jp.mercari.com/images/popular/brands/img_nike.png",
  },
  {
    id: 2,
    name: "アップル",
    link: "https://jp.mercari.com/images/popular/brands/img_apple.png",
  },
  {
    id: 3,
    name: "ニンテンドースイッチ",
    link: "https://jp.mercari.com/images/popular/brands/img_switch.png",
  },
  {
    id: 4,
    name: "ソニー",
    link: "https://jp.mercari.com/images/popular/brands/img_sony.png",
  },
  {
    id: 5,
    name: "ポケモン",
    link: "https://jp.mercari.com/images/popular/brands/img_pokemon.png",
  },
  {
    id: 6,
    name: "ユニクロ",
    link: "https://jp.mercari.com/images/popular/brands/img_uniqlo.png",
  }
];

export const fetchMockData = () => {
    return new Promise((resolve) => {
        resolve(mockItem);
    });
}

const mockRecomended = [
  {
    id:1,
    url:"https://static.mercdn.net/c!/w=240/thumb/photos/m25363173260_1.jpg?1712553243",
    price:"¥18,600"
  },
  {
    id:2,
    url:"https://static.mercdn.net/c!/w=240/thumb/photos/m71462068964_1.jpg?1716191018",
    price:"¥600"
  },
  {
    id:3,
    url:"https://static.mercdn.net/c!/w=240/thumb/photos/m79385281614_1.jpg?1708161611",
    price:"¥8,600"
  },
  {
    id:4,
    url:"https://static.mercdn.net/c!/w=240/thumb/photos/m95424135876_1.jpg?1715506218",
    price:"¥1,800"
  },
  {
    id:5,
    url:"https://static.mercdn.net/c!/w=240/thumb/photos/m43844273911_1.jpg?1716359170",
    price:"¥20,000"
  },
  {
    id:6,
    url:"https://static.mercdn.net/c!/w=240/thumb/photos/m10538223285_1.jpg?1716644519",
    price:"¥2,500"
  },
  {
    id:7,
    url:"https://static.mercdn.net/c!/w=240/thumb/photos/m45226981519_1.jpg?1711982642",
    price:"¥900"
  },
  {
    id:8,
    url:"https://static.mercdn.net/c!/w=240/thumb/photos/m13452166746_1.jpg?1717124745",
    price:"¥1,100"
  },
  {
    id:9,
    url:"https://static.mercdn.net/c!/w=240/thumb/photos/m84888842671_1.jpg?1715057127",
    price:"¥8,500"
  }, {
    id:10,
    url:"https://static.mercdn.net/c!/w=240/thumb/photos/m45226981519_1.jpg?1711982642",
    price:"¥900"
  },
  {
    id:11,
    url:"https://static.mercdn.net/c!/w=240/thumb/photos/m13452166746_1.jpg?1717124745",
    price:"¥1,100"
  },
  {
    id:12,
    url:"https://static.mercdn.net/c!/w=240/thumb/photos/m84888842671_1.jpg?1715057127",
    price:"¥8,500"
  },
];
export const fetchMockRecomended = () => {
  return new Promise((resolve) => {
      resolve(mockRecomended);
  });
}