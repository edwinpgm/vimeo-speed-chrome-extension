const targetNode = document.querySelector('body')
const config = { childList: true, subtree: true }
const callback = function(mutationsList, observer) {
  for (const mutation of mutationsList) {
    if (mutation.target.outerHTML.indexOf('player.vimeo.com') > -1) {
      const iframe = document.querySelector('iframe[src*="vimeo.com"]')
      if (iframe) {
        const player = new Vimeo.Player(iframe)
        player.setPlaybackRate(2)
      }
    }
  }
}

const observer = new MutationObserver(callback)
observer.observe(targetNode, config)