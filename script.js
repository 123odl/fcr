function calculateSleepTime() {
    const wakeUpTime = document.getElementById('wakeUpTime').value;
    if (!wakeUpTime) {
        alert('기상 시간을 입력해주세요.');
        return;
    }

    // 사용자가 입력한 기상 시간을 Date 객체로 변환
    const wakeUpTimeObj = new Date(`2023-01-01T${wakeUpTime}:00`);

    // 권장 수면 시간: 8시간 (480분)
    const recommendedSleepMinutes = 480;

    // 권장 취침 시간 계산
    wakeUpTimeObj.setMinutes(wakeUpTimeObj.getMinutes() - recommendedSleepMinutes);

    // 출력 포맷 조정
    let hours = wakeUpTimeObj.getHours();
    let minutes = wakeUpTimeObj.getMinutes();
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;

    // 결과 표시
    document.getElementById('result').innerText = `권장 취침 시간은 ${hours}:${minutes}입니다.`;
}
