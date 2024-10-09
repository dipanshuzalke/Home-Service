const servicesData = [
  {
    id: 1,
    name: "John Doe",
    work: "Professional wiring installation services for residential and commercial properties.",
    location: "New York, NY",
    price: "₹4000 per hour",
    category: "electrical",
    phone: "+91 9876543210",
    email: "johndoe@gmail.com"
  },
  {
    id: 2,
    name: "Mike Smith",
    work: "Repairing faulty circuit breakers to ensure electrical safety.",
    location: "Los Angeles, CA",
    price: "₹3200 per hour",
    category: "electrical",
    phone: "+91 9876543211",
    email: "mikesmith@gmail.com"
  },
  {
    id: 3,
    name: "David Johnson",
    work: "Upgrading old electrical panels for better energy efficiency.",
    location: "Chicago, IL",
    price: "₹40,000 flat rate",
    category: "electrical",
    phone: "+91 9876543212",
    email: "davidjohnson@gmail.com"
  },
  {
    id: 4,
    name: "Susan Brown",
    work: "Installation of ceiling fans in homes and offices.",
    location: "Houston, TX",
    price: "₹2400 per installation",
    category: "electrical",
    phone: "+91 9876543213",
    email: "susanbrown@gmail.com"
  },
  {
    id: 5,
    name: "Emily Davis",
    work: "Expert installation of indoor and outdoor lighting systems.",
    location: "San Francisco, CA",
    price: "₹2000 per fixture",
    category: "electrical",
    phone: "+91 9876543214",
    email: "emilydavis@gmail.com"
  },
  {
    id: 6,
    name: "James Wilson",
    work: "Replacing old or damaged electrical sockets.",
    location: "Miami, FL",
    price: "₹1200 per socket",
    category: "electrical",
    phone: "+91 9876543215",
    email: "jameswilson@gmail.com"
  },
  {
    id: 7,
    name: "Rachel Thompson",
    work: "Thorough inspections of electrical systems for safety and compliance.",
    location: "Boston, MA",
    price: "₹6400 per inspection",
    category: "electrical",
    phone: "+91 9876543216",
    email: "rachelthompson@gmail.com"
  },
  {
    id: 8,
    name: "Robert Miller",
    work: "Installing backup generators and UPS systems for emergency power.",
    location: "Dallas, TX",
    price: "₹32,000 flat rate",
    category: "electrical",
    phone: "+91 9876543217",
    email: "robertmiller@gmail.com"
  },
  {
    id: 9,
    name: "Alex Carter",
    work: "Repairing leaks in pipes, faucets, and fixtures.",
    location: "New York, NY",
    price: "₹2400 per hour",
    category: "plumbing",
    phone: "+91 9876543218",
    email: "alexcarter@gmail.com"
  },
  {
    id: 10,
    name: "Ethan Hall",
    work: "Unclogging and cleaning of drainage systems.",
    location: "Los Angeles, CA",
    price: "₹4000 flat rate",
    category: "plumbing",
    phone: "+91 9876543219",
    email: "ethanhall@gmail.com"
  },
  {
    id: 11,
    name: "Chris Baker",
    work: "Installation of new toilets in homes and commercial buildings.",
    location: "Chicago, IL",
    price: "₹8000 per installation",
    category: "plumbing",
    phone: "+91 9876543220",
    email: "chrisbaker@gmail.com"
  },
  {
    id: 12,
    name: "Sarah Martin",
    work: "Repair and maintenance of water heaters.",
    location: "Houston, TX",
    price: "₹5600 per hour",
    category: "plumbing",
    phone: "+91 9876543221",
    email: "sarahmartin@gmail.com"
  },
  {
    id: 13,
    name: "Daniel Lee",
    work: "Replacing damaged or old pipes in plumbing systems.",
    location: "San Francisco, CA",
    price: "₹4800 per hour",
    category: "plumbing",
    phone: "+91 9876543222",
    email: "daniellee@gmail.com"
  },
  {
    id: 14,
    name: "Jessica Lewis",
    work: "Installation of kitchen or bathroom faucets.",
    location: "Miami, FL",
    price: "₹2000 per fixture",
    category: "plumbing",
    phone: "+91 9876543223",
    email: "jessicalewis@gmail.com"
  },
  {
    id: 15,
    name: "William Scott",
    work: "Installation of sump pumps to prevent basement flooding.",
    location: "Boston, MA",
    price: "₹20,000 per installation",
    category: "plumbing",
    phone: "+91 9876543224",
    email: "williamscott@gmail.com"
  },
  {
    id: 16,
    name: "Emily Young",
    work: "Repairing damaged sewer lines to avoid sewage backup.",
    location: "Dallas, TX",
    price: "₹24,000 flat rate",
    category: "plumbing",
    phone: "+91 9876543225",
    email: "emilyyoung@gmail.com"
  },
  {
    id: 17,
    name: "Ryan Johnson",
    work: "Repair services for desktops, laptops, and hardware components.",
    location: "New York, NY",
    price: "₹3600 per hour",
    category: "technical",
    phone: "+91 9876543226",
    email: "ryanjohnson@gmail.com"
  },
  {
    id: 18,
    name: "Megan Robinson",
    work: "Setting up LAN, WAN, and wireless networks for homes and offices.",
    location: "Los Angeles, CA",
    price: "₹8000 flat rate",
    category: "technical",
    phone: "+91 9876543227",
    email: "meganrobinson@gmail.com"
  },
  {
    id: 19,
    name: "Joshua White",
    work: "Installation and setup of printers for personal and business use.",
    location: "Chicago, IL",
    price: "₹2400 per installation",
    category: "technical",
    phone: "+91 9876543228",
    email: "joshuawhite@gmail.com"
  },
  {
    id: 20,
    name: "Sophia Hernandez",
    work: "Installation of licensed software and security updates.",
    location: "Houston, TX",
    price: "₹2000 per installation",
    category: "technical",
    phone: "+91 9876543229",
    email: "sophiahernandez@gmail.com"
  },
  {
    id: 21,
    name: "Michael Thompson",
    work: "Recover lost or corrupted data from hard drives and other storage devices.",
    location: "San Francisco, CA",
    price: "₹6400 flat rate",
    category: "technical",
    phone: "+91 9876543230",
    email: "michaelthompson@gmail.com"
  },
  {
    id: 22,
    name: "Lucas Martinez",
    work: "Setting up smart home devices for lighting, security, and climate control.",
    location: "Miami, FL",
    price: "₹12,000 flat rate",
    category: "technical",
    phone: "+91 9876543231",
    email: "lucasmartinez@gmail.com"
  },
  {
    id: 23,
    name: "Ava Clark",
    work: "Installation and configuration of security camera systems.",
    location: "Boston, MA",
    price: "₹16,000 per system",
    category: "technical",
    phone: "+91 9876543232",
    email: "avaclark@gmail.com"
  },
  {
    id: 24,
    name: "Noah Lee",
    work: "Removing viruses, malware, and other security threats from computers.",
    location: "Dallas, TX",
    price: "₹3200 per hour",
    category: "technical",
    phone: "+91 9876543233",
    email: "noahlee@gmail.com"
  },
  {
    id: 25,
    name: "Lily Adams",
    work: "Comprehensive cleaning of all areas of the house, including bedrooms, bathrooms, and kitchens.",
    location: "New York, NY",
    price: "₹4800 per session",
    category: "cleaning",
    phone: "+91 9876543234",
    email: "lilyadams@gmail.com"
  },
  {
    id: 26,
    name: "Samuel Walker",
    work: "Deep cleaning and stain removal for carpets and rugs.",
    location: "Los Angeles, CA",
    price: "₹5600 per room",
    category: "cleaning",
    phone: "+91 9876543235",
    email: "samuelwalker@gmail.com"
  },
  {
    id: 27,
    name: "Chloe Turner",
    work: "Window cleaning services for homes and commercial properties.",
    location: "Chicago, IL",
    price: "₹1600 per window",
    category: "cleaning",
    phone: "+91 9876543236",
    email: "chloeturner@gmail.com"
  },
  {
    id: 28,
    name: "Daniel Collins",
    work: "Cleaning and maintenance of hardwood floors.",
    location: "Houston, TX",
    price: "₹4800 per session",
    category: "cleaning",
    phone: "+91 9876543237",
    email: "danielcollins@gmail.com"
  },
  {
    id: 29,
    name: "Zoe Parker",
    work: "Cleaning services for office spaces and commercial buildings.",
    location: "San Francisco, CA",
    price: "₹24,000 per month",
    category: "cleaning",
    phone: "+91 9876543238",
    email: "zoeparker@gmail.com"
  },
  {
    id: 30,
    name: "Henry Young",
    work: "Exterior pressure washing of homes, driveways, and sidewalks.",
    location: "Miami, FL",
    price: "₹3200 per hour",
    category: "cleaning",
    phone: "+91 9876543239",
    email: "henryyoung@gmail.com"
  }
];

module.exports = { data : servicesData };
