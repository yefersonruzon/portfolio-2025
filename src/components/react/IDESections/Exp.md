```tsx
import React from 'react';

interface Skill {
  name: string;
  experience: string;
}

interface ExpProps {
  technologies: Skill[];
}

const Exp: React.FC<ExpProps> = () => {
  const skills: Skill[] = [
    { name: 'TypeScript', experience: '2.5 years of work experience' },
    { name: 'JavaScript', experience: '3.2 years of work experience' },
    { name: 'Axios', experience: '3.2 years of work experience' },
    { name: 'Zustand', experience: '2.5 years of work experience' },
    { name: 'Tailwind', experience: '2.2 years of work experience' },
    { name: 'ReactJS', experience: '3.2 years of work experience' },
    { name: 'Illustrator', experience: '2.5 years of work experience' },
    { name: 'Figma', experience: '2.5 years of work experience' },
    { name: 'Next.js', experience: '2.5 years of work experience' },
    { name: 'Astro', experience: '1 year of work experience' },
    { name: 'TreeJS', experience: 'No work experience' },
    { name: 'Framer', experience: 'No work experience' },
    { name: 'Kotlin', experience: 'No work experience' },
  ];

  return (
    <div>
      <h2>My skills</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>
            <strong>{skill.name}</strong>: {skill.experience}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Exp;
```
