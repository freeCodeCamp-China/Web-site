// Sample user data based on freeCodeCamp user profile structure
// Since the API is not accessible outside freeCodeCamp ecosystem,
// this provides mock data for demonstration

export interface UserProfile {
  username: string;
  name: string;
  location?: string;
  bio?: string;
  githubProfile?: string;
  twitter?: string;
  linkedin?: string;
  website?: string;
  avatar: string;
  joinDate: string;
  points: number;
  // Certifications/badges earned
  certifications?: Array<{
    title: string;
    completedDate: string;
    certPath?: string;
  }>;
  // Completed projects/challenges
  completedChallenges?: number;
  currentStreak?: number;
  longestStreak?: number;
}

// Sample user data
export const tech_query: UserProfile = {
  username: 'tech_query',
  name: 'TechQuery',
  location: 'China',
  bio: 'Full-stack developer and open source enthusiast',
  githubProfile: 'https://github.com/TechQuery',
  avatar: 'https://github.com/TechQuery.png',
  joinDate: '2016-01-01',
  points: 1000,
  certifications: [
    {
      title: 'Responsive Web Design',
      completedDate: '2016-06-01',
    },
    {
      title: 'JavaScript Algorithms and Data Structures',
      completedDate: '2016-08-01',
    },
    {
      title: 'Front End Development Libraries',
      completedDate: '2016-10-01',
    },
  ],
  completedChallenges: 150,
  currentStreak: 30,
  longestStreak: 90,
};
