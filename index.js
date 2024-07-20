const items = [
    {
      id: 1,
      title: 'Meet me where the wild things grow',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...',
      type: 'painting',
      image:
        'https://images.unsplash.com/photo-1617994422012-baad9c327e20?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTI0&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800',
      price: 1315,
      artist: 'Leanne Graham',
      dateCreated: '2024-06-09T02:00:48.989Z',
      isPublished: false,
      isAuctioning: false,
      dateSold: '2024-06-10T02:00:48.989Z',
      priceSold: 2030,
    },
    {
      id: 2,
      title: 'I choose peace',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...',
      type: 'sculpture',
      image:
        'https://images.unsplash.com/photo-1617994422012-baad9c327e20?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTI0&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800',
      price: 530,
      artist: 'Ervin Howell',
      dateCreated: '2024-06-27T02:00:48.989Z',
      isPublished: false,
      isAuctioning: false,
      dateSold: '2024-06-29T02:00:48.989Z',
      priceSold: 350,
    },
    {
      id: 3,
      title: 'Peace Underneath',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...',
      type: 'digital',
      image:
        'https://images.unsplash.com/photo-1617994422012-baad9c327e20?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTI0&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800',
      price: 495,
      artist: 'Clementine Bauch',
      dateCreated: '2024-06-17T02:00:48.989Z',
      isPublished: true,
      isAuctioning: false,
      dateSold: '2024-06-27T02:00:48.989Z',
      priceSold: 2810,
    },
    {
      id: 4,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...',
      image:
        'https://images.unsplash.com/photo-1617994422012-baad9c327e20?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTI1&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800',
      price: 1290,
      artist: 'Patricia Lebsack',
      dateCreated: '2024-06-24T02:00:48.989Z',
      isPublished: true,
      isAuctioning: false,
      dateSold: '2024-06-26T02:00:48.989Z',
      priceSold: 4840,
      title: 'Fill in the blank',
      type: 'custom',
    },
    {
      id: 5,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...',
      image:
        'https://images.unsplash.com/photo-1618601426176-5c47db7c8113?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTM0&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800',
      price: 1480,
      artist: 'Chelsey Dietrich',
      dateCreated: '2024-06-01T02:00:48.989Z',
      isPublished: true,
      isAuctioning: false,
      dateSold: '2024-06-26T02:00:48.989Z',
      priceSold: 14730,
      title: 'Meet me where the wild things grow',
      type: 'painting',
    },
    {
      id: 6,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...',
      image:
        'https://images.unsplash.com/photo-1549887552-cb1071d3e5ca?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTI2&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800',
      price: 1305,
      artist: 'Mrs. Dennis Schulist',
      dateCreated: '2024-09-30T02:00:48.989Z',
      isPublished: false,
      isAuctioning: false,
      dateSold: '2024-06-19T02:00:48.989Z',
      priceSold: 2935,
      title: 'I choose peace',
      type: 'sculpture',
    },
    {
      id: 7,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...',
      image:
        'https://images.unsplash.com/photo-1549887552-cb1071d3e5ca?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTI2&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800',
      price: 50,
      artist: 'Kurtis Weissnat',
      dateCreated: '2024-06-02T02:00:48.989Z',
      isPublished: false,
      isAuctioning: false,
      dateSold: '2024-06-08T02:00:48.990Z',
      priceSold: 75,
      title: 'Peace Underneath',
      type: 'digital',
    },
    {
      id: 8,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...',
      image:
        'https://images.unsplash.com/photo-1618207773994-243f4bce78fd?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTI2&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800',
      price: 1095,
      artist: 'Nicholas Runolfsdottir V',
      dateCreated: '2024-06-12T02:00:48.990Z',
      isPublished: true,
      isAuctioning: false,
      dateSold: '2024-06-24T02:00:48.990Z',
      priceSold: 3465,
      title: 'Fill in the blank',
      type: 'custom',
    },
    {
      id: 9,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...',
      image:
        'https://images.unsplash.com/photo-1506806732259-39c2d0268443?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTI4&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800',
      price: 600,
      artist: 'Glenna Reichert',
      dateCreated: '2024-06-24T02:00:48.990Z',
      isPublished: false,
      isAuctioning: false,
      dateSold: '2024-06-27T02:00:48.990Z',
      priceSold: 4220,
      title: 'Meet me where the wild things grow',
      type: 'painting',
    },
    {
      id: 10,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...',
      image:
        'https://images.unsplash.com/photo-1619358977696-58722a216a2e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTI5&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800',
      price: 855,
      artist: 'Clementina DuBuque',
      dateCreated: '2024-06-04T02:00:48.990Z',
      isPublished: true,
      isAuctioning: false,
      dateSold: '2024-06-28T02:00:48.990Z',
      priceSold: 4540,
      title: 'I choose peace',
      type: 'sculpture',
    },
    {
      id: 11,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...',
      image:
        'https://images.unsplash.com/photo-1619435545137-9def36032302?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTMx&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800',
      price: 670,
      artist: 'Leanne Graham',
      dateCreated: '2024-06-13T02:00:48.990Z',
      isPublished: true,
      isAuctioning: false,
      dateSold: '2024-06-27T02:00:48.990Z',
      priceSold: 1940,
      title: 'Peace Underneath',
      type: 'digital',
    },
    {
      id: 12,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...',
      image:
        'https://images.unsplash.com/photo-1618208122329-27e7f10d6d6b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTMy&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800',
      price: 975,
      artist: 'Ervin Howell',
      dateCreated: '2024-06-21T02:00:48.990Z',
      isPublished: true,
      isAuctioning: false,
      dateSold: '2024-06-22T02:00:48.990Z',
      priceSold: 1165,
      title: 'Fill in the blank',
      type: 'custom',
    },
    {
      id: 13,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...',
      image:
        'https://images.unsplash.com/photo-1618601426176-5c47db7c8113?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTMz&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800',
      price: 1480,
      artist: 'Clementine Bauch',
      dateCreated: '2024-06-06T02:00:48.990Z',
      isPublished: true,
      isAuctioning: false,
      dateSold: '2024-06-27T02:00:48.990Z',
      priceSold: 8270,
      title: 'Meet me where the wild things grow',
      type: 'painting',
    },
    {
      id: 14,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...',
      image:
        'https://images.unsplash.com/photo-1618601426176-5c47db7c8113?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTM0&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800',
      price: 995,
      artist: 'Patricia Lebsack',
      dateCreated: '2024-06-12T02:00:48.990Z',
      isPublished: true,
      isAuctioning: false,
      dateSold: '2024-06-27T02:00:48.990Z',
      priceSold: 6630,
      title: 'I choose peace',
      type: 'sculpture',
    },
    {
      id: 15,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...',
      image:
        'https://images.unsplash.com/photo-1618601426176-5c47db7c8113?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTM0&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800',
      price: 810,
      artist: 'Chelsey Dietrich',
      dateCreated: '2024-06-02T02:00:48.990Z',
      isPublished: true,
      isAuctioning: false,
      dateSold: '2024-06-16T02:00:48.990Z',
      priceSold: 840,
      title: 'Peace Underneath',
      type: 'digital',
    },
    {
      id: 16,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...',
      image:
        'https://images.unsplash.com/photo-1618601426176-5c47db7c8113?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTM0&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800',
      price: 570,
      artist: 'Mrs. Dennis Schulist',
      dateCreated: '2024-06-19T02:00:48.990Z',
      isPublished: true,
      isAuctioning: false,
      dateSold: '2024-06-23T02:00:48.990Z',
      priceSold: 3660,
      title: 'Fill in the blank',
      type: 'custom',
    },
    {
      id: 17,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...',
      image:
        'https://images.unsplash.com/photo-1618601426176-5c47db7c8113?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTM0&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800',
      price: 105,
      artist: 'Kurtis Weissnat',
      dateCreated: '2024-06-24T02:00:48.990Z',
      isPublished: true,
      isAuctioning: false,
      dateSold: '2024-06-26T02:00:48.990Z',
      priceSold: 765,
      title: 'Meet me where the wild things grow',
      type: 'painting',
    },
    {
      id: 18,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...',
      image:
        'https://images.unsplash.com/photo-1482160549825-59d1b23cb208?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTM1&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800',
      price: 1270,
      artist: 'Nicholas Runolfsdottir V',
      dateCreated: '2024-06-24T02:00:48.990Z',
      isPublished: false,
      isAuctioning: false,
      dateSold: '2024-06-26T02:00:48.990Z',
      priceSold: 1500,
      title: 'I choose peace',
      type: 'sculpture',
    },
    {
      id: 19,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...',
      image:
        'https://images.unsplash.com/photo-1578301978069-45264734cddc?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTM2&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800',
      price: 1050,
      artist: 'Glenna Reichert',
      dateCreated: '2024-06-16T02:00:48.990Z',
      isPublished: true,
      isAuctioning: false,
      dateSold: '2024-06-23T02:00:48.990Z',
      priceSold: 3675,
      title: 'Peace Underneath',
      type: 'digital',
    },
    {
      id: 20,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...',
      image:
        'https://images.unsplash.com/photo-1578301978069-45264734cddc?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTM3&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800',
      price: 1430,
      artist: 'Clementina DuBuque',
      dateCreated: '2024-06-11T02:00:48.990Z',
      isPublished: true,
      isAuctioning: false,
      dateSold: '2024-06-12T02:00:48.990Z',
      priceSold: 1305,
      title: 'Fill in the blank',
      type: 'custom',
    },
    {
      id: 21,
      title: 'Meet me where the wild things grow',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...',
      type: 'painting',
      image:
        'https://images.unsplash.com/photo-1617994422012-baad9c327e20?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTI0&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800',
      price: 525,
      artist: 'Leanne Graham',
      dateCreated: '2024-06-15T02:00:48.990Z',
      isPublished: false,
      isAuctioning: false,
      dateSold: null,
      priceSold: null,
    },
    {
      id: 22,
      title: 'I choose peace',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...',
      type: 'sculpture',
      image:
        'https://images.unsplash.com/photo-1617994422012-baad9c327e20?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTI0&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800',
      price: 130,
      artist: 'Ervin Howell',
      dateCreated: '2024-06-22T02:00:48.990Z',
      isPublished: true,
      isAuctioning: false,
      dateSold: null,
      priceSold: null,
    },
    {
      id: 23,
      title: 'Peace Underneath',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...',
      type: 'digital',
      image:
        'https://images.unsplash.com/photo-1617994422012-baad9c327e20?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTI0&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800',
      price: 985,
      artist: 'Clementine Bauch',
      dateCreated: '2024-06-08T02:00:48.990Z',
      isPublished: true,
      isAuctioning: false,
      dateSold: null,
      priceSold: null,
    },
    {
      id: 24,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...',
      image:
        'https://images.unsplash.com/photo-1617994422012-baad9c327e20?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTI1&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800',
      price: 740,
      artist: 'Patricia Lebsack',
      dateCreated: '2024-06-10T02:00:48.990Z',
      isPublished: true,
      isAuctioning: false,
      dateSold: null,
      priceSold: null,
      title: 'Fill in the blank',
      type: 'custom',
    },
    {
      id: 25,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...',
      image:
        'https://images.unsplash.com/photo-1549887552-cb1071d3e5ca?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTI1&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800',
      price: 610,
      artist: 'Chelsey Dietrich',
      dateCreated: '2024-06-22T02:00:48.990Z',
      isPublished: true,
      isAuctioning: false,
      dateSold: null,
      priceSold: null,
      title: 'Meet me where the wild things grow',
      type: 'painting',
    },
    {
      id: 26,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...',
      image:
        'https://images.unsplash.com/photo-1549887552-cb1071d3e5ca?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTI2&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800',
      price: 970,
      artist: 'Mrs. Dennis Schulist',
      dateCreated: '2024-06-19T02:00:48.990Z',
      isPublished: false,
      isAuctioning: false,
      dateSold: null,
      priceSold: null,
      title: 'I choose peace',
      type: 'sculpture',
    },
    {
      id: 27,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...',
      image:
        'https://images.unsplash.com/photo-1549887552-cb1071d3e5ca?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTI2&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800',
      price: 695,
      artist: 'Kurtis Weissnat',
      dateCreated: '2024-06-01T02:00:48.990Z',
      isPublished: false,
      isAuctioning: false,
      dateSold: null,
      priceSold: null,
      title: 'Peace Underneath',
      type: 'digital',
    },
    {
      id: 28,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...',
      image:
        'https://images.unsplash.com/photo-1618207773994-243f4bce78fd?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTI2&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800',
      price: 65,
      artist: 'Nicholas Runolfsdottir V',
      dateCreated: '2024-06-03T02:00:48.990Z',
      isPublished: true,
      isAuctioning: false,
      dateSold: null,
      priceSold: null,
      title: 'Fill in the blank',
      type: 'custom',
    },
    {
      id: 29,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...',
      image:
        'https://images.unsplash.com/photo-1506806732259-39c2d0268443?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTI4&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800',
      price: 905,
      artist: 'Glenna Reichert',
      dateCreated: '2024-09-29T02:00:48.990Z',
      isPublished: false,
      isAuctioning: false,
      dateSold: null,
      priceSold: null,
      title: 'Meet me where the wild things grow',
      type: 'painting',
    },
    {
      id: 30,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...',
      image:
        'https://images.unsplash.com/photo-1619358977696-58722a216a2e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTI5&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800',
      price: 1025,
      artist: 'Clementina DuBuque',
      dateCreated: '2024-06-22T02:00:48.990Z',
      isPublished: true,
      isAuctioning: false,
      dateSold: '2024-06-28T02:00:48.990Z',
      priceSold: 1670,
      title: 'I choose peace',
      type: 'sculpture',
    },
    {
      id: 31,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...',
      image:
        'https://images.unsplash.com/photo-1619435545137-9def36032302?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTMx&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800',
      price: 380,
      artist: 'Leanne Graham',
      dateCreated: '2024-06-13T02:00:48.990Z',
      isPublished: false,
      isAuctioning: false,
      dateSold: '2024-06-17T02:00:48.990Z',
      priceSold: 2420,
      title: 'Peace Underneath',
      type: 'digital',
    },
    {
      id: 32,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...',
      image:
        'https://images.unsplash.com/photo-1618208122329-27e7f10d6d6b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTMy&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800',
      price: 1375,
      artist: 'Ervin Howell',
      dateCreated: '2024-06-22T02:00:48.990Z',
      isPublished: true,
      isAuctioning: false,
      dateSold: '2024-06-26T02:00:48.990Z',
      priceSold: 5010,
      title: 'Fill in the blank',
      type: 'custom',
    },
    {
      id: 33,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...',
      image:
        'https://images.unsplash.com/photo-1618601426176-5c47db7c8113?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTMz&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800',
      price: 1175,
      artist: 'Clementine Bauch',
      dateCreated: '2024-06-19T02:00:48.990Z',
      isPublished: true,
      isAuctioning: false,
      dateSold: '2024-06-22T02:00:48.990Z',
      priceSold: 1630,
      title: 'Meet me where the wild things grow',
      type: 'painting',
    },
    {
      id: 34,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...',
      image:
        'https://images.unsplash.com/photo-1618601426176-5c47db7c8113?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTM0&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800',
      price: 1370,
      artist: 'Patricia Lebsack',
      dateCreated: '2024-06-22T02:00:48.990Z',
      isPublished: false,
      isAuctioning: false,
      dateSold: '2024-06-26T02:00:48.990Z',
      priceSold: 3655,
      title: 'I choose peace',
      type: 'sculpture',
    },
    {
      id: 35,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...',
      image:
        'https://images.unsplash.com/photo-1618601426176-5c47db7c8113?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTM0&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800',
      price: 395,
      artist: 'Chelsey Dietrich',
      dateCreated: '2024-06-03T02:00:48.990Z',
      isPublished: true,
      isAuctioning: false,
      dateSold: '2024-06-17T02:00:48.990Z',
      priceSold: 2190,
      title: 'Peace Underneath',
      type: 'digital',
    },
    {
      id: 36,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...',
      image:
        'https://images.unsplash.com/photo-1618601426176-5c47db7c8113?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTM0&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800',
      price: 1345,
      artist: 'Mrs. Dennis Schulist',
      dateCreated: '2024-06-01T02:00:48.990Z',
      isPublished: true,
      isAuctioning: false,
      dateSold: '2024-06-12T02:00:48.990Z',
      priceSold: 10595,
      title: 'Fill in the blank',
      type: 'custom',
    },
    {
      id: 37,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...',
      image:
        'https://images.unsplash.com/photo-1618601426176-5c47db7c8113?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTM0&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800',
      price: 955,
      artist: 'Kurtis Weissnat',
      dateCreated: '2024-06-28T02:00:48.990Z',
      isPublished: true,
      isAuctioning: false,
      dateSold: '2024-06-29T02:00:48.990Z',
      priceSold: 1210,
      title: 'Meet me where the wild things grow',
      type: 'painting',
    },
    {
      id: 38,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...',
      image:
        'https://images.unsplash.com/photo-1482160549825-59d1b23cb208?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTM1&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800',
      price: 930,
      artist: 'Nicholas Runolfsdottir V',
      dateCreated: '2024-06-10T02:00:48.990Z',
      isPublished: true,
      isAuctioning: false,
      dateSold: '2024-06-29T02:00:48.990Z',
      priceSold: 3220,
      title: 'I choose peace',
      type: 'sculpture',
    },
    {
      id: 39,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...',
      image:
        'https://images.unsplash.com/photo-1578301978069-45264734cddc?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTM2&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800',
      price: 755,
      artist: 'Glenna Reichert',
      dateCreated: '2024-09-30T02:00:48.990Z',
      isPublished: true,
      isAuctioning: false,
      dateSold: '2024-06-24T02:00:48.990Z',
      priceSold: 1105,
      title: 'Peace Underneath',
      type: 'digital',
    },
    {
      id: 40,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...',
      image:
        'https://images.unsplash.com/photo-1578301978069-45264734cddc?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTM3&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800',
      price: 745,
      artist: 'Clementina DuBuque',
      dateCreated: '2024-06-18T02:00:48.990Z',
      isPublished: true,
      isAuctioning: false,
      dateSold: null,
      priceSold: null,
      title: 'Fill in the blank',
      type: 'custom',
    },
    {
      id: 41,
      title: 'Meet me where the wild things grow',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...',
      type: 'painting',
      image:
        'https://images.unsplash.com/photo-1617994422012-baad9c327e20?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTI0&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800',
      price: 1095,
      artist: 'Leanne Graham',
      dateCreated: '2024-06-03T02:00:48.990Z',
      isPublished: true,
      isAuctioning: false,
      dateSold: null,
      priceSold: null,
    },
    {
      id: 42,
      title: 'I choose peace',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...',
      type: 'sculpture',
      image:
        'https://images.unsplash.com/photo-1617994422012-baad9c327e20?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTI0&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800',
      price: 635,
      artist: 'Ervin Howell',
      dateCreated: '2024-06-11T02:00:48.990Z',
      isPublished: true,
      isAuctioning: false,
      dateSold: null,
      priceSold: null,
    },
    {
      id: 43,
      title: 'Peace Underneath',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...',
      type: 'digital',
      image:
        'https://images.unsplash.com/photo-1617994422012-baad9c327e20?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTI0&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800',
      price: 165,
      artist: 'Clementine Bauch',
      dateCreated: '2024-06-12T02:00:48.990Z',
      isPublished: true,
      isAuctioning: false,
      dateSold: null,
      priceSold: null,
    },
    {
      id: 44,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...',
      image:
        'https://images.unsplash.com/photo-1617994422012-baad9c327e20?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTI1&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800',
      price: 115,
      artist: 'Patricia Lebsack',
      dateCreated: '2024-06-28T02:00:48.990Z',
      isPublished: true,
      isAuctioning: false,
      dateSold: null,
      priceSold: null,
      title: 'Fill in the blank',
      type: 'custom',
    },
    {
      id: 45,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...',
      image:
        'https://images.unsplash.com/photo-1549887552-cb1071d3e5ca?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTI1&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800',
      price: 205,
      artist: 'Chelsey Dietrich',
      dateCreated: '2024-06-12T02:00:48.990Z',
      isPublished: false,
      isAuctioning: false,
      dateSold: null,
      priceSold: null,
      title: 'Meet me where the wild things grow',
      type: 'painting',
    },
    {
      id: 46,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...',
      image:
        'https://images.unsplash.com/photo-1549887552-cb1071d3e5ca?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTI2&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800',
      price: 1390,
      artist: 'Mrs. Dennis Schulist',
      dateCreated: '2024-06-07T02:00:48.990Z',
      isPublished: true,
      isAuctioning: false,
      dateSold: null,
      priceSold: null,
      title: 'I choose peace',
      type: 'sculpture',
    },
    {
      id: 47,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...',
      image:
        'https://images.unsplash.com/photo-1549887552-cb1071d3e5ca?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTI2&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800',
      price: 600,
      artist: 'Kurtis Weissnat',
      dateCreated: '2024-06-16T02:00:48.990Z',
      isPublished: true,
      isAuctioning: false,
      dateSold: null,
      priceSold: null,
      title: 'Peace Underneath',
      type: 'digital',
    },
    {
      id: 48,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...',
      image:
        'https://images.unsplash.com/photo-1618207773994-243f4bce78fd?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTI2&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800',
      price: 1330,
      artist: 'Nicholas Runolfsdottir V',
      dateCreated: '2024-06-19T02:00:48.990Z',
      isPublished: true,
      isAuctioning: false,
      dateSold: null,
      priceSold: null,
      title: 'Fill in the blank',
      type: 'custom',
    },
    {
      id: 49,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...',
      image:
        'https://images.unsplash.com/photo-1506806732259-39c2d0268443?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTI4&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800',
      price: 1430,
      artist: 'Glenna Reichert',
      dateCreated: '2024-06-27T02:00:48.990Z',
      isPublished: false,
      isAuctioning: false,
      dateSold: '2024-06-29T02:00:48.990Z',
      priceSold: 4115,
      title: 'Meet me where the wild things grow',
      type: 'painting',
    },
    {
      id: 50,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...',
      image:
        'https://images.unsplash.com/photo-1619358977696-58722a216a2e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTI5&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800',
      price: 440,
      artist: 'Clementina DuBuque',
      dateCreated: '2024-06-19T02:00:48.990Z',
      isPublished: true,
      isAuctioning: false,
      dateSold: '2024-06-27T02:00:48.990Z',
      priceSold: 3535,
      title: 'I choose peace',
      type: 'sculpture',
    },
    {
      id: 51,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...',
      image:
        'https://images.unsplash.com/photo-1619435545137-9def36032302?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTMx&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800',
      price: 455,
      artist: 'Leanne Graham',
      dateCreated: '2024-06-17T02:00:48.990Z',
      isPublished: true,
      isAuctioning: false,
      dateSold: '2024-06-22T02:00:48.990Z',
      priceSold: 840,
      title: 'Peace Underneath',
      type: 'digital',
    },
    {
      id: 52,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...',
      image:
        'https://images.unsplash.com/photo-1618208122329-27e7f10d6d6b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTMy&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800',
      price: 90,
      artist: 'Ervin Howell',
      dateCreated: '2024-06-14T02:00:48.990Z',
      isPublished: true,
      isAuctioning: false,
      dateSold: '2024-06-27T02:00:48.990Z',
      priceSold: 115,
      title: 'Fill in the blank',
      type: 'custom',
    },
    {
      id: 53,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...',
      image:
        'https://images.unsplash.com/photo-1618601426176-5c47db7c8113?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTMz&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800',
      price: 545,
      artist: 'Clementine Bauch',
      dateCreated: '2024-06-13T02:00:48.990Z',
      isPublished: true,
      isAuctioning: false,
      dateSold: '2024-06-29T02:00:48.990Z',
      priceSold: 1620,
      title: 'Meet me where the wild things grow',
      type: 'painting',
    },
    {
      id: 54,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...',
      image:
        'https://images.unsplash.com/photo-1618601426176-5c47db7c8113?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTM0&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800',
      price: 510,
      artist: 'Patricia Lebsack',
      dateCreated: '2024-06-02T02:00:48.990Z',
      isPublished: true,
      isAuctioning: false,
      dateSold: '2024-06-21T02:00:48.990Z',
      priceSold: 5490,
      title: 'I choose peace',
      type: 'sculpture',
    },
    {
      id: 55,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...',
      image:
        'https://images.unsplash.com/photo-1618601426176-5c47db7c8113?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTM0&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800',
      price: 395,
      artist: 'Chelsey Dietrich',
      dateCreated: '2024-06-12T02:00:48.990Z',
      isPublished: true,
      isAuctioning: false,
      dateSold: '2024-06-23T02:00:48.990Z',
      priceSold: 1180,
      title: 'Peace Underneath',
      type: 'digital',
    },
    {
      id: 56,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...',
      image:
        'https://images.unsplash.com/photo-1618601426176-5c47db7c8113?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTM0&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800',
      price: 670,
      artist: 'Mrs. Dennis Schulist',
      dateCreated: '2024-06-23T02:00:48.990Z',
      isPublished: true,
      isAuctioning: false,
      dateSold: '2024-06-28T02:00:48.990Z',
      priceSold: 1935,
      title: 'Fill in the blank',
      type: 'custom',
    },
    {
      id: 57,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...',
      image:
        'https://images.unsplash.com/photo-1618601426176-5c47db7c8113?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTM0&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800',
      price: 660,
      artist: 'Kurtis Weissnat',
      dateCreated: '2024-06-04T02:00:48.990Z',
      isPublished: false,
      isAuctioning: false,
      dateSold: '2024-06-07T02:00:48.990Z',
      priceSold: 525,
      title: 'Meet me where the wild things grow',
      type: 'painting',
    },
    {
      id: 58,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...',
      image:
        'https://images.unsplash.com/photo-1482160549825-59d1b23cb208?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTM1&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800',
      price: 1385,
      artist: 'Nicholas Runolfsdottir V',
      dateCreated: '2024-06-15T02:00:48.990Z',
      isPublished: true,
      isAuctioning: false,
      dateSold: '2024-06-22T02:00:48.990Z',
      priceSold: 1565,
      title: 'I choose peace',
      type: 'sculpture',
    },
    {
      id: 59,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...',
      image:
        'https://images.unsplash.com/photo-1578301978069-45264734cddc?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTM2&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800',
      price: 1395,
      artist: 'Glenna Reichert',
      dateCreated: '2024-06-15T02:00:48.990Z',
      isPublished: true,
      isAuctioning: false,
      dateSold: '2024-06-19T02:00:48.990Z',
      priceSold: 10640,
      title: 'Peace Underneath',
      type: 'digital',
    },
    {
      id: 60,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...',
      image:
        'https://images.unsplash.com/photo-1578301978069-45264734cddc?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTM3&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800',
      price: 475,
      artist: 'Clementina DuBuque',
      dateCreated: '2024-06-07T02:00:48.990Z',
      isPublished: false,
      isAuctioning: false,
      dateSold: '2024-06-25T02:00:48.990Z',
      priceSold: 395,
      title: 'Fill in the blank',
      type: 'custom',
    },
  ];
  
  localStorage.setItem('items', JSON.stringify(items));
  
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => {
      showArtistsDropdown(data);
    });
  
  function showArtistsDropdown(artists) {
    const selectArtist = document.getElementById('artist-select');
  
    artists.forEach(artist => {
      const option = document.createElement("option");
      option.value = artist.name;
      option.textContent = artist.name;
      selectArtist.appendChild(option);
    });
  
    selectArtist.addEventListener("change", () => {
      const selectedArtist = selectArtist.value;
      if (selectedArtist) {
        localStorage.setItem('selectedArtist', selectedArtist);
        window.location.href = 'artist_home.html';
      } else {
        alert('Please select an artist name to proceed.');
      }
    });
  }