module.exports = {
  aliases: {
    m: 'models',
    t: 'types',
    rep: 'repositories',
    c: 'controllers',
  },
  map: {
    'src/models': {
      folders: 'm',
      forms: 'm',
      'refresh-tokens': 'm',
      submits: 'm',
      users: 'm',
    },
    'src/types': {
      folders: 't',
      forms: 't',
      'refresh-tokens': 't',
      submits: 't',
      users: 't',
    },
    'src/repositories': {
      folders: 'rep',
      forms: 'rep',
      'refresh-tokens': 'rep',
      submits: 'rep',
      users: 'rep',
    },
    'src/controllers': {
      folders: 'c',
      forms: 'c',
      'refresh-tokens': 'c',
      submits: 'c',
      users: 'c',
    }
  },
};
