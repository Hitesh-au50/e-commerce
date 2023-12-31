const products = [
  {
    name: "Patanjali Special Chyawanprash 1 kg",
    image: "/images/patanjali.jpg",
    description:
      "Chyawanprash is a time-tested Ayurvedic formulation of more than 41 Ayurvedic herbs that aid in boosting the immune system, thereby protecting the body from everyday infections like cough & cold, etc. caused by bacteria, viruses, dust and weather change.",
    brand: "Amazon",
    category: "Wellness",
    price: 352,
    countInStock: 2,
    rating: 4,
    numReviews: 12,
  },
  {
    name: "nurokind-od",
    image: "/images/nurokind-od.jpg",
    description:
      "nurokind-od is a time-tested Ayurvedic formulation of more than 41 Ayurvedic herbs that aid in boosting the immune system, thereby protecting the body from everyday infections like cough & cold, etc. caused by bacteria, viruses, dust and weather change.",
    brand: "Amazon",
    category: "Wellness",
    price: 78,
    countInStock: 2,
    rating: 4,
    numReviews: 12,
  },
  {
    name: "almodipine-10mg",
    image: "/images/almodipine-10mg.png",
    description:
      "almodipine-10mg is a time-tested Ayurvedic formulation of more than 41 Ayurvedic herbs that aid in boosting the immune system, thereby protecting the body from everyday infections like cough & cold, etc. caused by bacteria, viruses, dust and weather change.",
    brand: "Amazon",
    category: "Wellness",
    price: 70,
    countInStock: 8,
    rating: 3,
    numReviews: 10,
  },
  {
    name: "Amlodipine-Lisinopril",
    image: "/images/Amlodipine-Lisinopril-Tablets.jpg",
    description:
      "Amlodipine-Lisinopril is a time-tested Ayurvedic formulation of more than 41 Ayurvedic herbs that aid in boosting the immune system, thereby protecting the body from everyday infections like cough & cold, etc. caused by bacteria, viruses, dust and weather change.",
    brand: "Amazon",
    category: "Wellness",
    price: 110,
    countInStock: 10,
    rating: 4,
    numReviews: 18,
  },
  {
    name: "amlodipine",
    image: "/images/amlodipine.jpg",
    description:
      "amlodipine is a time-tested Ayurvedic formulation of more than 41 Ayurvedic herbs that aid in boosting the immune system, thereby protecting the body from everyday infections like cough & cold, etc. caused by bacteria, viruses, dust and weather change.",
    brand: "Amazon",
    category: "Wellness",
    price: 80,
    countInStock: 20,
    rating: 4.3,
    numReviews: 11,
  },
  {
    name: "AMLOSIM-_AT",
    image: "/images/AMLOSIM-_AT.jpg",
    description:
      "AMLOSIM-_AT is a time-tested Ayurvedic formulation of more than 41 Ayurvedic herbs that aid in boosting the immune system, thereby protecting the body from everyday infections like cough & cold, etc. caused by bacteria, viruses, dust and weather change.",
    brand: "Amazon",
    category: "Wellness",
    price: 76,
    countInStock: 21,
    rating: 4,
    numReviews: 22,
  },
  {
    name: "Atenolol-50",
    image: "/images/Atenolol-50.jpg",
    description:
      "Atenolol-50 is a time-tested Ayurvedic formulation of more than 41 Ayurvedic herbs that aid in boosting the immune system, thereby protecting the body from everyday infections like cough & cold, etc. caused by bacteria, viruses, dust and weather change.",
    brand: "Amazon",
    category: "Wellness",
    price: 48,
    countInStock: 32,
    rating: 4,
    numReviews: 12,
  },
  {
    name: "Atenolol-Tablets-100mg",
    image: "/images/Atenolol-Tablets-100mg.jpg",
    description:
      "Atenolol-Tablets-100mg is a time-tested Ayurvedic formulation of more than 41 Ayurvedic herbs that aid in boosting the immune system, thereby protecting the body from everyday infections like cough & cold, etc. caused by bacteria, viruses, dust and weather change.",
    brand: "Amazon",
    category: "Wellness",
    price: 86,
    countInStock: 25,
    rating: 4,
    numReviews: 13,
  },
  {
    name: "ativan-1mg",
    image: "/images/ativan-1mg.jpg",
    description:
      "ativan-1mg is a time-tested Ayurvedic formulation of more than 41 Ayurvedic herbs that aid in boosting the immune system, thereby protecting the body from everyday infections like cough & cold, etc. caused by bacteria, viruses, dust and weather change.",
    brand: "Amazon",
    category: "Wellness",
    price: 72,
    countInStock: 5,
    rating: 4,
    numReviews: 12,
  },
  {
    name: "ativan",
    image: "/images/ativan.jpg",
    description:
      "ativan is a time-tested Ayurvedic formulation of more than 41 Ayurvedic herbs that aid in boosting the immune system, thereby protecting the body from everyday infections like cough & cold, etc. caused by bacteria, viruses, dust and weather change.",
    brand: "Amazon",
    category: "Wellness",
    price: 75,
    countInStock: 22,
    rating: 4,
    numReviews: 13,
  },
  {
    name: "comiflame",
    image: "/images/comiflame.jpg",
    description:
      "comiflame is a time-tested Ayurvedic formulation of more than 41 Ayurvedic herbs that aid in boosting the immune system, thereby protecting the body from everyday infections like cough & cold, etc. caused by bacteria, viruses, dust and weather change.",
    brand: "Amazon",
    category: "Wellness",
    price: 15,
    countInStock: 50,
    rating: 5,
    numReviews: 12,
  },
  {
    name: "denk-400",
    image: "/images/denk-400.jpg",
    description:
      "denk-400 is a time-tested Ayurvedic formulation of more than 41 Ayurvedic herbs that aid in boosting the immune system, thereby protecting the body from everyday infections like cough & cold, etc. caused by bacteria, viruses, dust and weather change.",
    brand: "Amazon",
    category: "Wellness",
    price: 70,
    countInStock: 28,
    rating: 4,
    numReviews: 10,
  },
  {
    name: "high blood",
    image: "/images/high-blood.jpg",
    description:
      "high blood is a time-tested Ayurvedic formulation of more than 41 Ayurvedic herbs that aid in boosting the immune system, thereby protecting the body from everyday infections like cough & cold, etc. caused by bacteria, viruses, dust and weather change.",
    brand: "Amazon",
    category: "Wellness",
    price: 60,
    countInStock: 32,
    rating: 4,
    numReviews: 18,
  },
  {
    name: "Ibuprofen-Tablets-800-mg",
    image: "/images/Ibuprofen-Tablets-800-mg.jpg",
    description:
      "Ibuprofen-Tablets-800-mg is a time-tested Ayurvedic formulation of more than 41 Ayurvedic herbs that aid in boosting the immune system, thereby protecting the body from everyday infections like cough & cold, etc. caused by bacteria, viruses, dust and weather change.",
    brand: "Amazon",
    category: "Wellness",
    price: 79,
    countInStock: 12,
    rating: 3,
    numReviews: 15,
  },
  {
    name: "ibuprofen",
    image: "/images/ibuprofen.jpg",
    description:
      "ibuprofen is a time-tested Ayurvedic formulation of more than 41 Ayurvedic herbs that aid in boosting the immune system, thereby protecting the body from everyday infections like cough & cold, etc. caused by bacteria, viruses, dust and weather change.",
    brand: "Amazon",
    category: "Wellness",
    price: 88,
    countInStock: 12,
    rating: 3,
    numReviews: 5,
  },
  {
    name: "Lisinopril",
    image: "/images/Lisinopril.jpg",
    description:
      "Lisinopril is a time-tested Ayurvedic formulation of more than 41 Ayurvedic herbs that aid in boosting the immune system, thereby protecting the body from everyday infections like cough & cold, etc. caused by bacteria, viruses, dust and weather change.",
    brand: "Amazon",
    category: "Wellness",
    price: 70,
    countInStock: 32,
    rating: 4,
    numReviews: 16,
  },
  {
    name: "meftal",
    image: "/images/meftal.jpg",
    description:
      "meftal is a time-tested Ayurvedic formulation of more than 41 Ayurvedic herbs that aid in boosting the immune system, thereby protecting the body from everyday infections like cough & cold, etc. caused by bacteria, viruses, dust and weather change.",
    brand: "Amazon",
    category: "Wellness",
    price: 75,
    countInStock: 32,
    rating: 4,
    numReviews: 14,
  },
  {
    name: "Montene-5-Tablet_l-300",
    image: "/images/Montene-5-Tablet_l-300x300.jpg",
    description:
      "Montene-5-Tablet_l-300 is a time-tested Ayurvedic formulation of more than 41 Ayurvedic herbs that aid in boosting the immune system, thereby protecting the body from everyday infections like cough & cold, etc. caused by bacteria, viruses, dust and weather change.",
    brand: "Amazon",
    category: "Wellness",
    price: 120,
    countInStock: 62,
    rating: 4,
    numReviews: 22,
  },
  {
    name: "neurokind-500",
    image: "/images/neurokind-500.jpg",
    description:
      "neurokind-500 is a time-tested Ayurvedic formulation of more than 41 Ayurvedic herbs that aid in boosting the immune system, thereby protecting the body from everyday infections like cough & cold, etc. caused by bacteria, viruses, dust and weather change.",
    brand: "Amazon",
    category: "Wellness",
    price: 90,
    countInStock: 52,
    rating: 4,
    numReviews: 22,
  },
  {
    name: "nurokind-next",
    image: "/images/nurokind-next.jpg",
    description:
      "nurokind-next is a time-tested Ayurvedic formulation of more than 41 Ayurvedic herbs that aid in boosting the immune system, thereby protecting the body from everyday infections like cough & cold, etc. caused by bacteria, viruses, dust and weather change.",
    brand: "Amazon",
    category: "Wellness",
    price: 130,
    countInStock: 72,
    rating: 4,
    numReviews: 25,
  },
  {
    name: "neurokind-plus",
    image: "/images/neurokind-plus.jpg",
    description:
      "neurokind-plus is a time-tested Ayurvedic formulation of more than 41 Ayurvedic herbs that aid in boosting the immune system, thereby protecting the body from everyday infections like cough & cold, etc. caused by bacteria, viruses, dust and weather change.",
    brand: "Amazon",
    category: "Wellness",
    price: 98,
    countInStock: 42,
    rating: 4,
    numReviews: 22,
  },
  {
    name: "nurokind-pet",
    image: "/images/nurokind-pet.jpg",
    description:
      "nurokind-pet is a time-tested Ayurvedic formulation of more than 41 Ayurvedic herbs that aid in boosting the immune system, thereby protecting the body from everyday infections like cough & cold, etc. caused by bacteria, viruses, dust and weather change.",
    brand: "Amazon",
    category: "Wellness",
    price: 80,
    countInStock: 52,
    rating: 4,
    numReviews: 13,
  },
  {
    name: "Oncodox-Injection",
    image: "/images/Oncodox-Injection.jpg",
    description:
      "Oncodox-Injection is a time-tested Ayurvedic formulation of more than 41 Ayurvedic herbs that aid in boosting the immune system, thereby protecting the body from everyday infections like cough & cold, etc. caused by bacteria, viruses, dust and weather change.",
    brand: "Amazon",
    category: "Wellness",
    price: 70,
    countInStock: 32,
    rating: 4,
    numReviews: 12,
  },
  {
    name: "revelol-am-25-2.5-tablet-er",
    image: "/images/revelol-am-25-2.5-tablet-er.jpg",
    description:
      "revelol-am-25-2.5-tablet-er is a time-tested Ayurvedic formulation of more than 41 Ayurvedic herbs that aid in boosting the immune system, thereby protecting the body from everyday infections like cough & cold, etc. caused by bacteria, viruses, dust and weather change.",
    brand: "Amazon",
    category: "Wellness",
    price: 150,
    countInStock: 72,
    rating: 4,
    numReviews: 18,
  },
  {
    name: "SANO-9319733003761-0",
    image: "/images/SANO-9319733003761-0.jpg",
    description:
      "SANO-9319733003761-0 is a time-tested Ayurvedic formulation of more than 41 Ayurvedic herbs that aid in boosting the immune system, thereby protecting the body from everyday infections like cough & cold, etc. caused by bacteria, viruses, dust and weather change.",
    brand: "Amazon",
    category: "Wellness",
    price: 89,
    countInStock: 32,
    rating: 4,
    numReviews: 22,
  },
  {
    name: "saridon",
    image: "/images/saridon.jpg",
    description:
      "saridon is a time-tested Ayurvedic formulation of more than 41 Ayurvedic herbs that aid in boosting the immune system, thereby protecting the body from everyday infections like cough & cold, etc. caused by bacteria, viruses, dust and weather change.",
    brand: "Amazon",
    category: "Wellness",
    price: 70,
    countInStock: 42,
    rating: 4,
    numReviews: 32,
  },
  {
    name: "spartan-am",
    image: "/images/spartan-am.jpg",
    description:
      "spartan-am is a time-tested Ayurvedic formulation of more than 41 Ayurvedic herbs that aid in boosting the immune system, thereby protecting the body from everyday infections like cough & cold, etc. caused by bacteria, viruses, dust and weather change.",
    brand: "Amazon",
    category: "Wellness",
    price: 60,
    countInStock: 62,
    rating: 4,
    numReviews: 17,
  },
  {
    name: "tylenol",
    image: "/images/tylenol.jpg",
    description:
      "tylenol is a time-tested Ayurvedic formulation of more than 41 Ayurvedic herbs that aid in boosting the immune system, thereby protecting the body from everyday infections like cough & cold, etc. caused by bacteria, viruses, dust and weather change.",
    brand: "Amazon",
    category: "Wellness",
    price: 50,
    countInStock: 62,
    rating: 4,
    numReviews: 42,
  },
  {
    name: "xenole-500",
    image: "/images/xenole-500.jpg",
    description:
      "xenole-500 is a time-tested Ayurvedic formulation of more than 41 Ayurvedic herbs that aid in boosting the immune system, thereby protecting the body from everyday infections like cough & cold, etc. caused by bacteria, viruses, dust and weather change.",
    brand: "Amazon",
    category: "Wellness",
    price: 75,
    countInStock: 32,
    rating: 4,
    numReviews: 14,
  },
];

export default products;
