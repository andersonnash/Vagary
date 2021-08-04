import db from '../db/connection.js';
import Todo from '../models/todo.js';
import User from '../models/user.js';
import bcrypt from 'bcrypt';

const insertData = async () => {
  await db.dropDatabase();

  const user1 = new User({
    username: 'Nash',
    email: 'Nash@gmail.com',
    password_digest: await bcrypt.hash('nash01', 12),
  });
  await user1.save();

  const user2 = new User({
    username: 'Luz',
    email: 'Luz@gmail.com',
    password_digest: await bcrypt.hash('luz01', 12),
  });
  await user2.save();


  const user3 = new User({
    username: 'Tafari',
    email: 'Tafari@gmail.com',
    password_digest: await bcrypt.hash('tafari01', 12),
  });
  await user3.save();

  const user4 = new User({
    username: 'Babak',
    email: 'Babak@gmail.com',
    password_digest: await bcrypt.hash('babak01', 12),
  });
  await user4.save();



  const todos = [
    {
      name: 'America',
      date: '08/10/2021',
      description: 'very cool place',
      location: 'Zilker Park',
      imageURL: 'https://cdn2.apstatic.com/photos/hike/7036154_large_1555021664.jpg',
      user_id: user1,
      flightInfo:"Monday"
    },
    {
      name: 'America',
      date: '08/10/2021',
      description: 'very awesome place ',
      location: 'Dallas Zoo',
      imageURL:
        'https://dallaszoo.imgix.net/wp-content/uploads/2019/10/30120014/MG_1398-Dallas-Zoo-Entry-CB.jpg?fit=crop&crop=faces&auto=format&q=60&w=395&h=198',
      user_id: user2,
      flightInfo:"Monday"
    },
    {
      name: 'Turkey',
      date: '08/10/2021',
      description: 'beautiful city',
      location: 'Taksim Square',
      imageURL:
      'https://images.unsplash.com/photo-1622587853578-dd1bf9608d26?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      user_id: user3,
      flightInfo:"Monday"
    },

    {
      name: 'Italy',
      date: '08/10/2021',
      description: 'The Colosseum (/ˌkɒləˈsiːəm/ KOL-Ə-SEE-Əm; Italian: Colosseo [Kolosˈsɛːo]) Is An Oval Amphitheatre In The Centre Of The City Of Rome, Italy, Just East Of The Roman Forum.',
      imageURL: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1286&q=80',
      user_id: user4,
      location: "Colosseum",
      flightInfo:"Monday"
    },
  ];

  await Todo.insertMany(todos);
  console.log('Created users & todos');

  db.close();
};

insertData();