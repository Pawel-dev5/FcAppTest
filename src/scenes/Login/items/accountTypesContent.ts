import { AccountTypesContentType } from '@scenes/Login/models';

export const accountTypesContent: AccountTypesContentType = {
  en: [
    {
      id: 1,
      title: 'Coach',
      description: 'Manages teams, organizes events and enters player stats',
      url: require('@assets/accountsTypes/Trener.png'),
    },
    {
      id: 2,
      title: 'Competitor',
      description: 'He joins the team and takes part in sparring and tournaments',
      url: require('@assets/accountsTypes/Zawodnik.png'),
    },
    {
      id: 3,
      title: 'Fan',
      description: 'He observes events and teams, he can be a players guardian',
      url: require('@assets/accountsTypes/Kibice.png'),
    },
    {
      id: 4,
      title: 'Organizer',
      description: 'Creates and organizes sparring, tournaments and events',
      url: require('@assets/accountsTypes/Organizator.png'),
    },
  ],
  it: [
    {
      id: 1,
      title: 'Trener',
      description: 'Zarządza drużynami, organizuje wydarzenia i wprowadza statystyki zawodników',
      url: require('@assets/accountsTypes/Trener.png'),
    },
    {
      id: 2,
      title: 'Zawodnik',
      description: 'Dołącza do drużyny i bierze udział w sparingach oraz turniejach',
      url: require('@assets/accountsTypes/Zawodnik.png'),
    },
    {
      id: 3,
      title: 'Kibic',
      description: 'Obserwuje wydarzenia i drużyny, może być opiekunem gracza',
      url: require('@assets/accountsTypes/Kibice.png'),
    },
    {
      id: 4,
      title: 'Organizator',
      description: 'Tworzy i organizuje sparingi, turnieje i wydarzenia',
      url: require('@assets/accountsTypes/Organizator.png'),
    },
  ],
  pl: [
    {
      id: 1,
      title: 'Trener',
      description: 'Zarządza drużynami, organizuje wydarzenia i wprowadza statystyki zawodników',
      url: require('@assets/accountsTypes/Trener.png'),
    },
    {
      id: 2,
      title: 'Zawodnik',
      description: 'Dołącza do drużyny i bierze udział w sparingach oraz turniejach',
      url: require('@assets/accountsTypes/Zawodnik.png'),
    },
    {
      id: 3,
      title: 'Kibic',
      description: 'Obserwuje wydarzenia i drużyny, może być opiekunem gracza',
      url: require('@assets/accountsTypes/Kibice.png'),
    },
    {
      id: 4,
      title: 'Organizator',
      description: 'Tworzy i organizuje sparingi, turnieje i wydarzenia',
      url: require('@assets/accountsTypes/Organizator.png'),
    },
  ],
};
