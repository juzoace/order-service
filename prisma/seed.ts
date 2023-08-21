/* eslint-disable prettier/prettier */
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seed() {
  // await prisma.book.createMany({
  //   data: [
  //     {
  //       title: 'Memory',
  //       description: 'The imperfections of memory',
  //       imageUrl: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/contemporary-fiction-night-time-book-cover-design-template-1be47835c3058eb42211574e0c4ed8bf_screen.jpg?ts=1637012564',
  //       price: 19.99,
  //       discount: 12
  //     },
  //     {
  //       title: 'My Book Cover',
  //       description: 'Secrets in a silicon valley startup',
  //       imageUrl: 'https://edit.org/images/cat/book-covers-big-2019101610.jpg',
  //       price: 60.99,
  //       discount: 10
  //     },
  //     {
  //       title: 'Outsiders',
  //       description: 'Tales of a cold world',
  //       imageUrl: 'https://creativereview.imgix.net/content/uploads/2022/12/hinton_outsiders_cover_instagram.jpg?auto=compress,format&q=60&w=1071&h=1571',
  //       price: 80.99,
  //       discount: 10
  //     },
  //     {
  //       title: 'Sorrow and Bliss',
  //       description: 'A book about dark twisted fantasy',
  //       imageUrl: 'https://i.guim.co.uk/img/media/af1ea48f1eeaab4300691b35f585d326e6ed24bb/0_0_784_1200/master/784.jpg?width=700&quality=85&auto=format&fit=max&s=07b76b55b36cf2f0b56086c33d9e2763',
  //       price: 5.99,
  //       discount: 11
  //     },
  //     {
  //       title: 'Normal People',
  //       description: 'A book by nooley sally',
  //       imageUrl: 'https://cdn.vox-cdn.com/thumbor/p-gGrwlaU4rLikEAgYhupMUhIJc=/0x0:1650x2475/1200x0/filters:focal(0x0:1650x2475):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/13757614/817BsplxI9L.jpg',
  //       price: 50.99,
  //       discount: 10
  //     },
  //     {
  //       title: 'The great gatsby',
  //       description: 'Description of Book 2',
  //       imageUrl: 'https://1stwebdesigner.com/wp-content/uploads/2011/05/the-great-gatsby.jpg',
  //       price: 40.99,
  //       discount: 25
  //     },
  //     {
  //       title: 'Shit Cassandra saw',
  //       description: 'A story of young cassandra',
  //       imageUrl: 'https://static01.nyt.com/images/2022/12/11/books/review/08NotableBookCovers/08NotableBookCovers-articleLarge.jpg?quality=75&auto=webp&disable=upscale',
  //       price: 74.99,
  //       discount: 10
  //     },
  //     {
  //       title: 'Harry Potter and the deathly hallows',
  //       description: 'A harry potter series',
  //       imageUrl: 'https://hips.hearstapps.com/digitalspyuk.cdnds.net/15/50/1449878132-9781781100264.jpg?resize=980:*',
  //       price: 87.99,
  //       discount: 10
  //     },
  //     {
  //       title: 'In the blink of an eye',
  //       description: 'A horrow story',
  //       imageUrl: 'https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781398511170/in-the-blink-of-an-eye-9781398511170_hr.jpg',
  //       price: 60.99,
  //       discount: 10
  //     },
  //     {
  //       title: `80's fashion trend`,
  //       description: `America's fashion history`,
  //       imageUrl: 'https://pub-static.fotor.com/assets/projects/pages/f066c887-5790-4eab-b749-790318208590/green-and-black-fashion-book-cover-94c79f3876ba4374b35e8d3a9b8c52ee.jpg',
  //       price: 240.99,
  //       discount: 10
  //     },
  //     {
  //       title: 'Book 11',
  //       description: 'Description of Book 2',
  //       imageUrl: 'https://res.cloudinary.com/dhgsormzs/image/upload/v1690555098/Zero_to_One_ffveg1.png',
  //       price: 94.99,
  //       discount: 10
  //     },
  //     {
  //       title: 'Book 12',
  //       description: 'Description of Book 2',
  //       imageUrl: 'https://res.cloudinary.com/dhgsormzs/image/upload/v1690555098/Zero_to_One_ffveg1.png',
  //       price: 24.99,
  //       discount: 10
  //     },
  //     {
  //       title: 'Book 13',
  //       description: 'Description of Book 2',
  //       imageUrl: 'https://res.cloudinary.com/dhgsormzs/image/upload/v1690555098/Zero_to_One_ffveg1.png',
  //       price: 250.99,
  //       discount: 10
  //     },
  //     {
  //       title: 'Book 14',
  //       description: 'Description of Book 2',
  //       imageUrl: 'https://res.cloudinary.com/dhgsormzs/image/upload/v1690555098/Zero_to_One_ffveg1.png',
  //       price: 24.99,
  //       discount: 10
  //     },
  //     {
  //       title: 'Book 15',
  //       description: 'Description of Book 2',
  //       imageUrl: 'https://res.cloudinary.com/dhgsormzs/image/upload/v1690555098/Zero_to_One_ffveg1.png',
  //       price: 24.99,
  //       discount: 10
  //     },
  //     {
  //       title: 'Book 16',
  //       description: 'Description of Book 2',
  //       imageUrl: 'https://res.cloudinary.com/dhgsormzs/image/upload/v1690555098/Zero_to_One_ffveg1.png',
  //       price: 24.99,
  //       discount: 10
  //     },
  //     {
  //       title: 'Book 17',
  //       description: 'Description of Book 2',
  //       imageUrl: 'https://res.cloudinary.com/dhgsormzs/image/upload/v1690555098/Zero_to_One_ffveg1.png',
  //       price: 24.99,
  //       discount: 10
  //     },
  //     {
  //       title: 'Book 18',
  //       description: 'Description of Book 2',
  //       imageUrl: 'https://res.cloudinary.com/dhgsormzs/image/upload/v1690555098/Zero_to_One_ffveg1.png',
  //       price: 24.99,
  //       discount: 10
  //     },
  //     {
  //       title: 'Book 19',
  //       description: 'Description of Book 2',
  //       imageUrl: 'https://res.cloudinary.com/dhgsormzs/image/upload/v1690555098/48_Laws_of_power_f23cv9.png',
  //       price: 24.99,
  //       discount: 10
  //     },
  //     {
  //       title: 'Book 20',
  //       description: 'Description of Book 2',
  //       imageUrl: 'https://res.cloudinary.com/dhgsormzs/image/upload/v1690555098/Zero_to_One_ffveg1.png',
  //       price: 24.99,
  //       discount: 10
  //     },
  //     {
  //       title: 'Book 21',
  //       description: 'Description of Book 2',
  //       imageUrl: 'https://res.cloudinary.com/dhgsormzs/image/upload/v1690555098/48_Laws_of_power_f23cv9.png',
  //       price: 24.99,
  //       discount: 10
  //     },
  //     {
  //       title: 'Book 22',
  //       description: 'Description of Book 2',
  //       imageUrl: 'https://res.cloudinary.com/dhgsormzs/image/upload/v1690555098/Zero_to_One_ffveg1.png',
  //       price: 24.99,
  //       discount: 10
  //     },
  //     {
  //       title: 'Book 23',
  //       description: 'Description of Book 2',
  //       imageUrl: 'https://res.cloudinary.com/dhgsormzs/image/upload/v1690555098/48_Laws_of_power_f23cv9.png',
  //       price: 24.99,
  //       discount: 10
  //     },

  //   ],
  // });

  // await prisma.category.createMany({
  //   data: [
  //     {
  //       name: 'Romance'
  //     },
  //   ]
  // })
}

seed()
  .catch((error) => {
    throw error;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
