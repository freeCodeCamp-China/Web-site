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
  certifications?: Array<{
    title: string;
    completedDate: string;
    certPath?: string;
  }>;
  completedChallenges?: number;
  currentStreak?: number;
  longestStreak?: number;
}

export async function getUserProfile(
  username: string,
): Promise<UserProfile | null> {
  try {
    const response = await fetch(
      `https://api.freecodecamp.org/users/get-public-profile?username=${username}`,
    );

    if (!response.ok) {
      return null;
    }

    const data = await response.json();

    if (!data || !data.entities || !data.entities.user) {
      return null;
    }

    const userData = data.entities.user[data.result?.username];

    if (!userData) return null;

    // Map the API response to our UserProfile interface
    return {
      username: userData.username,
      name: userData.name,
      location: userData.location,
      bio: userData.about,
      githubProfile: userData.githubProfile,
      twitter: userData.twitter,
      linkedin: userData.linkedin,
      website: userData.website,
      avatar: userData.picture || `https://github.com/${userData.username}.png`,
      joinDate: userData.joinDate,
      points: userData.points || 0,
      completedChallenges:
        userData.completedChallenges || userData.completedChallengeCount || 0,
      currentStreak: userData.currentStreak || 0,
      longestStreak: userData.longestStreak || 0,
    };
  } catch (error) {
    console.error('Error fetching user profile:', error);
    return null;
  }
}
