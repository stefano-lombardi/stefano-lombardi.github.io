(function () {
  const readMoreStr = '' +
    '<label class="read-more_label" for="check">' +
    ' read ' +
    ' <span class="read-more_label--more">more</span>' +
    ' <span class="read-more_label--less">less</span>' +
    '</label>'

  document.querySelectorAll('.read-more')
    .forEach(function ($readMore) {
      $readMore.appendChild(parseHtml(readMoreStr))
      const $readMoreLabel = $readMore.querySelector('.read-more_label')

      $readMoreLabel.addEventListener('click', handleClick)
      $readMoreLabel.addEventListener('touchend', handleClick)
    })

  function handleClick(e) {
    const $readMore = e.target.closest('.read-more')
    if ($readMore.classList.contains('expanded')) {
      $readMore.classList.remove('expanded')
    } else {
      $readMore.classList.add('expanded')
    }
  }

  function parseHtml(html) {
    const parser = new DOMParser()
    const doc = parser.parseFromString(html, 'text/html')
    const out = doc.body.firstChild
    return out
  }
})()
