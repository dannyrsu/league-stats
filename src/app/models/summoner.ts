export class Summoner {
  summonerProfile: SummonerProfile;
  matchHistory: MatchHistory;
}

class SummonerProfile {
  profileIconId: number;
  name: string;
  puuid: string;
  summonerLevel: number;
  revisionDate: number;
  id: string;
  accountId: string;
  matchHistory: object;
}

class MatchHistory {
  matches: Match[];
  endIndex: number;
  startIndex: number;
  totalGames: number;
}

class Match {
  lane: string;
  game: any;
  gameId: string;
  champion: number;
  platformId: string;
  timestamp: string;
  queue: number;
  role: string;
  season: number;
}
