// const abbrevName = name => name.split(' ').map(v => v.charAt(0).toUpperCase()).join('.');

// const abbrevName = name => name.split(' ').map(v => v.substr(0,1).toUpperCase()).join('.');

// const abbrevName = name => name.split(' ').map(v => v[0].toUpperCase()).join('.');

const abbrevName = name => name.match(/\b\w/g).join('.').toUpperCase();
