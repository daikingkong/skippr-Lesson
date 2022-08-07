$(".theTarget").skippr({
  transition : 'fade',
  speed : 1000,
  easing : 'easeOutQuart',
  navType : 'block',
  childrenElementType : 'div',
  arrows : true,
  autoPlay : true,
  autoPlayDuration : 2000,
  keyboardOnAlways : true, // 1枚目のスライド表示時に戻る矢印を表示するかどうか [false]:矢印を隠さない [true]:矢印を隠す
  hidePrevious : false
});