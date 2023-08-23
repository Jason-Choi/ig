const db = [{ name: "정일묵", soosick: "타이 프린스" }]

const setNameandSoosickfromDB = (name) => {
  const nameHTML = document.getElementById("name")
  const soosickHTML = document.getElementById("soosick")
  nameHTML.innerHTML = name
  const user = db.find((user) => user.name === name)
  soosickHTML.innerHTML = user ? user.soosick : "존예존잘프리티핸섬섹시큐티"
}

const params = new URLSearchParams(window.location.search)
setNameandSoosickfromDB(params.get("name"))
