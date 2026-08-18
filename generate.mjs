import { writeFileSync, mkdirSync, readFileSync, existsSync, statSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = __dirname;

function assetVersion(file) {
  try {
    return statSync(join(ROOT, file)).mtimeMs;
  } catch {
    return Date.now();
  }
}

const cssVersion = assetVersion("css/style.css");
const animCssVersion = assetVersion("css/animations.css");
const respCssVersion = assetVersion("css/responsive.css");
const dashCssVersion = assetVersion("css/dashboard.css");
const appJsVersion = assetVersion("js/app.js");
const animJsVersion = assetVersion("js/animations.js");
const cursorJsVersion = assetVersion("js/cursor.js");
const sliderJsVersion = assetVersion("js/slider.js");
const counterJsVersion = assetVersion("js/counter.js");
const dashJsVersion = assetVersion("js/dashboard.js");
const contactJsVersion = assetVersion("js/contact.js");

const site = {
  name: "Abdul Rehman Sheikh",
  shortName: "Abdul.",
  location: "Williamstown, New Jersey, USA",
  email: "hello@abdulrehman.com",
  consultationPrice: "Book a call via Zoom",
  linkedin: "https://www.linkedin.com/in/abdulrehmansheikh",
  behance: "https://www.behance.net/AbdulRehman790",
  title: "Abdul Rehman Sheikh | Amazon A+ Content & FBA Wholesale",
  aboutTitle: "About Abdul Rehman Sheikh | Graphic Artist & Amazon Specialist",
  description:
    "Graphic Artist and Marketing Ninja helping Amazon sellers and brand owners scale with A+ / EBC content, listing images, FBA wholesale, and brand identity.",
  aboutDescription:
    "Learn about Abdul Rehman Sheikh, a graphic artist and Amazon FBA specialist with 6+ years helping sellers grow through A+ content, sourcing, and brand design.",
  servicesTitle: "Services | Abdul Rehman Sheikh",
  servicesDescription:
    "Amazon A+ / EBC content, listing images, FBA wholesale, brand approvals, logos, and print design to help sellers and brands convert more customers.",
  projectsTitle: "Projects | Abdul Rehman Sheikh",
  projectsDescription:
    "Amazon A+ content, listing design, logos, and brand identity case studies by Abdul Rehman Sheikh.",
};

const routes = {
  home: "/",
  about: "/about",
  services: "/services",
  projects: "/projects",
  contact: "/contact",
  testimonials: "/testimonials",
  project: (slug) => `/projects/${slug}`,
};

const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Projects", href: "/#projects" },
  { label: "Dashboard", href: "/#dashboard" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Contact", href: "/#contact" },
];

const featuredSlugs = [
  "beeswax-wrap-kit-amazon-aplus",
  "fidget-headphones-kids-listing",
];

const counterStats = [
  { count: "6", suffix: "+", label: "Years Experience" },
  { count: "50", suffix: "K+", label: "Sales Generated" },
  { count: "30", suffix: "%", label: "CTR Lift" },
  { count: "22", suffix: "%", label: "Sales Lift" },
  { count: "11", suffix: "%+", label: "A+ Conversion Focus" },
];

const heroStatPills = [
  { value: "6+", label: "Years Experience" },
  { value: "50K+", label: "Sales Generated" },
  { value: "30%", label: "CTR Lift" },
  { value: "22%", label: "Sales Lift" },
  { value: "11%+", label: "A+ Focus" },
];

const dashboardKpis = [
  { key: "sessions", icon: "visibility", label: "Sessions", delta: "+12.4%", up: true },
  { key: "unitSession", icon: "percent", label: "Unit Session %", delta: "+1.8%", up: true },
  { key: "ctr", icon: "ads_click", label: "CTR", delta: "+0.4%", up: true },
  { key: "acos", icon: "payments", label: "ACOS", delta: "-6.2%", up: false },
  { key: "orders", icon: "shopping_bag", label: "Orders", delta: "+18.9%", up: true },
  { key: "cvr", icon: "conversion_path", label: "Conversion Rate", delta: "+11.3%", up: true },
  { key: "revenue", icon: "trending_up", label: "Revenue", delta: "+0.6x", up: true },
  { key: "spend", icon: "account_balance_wallet", label: "Ad Spend", delta: "+9.1%", up: true },
];

const typingRoles = [
  "Amazon A+ / EBC Designer",
  "FBA Wholesale Specialist",
  "Graphic Artist",
  "Brand Identity Designer",
  "Amazon Listing Optimizer",
];

const skillItems = [
  { icon: "auto_awesome", name: "Amazon A+ / EBC" },
  { icon: "photo_library", name: "Listing Images" },
  { icon: "storefront", name: "FBA Wholesale" },
  { icon: "verified", name: "Brand Approvals" },
  { icon: "inventory_2", name: "Product Sourcing" },
  { icon: "local_shipping", name: "Procurement & Logistics" },
  { icon: "draw", name: "Logo Design" },
  { icon: "badge", name: "Brand Identity" },
  { icon: "contact_mail", name: "Business Cards" },
  { icon: "campaign", name: "Social Ads" },
  { icon: "trending_up", name: "Conversion Design" },
  { icon: "shopping_bag", name: "Amazon Listings" },
];

const experienceItems = [
  {
    title: "Graphic Artist & Marketing Ninja",
    period: "2018 – Present",
    description:
      "Stepped into the digital world on Behance in March 2018 and built a freelance practice around logos, print, Fiverr gigs, and later Amazon listing creatives for sellers across beauty, wellness, kitchen, and kids categories.",
  },
  {
    title: "Amazon EBC / A+ Content Designer",
    period: "2021",
    description:
      "Shifted into Amazon FBA during the pandemic, creating highly convertible EBC / A+ modules for FBA sellers. At Samsara Herb, listing graphics lifted CTR by 30% and sales by 22%, with a 30% conversion-rate gain from product-page layout work.",
  },
  {
    title: "Ecommerce Manager — Extreme Baba",
    period: "2022",
    description:
      "Generated $50,000+ in sales across Amazon dropshipping accounts, increased profit margins by 25% through sourcing and shipping, and improved client satisfaction by 55% with tighter operations and communication.",
  },
  {
    title: "FBA Wholesale & Account Growth Specialist",
    period: "2023 – Present",
    description:
      "Helping Amazon sellers and brand owners scale via FBA wholesale, online arbitrage, brand outreach, procurement, logistics, warehousing, and a layer of graphics that makes listings convert.",
  },
];

const clientNames = [
  "Samsara Herb",
  "Extreme Baba",
  "VASL",
  "Incubatee",
  "Beeswax Wrap Kit",
  "Pinon Calming Salve",
  "Fidget Headphones",
];

const workFilters = ["All", "Amazon", "A+ Content", "Branding"];

const footerLinks = [
  { label: "Home", href: routes.home },
  { label: "About", href: routes.about },
  { label: "Services", href: routes.services },
  { label: "Projects", href: routes.projects },
  { label: "Contact", href: routes.contact },
];

const heroBadges = [
  "6+ Years Experience",
  "Amazon A+ / EBC Specialist",
  "FBA Wholesale & Sourcing",
  "Available for Freelance",
];

const aboutSkillTags = [
  "Amazon A+ / EBC",
  "Listing Images",
  "FBA Wholesale",
  "Logo Design",
  "Brand Identity",
];

const bannerStats = [
  { value: "6+", label: "Years Experience" },
  { value: "50K+", label: "Sales Generated" },
  { value: "30%", label: "CTR Lift" },
  { value: "11%+", label: "A+ Conversion Focus" },
];

const visionMission = {
  vision: {
    title: "Our Vision",
    description:
      "To help Amazon sellers and brand owners turn listings, A+ content, and wholesale operations into predictable growth — where every image, module, and sourced SKU is built to convert.",
  },
  mission: {
    title: "Our Mission",
    description:
      "Deliver high-converting Amazon EBC / A+ content, listing creatives, and FBA wholesale support that lift CTR, strengthen brand story, and help 6- and 7-figure catalogs proliferate.",
  },
};

const achievements = [
  { year: "2023", icon: "emoji_events", title: "FBA Wholesale Focus", description: "Narrowed into Amazon FBA wholesale and online arbitrage — brand outreach, procurement, logistics, warehousing, plus graphics that make listings sell.", reverse: false },
  { year: "2022", icon: "workspace_premium", title: "$50K+ Amazon Sales", description: "As Ecommerce Manager at Extreme Baba, generated over $50,000 in sales, lifted margins 25%, and improved client satisfaction 55% across dropshipping accounts.", reverse: true },
  { year: "2021", icon: "stars", title: "Amazon EBC / A+ Specialty", description: "Began EBC design for FBA sellers and delivered listing graphics for Samsara Herb with a 30% CTR lift, 22% sales increase, and 30% conversion-rate gain.", reverse: false },
  { year: "2018", icon: "military_tech", title: "Stepped Into Graphic Design", description: "Joined Behance on March 25, 2018 and started the path as a graphic artist — logos, business cards, Fiverr gigs, and brand work that still underpins the Amazon practice.", reverse: true },
];

const services = [
  { icon: "auto_awesome", title: "Amazon A+ / EBC Content", description: "Design highly convertible Amazon A+ and Enhanced Brand Content modules that tell the product story, answer objections, and help listings lift conversion." },
  { icon: "photo_library", title: "Amazon Listing Images", description: "Main images, lifestyle frames, infographics, and comparison charts built for Amazon's catalog rules and for clicks that turn into add-to-carts." },
  { icon: "storefront", title: "FBA Wholesale & Sourcing", description: "Find profitable wholesale products, reach brands, and build the sourcing, inventory, and fulfillment flow that keeps Amazon accounts moving." },
  { icon: "verified", title: "Brand Approvals & Account Growth", description: "Support brand approvals, catalog health, and account growth so sellers can expand lines without getting stuck on gated brands or weak listings." },
  { icon: "draw", title: "Logo & Brand Identity", description: "Logos, brand marks, and visual systems that look sharp on Amazon, print, and the web." },
  { icon: "badge", title: "Business Cards & Print", description: "Business cards and print suites for incubators, agencies, and personal brands, designed to feel premium in the hand and on a desk." },
];

const serviceCtaChips = [
  { label: "A+ / EBC Content", className: "chip-primary-container" },
  { label: "Listing Images", className: "chip-secondary" },
  { label: "FBA Wholesale", className: "chip-primary-container" },
  { label: "Brand Approvals", className: "chip-secondary" },
  { label: "Logo Design", className: "chip-primary-container" },
  { label: "Print & Cards", className: "chip-secondary" },
];

const projectCtaChips = [
  { label: "A+ / EBC Content", className: "chip-primary-container chip-rotate-1" },
  { label: "Listing Images", className: "chip-secondary chip-rotate-2" },
  { label: "FBA Wholesale", className: "chip-surface chip-rotate-3" },
  { label: "Logo Design", className: "chip-primary chip-rotate-4" },
  { label: "Brand Identity", className: "chip-secondary chip-rotate-1" },
];

const projects = [
  {
    slug: "incubatee-business-card",
    title: "Incubatee — Business Card",
    subtitle: "Print identity for an incubator-ready professional card",
    tags: ["Branding", "Print"],
    src: "/images/incubatee-business-card.png",
    client: "Incubatee",
    industry: "Startups & Incubation",
    duration: "Print suite",
    overview: "An incubatee needed a business card that felt investor-ready: clean typography, a confident mark, and a layout that works as well in a networking hall as it does as a PDF attach.",
    challenge: "Early-stage teams often ship generic templates. The card had to signal credibility without looking over-designed, and it had to reproduce cleanly in both digital and offset print.",
    solution: "Designed a restrained geometric identity, hierarchy for name/role/contact, and a two-sided layout with enough whitespace to feel premium in the hand.",
    results: [
      { value: "2", label: "Layout Versions" },
      { value: "Print", label: "Ready Files" },
      { value: "Front/Back", label: "Card System" },
      { value: "Behance", label: "Featured Work" },
    ],
    deliverables: ["Front and back card layouts", "Print-ready CMYK files", "Contact hierarchy and spacing", "Mark placement system"],
  },
  {
    slug: "vasl-business-card",
    title: "VASL — Business Card",
    subtitle: "Premium navy-and-gold card for a professional brand",
    tags: ["Branding", "Print"],
    src: "/images/vasl-business-card.png",
    client: "VASL",
    industry: "Professional Services",
    duration: "Brand print",
    overview: "VASL needed a business card with presence — dark materials, foil-like contrast, and a layout that feels like a brand, not a template from a print kiosk.",
    challenge: "Dark cards are easy to make muddy. Type, foil, and logo size had to stay readable under indoor lighting while still feeling luxurious.",
    solution: "Built a dark-slate system with gold accent type, generous margins, and a stacked mockup presentation for the Behance case.",
    results: [
      { value: "Premium", label: "Material Direction" },
      { value: "2-sided", label: "Card Design" },
      { value: "Gold", label: "Accent System" },
      { value: "24", label: "Behance Views" },
    ],
    deliverables: ["Premium card design", "Color and foil direction", "Print specifications", "Mockup presentation"],
  },
  {
    slug: "fiverr-gig-vol-2",
    title: "Fiverr Gig Vol 2.0",
    subtitle: "Gig creatives that package design services for marketplace conversion",
    tags: ["Graphic Design", "Branding"],
    src: "/images/fiverr-gig-vol-2.png",
    client: "Freelance marketplace",
    industry: "Creative Services",
    duration: "Gig refresh",
    overview: "A Fiverr gig refresh to present logo, listing, and Amazon creative services with clearer thumbnails, benefit-led copy blocks, and a visual system that stands out in a crowded search grid.",
    challenge: "Marketplace thumbnails compete in a tiny crop. The previous gig look did not communicate Amazon + branding range fast enough.",
    solution: "Designed a high-contrast gig visual system — thumbnail, gallery tiles, and package graphics — so buyers can see the offer in one second.",
    results: [
      { value: "63", label: "Behance Views" },
      { value: "1", label: "Appreciation" },
      { value: "Vol 2.0", label: "Gig System" },
      { value: "Grid", label: "Thumbnail Ready" },
    ],
    deliverables: ["Gig thumbnail set", "Gallery images", "Package visual tiles", "Marketplace crop variants"],
  },
  {
    slug: "pinon-calming-salve-amazon-aplus",
    title: "Pinon Calming Salve — Amazon A+ Content",
    subtitle: "Herbal wellness listing modules that explain ritual, ingredients, and use",
    tags: ["A+ Content", "Amazon"],
    src: "/images/pinon-calming-salve.png",
    client: "Pinon Calming Salve",
    industry: "Wellness & Naturals",
    duration: "A+ content build",
    overview: "A pinon-pine calming salve needed Amazon A+ modules that feel artisan and trustworthy — ingredient story, how-to-use, and lifestyle warmth without looking like a generic supplement listing.",
    challenge: "Wellness products lose buyers when the page is only a tin on white. Shoppers needed ritual, sourcing, and skin-feel explained in scannable modules.",
    solution: "Designed A+ frames around the tin, pine botanicals, and a calm southwestern palette — comparison, ingredients, and routine modules sized for Amazon's A+ grid.",
    results: [
      { value: "A+", label: "Module Set" },
      { value: "11%+", label: "Conversion Focus" },
      { value: "Lifestyle", label: "Hero System" },
      { value: "16", label: "Behance Views" },
    ],
    deliverables: ["A+ brand story modules", "Ingredient and ritual graphics", "Lifestyle product frames", "Amazon-safe layout specs"],
    sections: [
      {
        number: "01",
        title: "Hero & Pack Shot",
        description: "Opened with a warm pack shot of the tin and pinon botanicals so the product feels handmade, not clinical — the first module shoppers see after the main image.",
        highlights: ["Pack-shot hero", "Botanical styling", "Warm wellness palette"],
        stats: [
          { value: "Hero", label: "Module" },
          { value: "Tin", label: "Primary SKU" },
          { value: "Pinon", label: "Ingredient Story" },
          { value: "A+", label: "Placement" },
        ],
      },
      {
        number: "02",
        title: "Ingredient Story",
        description: "Broke down why pinon resin and a simple salve base matter, using short callouts instead of a wall of supplement-style copy.",
        highlights: ["Scannable callouts", "Trust-first copy", "Clean iconography"],
        stats: [
          { value: "3+", label: "Ingredient Callouts" },
          { value: "Icons", label: "Benefit Marks" },
          { value: "Clean", label: "Type Hierarchy" },
          { value: "Mobile", label: "Readable" },
        ],
      },
      {
        number: "03",
        title: "How to Use",
        description: "A three-step ritual module so first-time buyers know when and how to apply the salve — reducing returns caused by unclear usage.",
        highlights: ["3-step ritual", "Return-risk reduction", "First-time buyer clarity"],
        stats: [
          { value: "3", label: "Use Steps" },
          { value: "Routine", label: "Framing" },
          { value: "Clear", label: "CTA Language" },
          { value: "A+", label: "Standard Grid" },
        ],
      },
      {
        number: "04",
        title: "Lifestyle Finish",
        description: "Closed with lifestyle stills that feel like a cabin shelf, not a stock bathroom — keeping the brand artisan through the last module.",
        highlights: ["Artisan lifestyle", "Shelf context", "Brand consistency"],
        stats: [
          { value: "Lifestyle", label: "Close" },
          { value: "Shelf", label: "Context" },
          { value: "Warm", label: "Color Grade" },
          { value: "Full", label: "A+ Set" },
        ],
      },
    ],
  },
  {
    slug: "amazon-ebc-portfolio",
    title: "Amazon EBC / A+ Portfolio",
    subtitle: "A catalog of listing modules built to lift conversion across categories",
    tags: ["A+ Content", "Amazon"],
    src: "/images/amazon-ebc-portfolio.png",
    client: "Multiple Amazon brands",
    industry: "Amazon eCommerce",
    duration: "2018 – Present",
    overview: "A portfolio of Amazon EBC / A+ content across kitchen, beauty, wellness, and kids — comparison charts, brand story banners, lifestyle modules, and listing images built for 6- and 7-figure catalogs.",
    challenge: "Sellers often treat A+ as decoration. Modules that ignore Amazon's crop, comparison logic, and mobile scan path waste the most valuable real estate on a listing.",
    solution: "Standardized a conversion-first A+ system: hero story, proof, comparison, how-it-works, and close — reusable across categories while staying Amazon-compliant.",
    results: [
      { value: "11%+", label: "Sales Focus" },
      { value: "6–7 fig", label: "Catalogs Served" },
      { value: "Multi", label: "Categories" },
      { value: "A+ / EBC", label: "Specialty" },
    ],
    deliverables: ["A+ / EBC module systems", "Comparison and lifestyle frames", "Brand story banners", "Listing image direction"],
    sections: [
      {
        number: "01",
        title: "Portfolio Overview",
        description: "A single view of A+ systems across beeswax wraps, beauty kits, salves, and kids electronics — proving the same conversion logic travels between categories.",
        highlights: ["Multi-category", "Reusable system", "Conversion logic"],
        stats: [
          { value: "4+", label: "Categories" },
          { value: "A+", label: "Module System" },
          { value: "EBC", label: "Brand Content" },
          { value: "Mobile", label: "First Layout" },
        ],
      },
      {
        number: "02",
        title: "Comparison Modules",
        description: "Side-by-side comparison charts that help shoppers choose faster — a core A+ pattern for kitchen and beauty kits.",
        highlights: ["Faster choice", "Feature grid", "Objection handling"],
        stats: [
          { value: "Compare", label: "Module Type" },
          { value: "Grid", label: "Feature Layout" },
          { value: "Clear", label: "Winner Column" },
          { value: "A+", label: "Standard Width" },
        ],
      },
      {
        number: "03",
        title: "Brand Story Banners",
        description: "Wide story banners that introduce the maker, the material, or the ritual before the spec list — especially useful for artisan and private-label brands.",
        highlights: ["Story before specs", "Artisan tone", "Private-label ready"],
        stats: [
          { value: "Banner", label: "Story Frame" },
          { value: "Brand", label: "Voice" },
          { value: "Trust", label: "Job" },
          { value: "Full-bleed", label: "Crop" },
        ],
      },
      {
        number: "04",
        title: "Lifestyle + Infographic Mix",
        description: "Paired lifestyle photography with infographic callouts so pages feel premium without losing Amazon's need for skimmable facts.",
        highlights: ["Lifestyle + facts", "Skimmable", "Premium stills"],
        stats: [
          { value: "Mix", label: "Module Types" },
          { value: "Icons", label: "Callouts" },
          { value: "Photo", label: "Lifestyle" },
          { value: "Scan", label: "Path" },
        ],
      },
      {
        number: "05",
        title: "Listing Image Direction",
        description: "Main and secondary images aligned with the A+ story so the click from search already matches the brand the shopper meets on the page.",
        highlights: ["Search-to-page match", "Main image rules", "Secondary stack"],
        stats: [
          { value: "Main", label: "Image Direction" },
          { value: "7", label: "Image Slots" },
          { value: "CTR", label: "Job of Main" },
          { value: "CVR", label: "Job of A+" },
        ],
      },
    ],
  },
  {
    slug: "fidget-headphones-kids-listing",
    title: "Fidget Headphones For Kids — Listing Design",
    subtitle: "Playful listing images that sell the fidget feature in the first glance",
    tags: ["Amazon", "Listing Design"],
    src: "/images/fidget-headphones.png",
    client: "Kids electronics brand",
    industry: "Kids & Electronics",
    duration: "Listing + A+ set",
    overview: "Kids fidget headphones needed listing images that show the spinner earcups immediately — parents shopping on Amazon decide from the main image and the first two lifestyle frames.",
    challenge: "The fidget mechanic was invisible in a standard headphone pack shot. Competitors looked similar; the differentiator had to be designed into the crop.",
    solution: "Built a listing stack: hero with fidget detail, size-on-kid silhouette (no faces), feature callouts, and a comparison module for parent objections (comfort, volume, durability).",
    results: [
      { value: "38", label: "Behance Views" },
      { value: "Fidget", label: "Hero Feature" },
      { value: "Parent", label: "Objection Set" },
      { value: "A+", label: "Support Modules" },
    ],
    deliverables: ["Main and secondary listing images", "Fidget-feature close-ups", "Parent-benefit infographics", "A+ support modules"],
    sections: [
      {
        number: "01",
        title: "Main Image Strategy",
        description: "Cropped the hero so the fidget earcup is readable at Amazon search size — the spinner is the reason to click, not a buried lifestyle detail.",
        highlights: ["Search-size crop", "Fidget first", "Clean pack shot"],
        stats: [
          { value: "Main", label: "Image" },
          { value: "Fidget", label: "Hero Detail" },
          { value: "White", label: "Amazon BG" },
          { value: "CTR", label: "Job" },
        ],
      },
      {
        number: "02",
        title: "Feature Callouts",
        description: "Secondary images explain comfort, kid-safe volume, and the spinner without a paragraph of bullet text.",
        highlights: ["Infographic frames", "Parent benefits", "No wall of text"],
        stats: [
          { value: "3+", label: "Callout Frames" },
          { value: "Volume", label: "Safety Cue" },
          { value: "Comfort", label: "Fit Cue" },
          { value: "Play", label: "Fidget Cue" },
        ],
      },
      {
        number: "03",
        title: "Lifestyle Without Faces",
        description: "Styled a playroom still so parents can picture the product in use without needing child-model photography.",
        highlights: ["Playroom context", "No faces required", "Color pop"],
        stats: [
          { value: "Lifestyle", label: "Frame" },
          { value: "Desk", label: "Context" },
          { value: "Color", label: "Kid Palette" },
          { value: "Box", label: "Packaging" },
        ],
      },
      {
        number: "04",
        title: "A+ Support",
        description: "A+ modules repeat the fidget story for shoppers who scroll — comparison vs plain headphones and a simple how-it-works.",
        highlights: ["Scroll-depth story", "Vs plain headphones", "How it works"],
        stats: [
          { value: "A+", label: "Support" },
          { value: "Compare", label: "Module" },
          { value: "How-to", label: "Module" },
          { value: "CVR", label: "Job" },
        ],
      },
    ],
  },
  {
    slug: "beeswax-wrap-kit-amazon-aplus",
    title: "Beeswax Wrap Kit — Amazon A+ Content",
    subtitle: "Eco kitchen A+ that sells the swap from plastic wrap in one scroll",
    tags: ["A+ Content", "Amazon"],
    src: "/images/beeswax-wrap-kit.png",
    client: "Beeswax Wrap Kit",
    industry: "Kitchen & Eco Home",
    duration: "A+ content build",
    overview: "A beeswax wrap kit needed Amazon A+ content that makes the plastic-wrap swap obvious: sizes in the kit, how to seal food, care instructions, and a warm eco kitchen story.",
    challenge: "Shoppers who have never used beeswax wraps do not know sizing, washing, or heat limits. A+ had to teach without sounding like a manual.",
    solution: "Built a conversion-first A+ set — kit sizes, wrap-and-seal how-to, eco comparison vs plastic, and care icons — photographed on marble with kraft packaging.",
    results: [
      { value: "2", label: "Behance Appreciations" },
      { value: "27", label: "Project Views" },
      { value: "11%+", label: "Conversion Focus" },
      { value: "Eco", label: "Story System" },
    ],
    deliverables: ["A+ eco kitchen modules", "Kit size chart", "How-to-seal graphics", "Care and comparison modules"],
    sections: [
      {
        number: "01",
        title: "Kit on the Counter",
        description: "Hero still of folded wraps and kraft packaging on marble — the Amazon shopper immediately sees a complete kit, not a single wrap.",
        highlights: ["Complete kit", "Kraft eco pack", "Marble kitchen"],
        stats: [
          { value: "Hero", label: "Still" },
          { value: "Kit", label: "Not Single SKU" },
          { value: "Kraft", label: "Packaging" },
          { value: "A+", label: "Open" },
        ],
      },
      {
        number: "02",
        title: "Size Chart",
        description: "A size module so buyers know which wrap covers a bowl, a sandwich, or leftover produce — the #1 pre-purchase question.",
        highlights: ["Bowl / sandwich / produce", "Pre-purchase FAQ", "Size chart"],
        stats: [
          { value: "3+", label: "Sizes" },
          { value: "Bowl", label: "Use Case" },
          { value: "Lunch", label: "Use Case" },
          { value: "Produce", label: "Use Case" },
        ],
      },
      {
        number: "03",
        title: "Wrap & Seal How-To",
        description: "Warm-hands-and-seal steps that demystify beeswax wraps in three frames instead of a paragraph.",
        highlights: ["Warm to seal", "3 frames", "No manual tone"],
        stats: [
          { value: "3", label: "How-To Frames" },
          { value: "Seal", label: "Mechanic" },
          { value: "Reuse", label: "Promise" },
          { value: "Clear", label: "Icons" },
        ],
      },
      {
        number: "04",
        title: "Vs Plastic Wrap",
        description: "A comparison module: reusable, plastic-free, and fridge-friendly — the conversion argument for eco kitchen shoppers.",
        highlights: ["Reusable", "Plastic-free", "Fridge-friendly"],
        stats: [
          { value: "Compare", label: "Vs Plastic" },
          { value: "Reuse", label: "Win" },
          { value: "Eco", label: "Win" },
          { value: "Value", label: "Kit Story" },
        ],
      },
      {
        number: "05",
        title: "Care Icons",
        description: "Cold-water wash and heat-limit icons so the product lasts — fewer 'it melted' returns and a more confident add-to-cart.",
        highlights: ["Cold wash", "Heat limits", "Fewer returns"],
        stats: [
          { value: "Care", label: "Icons" },
          { value: "Cold", label: "Wash" },
          { value: "No heat", label: "Limit" },
          { value: "CVR", label: "Confidence" },
        ],
      },
    ],
  },
];

const testimonials = [
  { quote: "I highly recommend Abdul Rehman for his exceptional expertise in Amazon Wholesale. He is a true professional and a valuable asset to any team. If you’re looking for someone who can elevate your Amazon business, Abdul is the person you need.", name: "LinkedIn client" },
  { quote: "Abdul Rehman is a unique and very professional individual. Always working hard to achieve his goals. He knows exactly what he wants. I highly recommend Abdul Rehman.", name: "LinkedIn colleague" },
  { quote: "The A+ modules made the listing feel like a real brand — comparison charts and lifestyle frames that actually help shoppers decide.", name: "Amazon seller" },
  { quote: "Listing graphics lifted click-through and made the product page easier to scan. The before-and-after on the main images was obvious.", name: "Catalog owner" },
  { quote: "Operations plus design — sourcing, inventory, and creatives that keep the account moving. That combination is rare.", name: "Ecommerce partner" },
  { quote: "The logo and print work felt considered, not template. It finally looks like the brand we pitch to sellers.", name: "Brand collaborator" },
];

const whyWorkWithMe = [
  "6+ years as a graphic artist, on Behance since 2018",
  "Amazon A+ / EBC built to convert, not just decorate",
  "$50K+ sales generated as Ecommerce Manager at Extreme Baba",
  "30% CTR and 22% sales lift on Amazon listing graphics",
  "FBA wholesale, sourcing, brand outreach, and logistics",
  "Logos, business cards, and marketplace gig creatives",
  "Available for freelance and full-time — Williamstown, NJ",
];

const marqueeItems = ["Amazon A+ / EBC", "Listing Images", "FBA Wholesale", "Brand Approvals", "Product Sourcing", "Logo Design", "Brand Identity", "Business Cards"];

function head(title, description) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
  <title>${title}</title>
  <meta name="description" content="${description}">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0..1,0&display=swap" rel="stylesheet">
  <script>(function(){try{var t=localStorage.getItem("theme");if(t){document.documentElement.setAttribute("data-theme",t);}}catch(e){}})();</script>
  <link rel="stylesheet" href="/css/style.css?v=${cssVersion}">
  <link rel="stylesheet" href="/css/animations.css?v=${animCssVersion}">
  <link rel="stylesheet" href="/css/responsive.css?v=${respCssVersion}">
  <link rel="stylesheet" href="/css/dashboard.css?v=${dashCssVersion}">
</head>`;
}

function icon(name, filled = false, extraClass = "") {
  const fillClass = filled ? " material-symbols-filled" : "";
  const cls = extraClass ? ` ${extraClass}` : "";
  return `<span class="material-symbols-outlined${fillClass}${cls}">${name}</span>`;
}

function btnPrimary(text, href, iconName = "arrow_forward") {
  return `<a href="${href}" class="btn btn-primary btn-has-icon">${text}<span class="btn-icon">${icon(iconName)}</span></a>`;
}

function btnSection(text, href, iconName = "arrow_forward") {
  return `<a href="${href}" class="btn btn-primary btn-has-icon btn-section">${text}${icon(iconName)}</a>`;
}

function renderComponent(name, vars) {
  let html = readFileSync(join(ROOT, "components", name), "utf8");
  for (const [key, value] of Object.entries(vars)) {
    html = html.replaceAll(`{{${key}}}`, value);
  }
  return html.trim();
}

function logoMark() {
  return `<span class="logo-badge logo-badge-image"><img src="/images/profile-photo.png" alt="${site.name}" width="40" height="40"></span>`;
}

function header() {
  const navDesktop = navLinks.map((l) => `<a href="${l.href}" data-nav>${l.label}</a>`).join("");
  const navMobile = navLinks.map((l) => `<a href="${l.href}" data-nav>${l.label}</a>`).join("");
  return renderComponent("header.html", {
    HOME: routes.home,
    CONTACT: "/#contact",
    SHORT_NAME: site.shortName,
    NAV_DESKTOP: navDesktop,
    NAV_MOBILE: navMobile,
  });
}

function footer() {
  const links = footerLinks.map((l) => `<li><a href="${l.href}">${l.label}</a></li>`).join("");
  const contactItems = `<li><a href="mailto:${site.email}">${site.email}</a></li><li>${site.location}</li><li>${site.consultationPrice}</li><li><a href="${site.linkedin}" target="_blank" rel="noopener noreferrer">LinkedIn</a></li><li><a href="${site.behance}" target="_blank" rel="noopener noreferrer">Behance</a></li>`;
  return renderComponent("footer.html", {
    HOME: routes.home,
    SHORT_NAME: site.shortName,
    SITE_NAME: site.name,
    YEAR: String(new Date().getFullYear()),
    FOOTER_BLURB: `${site.name} — Graphic Artist and Amazon A+ / EBC specialist helping sellers and brand owners scale with listing creatives, FBA wholesale, and brand identity.`,
    FOOTER_NAV: links,
    FOOTER_CONTACT: contactItems,
    ICON_UP: icon("keyboard_arrow_up"),
  });
}

function scripts(extra = "", premium = false) {
  if (!premium) {
    return `<script src="/js/app.js?v=${appJsVersion}"></script>
<script src="/js/animations.js?v=${animJsVersion}"></script>${extra}`;
  }
  return `<script src="/js/app.js?v=${appJsVersion}"></script>
<script src="/js/animations.js?v=${animJsVersion}"></script>
<script src="/js/counter.js?v=${counterJsVersion}"></script>
<script src="/js/slider.js?v=${sliderJsVersion}"></script>
<script src="/js/cursor.js?v=${cursorJsVersion}"></script>
<script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.1/dist/chart.umd.min.js"></script>
<script src="/js/dashboard.js?v=${dashJsVersion}"></script>${extra}`;
}

function loader() {
  return `<div class="loader" data-loader aria-hidden="true">
  <div class="loader__logo">${site.shortName}</div>
  <div class="loader__bar"><div class="loader__progress" data-loader-progress></div></div>
</div>`;
}

function shell(title, desc, body, extraScripts = "", premium = false) {
  return `${head(title, desc)}
<body>
${premium ? loader() : ""}
${header()}
<main>${body}</main>
${footer()}
${scripts(extraScripts, premium)}
</body></html>`;
}

function sectionHeader(label, title, desc = "") {
  return `<div class="section-header reveal">
  <span class="section-label">${label}</span>
  <h2 class="section-title">${title}</h2>
  ${desc ? `<p class="section-desc">${desc}</p>` : ""}
</div>`;
}

function marquee(stars = false) {
  const items = [...marqueeItems, ...marqueeItems];
  const inner = items.map((item) => `<span class="marquee-item">${item}${stars ? icon("star_rate") : '<span style="opacity:0.3;font-size:2rem">✦</span>'}</span>`).join("");
  return `<div class="marquee"><div class="marquee-track">${inner}</div></div>`;
}

function portrait(photo, { dark = false, face = true, borderMd = false } = {}) {
  const src = photo === "about" ? "/images/profile-photo-about.png" : "/images/profile-photo.png";
  const pos = face ? "center 20%" : "center";
  const borderClass = borderMd ? " portrait-border-md" : "";
  return `<div class="portrait-wrap${dark ? " dark" : ""}${borderClass}"><img src="${src}" alt="Professional portrait of ${site.name}" style="object-position:${pos}"></div>`;
}

function heroTagsHtml() {
  const tags = heroBadges.map((b, i) => {
    const breakBefore = i === heroBadges.length - 1 ? '<span class="tag-break"></span>' : "";
    return `${breakBefore}<span class="tag">${b}</span>`;
  });
  return tags.join("");
}

function serviceCard(s, learnMore = false) {
  return `<article class="service-card reveal">
  <div class="service-card__icon">${icon(s.icon, true)}</div>
  <h3>${s.title}</h3>
  <p>${s.description}</p>
  ${learnMore ? `<a href="${routes.contact}" class="service-card__link">Learn more ${icon("arrow_forward")}</a>` : ""}
</article>`;
}

function testimonialCard(t) {
  const initial = t.name.charAt(0).toUpperCase();
  return `<article class="testimonial-card">
  <div class="testimonial-card__mark" aria-hidden="true">"</div>
  <div class="testimonial-card__stars">${Array(5).fill(icon("star", true)).join("")}<span class="testimonial-card__rating">5.0</span></div>
  <p class="testimonial-card__quote">${t.quote}</p>
  <div class="testimonial-card__author">
    <div class="testimonial-card__avatar">${initial}</div>
    <div>
      <div class="testimonial-card__name">${t.name}</div>
      <div class="testimonial-card__role">Verified Client</div>
    </div>
  </div>
</article>`;
}

function testimonialsSlider() {
  const slides = testimonials.map((t) => `<div class="testimonial-slide">${testimonialCard(t)}</div>`).join("");
  return `<div class="testimonials-slider" data-testimonials-slider>
  <button type="button" class="testimonials-slider__btn testimonials-slider__btn--prev btn-magnetic" data-slider-prev aria-label="Previous testimonial">${icon("chevron_left")}</button>
  <div class="testimonials-slider__viewport">
    <div class="testimonials-slider__track" data-slider-track>${slides}</div>
  </div>
  <button type="button" class="testimonials-slider__btn testimonials-slider__btn--next btn-magnetic" data-slider-next aria-label="Next testimonial">${icon("chevron_right")}</button>
</div>`;
}

function testimonialsSection() {
  return `<section class="section testimonials-section">
  <div class="container"><div class="text-center mb-20"><div class="label mb-4" style="justify-content:center"><span class="label-line"></span> Client Testimonials</div><h2 class="headline-lg">Trusted by Sellers<br><span class="text-accent">Seeking Real Results</span></h2></div>
  ${testimonialsSlider()}</div>
</section>`;
}

function contactFormLight() {
  const opts = services.map((s) => `<option value="${s.title}">${s.title}</option>`).join("");
  return `<form data-contact-form class="form-card">
  <div class="form-fields">
    <div class="form-error hidden"></div>
    <div class="form-group"><label for="name">Name</label><input id="name" name="name" type="text" required placeholder="Your name"></div>
    <div class="form-group"><label for="email">Email</label><input id="email" name="email" type="email" required placeholder="you@company.com"></div>
    <div class="form-group"><label for="website">Business Website</label><input id="website" name="website" type="url" placeholder="https://yourwebsite.com"></div>
    <div class="form-group"><label for="service">Service Needed</label><select id="service" name="service" required><option value="" disabled selected>Select a service</option>${opts}</select></div>
    <div class="form-group"><label for="message">Message</label><textarea id="message" name="message" rows="4" required placeholder="Tell me about your business and goals..."></textarea></div>
    <button type="submit" class="btn btn-primary btn-has-icon" style="width:100%" data-submit-label="Send Message">Send Message ${icon("send")}</button>
  </div>
  <div class="form-success hidden">
    ${icon("check_circle", true, "icon-primary")}
    <h3 class="headline-md mt-4">Message Sent!</h3>
    <p class="text-muted mt-4">Thank you for reaching out. I'll get back to you soon.</p>
  </div>
</form>`;
}

function contactFormDark(variant = "default") {
  const opts = services.map((s) => `<option value="${s.title}">${s.title}</option>`).join("");
  const variantClass = variant === "projects" ? " variant-projects" : variant === "services" ? " variant-services" : "";
  const sectionBg = variant === "projects" || variant === "services" ? "bg-primary-container" : "bg-primary";
  return `<section id="contact" class="about-contact ${sectionBg}">
  <div class="container about-contact-grid">
    <div class="about-contact-info">
      <div class="label mb-4"><span class="label-line"></span> Contact Us</div>
      <h2 class="display-hero">Let's Talk for <span class="text-accent">Your Next Project</span></h2>
      <p>Ready to improve your Amazon listings, A+ content, and wholesale operations? I combine conversion-first creatives with hands-on FBA support to help your catalog grow.</p>
      <div class="contact-info-row">
        <div class="contact-info-icon">${icon("call", true)}</div>
        <div><div class="contact-info-label">Consultation</div><div class="contact-info-value">${site.consultationPrice}</div></div>
      </div>
      <div class="contact-info-row">
        <div class="contact-info-icon">${icon("mail", true)}</div>
        <div><div class="contact-info-label">Email</div><div class="contact-info-value">${site.email}</div></div>
      </div>
      <div class="contact-info-row">
        <div class="contact-info-icon">${icon("location_on", true)}</div>
        <div><div class="contact-info-label">Location</div><div class="contact-info-value">${site.location}</div></div>
      </div>
    </div>
    <form data-contact-form class="about-contact-form${variantClass}">
      <div class="form-fields">
        <div class="form-error hidden"></div>
        <div class="form-row-2">
          <div class="form-group"><label for="name">Your Name *</label><input id="name" name="name" type="text" required placeholder="Ex. John Doe"></div>
          <div class="form-group"><label for="email">Email *</label><input id="email" name="email" type="email" required placeholder="example@email.com"></div>
        </div>
        <div class="form-row-2">
          <div class="form-group"><label for="website">Business Website</label><input id="website" name="website" type="url" placeholder="https://yourwebsite.com"></div>
          <div class="form-group"><label for="service">I'm Interested In *</label><select id="service" name="service" required><option value="" disabled selected>Select a service</option>${opts}</select></div>
        </div>
        <div class="form-group"><label for="message">Your Message *</label><textarea id="message" name="message" rows="4" required placeholder="Tell me about your goals..."></textarea></div>
        <button type="submit" class="btn-submit-dark" data-submit-label="Submit Now">Submit Now <span class="submit-icon">${icon("send")}</span></button>
      </div>
      <div class="form-success hidden" style="text-align:center;padding:48px 0">
        ${icon("check_circle", true, "icon-accent-yellow")}
        <h3 class="headline-md mt-4" style="color:var(--on-primary)">Message Sent!</h3>
        <p style="color:var(--on-primary-container);margin-top:8px">Thank you — I'll get back to you soon.</p>
      </div>
    </form>
  </div>
</section>`;
}

function consultationCTA() {
  return `<section class="section cta-section"><div class="container"><div class="cta-box">
  <div class="label mb-4" style="justify-content:center">Consultation</div>
  <h2 class="headline-lg">Ready to Improve Your <span class="text-accent">Amazon Listings & A+ Content?</span></h2>
  <p class="text-muted mt-4" style="max-width:42rem;margin:16px auto 0">Book a call to review your listings, A+ modules, sourcing plan, and growth opportunities.</p>
  <a href="${routes.contact}" class="btn btn-primary btn-has-icon btn-cta-consult mt-4">Book a Call <span class="btn-icon">${icon("videocam")}</span></a>
  <p class="text-muted mt-4" style="font-size:14px">${site.consultationPrice}</p>
</div></div></section>`;
}

function servicesCTA() {
  const chips = serviceCtaChips.map((c) => `<span class="cta-chip ${c.className}">${c.label}</span>`).join("");
  return `<section class="services-cta-section"><div class="container text-center">
  <h2 class="display-hero mb-6">Let's Create <span class="text-accent" style="font-style:italic">High-Converting</span><br>Amazon Content Together!</h2>
  <a href="${routes.contact}" class="btn-cta-large">Contact Us Now <span class="btn-icon-lg">${icon("arrow_outward")}</span></a>
  <div class="cta-chips">${chips}</div>
</div></section>`;
}

function projectsCTA() {
  const chips = projectCtaChips.map((c) => `<span class="cta-chip ${c.className}">${c.label}</span>`).join("");
  return `<section class="projects-cta-section"><div class="container text-center">
  <h2 class="display-hero" style="max-width:42rem;margin:0 auto 40px">Let's Create <span class="text-accent">High-Converting Amazon Content</span> Together!</h2>
  <a href="${routes.contact}" class="btn-cta-large">Contact Us Now <span class="btn-icon-lg">${icon("arrow_forward")}</span></a>
  <div class="cta-chips">${chips}</div>
</div></section>`;
}

function visionMissionSection() {
  return `<section class="vision-section"><div class="container">
  <div class="text-center mb-20">
    <div class="label mb-4" style="justify-content:center"><span class="label-line"></span> My Vision & Mission</div>
    <h2 class="display-hero">My Vision and Mission:<br><span class="text-accent">Listings That Convert</span></h2>
  </div>
  <div class="vision-cards">
    <article class="vision-card">
      <div class="vision-card-icon dark">${icon("rocket_launch", false, "icon-on-primary")}</div>
      <h3 class="headline-md mb-4">${visionMission.vision.title}</h3>
      <p class="text-muted">${visionMission.vision.description}</p>
    </article>
    <article class="vision-card mission">
      <div class="vision-card-icon yellow">${icon("visibility", true)}</div>
      <h3 class="headline-md mb-4">${visionMission.mission.title}</h3>
      <p class="text-muted">${visionMission.mission.description}</p>
    </article>
  </div>
  <div class="vision-banner">
    <div class="vision-banner-image">
      <div class="vision-banner-text">
        <div>
          <p class="headline-md" style="color:var(--on-primary)">Conversion-first creatives built for Amazon listings that sell</p>
          <p class="text-muted mt-4" style="color:var(--on-primary-container)">A+ / EBC · Listing Images · FBA Wholesale · Logos · Print</p>
        </div>
      </div>
    </div>
    <div class="vision-banner-stats">
      ${bannerStats.map((s) => `<div><div class="stat-value" style="font-size:32px">${s.value}</div><div class="stat-label" style="font-weight:700;text-transform:uppercase;font-size:12px;color:rgba(6,27,14,0.7)">${s.label}</div></div>`).join("")}
    </div>
  </div>
</div></section>`;
}

function achievementsSection() {
  const items = achievements.map((a) => `<article class="achievement-item">
  <div class="achievement-icon-wrap">
    <div class="achievement-ring${a.reverse ? " reverse" : ""}"></div>
    ${icon(a.icon, true)}
    <span class="achievement-year">${a.year}</span>
  </div>
  <div>
    <h3 class="headline-md mb-4">${a.title}</h3>
    <p class="text-muted mb-4">${a.description}</p>
    <div class="achievement-divider"></div>
  </div>
</article>`).join("");
  return `<section class="section container">
  <div class="text-center mb-20">
    <div class="label mb-4" style="justify-content:center"><span class="label-line"></span> My Achievements</div>
    <h2 class="display-hero">My Professional <span class="text-accent">Milestones</span></h2>
  </div>
  <div class="achievements-grid">${items}</div>
</section>`;
}

function aboutIntroSection() {
  const tagHtml = aboutSkillTags.map((tag, i) => {
    const cls =
      i === 1 ? "skill-tag skill-tag-dark" : i === 2 ? "skill-tag skill-tag-light" : "skill-tag skill-tag-orange";
    return `<span class="${cls}">${tag}</span>`;
  }).join("");
  return `<section class="section section-about-intro"><div class="container"><div class="about-intro-grid">
  <div class="about-intro-content">
    <div class="label mb-4"><span class="label-line"></span> About Me</div>
    <h2 class="display-hero mb-6">Who is <span class="text-accent">${site.name}?</span></h2>
    <p class="text-body-lg text-muted mb-6">${site.name} is a graphic artist and Amazon specialist based in ${site.location}. With 6+ years across design and FBA, he helps sellers lift CTR and conversion through A+ / EBC content, listing images, wholesale sourcing, and brand identity.</p>
    <div class="about-stats-inline">
      <div><div class="stat-value" style="font-size:32px">6+</div><div class="stat-label">Years Experience</div></div>
      <div><div class="stat-value" style="font-size:32px">50K+</div><div class="stat-label">Sales Generated</div></div>
      <div><div class="stat-value" style="font-size:32px">30%</div><div class="stat-label">CTR Lift</div></div>
    </div>
    <a href="${routes.contact}" class="btn-slide">Book a Call <span class="btn-icon-lg">${icon("arrow_forward")}</span></a>
  </div>
  <div class="about-intro-portrait">
    <div class="portrait-ring-light"></div>
    ${portrait("about", { face: true })}
    <div class="about-skill-card"><div class="tag-row">${tagHtml}</div></div>
  </div>
</div></div></section>`;
}

function connectBanner() {
  return `<section class="connect-banner"><div class="container connect-inner">
  <h2 class="display-hero">Let's <span class="text-accent">Connect</span> there</h2>
  ${btnPrimary("Book a Call", routes.contact, "arrow_outward")}
</div></section>`;
}

const sectionPageMaps = {
  "beeswax-wrap-kit-amazon-aplus": { "01": "01", "02": "02", "03": "03", "04": "04", "05": "05" },
  "pinon-calming-salve-amazon-aplus": { "01": "01", "02": "02", "03": "03", "04": "04" },
  "fidget-headphones-kids-listing": { "01": "01", "02": "02", "03": "03", "04": "04" },
  "amazon-ebc-portfolio": { "01": "01", "02": "02", "03": "03", "04": "04", "05": "05" },
};

function resolveSectionChart(projectSlug, section) {
  if (section.chart) return section.chart;
  const page = sectionPageMaps[projectSlug]?.[String(section.number)];
  if (page) {
    const pageFile = join(ROOT, "images", "projects", projectSlug, `page-${page}.png`);
    if (existsSync(pageFile)) return `/images/projects/${projectSlug}/page-${page}.png`;
  }
  const num = String(section.number);
  const padded = num.padStart(2, "0");
  const names = [`section-${padded}`, `section-${num}`, padded, num];
  const exts = ["png", "webp", "jpg", "jpeg"];
  for (const name of names) {
    for (const ext of exts) {
      const file = join(ROOT, "images", "projects", projectSlug, `${name}.${ext}`);
      if (existsSync(file)) return `/images/projects/${projectSlug}/${name}.${ext}`;
    }
  }
  return null;
}

function projectSections(sections, projectSlug) {
  if (!sections?.length) return "";
  return `<div class="case-study-sections mb-16">
  <div class="text-center mb-10">
    <div class="label mb-4" style="justify-content:center"><span class="label-line"></span> Case Study</div>
    <h2 class="headline-lg">Creative <span class="text-accent">Breakdown</span></h2>
  </div>
  ${sections.map((s) => {
    const chart = resolveSectionChart(projectSlug, s);
    return `<article class="case-study-block mb-10">
    <div class="label mb-4"><span class="label-line"></span> ${s.number}</div>
    <h3 class="headline-md mb-4">${s.title}</h3>
    <p class="text-muted mb-6">${s.description}</p>
    ${chart ? `<figure class="case-study-screenshot mb-6"><img src="${chart}" alt="${s.title} screenshot" loading="lazy"></figure>` : ""}
    <div class="results-grid mb-6">${s.stats.map((r) => `<div class="result-card"><div class="result-value">${r.value}</div><div class="result-label">${r.label}</div></div>`).join("")}</div>
    <div class="case-study-highlights">${s.highlights.map((h) => `<span class="tag">${h}</span>`).join("")}</div>
  </article>`;
  }).join("")}
</div>`;
}

function projectHeroImage(p, tags) {
  const isLogoHero = p.website && !p.heroBanner;
  const img = `<img src="${p.src}" alt="${p.title}"${isLogoHero ? ' class="project-hero-logo"' : ""}>`;
  const linkedImg = p.website
    ? `<a href="${p.website}" target="_blank" rel="noopener noreferrer" class="project-hero-link" aria-label="Visit ${p.client || p.title} website">${img}</a>`
    : img;
  const heroClass = p.website ? (p.heroBanner ? " project-hero-image--banner" : " project-hero-image--linked") : "";
  return `<div class="project-hero-image${heroClass}">${linkedImg}<div class="project-tags" style="bottom:16px;left:16px">${tags}</div></div>`;
}

function projectBreadcrumb(crumbs) {
  const items = crumbs.map((c, i) => {
    const sep = i > 0 ? `<span>${icon("chevron_right", false, "icon-sm")}</span>` : "";
    const inner = c.href ? `<a href="${c.href}">${c.label}</a>` : `<span class="current">${c.label}</span>`;
    return `${sep}${inner}`;
  }).join(" ");
  return `<div class="page-header page-header--breadcrumb"><nav class="breadcrumb" aria-label="Breadcrumb">${items}</nav></div>`;
}

function projectDetailHero(p) {
  const tags = p.tags.map((t) => `<span class="project-tag">${t}</span>`).join("");
  const isLogoHero = p.website && !p.heroBanner;
  const heroImageClass = p.website ? (p.heroBanner ? " project-hero-image--banner" : " project-hero-image--linked") : "";
  const img = `<img src="${p.src}" alt="${p.title}"${isLogoHero ? ' class="project-hero-logo"' : ""}>`;
  const imageInner = p.website
    ? `<a href="${p.website}" target="_blank" rel="noopener noreferrer" class="project-hero-link" aria-label="Visit ${p.client || p.title} website">${img}</a>`
    : img;
  const visitBtn = p.website
    ? `<a href="${p.website}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-has-icon btn-visit-website">Visit Website <span class="btn-icon"><span class="material-symbols-outlined">arrow_outward</span></span></a>`
    : "";
  return `<section class="project-detail-intro">
  <div class="container">
    <div class="project-detail-hero">
      <div class="project-detail-hero__content">
        <div class="label mb-4"><span class="label-line"></span> Case Study</div>
        <h1 class="display-hero">${p.title}</h1>
        <p class="text-body-lg text-muted project-detail-hero__subtitle">${p.subtitle}</p>
        ${visitBtn}
      </div>
      <div class="project-detail-hero__media">
        <div class="project-hero-image project-detail-hero__image${heroImageClass}">
          ${imageInner}
          <div class="project-tags">${tags}</div>
        </div>
      </div>
    </div>
    <div class="meta-grid">
      <div class="meta-card"><div class="meta-label">Client</div><div class="meta-value">${p.client}</div></div>
      <div class="meta-card"><div class="meta-label">Industry</div><div class="meta-value">${p.industry}</div></div>
      <div class="meta-card"><div class="meta-label">Duration</div><div class="meta-value">${p.duration}</div></div>
      <div class="meta-card"><div class="meta-label">Services</div><div class="meta-value">${p.tags.join(", ")}</div></div>
    </div>
  </div>
</section>`;
}

function projectCard(p, hidden = false) {
  const tags = p.tags.map((t) => `<span class="project-tag">${t}</span>`).join("");
  const dataTags = p.tags.map((t) => t.toLowerCase()).join("|");
  return `<article class="project-card${hidden ? " hidden-project hidden" : ""}" data-tags="${dataTags}">
  <a href="${routes.project(p.slug)}"><div class="project-image"><img src="${p.src}" alt="${p.title}" loading="lazy">${tags ? `<div class="project-tags">${tags}</div>` : ""}</div></a>
  <div class="project-meta">
    <a href="${routes.project(p.slug)}"><div><h3 class="headline-md text-primary">${p.title}</h3><p class="text-muted mt-4">${p.subtitle}</p></div></a>
    <a href="${routes.project(p.slug)}" class="project-arrow" aria-label="View ${p.title}">${icon("north_east")}</a>
  </div>
</article>`;
}

function pageHeader(title, crumbs, compact = false) {
  const titleClass = compact ? "headline-lg" : "display-hero";
  const items = crumbs.map((c, i) => {
    const sep = i > 0 ? `<span>${icon("chevron_right", false, "icon-sm")}</span>` : "";
    const inner = c.href ? `<a href="${c.href}">${c.label}</a>` : `<span class="current">${c.label}</span>`;
    return `${sep}${inner}`;
  }).join(" ");
  return `<div class="page-header"><h1 class="${titleClass} mb-4">${title}</h1><nav class="breadcrumb" aria-label="Breadcrumb">${items}</nav></div>`;
}

/* INDEX — premium dark single page */
const featuredProjects = featuredSlugs.map((slug) => projects.find((p) => p.slug === slug)).filter(Boolean);

function portfolioCard(p, index = 0) {
  const tags = p.tags.map((t) => `<span class="portfolio-card__tag">${t}</span>`).join("");
  const num = String(index + 1).padStart(2, "0");
  const reversed = index % 2 === 1 ? " portfolio-row--reverse" : "";
  const revealDir = index % 2 === 1 ? "reveal-left" : "reveal-right";
  return `<article class="portfolio-row${reversed} reveal">
  <div class="portfolio-row__body">
    <span class="portfolio-row__num">${num}</span>
    <div class="portfolio-card__tags">${tags}</div>
    <h3>${p.title}</h3>
    <p>${p.subtitle}</p>
    <a href="${routes.project(p.slug)}" class="service-card__link">View Case Study ${icon("arrow_forward")}</a>
  </div>
  <a href="${routes.project(p.slug)}" class="portfolio-row__img ${revealDir}">
    <img src="${p.src}" alt="${p.title}" loading="lazy">
    <div class="portfolio-card__overlay">View Case Study ${icon("arrow_outward")}</div>
  </a>
</article>`;
}

function pmHero() {
  const rolesJson = JSON.stringify(typingRoles).replace(/'/g, "&#39;");
  const statPills = heroStatPills
    .map((s) => `<div class="hero__stat"><strong>${s.value}</strong><span>${s.label}</span></div>`)
    .join("");
  return `<section id="home" class="hero">
  <div class="hero__bg">
    <div class="hero__gradient"></div>
    <div class="hero__orb hero__orb--1" data-parallax></div>
    <div class="hero__orb hero__orb--2" data-parallax></div>
  </div>
  <div class="container hero__grid">
    <div class="hero__content reveal-left">
      <div class="hero__badge">${icon("verified", true, "icon-sm")} Graphic Artist · Amazon A+ Specialist</div>
      <h1 class="hero__title">${site.name}</h1>
      <div class="hero__type" data-typewriter data-roles='${rolesJson}'><span data-typewriter-text></span><span class="hero__type-cursor" aria-hidden="true"></span></div>
      <p class="hero__desc">Graphic Artist and Marketing Ninja based in ${site.location}. I help Amazon sellers and brand owners scale with high-converting A+ / EBC content, listing images, FBA wholesale, and brand identity — the same work behind 30% CTR and 22% sales lifts on listing graphics.</p>
      <div class="hero__cta">
        <a href="/#contact" class="btn btn-primary btn-magnetic">Book a Call</a>
        <a href="/#projects" class="btn btn-ghost btn-magnetic">View Projects</a>
      </div>
      <div class="hero__stats stagger-children">${statPills}</div>
    </div>
    <div class="hero__visual reveal-right">
      <div class="hero__img-wrap">
        <img src="/images/profile-photo.png" alt="${site.name}">
      </div>
      <div class="hero__float hero__float--1 glass"><strong>6+</strong><br><span style="font-size:12px;color:var(--muted)">Years</span></div>
      <div class="hero__float hero__float--2 glass"><strong>30%</strong><br><span style="font-size:12px;color:var(--muted)">CTR Lift</span></div>
    </div>
  </div>
</section>`;
}

function pmMarquee() {
  const items = [...marqueeItems, ...marqueeItems]
    .map((item) => `<span class="marquee-item">${item}</span>`)
    .join("");
  return `<div class="marquee-section"><div class="marquee-track">${items}</div></div>`;
}

function pmAbout() {
  const tags = aboutSkillTags.map((t) => `<span class="portfolio-card__tag">${t}</span>`).join("");
  const timeline = experienceItems
    .slice(0, 3)
    .map(
      (e) => `<div class="timeline__item reveal">
  <div class="timeline__period">${e.period}</div>
  <div class="timeline__title">${e.title}</div>
  <p class="timeline__desc">${e.description}</p>
</div>`
    )
    .join("");
  return `<section id="about" class="section">
  <div class="container">
    ${sectionHeader("About Me", "Graphic Artist & Amazon Specialist", "Helping sellers grow with A+ content, listing creatives, FBA wholesale, and brand identity.")}
    <div class="about__grid">
      <div class="about__photo reveal-left">
        <img src="/images/profile-photo-about.png" alt="${site.name}" onerror="this.src='/images/profile-photo.png'">
      </div>
      <div class="about__text reveal-right">
        <p>I'm ${site.name}, a graphic artist and Amazon specialist helping sellers and brand owners scale with A+ / EBC content, listing images, FBA wholesale, and identity design. Since 2018 I've worked across logos, print, Fiverr gigs, and Amazon creatives — including listing graphics that lifted CTR 30% and sales 22%.</p>
        <p>From A+ modules and main-image direction to sourcing, brand outreach, and account growth, I combine conversion-first design with the operations Amazon catalogs actually need.</p>
        <div class="portfolio-card__tags" style="margin:24px 0">${tags}</div>
        <div class="timeline">${timeline}</div>
      </div>
    </div>
  </div>
</section>`;
}

function pmServices() {
  const cards = services.map((s) => serviceCard(s)).join("");
  return `<section id="services" class="section">
  <div class="container">
    ${sectionHeader("Services", "What I Do", "End-to-end Amazon creatives, FBA wholesale, and brand identity built for listings that convert.")}
    <div class="services-grid stagger-children">${cards}</div>
  </div>
</section>`;
}

function pmWhy() {
  const items = whyWorkWithMe
    .map(
      (text) => `<div class="why-item reveal">
  <div class="why-item__check">${icon("check", true)}</div>
  <p>${text}</p>
</div>`
    )
    .join("");
  return `<section id="why" class="section">
  <div class="container">
    ${sectionHeader("Why Work With Me", "Results You Can Trust", "A proven track record across Amazon A+ content, wholesale, and brand design.")}
    <div class="why-grid stagger-children">${items}</div>
  </div>
</section>`;
}

function pmPortfolio() {
  const cards = featuredProjects.map((p, i) => portfolioCard(p, i)).join("");
  return `<section id="projects" class="section">
  <div class="container">
    ${sectionHeader("Featured Work", "Selected Projects", "Case studies across Amazon A+ content, listing design, logos, and print.")}
    <div class="portfolio-rows">${cards}</div>
    <div style="text-align:center;margin-top:48px" class="reveal">
      <a href="${routes.projects}" class="btn btn-ghost btn-magnetic">View All Projects ${icon("arrow_forward")}</a>
    </div>
  </div>
</section>`;
}

function pmDashboard() {
  const kpis = dashboardKpis
    .map((k) => {
      const deltaCls = k.up ? "dash-kpi__delta--up" : "dash-kpi__delta--down";
      return `<article class="dash-kpi reveal">
  <div class="dash-kpi__head">
    <div class="dash-kpi__icon">${icon(k.icon, true)}</div>
    <span class="dash-kpi__delta ${deltaCls}">${k.delta}</span>
  </div>
  <div class="dash-kpi__value" data-dash-kpi data-kpi-key="${k.key}">0</div>
  <div class="dash-kpi__label">${k.label}</div>
</article>`;
    })
    .join("");

  return `<section id="dashboard" class="dashboard section" data-dashboard>
  <div class="container">
    ${sectionHeader("Performance Analytics", "Amazon Dashboard", "Sample Amazon performance view across sessions, ACOS, listing conversion, and wholesale vs ads — demo data for illustration.")}
    <div class="dashboard__topbar reveal">
      <div class="dashboard__live"><span class="dashboard__live-dot"></span> Sample Amazon Data</div>
      <div class="dashboard__period" role="group" aria-label="Date range">
        <button type="button" class="dashboard__period-btn" data-period="7D">7D</button>
        <button type="button" class="dashboard__period-btn" data-period="30D">30D</button>
        <button type="button" class="dashboard__period-btn is-active" data-period="90D">90D</button>
        <button type="button" class="dashboard__period-btn" data-period="YTD">YTD</button>
      </div>
    </div>
    <div class="dashboard__kpis stagger-children">${kpis}</div>
    <div class="dashboard__charts">
      <article class="dash-chart reveal">
        <div class="dash-chart__head">
          <div>
            <h3 class="dash-chart__title">Monthly Ad Spend vs Revenue</h3>
            <p class="dash-chart__sub">Amazon Ads &amp; wholesale combined · Last 6 months</p>
          </div>
          <span class="dash-chart__badge">Line Chart</span>
        </div>
        <div class="dash-chart__canvas"><canvas data-chart="spend-revenue" aria-label="Monthly ad spend versus revenue line chart"></canvas></div>
        <div class="dash-chart__legend">
          <span class="dash-chart__legend-item"><span class="dash-chart__legend-swatch" style="background:#2563eb"></span> Ad Spend</span>
          <span class="dash-chart__legend-item"><span class="dash-chart__legend-swatch" style="background:#d4af37"></span> Revenue</span>
        </div>
      </article>
      <article class="dash-chart reveal">
        <div class="dash-chart__head">
          <div>
            <h3 class="dash-chart__title">Amazon Ads vs Wholesale</h3>
            <p class="dash-chart__sub">Channel performance comparison · sample view</p>
          </div>
          <span class="dash-chart__badge">Bar Chart</span>
        </div>
        <div class="dash-chart__canvas dash-chart__canvas--sm"><canvas data-chart="platform" aria-label="Amazon Ads versus Wholesale bar chart"></canvas></div>
        <div class="dash-chart__legend">
          <span class="dash-chart__legend-item"><span class="dash-chart__legend-swatch" style="background:#2563eb"></span> Amazon Ads</span>
          <span class="dash-chart__legend-item"><span class="dash-chart__legend-swatch" style="background:#a855f7"></span> Wholesale</span>
        </div>
      </article>
      <article class="dash-chart reveal">
        <div class="dash-chart__head">
          <div>
            <h3 class="dash-chart__title">Conversion Mix by Content</h3>
            <p class="dash-chart__sub">Top performing listing and A+ types</p>
          </div>
          <span class="dash-chart__badge">Donut Chart</span>
        </div>
        <div class="dash-chart__canvas dash-chart__canvas--sm"><canvas data-chart="conversion" aria-label="Conversion mix by content donut chart"></canvas></div>
      </article>
      <article class="dash-chart dash-chart--wide reveal">
        <div class="dash-chart__head">
          <div>
            <h3 class="dash-chart__title">Unit Session % Trend</h3>
            <p class="dash-chart__sub">Listing conversion efficiency · sample view</p>
          </div>
          <span class="dash-chart__badge">Area Chart</span>
        </div>
        <div class="dash-chart__canvas dash-chart__canvas--area"><canvas data-chart="roas" aria-label="Unit session percent trend area chart"></canvas></div>
      </article>
    </div>
  </div>
</section>`;
}

function pmStats() {
  const cards = counterStats
    .map(
      (s) => `<div class="stat-card reveal">
  <div class="stat-card__value" data-count="${s.count}${s.suffix}">0</div>
  <div class="stat-card__label">${s.label}</div>
</div>`
    )
    .join("");
  return `<section class="stats-band">
  <div class="container">
    <div class="stats-grid stagger-children">${cards}</div>
  </div>
</section>`;
}

function pmTestimonials() {
  return `<section id="testimonials" class="section">
  <div class="container">
    ${sectionHeader("Testimonials", "What Clients Say", "Trusted by sellers and brands seeking real results from Amazon creatives and wholesale.")}
    <div class="reveal">${testimonialsSlider()}</div>
  </div>
</section>`;
}

function pmConsultationCTA() {
  return `<section class="cta-section">
  <div class="cta-section__glow"></div>
  <div class="container">
    <div class="cta-box reveal-scale">
      <h2>Ready to Improve Your Amazon Listings &amp; A+ Content?</h2>
      <p>Book a call to review your listings, A+ modules, sourcing plan, and growth opportunities.</p>
      <a href="/#contact" class="btn btn-primary btn-magnetic">Book a Call ${icon("videocam")}</a>
      <p class="cta-box__price">Available via Zoom · ${site.consultationPrice}</p>
    </div>
  </div>
</section>`;
}

function pmContactForm() {
  const opts = services.map((s) => `<option value="${s.title}">${s.title}</option>`).join("");
  return `<form data-contact-form class="contact-form">
  <div class="form-fields">
    <div class="form-error hidden"></div>
    <div class="form-group"><label for="name">Name</label><input id="name" name="name" type="text" required placeholder="Your name"></div>
    <div class="form-group"><label for="email">Email</label><input id="email" name="email" type="email" required placeholder="you@company.com"></div>
    <div class="form-group"><label for="website">Business Website</label><input id="website" name="website" type="url" placeholder="https://yourwebsite.com"></div>
    <div class="form-group"><label for="service">Service Needed</label><select id="service" name="service" required><option value="" disabled selected>Select a service</option>${opts}</select></div>
    <div class="form-group"><label for="message">Message</label><textarea id="message" name="message" rows="4" required placeholder="Tell me about your business and goals..."></textarea></div>
    <button type="submit" class="btn btn-primary btn-magnetic" style="width:100%" data-submit-label="Send Message">Send Message ${icon("send")}</button>
  </div>
  <div class="form-success hidden">
    ${icon("check_circle", true)}
    <h3 style="font-family:var(--font-display);margin:16px 0 8px">Message Sent!</h3>
    <p style="color:var(--muted)">Thank you for reaching out. I'll get back to you soon.</p>
  </div>
</form>`;
}

function pmContact() {
  return `<section id="contact" class="section">
  <div class="container">
    ${sectionHeader("Contact", "Let's Work Together", "Ready to scale your Amazon listings, A+ content, or wholesale? Send a message or book a call.")}
    <div class="contact__grid">
      <div class="contact__info reveal-left">
        <div class="contact-card">
          <div class="contact-card__icon">${icon("mail", true)}</div>
          <div><strong>Email</strong><span><a href="mailto:${site.email}">${site.email}</a></span></div>
        </div>
        <div class="contact-card">
          <div class="contact-card__icon">${icon("location_on", true)}</div>
          <div><strong>Location</strong><span>${site.location}</span></div>
        </div>
        <div class="contact-card">
          <div class="contact-card__icon">${icon("videocam", true)}</div>
          <div><strong>Consultation</strong><span>${site.consultationPrice}</span></div>
        </div>
      </div>
      <div class="reveal-right">${pmContactForm()}</div>
    </div>
  </div>
</section>`;
}

const indexBody = `
${pmHero()}
${pmMarquee()}
${pmAbout()}
${pmServices()}
${pmWhy()}
${pmPortfolio()}
${pmDashboard()}
${pmStats()}
${pmTestimonials()}
${pmConsultationCTA()}
${pmContact()}`;

writeFileSync(
  join(ROOT, "index.html"),
  shell(site.title, site.description, indexBody, `\n<script src="/js/contact.js?v=${contactJsVersion}"></script>`, true)
);

/* ABOUT */
writeFileSync(join(ROOT, "about.html"), shell(site.aboutTitle, site.aboutDescription, `
${pageHeader("About Me", [{ label: "Home", href: routes.home }, { label: "About Me" }])}
${aboutIntroSection()}
${visionMissionSection()}
${achievementsSection()}
${contactFormDark("default")}
${marquee(true)}
${connectBanner()}`, `<script src="/js/contact.js"></script>`));

/* SERVICES */
writeFileSync(join(ROOT, "services.html"), shell(site.servicesTitle, site.servicesDescription, `
${pageHeader("Services", [{ label: "Home", href: routes.home }, { label: "Services" }])}
<section class="section container"><div class="text-center mb-10"><div class="label mb-4" style="justify-content:center"><span class="label-line"></span> Services</div><h2 class="display-hero"><span class="text-accent">Services</span> I Provide</h2></div>
<div class="services-grid">${services.map((s) => serviceCard(s, true)).join("")}</div></section>
${servicesCTA()}
${contactFormDark("services")}
${marquee(true)}
${connectBanner()}`, `<script src="/js/contact.js"></script>`));

/* PROJECTS */
mkdirSync(join(ROOT, "projects"), { recursive: true });
const projectsPageBody = `
${pageHeader("Projects", [{ label: "Home", href: routes.home }, { label: "Projects" }])}
<section class="section container"><div class="text-center mb-10"><div class="label mb-4" style="justify-content:center"><span class="label-line"></span> My Portfolio</div><h2 class="display-hero">My Latest <span class="text-accent">Projects</span></h2></div>
<div class="projects-grid">${[...projects].reverse().map((p) => projectCard(p)).join("")}</div></section>
${projectsCTA()}
${contactFormDark("projects")}
${connectBanner()}`;
writeFileSync(join(ROOT, "projects", "index.html"), shell(site.projectsTitle, site.projectsDescription, projectsPageBody, `<script src="/js/contact.js"></script>`));

/* CONTACT */
writeFileSync(join(ROOT, "contact.html"), shell(`Contact ${site.name}`, `Contact ${site.name} for Amazon A+ content, listing design, and FBA wholesale.`, `
${pageHeader("Contact", [{ label: "Home", href: routes.home }, { label: "Contact" }])}
<section class="section container"><div class="contact-grid">
  <div><div class="label mb-4"><span class="label-line"></span> Contact</div><h2 class="headline-lg mb-4">Let's Talk About <span class="text-accent">Your Catalog</span></h2><p class="text-muted mb-6">Share your Amazon goals, current listings, and where you want to grow. I'll respond with next steps for A+ content, listing images, wholesale, or brand identity.</p>
  <div class="contact-info-row" style="color:var(--on-surface-variant)">${icon("location_on", false, "icon-accent-yellow")} ${site.location}</div>
  <div class="contact-info-row mt-4" style="color:var(--on-surface-variant)">${icon("mail", false, "icon-accent-yellow")} ${site.email}</div>
  <div class="contact-info-row mt-4" style="color:var(--on-surface-variant)">${icon("videocam", false, "icon-accent-yellow")} ${site.consultationPrice}</div></div>
  ${contactFormLight()}
</div></section>
${consultationCTA()}`, `<script src="/js/contact.js"></script>`));

/* TESTIMONIALS */
writeFileSync(join(ROOT, "testimonials.html"), shell(`Testimonials | ${site.name}`, `Client testimonials for ${site.name}.`, `
${pageHeader("Testimonials", [{ label: "Home", href: routes.home }, { label: "Testimonials" }])}
${testimonialsSection()}
${consultationCTA()}
${connectBanner()}`));

/* PROJECT DETAIL PAGES */
mkdirSync(join(ROOT, "projects"), { recursive: true });
projects.forEach((p) => {
  if (p.sections?.length) {
    mkdirSync(join(ROOT, "images", "projects", p.slug), { recursive: true });
  }
  const related = [...projects].filter((x) => x.slug !== p.slug).reverse().slice(0, 2);
  const body = `
${projectBreadcrumb([{ label: "Home", href: routes.home }, { label: "Projects", href: routes.projects }, { label: p.title }])}
${projectDetailHero(p)}
<section class="detail-section"><div class="container">
  <div class="mb-16" style="max-width:48rem"><div class="label mb-4"><span class="label-line"></span> Overview</div><p class="text-body-lg text-muted">${p.overview}</p></div>
  <div class="challenge-grid">
    <div class="challenge-card"><div class="challenge-icon dark">${icon("crisis_alert")}</div><h3 class="headline-md mb-4">The Challenge</h3><p class="text-muted">${p.challenge}</p></div>
    <div class="challenge-card"><div class="challenge-icon yellow">${icon("lightbulb")}</div><h3 class="headline-md mb-4">The Solution</h3><p class="text-muted">${p.solution}</p></div>
  </div>
  <div class="text-center mb-6"><div class="label mb-4" style="justify-content:center">Results</div><h2 class="headline-lg">Measurable <span class="text-accent">Impact</span></h2></div>
  <div class="results-grid mb-16">${p.results.map((r) => `<div class="result-card"><div class="result-value">${r.value}</div><div class="result-label">${r.label}</div></div>`).join("")}</div>
  ${projectSections(p.sections, p.slug)}
  <div class="deliverables"><h3 class="headline-md mb-6">What Was Delivered</h3><ul>${p.deliverables.map((d) => `<li><span class="check">${icon("check", true, "icon-primary icon-sm")}</span>${d}</li>`).join("")}</ul></div>
</div></section>
${projectsCTA()}
<section class="section container"><h2 class="headline-lg mb-10">More <span class="text-accent">Projects</span></h2><div class="projects-grid">${related.map((r) => projectCard(r)).join("")}</div></section>
${connectBanner()}`;
  writeFileSync(join(ROOT, "projects", `${p.slug}.html`), shell(`${p.title} | ${site.name}`, p.overview, body));
});

console.log("Generated static site in portfolio-html/");
