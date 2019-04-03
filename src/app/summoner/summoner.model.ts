export class Summoner {
  summonerProfile: SummonerProfile;
}

export class SummonerProfile {
  profileIconId: number;
  name: string;
  puuid: string;
  summonerLevel: number;
  revisionDate: number;
  id: string;
  accountId: string;
  matchHistory: any[];
}