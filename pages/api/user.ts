import { HTTPClient } from 'koajax';

export type FCCUserBase = Record<
  | 'name'
  | `username${'' | 'Display'}`
  | 'picture'
  | 'about'
  | 'location'
  | 'website'
  | 'linkedIn'
  | 'githubProfile',
  string
>;

export type FCCUserStatus = Record<
  'isHonest' | 'isCheater' | 'isDonating',
  boolean
>;

export type FCCCertificationUserStatus = Record<
  | 'is2018DataVisCert'
  | 'is2018FullStackCert'
  | 'isA2EnglishCert'
  | 'isApisMicroservicesCert'
  | 'isBackEndCert'
  | 'isCollegeAlgebraPyCertV8'
  | 'isDataAnalysisPyCertV7'
  | 'isDataVisCert'
  | 'isFoundationalCSharpCertV8'
  | 'isFrontEndCert'
  | 'isFrontEndLibsCert'
  | 'isFullStackCert'
  | 'isJavascriptCertV9'
  | 'isInfosecCertV7'
  | 'isInfosecQaCert'
  | 'isJsAlgoDataStructCert'
  | 'isJsAlgoDataStructCertV8'
  | 'isMachineLearningPyCertV7'
  | 'isQaCertV7'
  | 'isRelationalDatabaseCertV8'
  | 'isRespWebDesignCert'
  | 'isRespWebDesignCertV9'
  | 'isSciCompPyCertV7',
  boolean
>;

export interface CompletedChallenge {
  id: string;
  completedDate: number;
  files: any[];
}

export type FCCUserPrivacySettings = Record<
  | 'isLocked'
  | `show${'About' | 'Certs' | 'Donation' | 'HeatMap' | 'Location' | 'Name' | 'Points' | 'Portfolio' | 'TimeLine'}`,
  boolean
>;

export interface FCCUserProfile
  extends FCCUserBase,
    FCCUserStatus,
    FCCCertificationUserStatus {
  joinDate: Date;
  calendar: Record<string, number>;
  completedChallenges: CompletedChallenge[];
  completedExams: any[];
  points: number;
  portfolio: any[];
  profileUI: FCCUserPrivacySettings;
  yearsTopContributor: string[];
}

const fccClient = new HTTPClient({
  baseURI: 'https://api.freecodecamp.org/',
  responseType: 'json',
});

interface FCCUserQuery {
  entities: { user: Record<string, FCCUserProfile> };
  result: string;
}

export async function getUserProfile(username: string) {
  const { body } = await fccClient.get<FCCUserQuery>(
    `users/get-public-profile?${new URLSearchParams({ username })}`,
  );

  return body!.entities.user[body!.result];
}
