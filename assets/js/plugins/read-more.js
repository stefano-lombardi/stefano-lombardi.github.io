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

      requestAnimationFrame(function () {
        const $readMoreLabel = $readMore.querySelector('.read-more_label')

        $readMoreLabel.addEventListener('click', handleClick)
        $readMoreLabel.addEventListener('touchend', handleClick)

        $readMore.dataset.expandedHeight = $readMore.getBoundingClientRect().height + 'px'
        $readMore.style.maxHeight = $readMore.dataset.collapsedHeight || '10em'
      })
    })

  function handleClick(e) {
    const $readMore = e.target.closest('.read-more')
    const expandedHeight = $readMore.dataset.expandedHeight
    const collapsedHeight = $readMore.dataset.collapsedHeight

    if ($readMore.classList.contains('expanded')) {
      $readMore.classList.remove('expanded')
      $readMore.style.maxHeight = collapsedHeight
    } else {
      $readMore.classList.add('expanded')
      $readMore.style.maxHeight = expandedHeight
    }
  }

  function parseHtml(html) {
    const parser = new DOMParser()
    const doc = parser.parseFromString(html, 'text/html')
    const out = doc.body.firstChild
    return out
  }
})()
