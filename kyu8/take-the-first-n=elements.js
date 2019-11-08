// const take = (arr, n) => [...arr].splice(0, n);

// take  =ᅟ=  (ㅤ,ᅠ)  =>ᅠ?  [  ...ᅟ(ㅤ,  --ᅠ)  ,ㅤ[ᅠ]  ]  .  filter  (ㅤ=>  +ㅤ==  +ㅤ)  :  [  ]  ;

const take = (arr, n) => {
  return arr.reduce((acc,cur,ind) => {
    if (ind < n) {
      return acc.concat(cur);
    };
    return acc;
  }, []);
};

console.log(take([1,2,3,4,5,6], 3));
