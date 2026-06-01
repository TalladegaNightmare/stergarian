// Moats & Levers — the positioning framework
// Five ways brands carve out ownable space in the minds of an audience.
// Ordered along a Rational → Emotional spectrum.

export type Moat = {
  title: string;
  sub: string;
  examples: string[];
};

export type Lever = {
  id: string;
  name: string;
  tagline: string;
  moatType: string;
  moatDesc: string;
  register: "Rational" | "Emotional";
  color: string; // palette token
  building: string[];
  defensibility: string[];
  question: string;
  moats: Moat[];
};

export const levers: readonly Lever[] = [
  {
    id: "01",
    name: "System",
    tagline: "Embedded advantage",
    moatType: "Systemic moat",
    moatDesc: "Own and reinforce the system people depend on.",
    register: "Rational",
    color: "#28A0D4", // Sky
    building: ["Infrastructure", "Network effects", "Ecosystem lock-in", "Embedded utility"],
    defensibility: ["Switching cost", "Scale", "Integration", "Distribution", "Irreplicability"],
    question: "Are we designing dependence?",
    moats: [
      { title: "Ecosystem Positioning", sub: "Value increases across products", examples: ["Apple — seamless ecosystem", "Microsoft — integrated stack", "Lego — co-creation system"] },
      { title: "Partnership Advantage", sub: "Lock in long-term IP", examples: ["ESPN — league partnerships", "Nike — sponsored athletes", "Disney — entertainment IP"] },
      { title: "Innovation Advantage", sub: "Brand is at the frontier", examples: ["NVIDIA — AI infrastructure", "SpaceX — humanity's future", "OpenAI — the AI frontier"] },
      { title: "Trust & Reliability", sub: "Safety, dependability, stewardship", examples: ["Vanguard — fiduciary trust", "Duracell — earned trust", "State Farm — reliability"] },
      { title: "Convenience / Utility", sub: "Wins immediacy", examples: ["McDonald's", "Amazon Prime", "FedEx — when it absolutely has to be there"] },
      { title: "Data / Algorithm Moat", sub: "Gets better with use", examples: ["Netflix", "Google", "TikTok"] },
      { title: "Community Governance", sub: "You own the brand, not us", examples: ["Wikipedia — collective stewardship", "Linux — open-source identity", "Web3 — ownership as product"] },
      { title: "Standard Setting", sub: "Set an aspirational bar", examples: ["Good Housekeeping Badge", "Michelin Stars", "LEED Certification"] },
    ],
  },
  {
    id: "02",
    name: "Claim",
    tagline: "Definition",
    moatType: "Cognitive moat",
    moatDesc: "Own a word, category, or mental shortcut.",
    register: "Rational",
    color: "#2A6B3C", // Forest
    building: ["A cognitive shortcut", "A category definition", "A mental model shift", "A dominant framing"],
    defensibility: ["First", "Repetition", "PR gravity", "Search behavior", "Cultural shorthand"],
    question: "If someone summarizes us in two words, what do they say?",
    moats: [
      { title: "Category Ownership", sub: "Shorthand for the category", examples: ["Kleenex — tissues", "Google — search", "Zoom — video calls"] },
      { title: "Leadership / Best", sub: "Signals dominance and confidence", examples: ["Budweiser — King of Beers", "Salesforce — #1 CRM", "McDonald's — billions served"] },
      { title: "Feature / Attribute", sub: "Unique or ownable product truth", examples: ["Lucky Strike — “It's toasted”", "Coors Light — brewed cold", "Fiji Water — untouched by man"] },
      { title: "Benefit", sub: "What's in it for the audience", examples: ["Pampers — better sleep", "Headspace — mental wellness", "Chromebook — do less to do more"] },
      { title: "Challenger Claim", sub: "Deposition the leader", examples: ["Avis — “we try harder”", "Pepsi — the Taste Challenge", "Apple — Mac vs PC"] },
      { title: "Origin or Heritage", sub: "Where you're made / from", examples: ["VW — Das Auto", "Hermès — Paris 1837", "Jack Daniel's — Lynchburg, Tenn."] },
      { title: "Category Reframe", sub: "Redefine the category you're in", examples: ["HBO — “It's not TV. It's HBO.”", "Airbnb — travel, not tourism", "Equinox — not a gym"] },
      { title: "Proof Claim", sub: "Lead with evidence", examples: ["CeraVe — developed with derms", "Oatly — science is on our side", "Stripe — shows its economic scale"] },
    ],
  },
  {
    id: "03",
    name: "Behavior",
    tagline: "Habit",
    moatType: "Behavioral moat",
    moatDesc: "Own a moment, ritual, or context.",
    register: "Rational",
    color: "#F4E020", // Canary
    building: ["Occasion relevance", "Habit formation", "Use-case dominance"],
    defensibility: ["Frequency", "Ritualization", "Social repetition"],
    question: "When does someone instinctively think of us?",
    moats: [
      { title: "Occasion / Ritual", sub: "The brand owns a moment / season", examples: ["Corona — beach / summer", "John Lewis — gifting / holidays", "KitKat — the break"] },
      { title: "Own a Behavior", sub: "Create a reason to act", examples: ["Frank's RedHot — “I put that sh*t on everything”", "Alka-Seltzer — “Plop plop, fizz fizz”", "GEICO — 15 minutes could save you 15%"] },
      { title: "Commitment Loops", sub: "Create a reason for repetition", examples: ["Peloton — the class schedule", "Duolingo — the daily streak", "Wordle — daily puzzle / share"] },
      { title: "Contextual: Time", sub: "Owns a specific part of the day", examples: ["Folger's — waking up", "Taco Bell — the fourth meal", "7-Eleven — all the time"] },
      { title: "Contextual: Space", sub: "Owns a trip or a place", examples: ["Starbucks — the third place", "WeWork — remote work", "Airbnb — some trips are better lived in"] },
      { title: "Performance Context", sub: "Owns a specific use-case or state", examples: ["Gatorade — competition / exertion", "GoPro — action-driven living"] },
      { title: "Lifestyle System", sub: "A broader way of living", examples: ["Mercedes — “The best or nothing”", "Lululemon — mindful performance", "REI — outdoor adventure"] },
    ],
  },
  {
    id: "04",
    name: "Identity",
    tagline: "Status",
    moatType: "Audience moat",
    moatDesc: "Own who someone becomes by choosing you.",
    register: "Emotional",
    color: "#D94E18", // Ember
    building: ["Status signaling", "Tribe membership", "Social badge value"],
    defensibility: ["Community", "Cultural meaning", "Shared language"],
    question: "What does using us say about someone?",
    moats: [
      { title: "User Group", sub: "Explicitly for a defined audience", examples: ["Tinder — singles", "Home Depot — “how doers get more done”", "Dick's — amateur athletes"] },
      { title: "Status Badge", sub: "Visible social signal", examples: ["Rolex — visible achievement", "Carhartt — workwear identity", "Harley-Davidson — rebellion"] },
      { title: "In-Group Marker", sub: "Belonging in a tribe or subculture", examples: ["Supreme — hypebeast", "F45 — tribe membership", "Amex — the members' club"] },
      { title: "Generational", sub: "Own an era or a generation", examples: ["Pepsi — the Pepsi Generation", "Canadian Club — “Damn right your dad drank it”"] },
      { title: "Cultural Symbol", sub: "Embed in cultural identity", examples: ["Barbour — the British countryside", "Converse — creator culture", "PBR — counterculture"] },
      { title: "Aesthetic Ideals", sub: "Signals taste / style", examples: ["Liquid Death", "Warby Parker", "Aesop"] },
    ],
  },
  {
    id: "05",
    name: "Belief",
    tagline: "Point of view",
    moatType: "Cultural moat",
    moatDesc: "Own a feeling, worldview, or emotional charge.",
    register: "Emotional",
    color: "#E83B1F", // Signal
    building: ["Moral stance", "Emotional shorthand", "Cultural meaning", "POV on culture"],
    defensibility: ["Cultural consistency", "Long-term storytelling", "Myth-making", "Cultural relevance"],
    question: "What larger idea do we invite people to align with?",
    moats: [
      { title: "Own a Feeling", sub: "Own an emotional state", examples: ["Coke — Open Happiness", "Hallmark — warmth", "Cadbury — a glass and a half full of joy"] },
      { title: "Utopian Vision", sub: "A vision for what the world should become", examples: ["Bell Labs — “You will”", "Tesla — sustainable energy", "Chipotle — back to the start"] },
      { title: "Define an Enemy", sub: "Cut against the dominant worldview", examples: ["Planet Fitness — “no lunks”", "VW — Think Small", "Apple — 1984"] },
      { title: "Earned Wisdom", sub: "Insight the world needs", examples: ["The Economist — intelligence", "AG1 — formulated to support life", "Bridgewater — financial understanding"] },
      { title: "Permission / Absolve Guilt", sub: "Solve a guilt problem", examples: ["Oatly", "Beyond Meat", "Patagonia"] },
      { title: "Ritual Meaning", sub: "Behavior as meaning-making", examples: ["Nespresso — coffee as self-care", "Sonos — music adds presence", "Rapha — the ride as community"] },
      { title: "Transformation", sub: "Promise new possibility", examples: ["Nike — athlete empowerment", "Dove — body confidence", "Red Bull — possibility"] },
      { title: "Values / Worldview", sub: "Stand for a larger idea", examples: ["Guinness — patience / character", "Dove — real beauty", "Airbnb — belonging"] },
    ],
  },
] as const;
