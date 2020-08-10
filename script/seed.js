const db = require('../server/db')
const {Shoe, Brand, User, Order, Purchased} = require('../server/db/models')

const seed = async () => {
  try {
    await db.sync({force: true})

    const gucci = await Brand.create({
      name: 'Gucci',
      imageURL:
        'https://neimanmarcus.scene7.com/is/image/NeimanMarcus/NMX56J8_01_m?&wid=790&height=981',
      description:
        'Gucci is an Italian fashion label founded in 1921 by Guccio Gucci, making it one of the oldest Italian fashion brands in operation today. Like many historic fashion houses, the brand started out as a luggage manufacturer, producing luxury travel goods for Italy’s wealthy upper-classes, as well as equestrian equipment'
    })
    const chanel = await Brand.create({
      name: 'Chanel',
      imageURL:
        'https://www.chanel.com/images//t_fashion//q_auto,f_jpg,fl_lossy,dpr_2/w_620/pumps-beige-black-lambskin-grosgrain-lambskin-grosgrain-packshot-alternative-g35536y50387c0204-8824086495262.jpg',
      description:
        'Chanel is French fashion house that focuses on womens high fashion and ready-to-wear clothes, luxury goods and accessories. The company is owned by Alain Wertheimer and Gérard Wertheimer, grandsons of Pierre Wertheimer, who was an early business partner of the couturière Coco Chanel.'
    })
    const manoloBlahnik = await Brand.create({
      name: 'Manolo Blahnik',
      imageURL:
        'https://neimanmarcus.scene7.com/is/image/NeimanMarcus/NMX445R_40_m?&wid=456&height=570',
      description:
        'Manolo Blahnik International Limited was established in 1970 when the first boutique was acquired in Chelsea, London. Now a globally recognised brand, its headquarters remain in London with offices and partners around the world.'
    })
    const christianLouboutin = await Brand.create({
      name: 'Christian Louboutin',
      imageURL:
        'https://images.us.christianlouboutin.com/media/catalog/product/cache/1/thumbnail/1200x/602f0fa2c1f0d1ba5e241f914e856ff9/3/1/3/0/christianlouboutin-sokate-3130694_BK01_3_1200x1200_1577470566.jpg',
      description:
        'Christian Louboutin is one of the worlds most well-known shoe designers; the red soles of his ... Louboutin now sells over one million pairs of shoes a year.'
    })
    const jimmyChoo = await Brand.create({
      name: 'Jimmy Choo',
      imageURL:
        'https://www.modaoperandi.com/assets/images/products/717253/325316/large_jimmy-choo-black-aveline-bow-embellished-sandals.jpg?_t=1595701889',
      description:
        'Datuk Jimmy Choo Yeang Keat is a Malaysian fashion designer of Chinese descent based in the United Kingdom. He co-founded Jimmy Choo Ltd, which became known for its handmade womens shoes.'
    })

    const shoe1 = await Shoe.create({
      name: 'Espadrille sandal with Double G',
      price: '720',
      imageURL:
        'https://media.gucci.com/style/DarkGray_Center_0_0_1200x1200/1584558003/624314_A3N00_6433_001_100_0000_Light-Womens-espadrille-sandal-with-Double-G.jpg',
      size: '7',
      description:
        'Carefully constructed in Spain, these espadrille sandals are crafted from hibiscus red leather and defined by House codes such as the Double G and a striped wedge heel in colors that recall the Sylvie Web. With an inherently seaside feel, the espadrille evolves from its 13th century origins into a contemporary style.',
      inventory: '3',
      brandId: 1
    })
    const shoe2 = await Shoe.create({
      name: 'Leather platform espadrille',
      price: '750',
      imageURL:
        'https://media.gucci.com/style/DarkGray_Center_0_0_1200x1200/1546878603/573023_BTMO0_9014_001_100_0000_Light-Leather-platform-espadrille.jpg',
      size: '8',
      description:
        "Crafted in white leather set against a cord platform, these espadrilles reflect the marine feel sprinkled throughout the Spring Summer 2019 collection. Cut in antique-toned gold, the archival Double G from the '70s enhances the front.",
      inventory: '2',
      brandId: 1
    })
    const shoe3 = await Shoe.create({
      name: 'Mid-heel sandal with Double G',
      price: '770',
      imageURL:
        'https://media.gucci.com/style/DarkGray_Center_0_0_1200x1200/1585826104/628012_A3N00_3926_001_100_0000_Light-Womens-mid-heel-sandal-with-Double-G.jpg',
      size: '8',
      description:
        'The now recognizable silver-toned Double G detail enhances a pair of mid-heel sandals in a pastel shade of green leather. The distinctive emblem from the GG Marmont line continues to bring a defining element to signature styles.',
      inventory: '4',
      brandId: 1
    })
    const shoe4 = await Shoe.create({
      name: 'Mid-heel slide',
      price: '700',
      imageURL:
        'https://media.gucci.com/style/DarkGray_Center_0_0_1200x1200/1583866803/458051_DKT00_5702_001_082_0000_Light-Womens-mid-heel-slide.jpg',
      size: '10',
      description:
        'The Double G mid-heel slide sandal is presented for the Pre-Fall 2020 collection in a shimmering metallic leather. The shoe is completed with a defined block heel and a playful fringe trim.',
      inventory: '3',
      brandId: 1
    })
    const shoe5 = await Shoe.create({
      name: 'Ace sneaker with Interlocking G',
      price: '630',
      imageURL:
        'https://media.gucci.com/style/DarkGray_Center_0_0_1200x1200/1586195103/598527_AYO70_9076_001_098_0000_Light-Womens-Ace-sneaker-with-Interlocking-G.jpg',
      size: '9',
      description:
        'Crafted from soft, white leather, the emblematic Ace sneaker is enhanced with a minimalist logo approach. With an intricate design, the Interlocking G is displayed on the side of the shoe, created using a perforated technique. Soft pink leather details at the back of the shoe add a subtle hint of color to the all-white style.',
      inventory: '9',
      brandId: 1
    })
    const shoe6 = await Shoe.create({
      name: 'Laminated Lambskin & Grosgrain',
      price: '950',
      imageURL:
        'https://www.chanel.com/images//t_fashion//q_auto,f_jpg,fl_lossy,dpr_2/w_620/pumps-gold-black-laminated-lambskin-grosgrain-laminated-lambskin-grosgrain-packshot-default-g36360y54258k2304-8826161037342.jpg',
      size: '8',
      description:
        'dis parturient montes, nascetur ridiculus mus. Proin vel arcu eu odio tristique pharetra. Quisque ac libero nec ligula consectetuer rhoncus. Nullam velit dui, semper et, lacinia vitae, sodales at, velit. Pellentesque ultricies dignissim lacus. Aliquam rutrum lorem ac risus. Morbi metus. Vivamus euismod urna. Nullam lobortis quam a felis ullamcorper viverra. Maecenas iaculis aliquet diam. Sed diam lorem, auctor quis, tristique ac, eleifend vitae, erat. Vivamus nisi. Mauris nulla. Integer urna. Vivamus molestie dapibus ligula. Aliquam erat volutpat. Nulla dignissim. Maecenas ornare egestas ligula. Nullam feugiat placerat velit. Quisque varius. Nam porttitor scelerisque neque. Nullam nisl. Maecenas malesuada fringilla est. Mauris eu turpis. Nulla aliquet. Proin velit. Sed malesuada augue ut lacus. Nulla tincidunt, neque vitae semper egestas, urna justo faucibus lectus, a sollicitudin orci sem eget massa. Suspendisse eleifend. Cras sed leo. Cras vehicula aliquet libero. Integer in magna. Phasellus dolor elit, pellentesque a, facilisis non, bibendum sed, est.',
      inventory: '5',
      brandId: 2
    })
    const shoe7 = await Shoe.create({
      name: 'Myriotrema Lichen',
      price: 629,
      size: 10,
      description:
        'eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at nunc commodo placerat praesent blandit nam nulla integer pede justo',
      inventory: 4,
      brandId: 2
    })
    const shoe8 = await Shoe.create({
      name: 'Pineland Heliotrope',
      price: 810,
      size: 10,
      description:
        'ante nulla justo aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis egestas metus aenean fermentum donec ut mauris eget massa tempor convallis nulla neque libero convallis eget eleifend luctus ultricies eu nibh quisque id',
      inventory: 4,
      brandId: 2
    })
    const shoe9 = await Shoe.create({
      name: 'Scentless Bayberry',
      price: 606,
      size: 7,
      description:
        'vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae donec pharetra magna',
      inventory: 5,
      brandId: 2
    })
    const shoe10 = await Shoe.create({
      name: 'Gundlachia',
      price: 732,
      size: 8,
      description:
        'cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium nisl ut',
      inventory: 3,
      brandId: 2
    })
    const shoe11 = await Shoe.create({
      name: 'Fivespot',
      price: 546,
      size: 8,
      description:
        'amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque eget nunc donec quis orci eget orci vehicula condimentum curabitur in libero ut massa volutpat convallis',
      inventory: 5,
      brandId: 2
    })
    const shoe12 = await Shoe.create({
      name: 'Mouse-ear Chickweed',
      price: 722,
      size: 10,
      description:
        'eget vulputate ut ultrices vel augue vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer ac neque duis bibendum morbi non quam nec dui luctus',
      inventory: 4,
      brandId: 2
    })
    const shoe13 = await Shoe.create({
      name: 'Astrothelium Lichen',
      price: 879,
      size: 8,
      description:
        'amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque eget nunc donec quis orci eget orci vehicula condimentum curabitur in libero ut massa volutpat',
      inventory: 1,
      brandId: 3
    })
    const shoe14 = await Shoe.create({
      name: 'Appalachian Rim Lichen',
      price: 619,
      size: 7,
      description:
        'lectus pellentesque eget nunc donec quis orci eget orci vehicula condimentum curabitur in libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in felis eu sapien cursus vestibulum proin eu mi',
      inventory: 4,
      brandId: 3
    })
    const shoe15 = await Shoe.create({
      name: 'Broadsepal Saxifrage',
      price: 843,
      size: 10,
      description:
        'sed interdum venenatis turpis enim blandit mi in porttitor pede justo eu massa donec dapibus duis at velit eu est congue elementum in hac habitasse platea dictumst morbi vestibulum velit id pretium iaculis diam erat fermentum justo nec condimentum neque sapien placerat ante nulla justo aliquam quis turpis',
      inventory: 4,
      brandId: 3
    })
    const shoe16 = await Shoe.create({
      name: 'Slender Woodland Sedge',
      price: 841,
      size: 7,
      description:
        'lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet',
      inventory: 4,
      brandId: 3
    })
    const shoe17 = await Shoe.create({
      name: 'Puerto Rico Palo De Gallina',
      price: 879,
      size: 10,
      description:
        'volutpat dui maecenas tristique est et tempus semper est quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia',
      inventory: 1,
      brandId: 3
    })
    const shoe18 = await Shoe.create({
      name: 'Grimmia Dry Rock Moss',
      price: 749,
      size: 8,
      description:
        'lacinia sapien quis libero nullam sit amet turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio',
      inventory: 1,
      brandId: 3
    })
    const shoe19 = await Shoe.create({
      name: 'Woolly Paperflower',
      price: 686,
      size: 6,
      description:
        'justo pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas tristique est et tempus semper est quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti',
      inventory: 4,
      brandId: 3
    })
    const shoe20 = await Shoe.create({
      name: 'Slender Spikerush',
      price: 556,
      size: 6,
      description:
        'id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in imperdiet et commodo vulputate justo in blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices',
      inventory: 5,
      brandId: 4
    })
    const shoe21 = await Shoe.create({
      name: 'Hairy Butterwort',
      price: 599,
      size: 9,
      description:
        'sit amet eleifend pede libero quis orci nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in purus',
      inventory: 2,
      brandId: 4
    })
    const shoe22 = await Shoe.create({
      name: 'Heavy Sedge',
      price: 728,
      size: 9,
      description:
        'lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at nunc commodo placerat praesent blandit nam nulla integer pede justo lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus',
      inventory: 4,
      brandId: 4
    })
    const shoe23 = await Shoe.create({
      name: "Springfield's Beardgrass",
      price: 512,
      size: 8,
      description:
        'donec ut dolor morbi vel lectus in quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet massa id lobortis convallis tortor risus',
      inventory: 4,
      brandId: 4
    })
    const shoe24 = await Shoe.create({
      name: 'Alyssumleaf Phlox',
      price: 866,
      size: 9,
      description:
        'amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium',
      inventory: 5,
      brandId: 4
    })
    const shoe25 = await Shoe.create({
      name: 'American Tarwort',
      price: 854,
      size: 10,
      description:
        'ut massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer',
      inventory: 2,
      brandId: 4
    })
    const shoe26 = await Shoe.create({
      name: 'Soapberry',
      price: 547,
      size: 8,
      description:
        'maecenas tristique est et tempus semper est quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse',
      inventory: 5,
      brandId: 5
    })
    const shoe27 = await Shoe.create({
      name: 'Asian White Birch',
      price: 681,
      size: 7,
      description:
        'nisl duis bibendum felis sed interdum venenatis turpis enim blandit mi in porttitor pede justo eu massa donec dapibus duis at velit eu est congue elementum in hac habitasse platea dictumst morbi vestibulum velit id pretium iaculis',
      inventory: 1,
      brandId: 5
    })
    const shoe28 = await Shoe.create({
      name: 'Manilkara',
      price: 844,
      size: 8,
      description:
        'convallis duis consequat dui nec nisi volutpat eleifend donec ut dolor morbi vel lectus in quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit',
      inventory: 5,
      brandId: 5
    })
    const shoe29 = await Shoe.create({
      name: 'Polytrichum Moss',
      price: 876,
      size: 7,
      description:
        'potenti cras in purus eu magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis',
      inventory: 3,
      brandId: 5
    })
    const shoe30 = await Shoe.create({
      name: 'Eggplant',
      price: 525,
      size: 9,
      description:
        'ac consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti nullam porttitor lacus',
      inventory: 2,
      brandId: 5
    })
    const shoe31 = await Shoe.create({
      name: 'Navelwort',
      price: 598,
      size: 9,
      description:
        'amet diam in magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam congue risus semper porta volutpat',
      inventory: 4,
      brandId: 5
    })

    const user1 = await User.create({
      firstname: 'Danny',
      lastname: 'Devito',
      email: 'dannydevito_iguess@phillyy.com',
      password: '1234',
      access: 'user',
      shoeSize: 8,
      imageURL:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Danny_DeVito_cropped_and_edited_for_brightness.jpg/440px-Danny_DeVito_cropped_and_edited_for_brightness.jpg'
    })
    const user2 = await User.create({
      firstname: 'Jerry',
      lastname: 'Seinfeld',
      email: 'jerrrrrry@seinfeldd.com',
      password: '1234',
      access: 'user',
      shoeSize: 7,
      imageURL:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Jerry_Seinfeld_2016_-_2.jpg/440px-Jerry_Seinfeld_2016_-_2.jpg'
    })
    const user3 = await User.create({
      firstname: 'James',
      lastname: 'Gandolfini',
      email: 'realtonysopran0@restin.peace',
      password: '1234',
      access: 'user',
      shoeSize: 10,
      imageURL:
        'https://upload.wikimedia.org/wikipedia/en/c/c2/Tony_Soprano.jpg'
    })
    const user4 = await User.create({
      firstname: 'Megan',
      lastname: 'Pete',
      email: 'hotgirl@summer.com',
      password: '1234',
      access: 'user',
      shoeSize: 4,
      imageURL:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Megan_Thee_Stallion_2019_2.jpg/440px-Megan_Thee_Stallion_2019_2.jpg'
    })
    const user5 = await User.create({
      firstname: 'Elizabeth',
      lastname: 'Grant',
      email: 'fitiloveu@depressedgirls.org',
      password: '1234',
      access: 'user',
      shoeSize: 11,
      imageURL:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Lana_Del_Rey_%40_Grammy_Museum_10_13_2019_%2849311023203%29.jpg/440px-Lana_Del_Rey_%40_Grammy_Museum_10_13_2019_%2849311023203%29.jpg'
    })
    const user6 = await User.create({
      firstname: 'Leanne',
      lastname: 'Salad',
      email: 'imrunningoutof@ideas.com',
      password: '1234',
      access: 'admin',
      shoeSize: 5,
      imageURL: 'https://i.imgur.com/YKSYtRzb.jpg'
    })
    const user7 = await User.create({
      firstname: 'Sally',
      lastname: 'Influencer',
      email: 'followmeon@instagram.com',
      password: '1234',
      access: 'user',
      shoeSize: 9,
      imageURL: 'https://i.imgur.com/lqs0Y7cb.jpg'
    })
    const user8 = await User.create({
      firstname: 'Tim',
      lastname: 'Zoomer',
      email: 'wasbornin@2000.bro',
      password: '1234',
      access: 'user',
      shoeSize: 8,
      imageURL: 'https://i.imgur.com/K8EElgzb.png'
    })
    const user9 = await User.create({
      firstname: 'Bernie',
      lastname: 'Sanders',
      email: 'medicare@forall.now',
      password: '1234',
      access: 'admin',
      shoeSize: 10,
      imageURL:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Bernie_Sanders_in_March_2020.jpg/440px-Bernie_Sanders_in_March_2020.jpg'
    })
    const user10 = await User.create({
      firstname: 'Bernard',
      lastname: 'Egorl',
      email: 'cats@cat.com',
      password: '1234',
      access: 'admin',
      shoeSize: 5,
      imageURL: 'https://i.imgur.com/TuH8FICb.jpg'
    })
    const user11 = await User.create({
      firstname: 'Berni',
      lastname: 'Mac',
      email: 'therealbernie@mac.mac',
      password: '1234',
      access: 'user',
      shoeSize: 11,
      imageURL:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/BernieMacSoulMenMarch08.jpg/440px-BernieMacSoulMenMarch08.jpg'
    })

    const order1 = await Order.create({
      status: 'complete',
      userId: 2,
      purchased: [{shoeId: 1}, {shoeId: 2}]
    })
    const order2 = await Order.create({
      status: 'complete'
    })
    const order3 = await Order.create({
      status: 'complete'
    })
    const order4 = await Order.create({
      status: 'complete'
    })

    const purchase1 = await Purchased.create({
      orderId: 1,
      shoeId: 1
    })
    const purchase2 = await Purchased.create({
      orderId: 2,
      shoeId: 5
    })
    const purchase3 = await Purchased.create({
      orderId: 3,
      shoeId: 5
    })
    const purchase4 = await Purchased.create({
      orderId: 4,
      shoeId: 4
    })
  } catch (error) {
    console.log(error)
  }
}

async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}
if (module === require.main) {
  runSeed()
}

module.exports = seed
