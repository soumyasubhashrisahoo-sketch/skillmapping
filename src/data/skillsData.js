export const SUPPORTED_LANGUAGES = [
  'english', 'french', 'spanish', 'german', 'japanese',
  'korean', 'chinese', 'italian', 'russian', 'arabic', 'hindi', 'dutch', 'swedish'
];

export const generateLanguageRoadmap = (langId) => {
  const capitalized = langId.charAt(0).toUpperCase() + langId.slice(1);
  return {
    name: capitalized,
    zone: 'language',
    levels: [
      {
        id: 'l1', title: 'Beginner: Foundations', description: `Start your ${capitalized} journey`,
        tasks: [
          { id: 't1', title: 'Learn alphabet and pronunciation rules' },
          { id: 't2', title: 'Memorize 50 common words' },
          { id: 't3', title: 'Learn greetings and introductions' },
          { id: 't4', title: 'Practice listening to basic phrases' },
        ]
      },
      {
        id: 'l2', title: 'Intermediate: Structure', description: 'Forming sentences',
        tasks: [
          { id: 't5', title: 'Learn sentence formation (subject-verb-object)' },
          { id: 't6', title: 'Understand basic grammar (tenses, gender)' },
          { id: 't7', title: 'Watch beginner-level videos' },
          { id: 't8', title: 'Practice speaking simple sentences' },
        ]
      },
      {
        id: 'l3', title: 'Advanced: Fluency', description: 'Using it in real life',
        tasks: [
          { id: 't9', title: 'Hold basic conversations' },
          { id: 't10', title: 'Write short paragraphs' },
          { id: 't11', title: 'Understand native speech (slow)' },
          { id: 't12', title: 'Practice daily speaking' },
        ]
      }
    ]
  };
};

export const generateGenericLevels = (skillName) => [
  {
    id: 'l1', title: 'Beginner: The Fundamentals', description: `Laying the groundwork for ${skillName}`,
    tasks: [
      { id: 't1', title: `Understand fundamental concepts of ${skillName}` },
      { id: 't2', title: 'Learn 10 basic terms and vocabulary' },
      { id: 't3', title: 'Set up essential tools and environment' },
      { id: 't4', title: 'Complete 1 small practice exercise' },
    ]
  },
  {
    id: 'l2', title: 'Intermediate: Core Application', description: 'Building practical experience',
    tasks: [
      { id: 't5', title: 'Build a small project' },
      { id: 't6', title: 'Practice real-world use cases' },
      { id: 't7', title: 'Learn standard techniques and patterns' },
      { id: 't8', title: 'Review intermediate tutorials' },
    ]
  },
  {
    id: 'l3', title: 'Advanced: Mastery', description: 'Complex problem solving',
    tasks: [
      { id: 't9', title: 'Create a full comprehensive project' },
      { id: 't10', title: 'Solve real-world complex problems' },
      { id: 't11', title: 'Advanced workflows and scaling' },
    ]
  }
];

export const mapZones = [
  {
    id: 'tech', name: 'Tech District', color: 'bg-blue-100', borderColor: 'border-blue-400', icon: 'monitor',
    description: 'Build the future. Code, algorithms, and systems.',
    skills: [
      { id: 'frontend', name: 'Frontend React', x: 15, y: 30 },
      { id: 'backend',  name: 'Node.js APIs',   x: 55, y: 60 },
      { id: 'ml',       name: 'Machine Learning',x: 25, y: 80 },
      { id: 'dsa',      name: 'Data Structures', x: 80, y: 35 },
      { id: 'git',      name: 'Git & GitHub',    x: 45, y: 20 },
      { id: 'sysdesign',name: 'System Design',   x: 70, y: 75 },
    ]
  },
  {
    id: 'creative', name: 'Creative Hub', color: 'bg-pink-100', borderColor: 'border-pink-400', icon: 'music',
    description: 'Express yourself. Art, music, and design.',
    skills: [
      { id: 'guitar',   name: 'Acoustic Guitar',   x: 70, y: 20 },
      { id: 'pixelart', name: 'Pixel Art',          x: 20, y: 40 },
      { id: 'video',    name: 'Video Editing',      x: 50, y: 80 },
      { id: 'photo',    name: 'Photography',        x: 80, y: 60 },
      { id: 'writing',  name: 'Creative Writing',   x: 30, y: 15 },
      { id: 'musicprod',name: 'Music Production',   x: 15, y: 75 },
    ]
  },
  {
    id: 'life', name: 'Life Skills', color: 'bg-green-100', borderColor: 'border-green-400', icon: 'coffee',
    description: 'Mastering the day-to-day existence.',
    skills: [
      { id: 'cooking',  name: 'Gourmet Cooking',  x: 30, y: 30 },
      { id: 'baking',   name: 'Baking & Pastry',  x: 45, y: 50 },
      { id: 'finance',  name: 'Personal Finance', x: 75, y: 40 },
      { id: 'fitness',  name: 'Fitness Basics',   x: 50, y: 15 },
      { id: 'speaking', name: 'Public Speaking',  x: 85, y: 80 },
      { id: 'time',     name: 'Time Management',  x: 20, y: 70 },
    ]
  },
  {
    id: 'language', name: 'Languages', color: 'bg-yellow-100', borderColor: 'border-yellow-400', icon: 'globe',
    description: 'Connect with the world. Master new tongues.',
    skills: [
      { id: 'english',  name: 'English',  x: 20, y: 20 },
      { id: 'french',   name: 'French',   x: 75, y: 25 },
      { id: 'spanish',  name: 'Spanish',  x: 45, y: 50 },
      { id: 'german',   name: 'German',   x: 15, y: 70 },
      { id: 'japanese', name: 'Japanese', x: 85, y: 80 },
      { id: 'korean',   name: 'Korean',   x: 50, y: 85 },
    ]
  }
];

export const skillsData = {
  frontend: {
    name: 'Frontend React', zone: 'tech',
    levels: [
      { id: 'l1', title: 'Beginner: The Fundamentals', description: 'HTML, CSS, and JS Basics',
        tasks: [
          { id: 't1', title: 'Understand HTML structure (tags, forms, inputs)' },
          { id: 't2', title: 'Learn basic CSS (flexbox, spacing, colors)' },
          { id: 't3', title: 'Learn JavaScript basics (variables, functions, loops)' },
          { id: 't4', title: 'Build a simple static webpage' },
        ]},
      { id: 'l2', title: 'Intermediate: React Core', description: 'Components, State, and Props',
        tasks: [
          { id: 't5', title: 'Learn React fundamentals (components, props, state)' },
          { id: 't6', title: 'Build a to-do app using React' },
          { id: 't7', title: 'Understand API calls using fetch' },
          { id: 't8', title: 'Learn basic Git and GitHub usage' },
        ]},
      { id: 'l3', title: 'Advanced: Modern Ecosystem', description: 'Routing and State Management',
        tasks: [
          { id: 't9',  title: 'Build a full-stack project with frontend focus' },
          { id: 't10', title: 'Optimize performance (lazy loading, memo)' },
          { id: 't11', title: 'Learn deployment (Netlify/Vercel)' },
        ]},
    ]
  },
  cooking: {
    name: 'Gourmet Cooking', zone: 'life',
    levels: [
      { id: 'l1', title: 'Beginner: Kitchen Fundamentals', description: 'Safety, prep, and basic methods',
        tasks: [
          { id: 't1', title: 'Master basic knife skills and kitchen safety' },
          { id: 't2', title: 'Learn core cooking methods (boiling, pan-frying, roasting)' },
          { id: 't3', title: 'Understand basic seasoning (salt, fat, acid, heat)' },
          { id: 't4', title: 'Cook 3 simple meals from scratch' },
        ]},
      { id: 'l2', title: 'Intermediate: Heat Control & Flavor', description: 'Proteins and sauces',
        tasks: [
          { id: 't5', title: 'Master searing proteins (steak, chicken, fish)' },
          { id: 't6', title: 'Learn to make 3 classic French mother sauces' },
          { id: 't7', title: 'Understand basic meal prepping and food storage' },
          { id: 't8', title: 'Cook a complete, timed 3-course meal' },
        ]},
      { id: 'l3', title: 'Advanced: Culinary Art', description: 'Plating and custom recipes',
        tasks: [
          { id: 't9',  title: 'Develop custom flavor profiles without relying on recipes' },
          { id: 't10', title: 'Master advanced techniques (sous-vide, flambe, emulsion)' },
          { id: 't11', title: 'Perfect dish plating, garnishing, and visual presentation' },
        ]},
    ]
  },
  baking: {
    name: 'Baking & Pastry', zone: 'life',
    levels: [
      { id: 'l1', title: 'Beginner: Precision & Basics', description: 'Measurements and simple bakes',
        tasks: [
          { id: 't1', title: 'Learn precise measuring using a digital kitchen scale' },
          { id: 't2', title: 'Understand baking terminology (creaming, folding, whipping)' },
          { id: 't3', title: 'Master basic drop cookies and brownies' },
          { id: 't4', title: 'Understand the role of different flours and leavening agents' },
        ]},
      { id: 'l2', title: 'Intermediate: Doughs & Batters', description: 'Breads, pies, and cakes',
        tasks: [
          { id: 't5', title: 'Bake a basic yeast bread (loaf or dinner rolls)' },
          { id: 't6', title: 'Master flaky pie crusts and fruit tarts' },
          { id: 't7', title: 'Create a multi-layer sponge cake with buttercream frosting' },
          { id: 't8', title: 'Understand dough hydration and temperature control' },
        ]},
      { id: 'l3', title: 'Advanced: Patisserie', description: 'Complex pastries and artisanal bakes',
        tasks: [
          { id: 't9',  title: 'Master laminated doughs (croissants or puff pastry)' },
          { id: 't10', title: 'Bake a successful artisanal sourdough loaf' },
          { id: 't11', title: 'Create complex French patisserie (macarons, eclairs, or entremets)' },
        ]},
    ]
  },
};

// Auto-generate missing skills
mapZones.forEach(zone => {
  zone.skills.forEach(skill => {
    if (!skillsData[skill.id]) {
      skillsData[skill.id] = zone.id === 'language'
        ? generateLanguageRoadmap(skill.id)
        : { name: skill.name, zone: zone.id, levels: generateGenericLevels(skill.name) };
    }
  });
});
