import home from "../img/home-img.jpg";
const content = document.getElementById("content");

const homeLoad = () => {
  const homeSection = document.createElement("div");
  homeSection.classList.add("home-section");

  content.appendChild(homeSection);
  const container = document.createElement("div");
  container.classList.add("container");
  homeSection.appendChild(container);
  const contentBox = document.createElement("div");
  contentBox.classList.add("content-box");
  container.appendChild(contentBox);
  const homeBox = document.createElement("div");
  homeBox.classList.add("home-box");
  contentBox.appendChild(homeBox);
  const homeContent = document.createElement("div");
  homeContent.classList.add("home-content");
  homeBox.appendChild(homeContent);
  const homeHeading = document.createElement("h1");
  homeHeading.textContent = `Indulge in a Culinary Journey like No Other`;
  const startedBtn = document.createElement("a");
  startedBtn.classList.add("start");
  startedBtn.href = "#";
  startedBtn.textContent = "Get Started!";
  homeContent.appendChild(homeHeading);
  homeContent.appendChild(startedBtn);
  const img = document.createElement("img");
  homeBox.appendChild(img);
  img.classList.add("home-img");
  img.src = home;
};

export { homeLoad };
