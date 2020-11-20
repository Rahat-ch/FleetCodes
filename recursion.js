//There are 15 cookies in a cookie jar and I want to
//eat all of them...

const eatCookie = cookie => {
  //cookie eating recursive code goes here
  if (cookie === 0) return
  cookie = cookie - 1;
  console.log(`I ate a cookie there are ${cookie} left`);
  eatCookie(cookie)
}

eatCookie(15)