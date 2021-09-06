(function () {
  const $readMoreArr = document.querySelectorAll('.read-more')
  $readMoreArr.forEach($readMore => {
    const $check = $readMore.querySelector('.read-more_check')

    $check.addEventListener('change', e => {
      if (e.target.checked) {
        $readMore.classList.add('expanded')
      } else {
        $readMore.classList.remove('expanded')
      }
    })
  })
})()
