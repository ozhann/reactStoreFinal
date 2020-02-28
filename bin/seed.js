const mongoose = require("mongoose");
require("dotenv").config();
const promises = [];

// Mongoose connect
mongoose.connect(process.env.MONGODB_URI, () => {
  console.log("connected to DB for seed");
});

//Products Seed

const Product = require("../models/Product");

const defaultProduct = [
  {
    title: "Tubular TV Dinner",
    category: "Toys",
    descriptionFull:
      "This tv dinner dog toy offers your pup a delicious medley of different materials and noisemakers. Your dog will be enticed by this toy’s ballistic nylon piping and Crazy Crinkle lining.",
    price: 10,
    onStock: 20,
    images: "zuz"
  },
  {
    title: "The Mythical Mutt Bundle",
    category: "Apparel",
    descriptionFull:
      "Spot a pegasus in the wild… we mean in your living room. POSE & PLAY - Pose: Bungee straps fit on a variety of pup heads, the wings can be secured with two different velcro lengths to fit around their belly. Play: The mixed medley of materials (including fabulous gold lame!) make this toy a treat to gnaw on. Both wings and horn have long hair and are packed with crinkle, perfect for pups who life to thrash and shred.",
    price: 20,
    onStock: 30,
    images: "...."
  },
  {
    title: "Furricane Floyd",
    category: "Toys",
    descriptionFull:
      "It's the sound of the squeaker, it's the thrill of the bite. Designed for the dog who loves to let it rip.",
    price: 10,
    onStock: 20,
    images: "zuz"
  },
  {
    title: "Furricane Floyd",
    category: "Toys",
    descriptionFull:
      "It's the sound of the squeaker, it's the thrill of the bite. Designed for the dog who loves to let it rip.",
    price: 10,
    onStock: 20,
    images: "zuz"
  },
  {
    title: "Furst Down Football",
    category: "Toys",
    descriptionFull:
      "Go long! This bouncy, squeaky football is perfect for fetch. See if your Wide Retriever can catch a Howl Mary!",
    price: 10,
    onStock: 20,
    images: "zuz"
  },
  {
    title: "Furricane Floyd",
    category: "Toys",
    descriptionFull:
      "It's the sound of the squeaker, it's the thrill of the bite. Designed for the dog who loves to let it rip.",
    price: 10,
    onStock: 20,
    images: "zuz"
  },
  {
    title: "The Dognald Dog Toy",
    category: "Toys",
    descriptionFull:
      "One doggedly determined Repuplican.The Dognald is ready to lead ... your pup to playtime. Your dog will love The Dognald's reinforced seams, perfect for tough debates. And, you'll never hear this plush guy squeak. Squeaking is for wimps. When chewed, The Dognald grunts. Like a winner. One of Bark's best-selling toys of all time, your pup will love it!",
    price: 10,
    onStock: 20,
    images: "zuz"
  },
  {
    title: "Peanut Butter Benebone",
    category: "Food",
    descriptionFull:
      "Like peanut butter, but lasts fur a long, long time.This Peanut Butter Benebone chew will drive your dog … nuts. We tried making a chew toy entirely out of Peanut Butter, but it turns out those don't last very long. Seconds, with most dogs. The folks at Benebone had a stroke of genius though, adding nylon, the classic tough-to-chew component. Your pooch will love chewing on this peanut-infused bone, and the super-durable non-peanut ingredient (there's only one) will keep even heavy chewers busy for a long while. Designed with your dog’s safety and pleasure in mind, it’s curved, so its center is up off the ground for superior chews. Importantly, the chew is indeed for chewing, and not consuming (so keep in one piece, pups).",
    price: 8,
    onStock: 20,
    images: "zuz"
  }
];

Product.collection.drop();

promises.push(
  Product.create(defaultProduct).then(result => {
    console.log(result);
  })
);

// Wait for all Promisses and close the connection afterwards

Promise.all(promises).then(result => {
  console.log("Seeds finished");
  mongoose.connection.close();
});