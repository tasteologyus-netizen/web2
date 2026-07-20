/** Encode path segments for asset URLs served from Vite publicDir (Assets) */
export const asset = (path) =>
  '/' + path.split('/').map(encodeURIComponent).join('/')

export const mission =
  'Tasteology blends food science and culinary artistry to help brands create market-ready products with unforgettable flavor.'

export const vision =
  'We bridge the gap between culinary concepts and mass-production reality through molecular precision and artisanal soul.'

export const stats = [
  { value: '600+', label: 'Business CPG' },
  { value: '2500+', label: 'Products' },
  { value: '165+', label: 'Restaurants' },
]

export const services = [
  {
    title: 'Food CPG Formulation',
    summary: 'Transform concepts into market-ready products with expert formulation.',
    detail:
      'Our comprehensive food CPG formulation service combines cutting-edge food science with practical manufacturing expertise to transform your ideas into successful market-ready products. With a team of 8 Food Scientists and 2 Food Chemists, we deliver exceptional results across all product categories.',
    image: asset('Services/S1.png'),
  },
  {
    title: 'Flavor Optimization',
    summary: 'Enhance taste profiles to create memorable and irresistible flavors.',
    detail:
      'In the crowded food market, flavor is king. Our flavor optimization experts use a combination of sensory analysis, flavor chemistry, and culinary expertise to create impactful flavor solutions that delight your customers and drive sales.',
    image: asset('Services/S2.png'),
  },
  {
    title: 'Recipe Development',
    summary: 'Develop recipes that capture your brand and delight customers.',
    detail:
      'More than just a list of ingredients, a recipe is a story told through taste and texture. Our collaborative, client-focused process produces recipes that are delicious, operationally efficient, and profitable.',
    image: asset('Services/S3.png'),
  },
]

export const products = [
  {
    title: 'Premium Functional Chewing Gum',
    client: 'AURA Finland',
    blurb:
      'Plant-based, sugar-free functional chewing gum in Wild Mint & Bergamot. Formulated for long-lasting freshness with a natural base and no artificial sweeteners.',
    image: asset('creation_lab_photo/AURA- SHOWINGGUM-finland.jpeg'),
  },
  {
    title: 'Performance Elixir',
    client: 'OXYL Sweden',
    blurb:
      'Yuzu Mint functional beverage with electrolytes for hydration and mental clarity. A clean performance elixir designed as a pre-workout or midday boost.',
    image: asset('creation_lab_photo/OXYL-SWEEDEN.jpeg'),
  },
  {
    title: 'Crunchy Beetroot Puffs',
    client: 'Greenleaf Snacks Finland',
    blurb:
      'Vegan beetroot puffs in Smoky Paprika & Sea Salt. Plant-based protein, non-GMO ingredients, and bold natural flavor.',
    image: asset('creation_lab_photo/Greenleaf-finland.jpeg'),
  },
  {
    title: 'Electrolyte Hydration Drink',
    client: 'The Mountain Co-op United States',
    blurb:
      'Refreshing functional hydration with clean ingredients and balanced electrolytes. Bold natural flavors like Mango Pineapple never chalky.',
    image: asset('creation_lab_photo/The-Mountain co-op -america.jpeg'),
  },
  {
    title: 'Trek Fuel Protein Bar',
    client: 'Trek Fuel United States',
    blurb:
      'High-protein nutrition bar engineered for active lifestyles. Premium protein, wholesome grains, and natural flavors for on-the-go fuel.',
    image: asset('creation_lab_photo/Trek-Fuel-protein _bar.jpeg'),
  },
  {
    title: 'FLAVRI Low-Calorie Sauce',
    client: 'FLAVRI',
    blurb:
      'A bold, low-calorie sauce with no added sugar formulated to pair with chicken and beef while keeping meals satisfying.',
    image: asset('creation_lab_photo/FLAVRI.png'),
  },
  {
    title: 'Chocolate Protein Shake',
    client: 'Boost Egypt',
    blurb:
      'Premium whey protein isolate and natural cocoa. Smooth, creamy texture with no artificial sweeteners or preservatives.',
    image: asset('creation_lab_photo/Boost-proteinshake.jpg'),
  },
  {
    title: 'Fresh Juice Drink',
    client: 'BeBe United States',
    blurb:
      'Authentic fresh juice with premium fruit concentrates. Apple, grape, and citrus notes shelf-stable without artificial preservatives.',
    image: asset('creation_lab_photo/Bebe_Juice.jpg'),
  },
  {
    title: 'Plant-Based Protein Bar',
    client: 'BON Better United States',
    blurb:
      'Pea and brown rice protein with innovative binders for a chewy, dessert-like snack that stays plant-based.',
    image: asset('creation_lab_photo/bon_Better-ProteinBar.jpg'),
  },
  {
    title: 'Premium Veggie Chips',
    client: 'The GOOD Crisp United States',
    blurb:
      'Crispy chips from sweet potatoes, beets, and kale lightly seasoned with sea salt and organic spices.',
    image: asset('creation_lab_photo/Chips-The_GOOD_Crisp.jpg'),
  },
  {
    title: 'Protein-Packed Energy Bites',
    client: 'MiniCrunch United States',
    blurb:
      'No-bake energy bites with plant-based protein, dates, nuts, and superfoods no added sugars.',
    image: asset('creation_lab_photo/MiniCrush-Gummys.jpg'),
  },
  {
    title: 'Organic Chocolate Bar',
    client: 'BARE United States',
    blurb:
      'Ethically sourced cocoa with natural sweeteners. Rich, smooth texture with hints of vanilla and sea salt.',
    image: asset('creation_lab_photo/Chocolate-bar- BARE.jpg'),
  },
  {
    title: 'Protein Oat Snacks',
    client: 'The Incredible Oat United States',
    blurb:
      'High-protein oat-based snacks packed with fiber and essential nutrients for a wholesome, satisfying treat.',
    image: asset('creation_lab_photo/Theincredbleoat_Protein_Snacks.png'),
  },
  {
    title: 'Premium Food Sauce',
    client: 'Natra Foods United States',
    blurb:
      'Artisanal food sauce crafted with organic ingredients and authentic spices clean label and shelf-stable.',
    image: asset('creation_lab_photo/Natra - Foodsauce.jpg'),
  },
  {
    title: 'Organic Fruit Jam',
    client: 'True Jams United States',
    blurb:
      'Premium organic fruit jam with locally sourced fruits and minimal processing no added sugars.',
    image: asset('creation_lab_photo/True-jams.jpg'),
  },
  {
    title: 'Freeze-Dried Candy',
    client: 'G-box United States',
    blurb:
      'Innovative freeze-dried candy that retains intense fruit flavors lightweight, crunchy, no added preservatives.',
    image: asset('creation_lab_photo/G-box- Freez_Dried_candy.webp'),
  },
  {
    title: 'Protein Nutrition Bar',
    client: 'Fit&Lean United States',
    blurb:
      'Clean high-protein bar with whey isolate, fiber-rich grains, and natural sweeteners for sustained energy.',
    image: asset('creation_lab_photo/Fit&Lean Bar.jpg'),
  },
  {
    title: 'Natural Energy Drink',
    client: 'Mountain Goat Energy United States',
    blurb:
      'Clean energy with natural caffeine, B-vitamins, and electrolytes sustained clarity without the crash.',
    image: asset('creation_lab_photo/Mountain Goad Energy .jpg'),
  },
  {
    title: 'Protein Energy Balls',
    client: 'Fitzy Saudi Arabia',
    blurb:
      'Wholesome oats, nut butter, and plant-based protein convenient grab-and-go nutrition in every bite.',
    image: asset('creation_lab_photo/Fitzy- Protein Balls.jpg'),
  },
  {
    title: 'Hydration Powder',
    client: 'Savory Punch United States',
    blurb:
      'Advanced electrolyte formula with essential minerals and vitamins clean, refreshing, no artificial colors.',
    image: asset('creation_lab_photo/Savory Punch - Haydration Powder.jpg'),
  },
  {
    title: 'Protein Gummy Bears',
    client: 'Happi Bites United States',
    blurb:
      'Protein-packed gummy bears without added sugar soft, chewy texture with vibrant fruit flavors.',
    image: asset('creation_lab_photo/Happi Bites-Protein gummy bears without sugar.jpeg'),
  },
  {
    title: 'Matcha Almond Milk Drink',
    client: 'Matchisma Sweden',
    blurb:
      'Ceremonial-grade matcha with almond milk and nootropics for sustained energy and mental clarity.',
    image: asset('creation_lab_photo/matchisma-Matcha almond milk drink with nootropics.jpeg'),
  },
  {
    title: 'Midnight Oats',
    client: 'Lunar Malaysia',
    blurb:
      'Overnight oats formulated for nighttime with melatonin-rich tart cherries and calming botanicals.',
    image: asset('creation_lab_photo/Lunar-Midnight oats-Malaysia.jpeg'),
  },
  {
    title: 'Oral Dissolving Films',
    client: 'Velo United States',
    blurb:
      'Ultra-thin portable strips that dissolve instantly precise nutrition doses with rapid absorption.',
    image: asset('creation_lab_photo/Velo-Oral Dissolving Films-Usa.jpeg'),
  },
  {
    title: 'Overnight Oats',
    client: 'Ono Canada',
    blurb:
      'Canadian-grown grains with superfood additions creamy texture and balanced macros for breakfast.',
    image: asset('creation_lab_photo/ono-overnight oats-canada.jpeg'),
  },
  {
    title: 'Caramel Chews',
    client: 'Shoyu Swirl Hong Kong',
    blurb:
      'Rich buttery caramel with subtle soy sauce notes umami-sweet confectionery with no artificial additives.',
    image: asset('creation_lab_photo/shoyu swirl-caramel chews-Hong kong.jpeg'),
  },
  {
    title: 'Vine-Cola',
    client: 'Vine-Cola Lebanon',
    blurb:
      'Cola featuring Lebanese grape varieties and Mediterranean botanicals an authentic Middle Eastern twist.',
    image: asset('creation_lab_photo/vine-cola -Lebanon.jpeg'),
  },
  {
    title: 'Natural Energy Drink',
    client: 'Elemental United States',
    blurb:
      'Premium natural energy with clean functional ingredients sustained energy without the crash.',
    image: asset('creation_lab_photo/Elemental-Natural Energy drink-usa.jpeg'),
  },
  {
    title: 'Premium Spice Blends',
    client: 'Fire&smock United States',
    blurb:
      'Artisanal spice blends sourced globally unique combinations that enhance authentic culinary traditions.',
    image: asset('creation_lab_photo/Fire&smock - spices -usa.jpeg'),
  },
  {
    title: 'Oat Milk',
    client: 'OAT DREAM Canada',
    blurb:
      'Creamy dairy alternative from Canadian-grown oats smooth, naturally sweet, perfect for coffee or cereal.',
    image: asset('creation_lab_photo/Oatdream- Oat Milk-Canada.jpeg'),
  },
  {
    title: 'Matcha Oat Milk',
    client: 'Maison United States',
    blurb:
      'Ceremonial-grade matcha latte with creamy oat milk balanced earthy flavor and antioxidant benefits.',
    image: asset('creation_lab_photo/Maison-Matcha Latte oat Milk - US.jpeg'),
  },
  {
    title: 'Hot Honey',
    client: 'BEEFIRE New York',
    blurb:
      'Wildflower honey with a custom chili blend sweet-heat that elevates pizza, chicken, cheese boards, and cocktails.',
    image: asset('creation_lab_photo/BEEFIRE - HOt Honey - Newyork.jpeg'),
  },
]

export const reviews = [
  {
    quote:
      'Tasteology team were great help for us on our project. They were super professional and patient. They helped us get to where we wanted to go.',
    author: 'Carter',
    place: 'North Carolina',
  },
  {
    quote:
      'I worked with Tasteology & Co on a formulation project and was really impressed. Their team combines strong scientific knowledge with great taste development, creating products that are both functional and market-ready.',
    author: 'Kate',
    place: 'California',
  },
  {
    quote:
      'Honestly Tasteology are amazing, from their helpfulness a year before I even contracted them to their knowledge and quick responsiveness every aspect is unmatched. As an Egyptian that couldn’t find a service provider for 1.5 years I’m definitely not going anywhere but here.',
    author: 'BoosTr',
    place: 'Egypt',
  },
  {
    quote:
      'Tasteology team are true masters of their craft. Their ability to discover, refine, and harmonize flavors is nothing short of extraordinary. This is the team you want by your side.',
    author: 'ELC SAVORY',
    place: '',
  },
  {
    quote:
      'The Tasteology team exceeded all our expectations! Their innovative approach to recipe development and deep understanding of our market needs helped us create a product that’s already receiving rave reviews.',
    author: 'Rachel',
    place: 'San Francisco, California',
  },
  {
    quote:
      'Tasteology team delivered amazing recipes as per our requirement and was flexible with our feedback. Communication was top-notch and they met all deadlines.',
    author: 'Ellie',
    place: 'Texas, US',
  },
  {
    quote:
      'Result was outstanding. Communication was very smooth. Information is up to date. Thanks to the best remote team of food scientists I worked with.',
    author: 'Jamie',
    place: 'NY, United States',
  },
  {
    quote:
      'Instead of simply saying something couldn’t be done, Tasteology proposed alternatives, tested variations, and iterated until we landed on a solution that stayed within scientific limits and delivered a product I was happy with.',
    author: 'Hanhee Rushing',
    place: 'California, US',
  },
  {
    quote:
      'Tasteology delivered exceptional results. They were instrumental in providing comprehensive support throughout the project. Thank you, Tasteology!',
    author: 'Fahed',
    place: 'KSA',
  },
  {
    quote:
      'Great to work with Tasteology! Prompt with communication and great product delivered. Will work with this team again for any future needs!',
    author: 'Kyle',
    place: 'New York',
  },
  {
    quote:
      'The taste is fantastic, the ingredients are clean, and it mixes so well without any grittiness. It’s clear that a lot of thought and care goes into what you guys do.',
    author: 'Trek Fuel',
    place: 'United States',
  },
  {
    quote:
      'Yours is the first “healthy” drink that actually tastes incredible. The Mango Pineapple is my favorite it’s become my go-to post-workout and afternoon pick-me-up.',
    author: 'The Mountain Co-op',
    place: 'United States',
  },
]

export const team = [
  {
    slug: 'charbel',
    name: 'Charbel A.',
    role: 'CEO / Managing Director',
    university: 'Harvard University',
    focus: [
      {
        year: '01',
        title: 'Vision',
        highlight: 'Strategy',
        desc: 'Sets product direction and aligns science with brand and market goals.',
      },
      {
        year: '02',
        title: 'Client',
        highlight: 'Partnerships',
        desc: 'Leads high-touch engagements from discovery through commercialization.',
      },
      {
        year: '03',
        title: 'Lab',
        highlight: 'Leadership',
        desc: 'Guides the global Tasteology team across formulation and scale-up.',
      },
    ],
  },
  {
    slug: 'charles',
    name: 'Charles M.',
    role: 'Ops Manager',
    university: 'Florida International University',
    focus: [
      {
        year: '01',
        title: 'Project',
        highlight: 'Operations',
        desc: 'Keeps timelines, handoffs, and deliverables moving across the lab.',
      },
      {
        year: '02',
        title: 'Process',
        highlight: 'Systems',
        desc: 'Builds workflows that connect clients, scientists, and production partners.',
      },
      {
        year: '03',
        title: 'Quality',
        highlight: 'Delivery',
        desc: 'Ensures every milestone ships on schedule with clear documentation.',
      },
    ],
  },
  {
    slug: 'elias',
    name: 'Elias A.',
    role: 'PhD Research Scientist',
    university: 'Leipzig University',
    focus: [
      {
        year: '01',
        title: 'Advanced',
        highlight: 'Research',
        desc: 'Drives deep technical studies behind complex formulation challenges.',
      },
      {
        year: '02',
        title: 'Molecular',
        highlight: 'Insight',
        desc: 'Applies research methods to stability, functionality, and flavor systems.',
      },
      {
        year: '03',
        title: 'Innovation',
        highlight: 'Pipeline',
        desc: 'Turns scientific findings into practical product improvements.',
      },
    ],
  },
  {
    slug: 'lana',
    name: 'Lana N.',
    role: 'Food Scientist',
    university: 'USJ University',
    focus: [
      {
        year: '01',
        title: 'Recipe',
        highlight: 'Development',
        desc: 'Crafts balanced formulations from concept through sensory refinement.',
      },
      {
        year: '02',
        title: 'Flavor',
        highlight: 'Profiles',
        desc: 'Tunes taste and mouthfeel for category and brand targets.',
      },
      {
        year: '03',
        title: 'Bench',
        highlight: 'Iteration',
        desc: 'Rapidly iterates samples based on client and panel feedback.',
      },
    ],
  },
  {
    slug: 'claudia',
    name: 'Claudia AR',
    role: 'Head of Food Scientists',
    university: 'Stanford University',
    focus: [
      {
        year: '01',
        title: 'Scientific',
        highlight: 'Direction',
        desc: 'Leads formulation standards and mentorship across the science team.',
      },
      {
        year: '02',
        title: 'Complex',
        highlight: 'Projects',
        desc: 'Oversees challenging CPG builds from discovery to scale readiness.',
      },
      {
        year: '03',
        title: 'Technical',
        highlight: 'QA',
        desc: 'Reviews methods, sensory results, and manufacturability checks.',
      },
    ],
  },
  {
    slug: 'abbey',
    name: 'Abbey T.',
    role: 'PhD Food Scientist',
    university: 'Wisconsin University',
    focus: [
      {
        year: '01',
        title: 'PhD-Level',
        highlight: 'Formulation',
        desc: 'Solves advanced texture, stability, and ingredient interaction problems.',
      },
      {
        year: '02',
        title: 'Functional',
        highlight: 'Systems',
        desc: 'Designs formulations for performance, clean label, and shelf life.',
      },
      {
        year: '03',
        title: 'Evidence',
        highlight: 'Based Design',
        desc: 'Grounds every iteration in data, sensory results, and process constraints.',
      },
    ],
  },
  {
    slug: 'dana',
    name: 'Dana C.',
    role: 'Food Scientist',
    university: 'LIU',
    focus: [
      {
        year: '01',
        title: 'Product',
        highlight: 'Formulation',
        desc: 'Develops market-ready recipes across snacks, beverages, and CPG.',
      },
      {
        year: '02',
        title: 'Sensory',
        highlight: 'Optimization',
        desc: 'Refines taste and texture until the product hits the brief.',
      },
      {
        year: '03',
        title: 'Client',
        highlight: 'Collaboration',
        desc: 'Works closely with brands to translate vision into workable formulas.',
      },
    ],
  },
  {
    slug: 'celina',
    name: 'Celina A.',
    role: 'Food Scientist',
    university: 'NDU University',
    focus: [
      {
        year: '01',
        title: 'Culinary',
        highlight: 'Science',
        desc: 'Blends culinary intuition with food science for standout flavor.',
      },
      {
        year: '02',
        title: 'Prototype',
        highlight: 'Builds',
        desc: 'Creates and compares benchtop prototypes for rapid decision-making.',
      },
      {
        year: '03',
        title: 'Label',
        highlight: 'Aware Design',
        desc: 'Balances taste goals with clean-label and cost constraints.',
      },
    ],
  },
  {
    slug: 'daniel',
    name: 'Daniel G.',
    role: 'Food Chemist',
    university: 'Giessen University',
    focus: [
      {
        year: '01',
        title: 'Food',
        highlight: 'Chemistry',
        desc: 'Analyzes ingredient interactions, reactions, and stability pathways.',
      },
      {
        year: '02',
        title: 'Analytical',
        highlight: 'Support',
        desc: 'Supports formulation with chemistry insight and technical troubleshooting.',
      },
      {
        year: '03',
        title: 'Process',
        highlight: 'Compatibility',
        desc: 'Ensures formulas hold up under real manufacturing conditions.',
      },
    ],
  },
  {
    slug: 'joseph',
    name: 'Joseph H.',
    role: 'MS Food Scientist',
    university: 'North Carolina State University',
    focus: [
      {
        year: '01',
        title: 'Applied',
        highlight: 'Formulation',
        desc: 'Builds practical recipes tuned for taste, cost, and scale-up.',
      },
      {
        year: '02',
        title: 'Process',
        highlight: 'Development',
        desc: 'Bridges lab formulas to pilot and commercial production needs.',
      },
      {
        year: '03',
        title: 'Technical',
        highlight: 'Iteration',
        desc: 'Refines products through structured testing and clear documentation.',
      },
    ],
  },
  {
    slug: 'emma',
    name: 'Emma B.',
    role: 'Support Manager',
    university: 'University of Miami',
    focus: [
      {
        year: '01',
        title: 'Client',
        highlight: 'Support',
        desc: 'Keeps communication clear across every stage of the project.',
      },
      {
        year: '02',
        title: 'Coordination',
        highlight: 'Hub',
        desc: 'Connects clients with the right scientists and deliverables on time.',
      },
      {
        year: '03',
        title: 'Experience',
        highlight: 'Care',
        desc: 'Makes onboarding, feedback loops, and handoffs feel seamless.',
      },
    ],
  },
  {
    slug: 'halie',
    name: 'Halie F.',
    role: 'Food Scientist',
    university: 'Indiana University',
    focus: [
      {
        year: '01',
        title: 'Flavor',
        highlight: 'Development',
        desc: 'Creates distinctive taste profiles that fit brand and category goals.',
      },
      {
        year: '02',
        title: 'Texture',
        highlight: 'Systems',
        desc: 'Optimizes mouthfeel and structure for consumer-ready products.',
      },
      {
        year: '03',
        title: 'Iteration',
        highlight: 'Cycles',
        desc: 'Runs focused trials to lock the winning formula faster.',
      },
    ],
  },
  {
    slug: 'yara',
    name: 'Yara A.',
    role: 'Food Scientist',
    university: 'NDU',
    focus: [
      {
        year: '01',
        title: 'Formulation',
        highlight: 'Craft',
        desc: 'Develops recipes that balance sensory appeal with manufacturability.',
      },
      {
        year: '02',
        title: 'Sensory',
        highlight: 'Feedback',
        desc: 'Uses tasting panels and client notes to guide each revision.',
      },
      {
        year: '03',
        title: 'Market',
        highlight: 'Readiness',
        desc: 'Prepares formulas that are ready for shelf, scale, and launch.',
      },
    ],
  },
].map((m) => ({
  ...m,
  image: asset(`team/${m.slug}.png`),
}))

export const milestones = [
  {
    step: '01',
    title: 'Discovery & Scope',
    text: 'We align on your product vision, technical requirements, target market, and commercialization goals.',
  },
  {
    step: '02',
    title: 'Concept Formulation',
    text: 'Starting at $5,000 we develop one or more benchtop formulations with consideration for functionality, cost, and label requirements.',
  },
  {
    step: '03',
    title: 'Sensory Testing',
    text: 'In-house or panel-based evaluations to assess taste, aroma, texture, and overall consumer appeal.',
  },
  {
    step: '04',
    title: 'Iteration & Optimization',
    text: 'We refine based on your feedback and sensory results optimizing for taste, stability, and manufacturability.',
  },
  {
    step: '05',
    title: 'Scale-Up Support',
    text: 'Pilot trials, manufacturing partner connections, and preparation for commercial production.',
  },
  {
    step: '06',
    title: 'Final Documentation',
    text: 'A complete technical dossier: final formulation, supplier info, processing parameters, and support documents.',
  },
]

export const operations = [
  'GCC Regions',
  'European Markets',
  'MENA Expansion',
  'Global Ingredient Sourcing',
]

export const faqs = [
  {
    q: 'What does Tasteology & Co do?',
    a: 'Tasteology & Co is a science-led food innovation and formulation studio that helps brands create and launch culinary products from concept and recipe formulation to flavor optimization, functional ingredient solutions, and market strategy.',
  },
  {
    q: 'Who are your clients?',
    a: 'We partner with food & beverage startups, established CPG brands, chefs, and founders who want to develop high-quality, clean-label, commercially viable products.',
  },
  {
    q: 'Where do you operate?',
    a: 'We are headquartered in Miami, Florida, USA, and serve food and beverage brands globally including the United States, Middle East (including Beirut), Europe, and beyond through remote consultations and regional lab partnerships.',
  },
  {
    q: 'Do you help with packaging and branding too?',
    a: 'Yes, we can support the full development process, including brand and packaging guidance depending on the project.',
  },
  {
    q: 'How do I start a project with Tasteology?',
    a: 'Reach out through our contact form or email to discuss your concept. We’ll schedule a discovery call to understand your goals and offer a tailored plan.',
  },
  {
    q: 'Do you sign NDAs?',
    a: 'Yes, we work under professional non-disclosure agreements and protect client recipes and proprietary information.',
  },
  {
    q: 'What’s the typical timeline for product development?',
    a: 'Timelines vary depending on complexity, but most formulations range from 4–12 weeks, including testing and refinement.',
  },
  {
    q: 'Can you help with functional foods or specialized nutrition products?',
    a: 'Yes, including low-sugar, plant-based, functional beverages, fermentation systems, and products with enhanced bioavailability.',
  },
  {
    q: 'Do you work with startups as well as established brands?',
    a: 'Yes, we support companies at all stages, from early concept through full product launch.',
  },
]

export const contact = {
  address: ['28 W Flagler St', 'Ste 300B #7342', 'Miami, FL 33130', 'United States'],
  phone: '+1 7869461362',
  email: 'info@tasteology.us',
  note: 'We are available in 27 locations because 26 just didn’t feel extra enough.',
}

export const hearAboutOptions = [
  'Google',
  'Bing Search',
  'Instagram',
  'UpWork',
  'LinkedIn',
  'Referrals',
  'AI Assistant (ChatGPT, Gemini)',
  'Other',
]

export const asSeen = [
  'as-seen-logo/ABC.png',
  'as-seen-logo/Ap.png',
  'as-seen-logo/CBS.png',
  'as-seen-logo/NBC.webp',
  'as-seen-logo/fox8.png',
  'as-seen-logo/digital-journal-Logo.webp',
  'as-seen-logo/ceotimes.png',
].map(asset)

export const pressLogos = [
  'Press_release_logo/yahoo-finance.png',
  'Press_release_logo/marketwatch.png',
  'Press_release_logo/morningstar.png',
  'Press_release_logo/globe-newswire.png',
  'Press_release_logo/street-insider.png',
  'Press_release_logo/Ap.png',
  'Press_release_logo/fox8.png',
  'Press_release_logo/digital-journal-Logo.webp',
  'Press_release_logo/15_fort_waynes_NBC.svg',
  'Press_release_logo/16_kttc.svg',
  'Press_release_logo/19_the_minesota_star_tribune.svg',
  'Press_release_logo/2_buissnes-insrurane.svg',
].map(asset)

export const partners = [
  'partner/ingredion.webp',
  'partner/batory-foods-logo.webp',
  'partner/Flavorah-Logo.png',
  'partner/adm-logo.webp',
  'partner/Ambileap.png',
  'partner/brewch.png',
  'partner/Vex-logo.png',
  'partner/wingle.png',
].map(asset)

/** Client logo strip first 24 for a clean marquee */
export const clientLogos = [
  'Client/client5.png',
  'Client/client6-london uk.png',
  'Client/client7.png',
  'Client/client8-Beirut-leabnon.png',
  'Client/client9.png',
  'Client/client10.png',
  'Client/client11-texas-us.png',
  'Client/client12.png',
  'Client/client16.png',
  'Client/client17-jordan.png',
  'Client/client18.png',
  'Client/client19-virgina-us.png',
  'Client/client20.png',
  'Client/client21-Austrilia.png',
  'Client/client22-hawaii us.png',
  'Client/client23.png',
  'Client/client24.png',
  'Client/client25.png',
  'Client/client30-jordan.png',
  'Client/client31-US.png',
  'Client/client32-US.jpg',
  'Client/client33-Egypt.jpg',
  'Client/client38-malisia.png',
  'Client/client39-Hong-kong.png',
].map(asset)

export const blogImages = [
  asset('blog/From-idea-to-shelf.png'),
  asset('blog/Shelflife.png'),
  asset('blog/3.webp'),
  asset('blog/4.webp'),
]
