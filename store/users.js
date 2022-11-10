export const state = () => ({
  users: [
    {
      id: 1,
      name: 'Peter Nobels',
      username: 'peter_nobels',
      about: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. ',
      nfts: [{
        id: 1,
        name: 'How to DAO it',
        imageId: "x123",
        fee: 10,
        ownerAddress: '0x1234567890',
        creationDate: new Date('20-06-2022'),
      }, {
        id: 2,
        name: 'How to DAO it 2',
        imageId: "x124",
        fee: 20,
        ownerAddress: '0x1234567890',
        creationDate: new Date('24-11-2022'),
      }, {
        id: 3,
        name: 'How to DAO it 3',
        imageId: "x125",
        fee: 30,
        ownerAddress: '0x1234567890',
        creationDate: new Date('12-02-2023'),
      }]
    },
    {
      id: 2,
      name: 'Matthias',
      username: 'Matthias',
      about: 'I am a web developer from the Netherlands. I love to code and I love to share my knowledge with others. ',
      nfts: [{
        id: 1,
        name: 'How to DAO it',
        imageId: "x123",
        fee: 10,
        ownerAddress: '0x1234567890',
        creationDate: new Date('20-06-2022'),
      }, {
        id: 2,
        name: 'How to DAO it 2',
        imageId: "x124",
        fee: 20,
        ownerAddress: '0x1234567890',
        creationDate: new Date('24-11-2022'),
      }, {
        id: 3,
        name: 'How to DAO it 3',
        imageId: "x125",
        fee: 30,
        ownerAddress: '0x1234567890',
        creationDate: new Date('12-02-2023'),
      }]
    },
  ],

})
