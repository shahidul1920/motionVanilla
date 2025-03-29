const { animate, hover } = Motion;


//button animation here ----

const aroowOne = document.querySelector(".aroowOne");
const aroowTwo = document.querySelector(".aroowTwo");

const btn = document.querySelector(".btn");

hover(btn, () => {
  animate(
    btn,
    { scale:1.05 },
    500
  )
  animate(
    aroowOne,
    { x:4, opacity:1 },
    { x:0, opacity:1 },
    500
  );
  animate(
    '.btn p',
    { x:10 },
    500
  )
  animate(
    aroowTwo,
    { x:10, opacity:0 },
    500
  );
  return () => {
    animate(
      aroowOne,
      { x:-4, opacity:0 },
      500
    );
    animate(
      '.btn p',
      { x:0 },
      500
    );
    animate(
      aroowTwo,
      { x:0, opacity:1 },
      500
    );
    animate(
      btn,
      { scale:1 },
      500
    )
  }
});
