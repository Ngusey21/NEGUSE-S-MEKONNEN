
export interface Skill {
  name: string;
  category: 'Engineering' | 'Development' | 'Management';
}

export interface JourneyItem {
  id: string;
  type: 'Work' | 'Education';
  title: string;
  organization: string;
  date: string;
  description: string[];
}

export interface Achievement {
  title: string;
  description: string;
  highlight: string;
}
