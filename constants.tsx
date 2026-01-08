
import React from 'react';
import { Briefcase, GraduationCap, Code, Ruler, Layout, ShieldCheck, Globe, Trophy } from 'lucide-react';
import { JourneyItem, Skill, Achievement } from './types';

export const JOURNEY: JourneyItem[] = [
  {
    id: '1',
    type: 'Work',
    title: 'Founder & CEO',
    organization: 'Tebib (Construction + Software Solutions)',
    date: 'Present',
    description: ['Pioneering the intersection of construction management and digital innovation.', 'Developing proprietary software solutions for engineering workflows.']
  },
  {
    id: '2',
    type: 'Work',
    title: 'Board Secretariat',
    organization: 'Ethiopian Youth Entrepreneurs Association',
    date: 'Present',
    description: ['Grew LinkedIn presence from 2K to 16K+ followers.', 'Leading communications for national entrepreneurship events.']
  },
  {
    id: '3',
    type: 'Education',
    title: "Master's Candidate in Risk Assessment",
    organization: 'University of Padua',
    date: 'Present',
    description: ['Focusing on environmental and structural risk modeling in a global context.']
  },
  {
    id: '4',
    type: 'Education',
    title: 'BSc Civil Engineering',
    organization: 'Wollo University',
    date: 'Graduated with Distinction',
    description: ['Top-tier performance in structural analysis and project management.']
  }
];

export const SKILLS: Skill[] = [
  { name: 'Structural Design', category: 'Engineering' },
  { name: 'Pavement Design', category: 'Engineering' },
  { name: 'AutoCAD', category: 'Engineering' },
  { name: 'ETABS/SAP2000', category: 'Engineering' },
  { name: 'Civil 3D/Revit', category: 'Engineering' },
  { name: 'React.js', category: 'Development' },
  { name: 'Node.js', category: 'Development' },
  { name: 'Full-Stack JS', category: 'Development' },
  { name: 'MongoDB', category: 'Development' },
  { name: 'Project Management', category: 'Management' },
  { name: 'Digital Infrastructure', category: 'Management' },
  { name: 'Construction Management', category: 'Management' },
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: 'World Youth Development Forum 2025',
    description: 'Awarded 1st Place at the prestigious forum held in China.',
    highlight: '1st Place Winner'
  },
  {
    title: 'Pan-African Youth Forum 2024',
    description: 'Represented Ethiopia as a delegate in Algeria, discussing regional integration.',
    highlight: 'Ethiopian Representative'
  },
  {
    title: 'Digital Impact',
    description: "Successfully scaled EYEA's digital footprint by 800% in a record period.",
    highlight: '16K+ Followers'
  }
];

export const COLORS = {
  primary: '#001021',
  accent: '#3b82f6',
  surface: 'rgba(255, 255, 255, 0.03)',
};
