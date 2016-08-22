export function sendGAPageView(pageview){
  console.log("sending ga pageview for", pageview);
  ga('send', 'pageview', pageview);
}
