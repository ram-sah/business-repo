const mongoose = require("mongoose");
const db = require("../models/");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/vetDiscount", {
  useNewUrlParser: true
});

const discountSeed = [
  {
    Category: "Auto Care / Parts",
    business: "Advance Auto Parts",
    description: "10% off with military ID",
    discount: "10%"
  },
  {
    Category: "Auto Care / Parts",
    business: "Auto Zone",
    description: "Varies Per Store – Discount varies, simply ask",
    discount: ""
  },
  {
    Category: "Auto Care / Parts",
    business: "Big 10 Tires",
    description: "Discount varies, simply ask.",
    discount: ""
  },
  {
    Category: "Auto Care / Parts",
    business: "Jiffy lube",
    description: "10% off",
    discount: "10%"
  },
  {
    Category: "Auto Care / Parts",
    business: "Kelly’s Auto Parts",
    description: "Kelly’s offers a 10% discount all the time for all vets and active service members.",
    discount: "10%"
  },
  {
    Category: "Auto Manufactures",
    business: "Toyota",
    description: "$500 off + $500 for firs time buyers.",
    discount: "$500"
  },
  {
    Category: "Auto Manufactures",
    business: "Suzuki",
    description: "$500 off for you and immediate family.",
    discount: "$500"
  },
  {
    Category: "Auto Manufactures",
    business: "Suzuki",
    description: "$500 off for you and immediate family.",
    discount: "$500"
  },
  {
    Category: "Auto Manufactures",
    business: "Hyundai",
    description: "All active duty, Reservist/National Guard, veteran and retired military personnel will receive an additional $500 off.",
    discount: "$500"
  },
  {
    Category: "Banking",
    business: "American Express",
    description: "AMEX waives ALL fees for active duty military, including the annual fees on all of their cards.",
    discount: ""
  },
  {
    Category: "Banking",
    business: "U.S. Bank",
    description: "US Bank gives all active duty & veterans free Premiere checking & savings with ID or DD214",
    discount: ""
  },
  {
    Category: "Banking",
    business: "National Credit Solutions",
    description: "25% discount, call toll free at 866-485-2540 x109, and for a direct line please call 972-746-4209",
    discount: ""
  },
  {
    Category: "Electronics",
    business: "Best Buy",
    description: "Varies from store to store, but many retail locations offer a 10% discount to vets. Just ask a Best Buy sales associate about it.",
    discount: "10%"
  },
  {
    Category: "Electronics",
    business: "Sprint",
    description: "10-18% off.",
    discount: "10%"
  },
  {
    Category: "Electronics",
    business: "Sprint Business",
    description: "15% to 20% Discount, 1-888-788-4727",
    discount: "15%"
  },
  {
    Category: "Electronics",
    business: "Verizon",
    description: "23% discount on monthly bills. Applies only to the military member’s primary line.",
    discount: "23%"
  },
  {
    Category: "Hardware",
    business: "Home Depot",
    description: "10% off Year Round",
    discount: "10%"
  },
  {
    Category: "Hardware",
    business: "Lowes",
    description: "10% off Year Round",
    discount: "10%"
  },
  {
    Category: "Hotels",
    business: "Best Inns and Suites",
    description: "Varies, must present Military ID with check-in.",
    discount: ""
  },
  {
    Category: "Hotels",
    business: "Best Western",
    description: "Discounted room rates at Best Western hotels for active military. Present ID at check-in or when reserving via the phone.",
    discount: ""
  },
  {
    Category: "Hotels",
    business: "La Quinta Hotels",
    description: "12% discount on room reservations. Ask about it.",
    discount: "12%"
  },
  {
    Category: "Hotels",
    business: "Marriott Hotels",
    description: "When booking your room ask for the military discount.",
    discount: ""
  },
  {
    Category: "Hotels",
    business: "Motel 6",
    description: "Motel 6 is proud to offer all active and retired military personnel and their families a 10% discount.",
    discount: "10%"
  },
  {
    Category: "Hotels",
    business: "Red Roof Inn",
    description: "Military leisure travelers receive a 15% discount nationwide.",
    discount: "15%"
  },
  {
    Category: "Hotels",
    business: "Red Roof Inn",
    description: "Military leisure travelers receive a 15% discount nationwide.",
    discount: "15%"
  },
  {
    Category: "Insurance",
    business: "GEICO",
    description: "Active duty and retired personnel, as well as National Guardsmen and Reserve members, may be eligible for up to a 15% discount on insurance premiums.",
    discount: "15%"
  },
  {
    Category: "Insurance",
    business: "USAA",
    description: "We proudly serve Military Members and Their Families",
    discount: ""
  },
  {
    Category: "Restaurants",
    business: "Applebee’s",
    description: "Discount varies per location, simply ask and have a valid military ID with you.",
    discount: ""
  },
  {
    Category: "Restaurants",
    business: "Arby's",
    description: "Discount varies per location, simply ask and have a valid military ID with you.",
    discount: ""
  },
  {
    Category: "Restaurants",
    business: "Bennigan’s",
    description: "Active military and vets get 10% off your total check at Bennigan’s.",
    discount: "10%"
  },
  {
    Category: "Restaurants",
    business: "Ben & Jerry’s",
    description: "Ask about it the next time you order a scoop of ice cream. Varies by location but is typically 15%.",
    discount: "15%"
  },
  {
    Category: "Restaurants",
    business: "Bob Evans",
    description: "10% discounts",
    discount: "10%"
  },
  {
    Category: "Restaurants",
    business: "Boston Market",
    description: "20% discounts",
    discount: "20%"
  },
  {
    Category: "Restaurants",
    business: "Burger King",
    description: "10% off military discount",
    discount: "10%"
  },
  {
    Category: "Restaurants",
    business: "Carl’s Jr.",
    description: "Discount varies, simply ask and have a valid military ID with you.",
    discount: ""
  },
  {
    Category: "Restaurants",
    business: "Cinnabon",
    description: "15% off at participating locations.",
    discount: "15%"
  },
  {
    Category: "Restaurants",
    business: "Cracker Barrel",
    description: "10-15% off, at manager’s discretion.",
    discount: "10%"
  },
  {
    Category: "Restaurants",
    business: "Dairy Queen",
    description: "Get a 10% off your food and ice cream at select Dairy Queen locations",
    discount: "10%"
  },
  {
    Category: "Restaurants",
    business: "Del Taco",
    description: "50% off at participating locations.",
    discount: "50%"
  },
  {
    Category: "Restaurants",
    business: "Denny’s",
    description: "10% Discount simply ask.",
    discount: "10%"
  },
  {
    Category: "Restaurants",
    business: "Golden Corral",
    description: "Get 10% off your bill every time you dine",
    discount: "10%"
  },
  {
    Category: "Restaurants",
    business: "Hard Rock Cafe",
    description: "Get a slick 15% off discount",
    discount: "15%"
  },
  {
    Category: "Restaurants",
    business: "Hooter’s",
    description: "Varies by location but most Hooter’s will give a flat 15% off discount to active and retired military personnel. Often times the discount is only available on certain nights.",
    discount: "15%"
  },
  {
    Category: "Restaurants",
    business: "IHOP",
    description: "10% off your entire meal.",
    discount: "10%"
  },
  {
    Category: "Restaurants",
    business: "Longhorn Steakhouse",
    description: "10% military discount.",
    discount: "10%"
  },
  {
    Category: "Restaurants",
    business: "Popeye’s",
    description: "10% military discount.",
    discount: "10%"
  },
  {
    Category: "Restaurants",
    business: "Subway",
    description: "10% off, if not in a military town.",
    discount: "10%"
  },
  {
    Category: "Restaurants",
    business: "Zaxby’s",
    description: "10% off",
    discount: "10%"
  },
  {
    Category: "Restaurants",
    business: "Zaxby’s",
    description: "10% off",
    discount: "10%"
  },
  {
    Category: "Retail",
    business: "Abercrombie & Fitch",
    description: "10-15% off, at manager’s discretion",
    discount: "10%"
  },
  {
    Category: "Retail",
    business: "AC Moore",
    description: "Save 15% on all regular and sale-priced purchases",
    discount: "15%"
  },
  {
    Category: "Retail",
    business: "Aeropostale",
    description: "10% off ",
    discount: "10%"
  },
  {
    Category: "Retail",
    business: "American Eagle Outfitters",
    description: "Get 10% off your in-store purchase, at manager’s discretion.",
    discount: "10%"
  },
  {
    Category: "Retail",
    business: "Banana Republic Factory Store",
    description: "They offer a flat 10% off for veterans every day of the year",
    discount: "10%"
  },
  {
    Category: "Retail",
    business: "Barnes and Noble",
    description: "6% off regular price",
    discount: "6%"
  },
  {
    Category: "Retail",
    business: "Bass Pro Shops",
    description: "Bass Pro Shops will give you a 10% discount",
    discount: "10%"
  },
  {
    Category: "Retail",
    business: "Bed Bath & Beyond",
    description: "Flat 10% off discounts for vets and their families. Varies from store to store.",
    discount: "10%"
  },
  {
    Category: "Retail",
    business: "Dick’s Sporting Goods",
    description: "The next time you are shopping at Dick’s, ask about their 10% discount for vets. Varies from store to store.",
    discount: "10%"
  },
  {
    Category: "Retail",
    business: "Bass Pro Shops",
    description: "Bass Pro Shops will give you a 10% discount",
    discount: "10%"
  },
];

db.Discount.deleteMany({})
  .then(() => db.Discount.collection.insertMany(discountSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });