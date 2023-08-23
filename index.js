const db = [{ name: "정일묵", soosick: "타이 프린스" }]

const setNameandSoosickfromDB = (params) => {
  const nameHTML = document.getElementById("name")
  const soosickHTML = document.getElementById("soosick")
  const user = db.find((user) => user.name === params.get("name"))
  nameHTML.innerHTML = params.get("name") ? "호시노 " + params.get("name").slice(1, params.get("name").length) + "님" : "당신"
  soosickHTML.innerHTML = params.get("soosick") ? params.get("soosick") : user ? user.soosick : "존예존잘프리티핸섬섹시큐티"
}

const params = new URLSearchParams(window.location.search)
setNameandSoosickfromDB(params)
