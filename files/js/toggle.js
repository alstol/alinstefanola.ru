$(document).ready(() => {
  $('.toggle').click(e => {
    $(
      `.toggle-area[data-toggleid="${e.currentTarget.dataset.toggleid}"]`
    ).toggle()
  })
})
