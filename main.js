// 체크박스 상태에 따라 텍스트 박스와 시간표 이미지를 표시/숨김 처리
document.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
  // 셔틀버스 페이지(bus.html) 관련 기능
  if (
    checkbox.id === 'baekseok' ||
    checkbox.id === 'samsong' ||
    checkbox.id === 'jiseon'
  ) {
    checkbox.addEventListener('change', function () {
      const region = this.id // 체크박스 ID (baekseok, samsong, jiseon)
      const textBox = document.querySelector(`.text-box.${region}`)
      const timetableImg = document.querySelector(`.timetable-img-${region}`)

      if (this.checked) {
        textBox.style.display = 'flex'
        timetableImg.style.display = 'block'
      } else {
        textBox.style.display = 'none'
        timetableImg.style.display = 'none'
      }
    })
  }
})

// on/off 버튼 토글 기능 (menu.html 관련 기능)
const alarmToggle = document.getElementById('alarm-toggle')
const alarmLabel = document.querySelector('.alarm-label')

if (alarmToggle && alarmLabel) {
  alarmToggle.addEventListener('change', function () {
    if (this.checked) {
      alarmLabel.textContent = 'On'
    } else {
      alarmLabel.textContent = 'Off'
    }
  })
}
