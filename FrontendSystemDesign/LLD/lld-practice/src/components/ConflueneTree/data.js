const LINK = 'https://youtube.com/devtoolstech/videos';

const IOS_ARTICLES = {
  id: 6,
  label: 'iOS Articles',
  link: LINK,
  children: [
    {
      id: 23,
      label: 'VPN with iOS',
      link: LINK,
    },
    {
      id: 24,
      label: 'Upgrade iOS',
      link: LINK,
    },
  ],
};

const MAC_ARTICLES = {
  id: 12,
  label: 'Mac Articles',
  link: LINK,
  children: [
    {
      id: 29,
      label: 'Fix macOS',
      link: LINK,
    },
    {
      id: 41,
      label: 'Upgrade macOS',
      link: LINK,
    },
  ],
};

const REQUEST_LICENSE = {
  id: 67,
  label: 'Request License',
  link: LINK,
};

const PURCHASE_APPS = {
  id: 69,
  label: 'Purchase Apps',
  link: LINK,
};

const APPLE = {
  id: 5,
  label: 'Apple',
  link: LINK,
  children: [IOS_ARTICLES, MAC_ARTICLES, REQUEST_LICENSE, PURCHASE_APPS],
};

const ACADEMIC_TECHNOLOGIES = {
  id: 1,
  label: 'Academic Technologies',
  link: LINK,
  children: [
    {
      id: 2,
      label: 'Lightboard',
      link: LINK,
    },
    {
      id: 3,
      label: 'OWL 360 Camera Tutorial',
      link: LINK,
    },
    {
      id: 4,
      label: 'ScreenPal',
      link: LINK,
    },
  ],
};

const DATA = [
  {
    id: 1001,
    label: 'Knowledge Base Articles',
    link: LINK,
    children: [ACADEMIC_TECHNOLOGIES, APPLE],
  },
  {
    id: 201,
    label: 'Devtools Tech',
    link: LINK,
  },
];

export default DATA;
