document.getElementById("nameForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const birthdate = new Date(document.getElementById("birthdate").value);
  const gender = document.getElementById("gender").value.toLowerCase();

  const dayOfWeek = birthdate.getDay();
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayWeek = daysOfWeek[dayOfWeek];

  const akanNames = {
    male: ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"],
    female: ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"],
  };
  const desc = {
    Kwasi: "Means associated with the universe",
    Kwadwo: "Means associated with peace",
    Kwabena: "Means associated with the ocean.",
    Kwaku: " Means associated with a spider (Ananse).",
    Yaw: "Means associated with the earth.",
    Kofi: "Means associated with fertility.",
    Kwame: "Means associated with God.",
    Akosua: "The name signifies peace and harmony.",
    Adwoa: "The name represents someone who is gentle and calm.",
    Abenaa: "The name signifies someone who is born with a strong spirit.",
    Akua: "The name represents someone who is creative and resourceful.",
    Yaa: "The name signifies someone who is strong-willed and determined.",
    Afua: "The name represents someone who is kind-hearted and compassionate.",
    Ama: "The name signifies someone who is born with grace and favor.",
  };

  const name =
    gender === "male" ? akanNames.male[dayOfWeek] : akanNames.female[dayOfWeek];

  const res = document.getElementById("result");
  res.innerHTML = `<p>Your Akan name is ${name}</p> <br> <p>you were born on a ${dayWeek}</p><br> <p>${desc[name]}</p>`;

  gender === "male"
    ? (res.style.backgroundColor = "#bc9e82")
    : (res.style.backgroundColor = "#ddc0b4");

  res.classList.remove("none");
  res.classList.add("res_flex");
  document.querySelector("#reset").classList.remove("none");
  //   document.querySelector("#gen").classList.add("none");
  reset();
});

const reset = () => {
  document.querySelector("#reset").addEventListener("click", (e) => {
    e.preventDefault();
    const nameform = document.getElementById("nameForm");
    const res = document.getElementById("result");
    res.textContent = "";
    nameform.style.backgroundColor = "";
    document.getElementById("gender").value = "";
    document.getElementById("birthdate").value = "";

    // document.querySelector("#gen").classList.remove("none");
    res.classList.add("none");
    res.classList.remove("res_flex");
    document.querySelector("#reset").classList.add("none");
  });
};
