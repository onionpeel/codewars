const well = x => {
  const good = x.filter(word => word === 'good');
  return good.length < 1 ? 'Fail!' :
    good.length < 3 ? 'Publish!' : 'I smell a series!';
};
