export interface Skill {
  imagePath: string;
  name: string;
  description: string;
  others: Other[];
}

interface Other {
  name: string;
  items: string[];
}

export const SkillMock = [
  {
    imagePath: 'coding.png',
    name: 'Web Developer',
    description: 'Développeur Web, capable de coder avec différents outils. Capable de travailler avec PHP mais aussi AngularJS',
    others: [
      {
        name: 'Compétences',
        items: [
          'PHP', 'MySQL', 'HTML & CSS', 'SCSS', 'TypeScript', 'Laravel', 'Symfony', 'AngularJS', 'WordPress'
        ]
      },
      {
        name: 'Dev Tools',
        items: [
          'PhpStorm', 'WebStorm', 'Sublime Text', 'Atom', 'FileZilla'
        ]
      }
    ]
  },
  {
    imagePath: 'mobile-app.png',
    name: 'Mobile Developer',
    description: 'Développeur Mobile, Création d\'applications mobiles Cross-Platform: iOS et Android',
    others: [
      {
        name: 'Compétences',
        items: [
          'Ionic', 'Cordova', 'TypeScript', 'Terminal'
        ]
      },
      {
        name: 'Dev Tools',
        items: [
          'WebStorm', 'Sublime Text', 'Atom', 'GitHub'
        ]
      }
    ]
  }
];
