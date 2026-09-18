// const factTxt = document.querySelector(".fact p");
// const btn = document.querySelector(".btn button");
// const heartBtn = document.querySelector(".heart-btn");
// const favList = document.querySelector(".fav-list");

// async function getFact() {
//   btn.disabled = true;
//   factTxt.textContent = "Loading.....";
//   try {
//     const res = await fetch("https://catfact.ninja/fact");
//     if (!res.ok) throw new Error(`API returned status ${res.status}`);
//     const data = await res.json();
//     factTxt.textContent = data.fact;
//   } catch (error) {
//     factTxt.textContent = "Couldn't load a fact. Try again.";
//     console.error(error);
//   } finally {
//     btn.disabled = false;
//   }
// }

// function getFavs() {
//   const stored = localStorage.getItem("catFacts");
//   return stored ? JSON.parse(stored) : [];
// }

// function saveFavs(favs) {
//   localStorage.setItem("catFacts", JSON.stringify(favs));
// }

// function renderFavs() {
//   const favs = getFavs();
//   favList.innerHTML = "";
//   favs.forEach((fact) => {
//     const li = document.createElement("li");
//     li.textContent = fact;

//     const removeBtn = document.createElement("button");
//     removeBtn.textContent = "✕";
//     removeBtn.classList.add("remove-btn");

//     removeBtn.addEventListener("click", () => {
//       const updatedFavs = favs.filter((f) => f !== fact);
//       saveFavs(updatedFavs);
//       renderFavs();
//     });

//     li.appendChild(removeBtn);
//     favList.appendChild(li);
//   });
// }

// btn.addEventListener("click", getFact);
// heartBtn.addEventListener("click", () => {
//   const currentFact = factTxt.textContent;
//   const favs = getFavs();
//   if (!favs.includes(currentFact)) {
//     favs.push(currentFact);
//     saveFavs(favs);
//     renderFavs();
//   }
// });

// getFact();
// renderFavs();