(function () {
  const $readMoreArr = document.querySelectorAll('.read-more')
  $readMoreArr.forEach(function $readMore() {
    const $check = $readMore.querySelector('.read-more_check')

    $check.addEventListener('change', function (e) {
      if (e.target.checked) {
        $readMore.classList.add('expanded')
      } else {
        $readMore.classList.remove('expanded')
      }
    })
  })
})()
