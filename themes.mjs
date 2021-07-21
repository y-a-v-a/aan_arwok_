const themes = {
  theme0: {
    fg: '#eeeff2',
    bg: '#19427e',
  },
  theme1: {
    fg: '#fefefe',
    bg: '#383838',
  },
  theme2: {
    fg: '#f4f4f4',
    bg: '#36456a',
  },
  theme3: {
    fg: '#e2e2e2',
    bg: '#cd3838',
  },
  theme4: {
    fg: '#e2e3e4',
    bg: '#323b3f',
  },
  theme5: {
    fg: '#e3e3e3',
    bg: '#cd331d',
  },
  theme6: {
    fg: '#f3f3f1',
    bg: '#063da7',
  },
  theme7: {
    fg: '#f4f4f4',
    bg: '#364569',
  },
  theme8: {
    fg: '#f2f2f1',
    bg: '#fa520e',
  },
  theme9: {
    fg: '#f2f2f2',
    bg: '#373737',
  },
  theme10: {
    fg: '#e6e4f7',
    bg: '#bb3615',
  },
  theme11: {
    fg: '#e2dbd9',
    bg: '#cb320f',
  },
  theme12: {
    fg: '#f2f2f2',
    bg: '#484848',
  },
  theme13: {
    fg: '#e9e9e7',
    bg: '#242424',
  },
  theme14: {
    fg: '#f4e9e3',
    bg: '#264b97',
  },
  theme15: {
    fg: '#e7e9e6',
    bg: '#1e2222',
  },
  theme16: {
    fg: '#f5eee5',
    bg: '#476976',
  },
  theme17: {
    fg: '#f3f3f2',
    bg: '#1b1807',
  },
  theme18: {
    fg: '#ffffff',
    bg: '#e24825',
  },
  theme19: {
    fg: '#fdfdfd',
    bg: '#121318',
  },
  theme20: {
    fg: '#fbf8fc',
    bg: '#a60245',
  },
  theme21: {
    fg: '#ffffff',
    bg: '#b72362',
  },
  theme22: {
    fg: '#f5f5f5',
    bg: '#f92203',
  },
  theme23: {
    fg: '#f0eae6',
    bg: '#9e111b',
  },
  theme24: {
    fg: '#f1ebea',
    bg: '#2a5e86',
  },
  theme24: {
    fg: '#e8e7e4',
    bg: '#3f4625',
  },
};

export default function getThemeData() {
  var entries = Object.keys(themes);
  var index = Math.floor(Math.random() * entries.length);
  var propertyName = entries[index];

  return themes[propertyName];
}
