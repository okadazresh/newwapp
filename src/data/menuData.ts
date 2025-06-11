import { MenuItem, MenuCategory } from '../types/menu';

export const categories: MenuCategory[] = [
  {
    id: 'starters',
    name: {
      en: 'Appetizers',
      ar: 'المقبلات',
      ckb: 'مقەبیلات'
    }
  },
  {
    id: 'pizza',
    name: {
      en: 'Pizza',
      ar: 'بيتزا',
      ckb: 'پیتزا'
    }
  },
  {
    id: 'sandwich',
    name: {
      en: 'Sandwich',
      ar: 'ساندویج',
      ckb: 'ساندویچ'
    }
  },
  {
    id: 'burger',
    name: {
      en: 'Burger',
      ar: 'برجر',
      ckb: 'بەرگەر'
    }
  },
  {
    id: 'rizo',
    name: {
      en: 'Rizo',
      ar: 'ريزو',
      ckb: 'ڕیزۆ'
    }
  },
  {
    id: 'shawrma',
    name: {
      en: 'Shawrma',
      ar: 'شاورما',
      ckb: 'شاورمە'
    }
  },
  {
    id: 'kentucky',
    name: {
      en: 'Kentucky',
      ar: 'كنتاكي',
      ckb: 'کەنتاکی'
    }
  },
  {
    id: 'spaghetti',
    name: {
      en: 'Spaghetti',
      ar: 'سباغيتي',
      ckb: 'سپاگێتی'
    }
  },
  {
    id: 'sandwichfries',
    name: {
      en: 'Sandwich / Fries',
      ar: 'ساندويتج / بطاطس',
      ckb: 'ساندویچ / پەتاتە'
    }
  },
  {
    id: 'drinks',
    name: {
      en: 'Drinks',
      ar: 'المشروبات',
      ckb: 'خواردنەوەکان'
    }
  }
];

export const menuItems: MenuItem[] = [
  // Appetizers
  {
    id: 'large-appetizers',
    name: {
      en: 'Large Appetizers',
      ar: 'مقبیلات كبیرة',
      ckb: 'مقەبیلاتی گەورە'
    },
    price: 3000,
    image: 'https://i.ibb.co/n28p6Rb/appetizers.jpg',
    category: 'starters',
    tags: ['Salad'],
    description: {
      en: 'Fresh mixed salad with seasonal vegetables and house dressing',
      ar: 'سلطة مشكلة طازجة مع خضروات موسمية وصلصة البيت',
      ckb: 'زەڵاتەی تێكەڵی تازە لەگەڵ سەوزەی وەرزی و سۆسی ماڵەوە'
    }
  },
  {
    id: 'small-appetizers',
    name: {
      en: 'Small Appetizers',
      ar: 'مقبیلات صغیرة',
      ckb: 'مقەبیلاتی بچووك'
    },
    price: 2000,
    image: 'https://i.ibb.co/n28p6Rb/appetizers.jpg',
    category: 'starters',
    tags: ['Salad'],
    description: {
      en: 'Fresh mixed salad with seasonal vegetables and house dressing',
      ar: 'سلطة مشكلة طازجة مع خضروات موسمية وصلصة البيت',
      ckb: 'زەڵاتەی تێكەڵی تازە لەگەڵ سەوزەی وەرزی و سۆسی ماڵەوە'
    }
  },

  // Pizza
  {
    id: 'local-meat-pizza',
    name: {
      en: 'Local Meat Pizza',
      ar: 'بيتزا اللحوم المحلیة',
      ckb: 'پیتزای گۆشتی خۆماڵی'
    },
    smallPrice: 5000,
    largePrice: 7000,
    image: 'https://i.ibb.co/9HkBJ4KT/meat-pizza.jpg',
    category: 'pizza',
    description: {
      en: 'Delicious pizza topped with premium local meat and fresh vegetables',
      ar: 'بيتزا لذيذة مغطاة باللحوم المحلية الممتازة والخضروات الطازجة',
      ckb: 'پیتزایەکی خۆشتام بە گۆشتی خۆماڵی باش و سەوزەی تازە'
    }
  },
  {
    id: 'chicken-pizza',
    name: {
      en: 'Chicken Pizza',
      ar: 'بيتزا الدجاج',
      ckb: 'پیتزای مریشك'
    },
    smallPrice: 5000,
    largePrice: 7000,
    image: 'https://i.ibb.co/Tq4MhbFB/chicken-pizza.jpg',
    category: 'pizza',
    description: {
      en: 'Tender chicken pieces with herbs and spices on crispy pizza base',
      ar: 'قطع دجاج طرية مع الأعشاب والتوابل على قاعدة بيتزا مقرمشة',
      ckb: 'پارچەی مریشكی نەرم لەگەڵ گیا و بەهارات لەسەر بنکەی پیتزای ترخ'
    }
  },
  {
    id: 'mix-pizza',
    name: {
      en: 'Mix Pizza',
      ar: 'بيتزا مشكل',
      ckb: 'پیتزای تێكەڵ'
    },
    smallPrice: 5000,
    largePrice: 7000,
    image: 'https://i.ibb.co/KpBSHbGr/mix.jpg',
    category: 'pizza',
    description: {
      en: 'Perfect combination of meat, chicken, and vegetables',
      ar: 'مزيج مثالي من اللحوم والدجاج والخضروات',
      ckb: 'تێكەڵەیەکی تەواوی گۆشت و مریشك و سەوزەوات'
    }
  },
  {
    id: 'vegetarian-pizza',
    name: {
      en: 'Vegetarian Pizza',
      ar: 'بيتزا خضروات',
      ckb: 'پیتزای سەوزەوات'
    },
    smallPrice: 4000,
    largePrice: 5000,
    image: 'https://i.ibb.co/1t4xHjgr/veg.jpg',
    category: 'pizza',
    description: {
      en: 'Fresh vegetables and herbs on our signature pizza base',
      ar: 'خضروات طازجة وأعشاب على قاعدة البيتزا المميزة',
      ckb: 'سەوزە و گیای تازە لەسەر بنکەی پیتزای تایبەتمان'
    }
  },
  {
    id: 'four-seasons-pizza',
    name: {
      en: 'Four Seasons Pizza',
      ar: 'بیتزا الفصول الأربعة',
      ckb: 'پیتزای چوار وەرزی'
    },
    largePrice: 7000,
    image: 'https://i.ibb.co/PGqCmY7D/four-seasons.jpg',
    category: 'pizza',
    description: {
      en: 'Four different toppings representing each season',
      ar: 'أربع إضافات مختلفة تمثل كل فصل',
      ckb: 'چوار جۆری جیاواز کە هەر وەرزێك دەردەخەن'
    }
  },
  {
    id: 'tuna-fish-pizza',
    name: {
      en: 'Tuna Fish Pizza',
      ar: 'بیتزا سمك التونة',
      ckb: 'پیتزای ماسی توونە'
    },
    smallPrice: 5000,
    largePrice: 6000,
    image: 'https://i.ibb.co/rfyg2vf3/tuna-fish.jpg',
    category: 'pizza',
    description: {
      en: 'Premium tuna with onions and Mediterranean herbs',
      ar: 'تونة ممتازة مع البصل والأعشاب المتوسطية',
      ckb: 'توونەی باش لەگەڵ پیاز و گیای دەریای ناوەڕاست'
    }
  },
  {
    id: 'pepperoni-pizza',
    name: {
      en: 'Pepperoni Pizza',
      ar: 'بیتزا بیبیرونی',
      ckb: 'پیتزای پەپەڕۆنی'
    },
    smallPrice: 5000,
    largePrice: 6000,
    image: 'https://i.ibb.co/prKkT0YT/pepperoni-pizza.jpg',
    category: 'pizza',
    description: {
      en: 'Classic pepperoni with mozzarella cheese',
      ar: 'بيبيروني كلاسيكي مع جبنة الموزاريلا',
      ckb: 'پەپەڕۆنی کلاسیکی لەگەڵ پەنیری مۆزارێلا'
    }
  },
  {
    id: 'margherita-pizza',
    name: {
      en: 'Margherita Pizza',
      ar: 'بیتزا ماركریتا',
      ckb: 'پیتزای مارگەریتا'
    },
    smallPrice: 5000,
    largePrice: 7000,
    image: 'https://i.ibb.co/hxLsgx47/margareta.jpg',
    category: 'pizza',
    description: {
      en: 'Traditional Italian pizza with tomato, mozzarella, and basil',
      ar: 'بيتزا إيطالية تقليدية مع الطماطم والموزاريلا والريحان',
      ckb: 'پیتزای ئیتالی دێرین لەگەڵ تەماتە و مۆزارێلا و ڕێحان'
    }
  },

  // Sandwiches
  {
    id: 'beef-sandwich',
    name: {
      en: 'Beef Sandwich',
      ar: 'ساندویج لحم',
      ckb: 'ساندویچی گۆشت'
    },
    price: 2000,
    image: 'https://i.ibb.co/4RBSyjrS/beef-sandwich.jpg',
    category: 'sandwich',
    description: {
      en: 'Grilled beef with fresh vegetables in toasted bread',
      ar: 'لحم مشوي مع خضروات طازجة في خبز محمص',
      ckb: 'گۆشتی برژاو لەگەڵ سەوزەی تازە لە نانی برژاو'
    }
  },
  {
    id: 'chicken-sandwich',
    name: {
      en: 'Chicken Sandwich',
      ar: 'ساندويتش دجاج',
      ckb: 'ساندویچی مریشك'
    },
    price: 1500,
    image: 'https://i.ibb.co/d035tCGv/istockphoto-1147164476-612x612.jpg',
    category: 'sandwich',
    description: {
      en: 'Tender grilled chicken with lettuce and special sauce',
      ar: 'دجاج مشوي طري مع الخس والصلصة الخاصة',
      ckb: 'مریشكی برژاوی نەرم لەگەڵ کاهو و سۆسی تایبەت'
    }
  },

  // Burgers
  {
    id: 'beef-burger',
    name: {
      en: 'Beef Burger',
      ar: 'برجر اللحم',
      ckb: 'بەرگەری گۆشت'
    },
    price: 3000,
    image: 'https://i.ibb.co/Q7ycbp5C/beef-burger.jpg',
    category: 'burger',
    description: {
      en: 'Juicy beef patty with cheese, lettuce, and tomato',
      ar: 'قرص لحم عصير مع الجبن والخس والطماطم',
      ckb: 'پەرچەی گۆشتی ئاوەدار لەگەڵ پەنیر و کاهو و تەماتە'
    }
  },
  {
    id: 'chicken-burger',
    name: {
      en: 'Chicken Burger',
      ar: 'برجر دجاج',
      ckb: 'بەرگەری مریشك'
    },
    price: 3000,
    image: 'https://i.ibb.co/pvWh1ZMc/Chicken-Burger.jpg',
    category: 'burger',
    description: {
      en: 'Crispy chicken breast with fresh vegetables',
      ar: 'صدر دجاج مقرمش مع خضروات طازجة',
      ckb: 'سنگی مریشكی ترخ لەگەڵ سەوزەی تازە'
    }
  },
  {
    id: 'crispy-burger',
    name: {
      en: 'Crispy Burger',
      ar: 'برجر كرسبی',
      ckb: 'بەرگەری كریسپی'
    },
    price: 3000,
    image: 'https://i.ibb.co/KxprGtmz/Crispy-Burger.jpg',
    category: 'burger',
    description: {
      en: 'Extra crispy chicken with special seasoning',
      ar: 'دجاج مقرمش إضافي مع التتبيل الخاص',
      ckb: 'مریشكی زیادە ترخ لەگەڵ بەهاراتی تایبەت'
    }
  },
  {
    id: 'double-burger',
    name: {
      en: 'Double Burger',
      ar: 'برجر مزدوج',
      ckb: 'بەرگەری دەبڵ'
    },
    price: 5500,
    image: 'https://i.ibb.co/RTS80XMV/big-burger.jpg',
    category: 'burger',
    description: {
      en: 'Double beef patties with double cheese and vegetables',
      ar: 'قرصان لحم مع جبن مضاعف وخضروات',
      ckb: 'دوو پەرچەی گۆشت لەگەڵ پەنیری دووقات و سەوزەوات'
    }
  },
  {
    id: 'cheese-burger',
    name: {
      en: 'Cheese Burger',
      ar: 'برجر جبنة',
      ckb: 'بەرگەری پەنیر'
    },
    price: 3500,
    image: 'https://i.ibb.co/CpLbvyzf/cheese-burger-2.jpg',
    category: 'burger',
    description: {
      en: 'Beef patty with melted cheese and fresh toppings',
      ar: 'قرص لحم مع جبن ذائب وإضافات طازجة',
      ckb: 'پەرچەی گۆشت لەگەڵ پەنیری تواوە و زیادکراوی تازە'
    }
  },

  // Rizo
  {
    id: 'normal-rizo',
    name: {
      en: 'Normal Rizo',
      ar: 'ریزو سادە',
      ckb: 'ڕیزۆ سادە'
    },
    price: 2000,
    image: 'https://i.ibb.co/rGQNyzF3/mexican-rice.jpg',
    category: 'rizo',
    description: {
      en: 'Traditional rice dish with aromatic spices',
      ar: 'طبق أرز تقليدي مع التوابل العطرة',
      ckb: 'خواردنی برنجی دێرین لەگەڵ بەهاراتی بۆنخۆش'
    }
  },
  {
    id: 'crispy-rizo',
    name: {
      en: 'Crispy Rizo',
      ar: 'ریزو كریسبی',
      ckb: 'ڕیزۆ كریسپی'
    },
    price: 5000,
    image: 'https://i.ibb.co/Ld8CVCM7/rizo.jpg',
    category: 'rizo',
    description: {
      en: 'Crispy rice with chicken and special sauce',
      ar: 'أرز مقرمش مع الدجاج والصلصة الخاصة',
      ckb: 'برنجی ترخ لەگەڵ مریشك و سۆسی تایبەت'
    }
  },
  {
    id: 'crispy-cheese-rizo',
    name: {
      en: 'Crispy Cheese Rizo',
      ar: 'ریزو كریسبی بالجبن',
      ckb: 'ڕیزۆ كریسپی بە پەنیر'
    },
    price: 7500,
    image: 'https://i.ibb.co/Ld8CVCM7/rizo.jpg',
    category: 'rizo',
    description: {
      en: 'Crispy rice with melted cheese and premium toppings',
      ar: 'أرز مقرمش مع جبن ذائب وإضافات ممتازة',
      ckb: 'برنجی ترخ لەگەڵ پەنیری تواوە و زیادکراوی باش'
    }
  },

  // Shawrma
  {
    id: 'meat-shawrma',
    name: {
      en: 'Meat Shawrma',
      ar: 'شاورمة لحم',
      ckb: 'شاورمەی گۆشت'
    },
    price: 2000,
    image: 'https://i.ibb.co/0ph5FW4q/Meat-Shawrma.jpg',
    category: 'shawrma',
    description: {
      en: 'Tender meat wrapped in fresh bread with vegetables',
      ar: 'لحم طري ملفوف في خبز طازج مع الخضروات',
      ckb: 'گۆشتی نەرم پێچراوە لە نانی تازە لەگەڵ سەوزەوات'
    }
  },
  {
    id: 'chicken-shawrma',
    name: {
      en: 'Chicken Shawrma',
      ar: 'شاورمة دجاج',
      ckb: 'شاورمەی مریشك'
    },
    price: 1500,
    image: 'https://i.ibb.co/208k5738/chiken-Shawrma-copy.jpg',
    category: 'shawrma',
    description: {
      en: 'Grilled chicken with garlic sauce and pickles',
      ar: 'دجاج مشوي مع صلصة الثوم والمخللات',
      ckb: 'مریشكی برژاو لەگەڵ سۆسی سیر و تورشی'
    }
  },
  {
    id: 'crispy-shawrma',
    name: {
      en: 'Crispy Shawrma',
      ar: 'شاورمة كریسبی',
      ckb: 'شاورمەی كریسپی'
    },
    price: 2000,
    image: 'https://i.ibb.co/0RT8Jzk8/crispy-shawrma-copy.jpg',
    category: 'shawrma',
    description: {
      en: 'Extra crispy chicken with special spices',
      ar: 'دجاج مقرمش إضافي مع التوابل الخاصة',
      ckb: 'مریشكی زیادە ترخ لەگەڵ بەهاراتی تایبەت'
    }
  },

  // Kentucky (New Category)
  {
    id: 'kentucky-chicken',
    name: {
      en: 'Kentucky Fried Chicken',
      ar: 'دجاج كنتاكي مقلي',
      ckb: 'مریشكی سوراوی کەنتاکی'
    },
    price: 4000,
    image: 'https://images.pexels.com/photos/60616/fried-chicken-chicken-fried-crunchy-60616.jpeg',
    category: 'kentucky',
    description: {
      en: 'Crispy fried chicken with secret blend of herbs and spices',
      ar: 'دجاج مقلي مقرمش مع خلطة سرية من الأعشاب والتوابل',
      ckb: 'مریشكی سوراوی ترخ لەگەڵ تێكەڵەی نهێنی گیا و بەهارات'
    }
  },
  {
    id: 'kentucky-wings',
    name: {
      en: 'Kentucky Wings',
      ar: 'أجنحة كنتاكي',
      ckb: 'باڵی کەنتاکی'
    },
    price: 3500,
    image: 'https://images.pexels.com/photos/1059943/pexels-photo-1059943.jpeg',
    category: 'kentucky',
    description: {
      en: 'Spicy chicken wings with buffalo sauce',
      ar: 'أجنحة دجاج حارة مع صلصة البافالو',
      ckb: 'باڵی مریشكی تیژ لەگەڵ سۆسی بافالۆ'
    }
  },

  // Spaghetti (New Category)
  {
    id: 'spaghetti-bolognese',
    name: {
      en: 'Spaghetti Bolognese',
      ar: 'سباغيتي بولونيز',
      ckb: 'سپاگێتی بۆلۆنیز'
    },
    price: 4500,
    image: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg',
    category: 'spaghetti',
    description: {
      en: 'Classic Italian pasta with rich meat sauce',
      ar: 'معكرونة إيطالية كلاسيكية مع صلصة اللحم الغنية',
      ckb: 'پاستای ئیتالی کلاسیکی لەگەڵ سۆسی گۆشتی دەوڵەمەند'
    }
  },
  {
    id: 'spaghetti-carbonara',
    name: {
      en: 'Spaghetti Carbonara',
      ar: 'سباغيتي كاربونارا',
      ckb: 'سپاگێتی کاربۆنارا'
    },
    price: 4000,
    image: 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg',
    category: 'spaghetti',
    description: {
      en: 'Creamy pasta with bacon, eggs, and parmesan cheese',
      ar: 'معكرونة كريمية مع اللحم المقدد والبيض وجبن البارميزان',
      ckb: 'پاستای کرێمی لەگەڵ بەیکۆن و هێلکە و پەنیری پارمیزان'
    }
  },

  // Sandwich/Fries
  {
    id: 'fries',
    name: {
      en: 'Fries',
      ar: 'بطاطة فرایس',
      ckb: 'فینگەری سادە'
    },
    price: 1500,
    image: 'https://i.ibb.co/Gv0HjHyN/fries.jpg',
    category: 'sandwichfries',
    description: {
      en: 'Golden crispy french fries',
      ar: 'بطاطس مقلية ذهبية مقرمشة',
      ckb: 'پەتاتەی سوراوی زەڕین و ترخ'
    }
  },
  {
    id: 'sandwich-fries',
    name: {
      en: 'Sandwich Fries',
      ar: 'بطاطس ساندويتش',
      ckb: 'ساندویچی فینگەر'
    },
    price: 1500,
    image: 'https://i.ibb.co/tTQgLWFN/sdvgsdv.png',
    category: 'sandwichfries',
    description: {
      en: 'Fries served in sandwich style',
      ar: 'بطاطس مقدمة بطريقة الساندويتش',
      ckb: 'پەتاتە بە شێوەی ساندویچ'
    }
  },
  {
    id: 'cheese-fries',
    name: {
      en: 'Cheese Fries',
      ar: 'بطاطة بلجبنة',
      ckb: 'پەتاتە بە پەنیر'
    },
    price: 4000,
    image: 'https://i.ibb.co/FkXf5vWK/cheese-fries.jpg',
    category: 'sandwichfries',
    description: {
      en: 'Crispy fries topped with melted cheese',
      ar: 'بطاطس مقرمشة مغطاة بالجبن الذائب',
      ckb: 'پەتاتەی ترخ بە پەنیری تواوە لەسەرەوە'
    }
  },

  // Drinks
  {
    id: 'water',
    name: {
      en: 'Water',
      ar: 'ماء',
      ckb: 'ئاو'
    },
    price: 250,
    image: 'https://i.ibb.co/mVN9rZtb/water.jpg',
    category: 'drinks',
    description: {
      en: 'Fresh bottled water',
      ar: 'مياه معبأة طازجة',
      ckb: 'ئاوی بتڵکراوی تازە'
    }
  },
  {
    id: 'pepsi',
    name: {
      en: 'Pepsi',
      ar: 'بیبسی',
      ckb: 'پێپسی'
    },
    price: 500,
    image: 'https://i.ibb.co/Kp2p3pPK/pepsi.jpg',
    category: 'drinks',
    description: {
      en: 'Refreshing cola drink',
      ar: 'مشروب كولا منعش',
      ckb: 'خواردنەوەی کۆلای سەرینکەرەوە'
    }
  },
  {
    id: 'ayran',
    name: {
      en: 'Ayran',
      ar: 'عيران',
      ckb: 'ماستاو'
    },
    price: 500,
    image: 'https://i.ibb.co/ymzQjXmp/ayran.jpg',
    category: 'drinks',
    description: {
      en: 'Traditional yogurt drink',
      ar: 'مشروب اللبن التقليدي',
      ckb: 'خواردنەوەی ماستی دێرین'
    }
  },
  {
    id: 'tea',
    name: {
      en: 'Tea',
      ar: 'شاي',
      ckb: 'چا'
    },
    price: 500,
    image: 'https://i.ibb.co/CpR4ffxd/image.jpg',
    category: 'drinks',
    description: {
      en: 'Hot traditional tea',
      ar: 'شاي تقليدي ساخن',
      ckb: 'چای دێرینی گەرم'
    }
  }
];