```tsx
import React from 'react';

interface ExpProps {
  "technologies": {
    name: string,
    experience: string,
  }
}
const Exp: React.FC  = ()=> {
  const Skills = [
    { name:'TypeScript' , experience:'2.5 years of work experience'},
    { name:'Illustrator' , experience:'2.5 years of work experience'},
    { name:'Figma' , experience:'2.5 years of work experience'},
    { name:'Next.js' , experience:'2.5 years of work experience'},
    { name:'Astro' , experience:'1 year of work experience'},
    { name:'Kotlin' , experience:'No work experience'},
    ];
    return(
      <div>

      <h2>My skills</h2>

      <ul>{
        skills.map((skill) {'=>'} (
        skill.name
        skill.experience
      }</ul>
    </div>
}
```
