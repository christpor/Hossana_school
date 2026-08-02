export type Language = 'en' | 'kh';

export interface TranslationContent {
  nav: {
    story: string;
    blessing: string;
    choir: string;
    impact: string;
    location: string;
    donate: string;
  };
  hero: {
    badge: string;
    titleLine1: string;
    titleHighlight: string;
    titleLine2: string;
    subtitle: string;
    ctaDonate: string;
    ctaStory: string;
    stats: {
      students: string;
      studentsLabel: string;
      years: string;
      yearsLabel: string;
      returnedTeachers: string;
      returnedTeachersLabel: string;
      subsidy: string;
      subsidyLabel: string;
    };
  };
  blessing: {
    badge: string;
    title: string;
    subtitle: string;
    steps: Array<{
      year: string;
      title: string;
      description: string;
      tag: string;
    }>;
  };
  calculator: {
    badge: string;
    title: string;
    subtitle: string;
    sliderLabel: string;
    tiers: Array<{
      amount: number;
      label: string;
      description: string;
      items: string[];
      featured?: boolean;
    }>;
    customPrompt: string;
  };
  choir: {
    badge: string;
    title: string;
    subtitle: string;
    featText: string;
    playerTitle: string;
    nowPlaying: string;
    tracks: Array<{
      id: string;
      title: string;
      artist: string;
      duration: string;
    }>;
  };
  governance: {
    badge: string;
    title: string;
    subtitle: string;
    australianPartner: string;
    governanceText: string;
    points: string[];
    ctaButton: string;
  };
  location: {
    badge: string;
    title: string;
    address: string;
    historyTitle: string;
    historyText: string;
    phonesTitle: string;
    phones: string[];
    landmark: string;
  };
  footer: {
    tagline: string;
    copyright: string;
    founders: string;
  };
}
