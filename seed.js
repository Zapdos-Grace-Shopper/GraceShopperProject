const {db} = require('./server/db')
const {Shoe, User, Brand, Orders} = './server/db/models'

const seed = async () => {
  try {
    await db.sync({force: true})
    const gucci = await Brand.create({
      name: 'Gucci',
      imageUrl:
        'https://neimanmarcus.scene7.com/is/image/NeimanMarcus/NMX56J8_01_m?&wid=790&height=981',
      description:
        'Gucci is an Italian fashion label founded in 1921 by Guccio Gucci, making it one of the oldest Italian fashion brands in operation today. Like many historic fashion houses, the brand started out as a luggage manufacturer, producing luxury travel goods for Italy’s wealthy upper-classes, as well as equestrian equipment'
    })
    const chanel = await Brand.create({
      name: 'Chanel',
      imageUrl:
        'https://realstyle.therealreal.com/wp-content/uploads/2017/04/RealStyle_582x360-96.jpg',
      description:
        'Chanel is French fashion house that focuses on womens high fashion and ready-to-wear clothes, luxury goods and accessories. The company is owned by Alain Wertheimer and Gérard Wertheimer, grandsons of Pierre Wertheimer, who was an early business partner of the couturière Coco Chanel.'
    })
    const manoloBlahnik = await Brand.create({
      name: 'Manolo Blahnik',
      imageUrl:
        'https://neimanmarcus.scene7.com/is/image/NeimanMarcus/NMX445R_40_m?&wid=456&height=570',
      description:
        'Manolo Blahnik International Limited was established in 1970 when the first boutique was acquired in Chelsea, London. Now a globally recognised brand, its headquarters remain in London with offices and partners around the world.'
    })
    const christianLouboutin = await Brand.create({
      name: 'Christian Louboutin',
      imageUrl:
        'https://images.us.christianlouboutin.com/media/catalog/product/cache/1/thumbnail/1200x/602f0fa2c1f0d1ba5e241f914e856ff9/3/1/3/0/christianlouboutin-sokate-3130694_BK01_3_1200x1200_1577470566.jpg',
      description:
        'Christian Louboutin is one of the worlds most well-known shoe designers; the red soles of his ... Louboutin now sells over one million pairs of shoes a year.'
    })
    const jimmyChoo = await Brand.create({
      name: 'Jimmy Choo',
      imageUrl:
        'https://www.modaoperandi.com/assets/images/products/717253/325316/large_jimmy-choo-black-aveline-bow-embellished-sandals.jpg?_t=1595701889',
      description:
        'Datuk Jimmy Choo Yeang Keat is a Malaysian fashion designer of Chinese descent based in the United Kingdom. He co-founded Jimmy Choo Ltd, which became known for its handmade womens shoes.'
    })

    const shoe1 = await Shoes.create({
      name: 'Espadrille sandal with Double G',
      price: '$720',
      imageUrl:
        'https://media.gucci.com/style/DarkGray_Center_0_0_1200x1200/1584558003/624314_A3N00_6433_001_100_0000_Light-Womens-espadrille-sandal-with-Double-G.jpg',
      size: '7',
      description:
        'Carefully constructed in Spain, these espadrille sandals are crafted from hibiscus red leather and defined by House codes such as the Double G and a striped wedge heel in colors that recall the Sylvie Web. With an inherently seaside feel, the espadrille evolves from its 13th century origins into a contemporary style.',
      quantity: '3'
    })
    const shoe2 = await Shoes.create({
      name: 'Leather platform espadrille',
      price: '750',
      imageUrl:
        'https://media.gucci.com/style/DarkGray_Center_0_0_1200x1200/1546878603/573023_BTMO0_9014_001_100_0000_Light-Leather-platform-espadrille.jpg',
      size: '8',
      description:
        "Crafted in white leather set against a cord platform, these espadrilles reflect the marine feel sprinkled throughout the Spring Summer 2019 collection. Cut in antique-toned gold, the archival Double G from the '70s enhances the front.",
      quantity: '2'
    })
    const shoe3 = await Shoes.create({
      name: 'Mid-heel sandal with Double G',
      price: '$770',
      imageUrl:
        'https://media.gucci.com/style/DarkGray_Center_0_0_1200x1200/1585826104/628012_A3N00_3926_001_100_0000_Light-Womens-mid-heel-sandal-with-Double-G.jpg',
      size: '8.5',
      description:
        'The now recognizable silver-toned Double G detail enhances a pair of mid-heel sandals in a pastel shade of green leather. The distinctive emblem from the GG Marmont line continues to bring a defining element to signature styles.',
      quantity: '4'
    })
    const shoe4 = await Shoes.create({
      name: 'Mid-heel slide',
      price: '$700',
      imageUrl:
        'https://media.gucci.com/style/DarkGray_Center_0_0_1200x1200/1583866803/458051_DKT00_5702_001_082_0000_Light-Womens-mid-heel-slide.jpg',
      size: '10',
      description:
        'The Double G mid-heel slide sandal is presented for the Pre-Fall 2020 collection in a shimmering metallic leather. The shoe is completed with a defined block heel and a playful fringe trim.',
      quantity: '3'
    })
    const shoe5 = await Shoes.create({
      name: 'Ace sneaker with Interlocking G',
      price: '$630',
      imageUrl:
        'https://media.gucci.com/style/DarkGray_Center_0_0_1200x1200/1586195103/598527_AYO70_9076_001_098_0000_Light-Womens-Ace-sneaker-with-Interlocking-G.jpg',
      size: '9',
      description:
        'Crafted from soft, white leather, the emblematic Ace sneaker is enhanced with a minimalist logo approach. With an intricate design, the Interlocking G is displayed on the side of the shoe, created using a perforated technique. Soft pink leather details at the back of the shoe add a subtle hint of color to the all-white style.',
      quantity: '9'
    })
    // const shoe6 = await Shoes.create({
    //     name:
    //     price:
    //     imageUrl:
    //     size:
    //     description:
    //     quantity:
    // })
    // const shoe7 = await Shoes.create({
    //     name:
    //     price:
    //     imageUrl:
    //     size:
    //     description:
    //     quantity:
    // })
    // const shoe8 = await Shoes.create({
    //     name:
    //     price:
    //     imageUrl:
    //     size:
    //     description:
    //     quantity:
    // })
    // const shoe9 = await Shoes.create({
    //     name:
    //     price:
    //     imageUrl:
    //     size:
    //     description:
    //     quantity:
    // })
    // const shoe10 = await Shoes.create({
    //     name:
    //     price:
    //     imageUrl:
    //     size:
    //     description:
    //     quantity:
    // })
    // const shoe11 = await Shoes.create({
    //     name:
    //     price:
    //     imageUrl:
    //     size:
    //     description:
    //     quantity:
    // })
    // const shoe12 = await Shoes.create({
    //     name:
    //     price:
    //     imageUrl:
    //     size:
    //     description:
    //     quantity:
    // })
    // const shoe13 = await Shoes.create({
    //     name:
    //     price:
    //     imageUrl:
    //     size:
    //     description:
    //     quantity:
    // })
    // const shoe14 = await Shoes.create({
    //     name:
    //     price:
    //     imageUrl:
    //     size:
    //     description:
    //     quantity:
    // })
    // const shoe15 = await Shoes.create({
    //     name:
    //     price:
    //     imageUrl:
    //     size:
    //     description:
    //     quantity:
    // })
    // const shoe16 = await Shoes.create({
    //     name:
    //     price:
    //     imageUrl:
    //     size:
    //     description:
    //     quantity:
    // })
    // const shoe17 = await Shoes.create({
    //     name:
    //     price:
    //     imageUrl:
    //     size:
    //     description:
    //     quantity:
    // })
    // const shoe18 = await Shoes.create({
    //     name:
    //     price:
    //     imageUrl:
    //     size:
    //     description:
    //     quantity:
    // })
    // const shoe19 = await Shoes.create({
    //     name:
    //     price:
    //     imageUrl:
    //     size:
    //     description:
    //     quantity:
    // })
    // const shoe20 = await Shoes.create({
    //     name:
    //     price:
    //     imageUrl:
    //     size:
    //     description:
    //     quantity:
    // })
    // const shoe21 = await Shoes.create({
    //     name:
    //     price:
    //     imageUrl:
    //     size:
    //     description:
    //     quantity:
    // })
    // const shoe22 = await Shoes.create({
    //     name:
    //     price:
    //     imageUrl:
    //     size:
    //     description:
    //     quantity:
    // })
    // const shoe23 = await Shoes.create({
    //     name:
    //     price:
    //     imageUrl:
    //     size:
    //     description:
    //     quantity:
    // })
    // const shoe24 = await Shoes.create({
    //     name:
    //     price:
    //     imageUrl:
    //     size:
    //     description:
    //     quantity:
    // })
    // const shoe25 = await Shoes.create({
    //     name:
    //     price:
    //     imageUrl:
    //     size:
    //     description:
    //     quantity:
    // })
    // const shoe26 = await Shoes.create({
    //     name:
    //     price:
    //     imageUrl:
    //     size:
    //     description:
    //     quantity:
    // })
    // const shoe27 = await Shoes.create({
    //     name:
    //     price:
    //     imageUrl:
    //     size:
    //     description:
    //     quantity:
    // })
    // const shoe28 = await Shoes.create({
    //     name:
    //     price:
    //     imageUrl:
    //     size:
    //     description:
    //     quantity:
    // })
    // const shoe29 = await Shoes.create({
    //     name:
    //     price:
    //     imageUrl:
    //     size:
    //     description:
    //     quantity:
    // })
    // const shoe30 = await Shoes.create({
    //     name:
    //     price:
    //     imageUrl:
    //     size:
    //     description:
    //     quantity:
    // })
    // const shoe31 = await Shoes.create({
    //     name:
    //     price:
    //     imageUrl:
    //     size:
    //     description:
    //     quantity:
    // })

    const user1 = await User.create({
      firstname: 'Danny',
      lastname: 'Devito',
      email: 'dannydevito_iguess@phillyy.com',
      password: '1234',
      access: 'user',
      shoeSize: 8,
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Danny_DeVito_cropped_and_edited_for_brightness.jpg/440px-Danny_DeVito_cropped_and_edited_for_brightness.jpg'
    })
    const user2 = await User.create({
      firstname: 'Jerry',
      lastname: 'Seinfeld',
      email: 'jerrrrrry@seinfeldd.com',
      password: '1234',
      access: 'user',
      shoeSize: 7,
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Jerry_Seinfeld_2016_-_2.jpg/440px-Jerry_Seinfeld_2016_-_2.jpg'
    })
    const user3 = await User.create({
      firstname: 'James',
      lastname: 'Gandolfini',
      email: 'realtonysopran0@restin.peace',
      password: '1234',
      access: 'user',
      shoeSize: 10,
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/en/c/c2/Tony_Soprano.jpg'
    })
    const user4 = await User.create({
      firstname: 'Megan',
      lastname: 'Pete',
      email: 'hotgirl@summer.com',
      password: '1234',
      access: 'user',
      shoeSize: 4,
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Megan_Thee_Stallion_2019_2.jpg/440px-Megan_Thee_Stallion_2019_2.jpg'
    })
    const user5 = await User.create({
      firstname: 'Elizabeth',
      lastname: 'Grant',
      email: 'fitiloveu@depressedgirls.org',
      password: '1234',
      access: 'user',
      shoeSize: 11,
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Lana_Del_Rey_%40_Grammy_Museum_10_13_2019_%2849311023203%29.jpg/440px-Lana_Del_Rey_%40_Grammy_Museum_10_13_2019_%2849311023203%29.jpg'
    })
    const user6 = await User.create({
      firstname: 'Leanne',
      lastname: 'Salad',
      email: 'imrunningoutof@ideas.com',
      password: '1234',
      access: 'admin',
      shoeSize: 5,
      imageUrl: 'https://i.imgur.com/YKSYtRzb.jpg'
    })
    const user7 = await User.create({
      firstname: 'Sally',
      lastname: 'Influencer',
      email: 'followmeon@instagram.com',
      password: '1234',
      access: 'user',
      shoeSize: 9,
      imageUrl: 'https://i.imgur.com/lqs0Y7cb.jpg'
    })
    const user8 = await User.create({
      firstname: 'Tim',
      lastname: 'Zoomer',
      email: 'wasbornin@2000.bro',
      password: '1234',
      access: 'user',
      shoeSize: 8,
      imageUrl: 'https://i.imgur.com/K8EElgzb.png'
    })
    const user9 = await User.create({
      firstname: 'Bernie',
      lastname: 'Sanders',
      email: 'medicare@forall.now',
      password: '1234',
      access: 'admin',
      shoeSize: 10,
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Bernie_Sanders_in_March_2020.jpg/440px-Bernie_Sanders_in_March_2020.jpg'
    })
    const user10 = await User.create({
      firstname: 'Bernard',
      lastname: 'Egorl',
      email: 'cats@cat.com',
      password: '1234',
      access: 'admin',
      shoeSize: 5,
      imageUrl: 'https://i.imgur.com/TuH8FICb.jpg'
    })
    const user11 = await User.create({
      firstname: 'Bernie',
      lastname: 'Mac',
      email: 'therealbernie@mac.mac',
      password: '1234',
      access: 'user',
      shoeSize: 11,
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/BernieMacSoulMenMarch08.jpg/440px-BernieMacSoulMenMarch08.jpg'
    })
  } catch (error) {
    console.log(error)
  }
}

module.exports = seed

if (require.main === module) {
  seed()
    .then(() => {
      console.log('Seeding success!')
      db.close()
    })
    .catch(err => {
      console.error('Something went wrong!')
      console.error(err)
      db.close()
    })
}
