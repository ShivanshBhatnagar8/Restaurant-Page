import { homeLoad } from "./home";

const initialPage = (() => {
  const content = document.getElementById("content");
  const header = document.createElement("header");
  header.classList.add("header");
  content.appendChild(header);
  const container = document.createElement("div");
  header.appendChild(container);
  container.classList.add("container");

  const navigation = document.createElement("nav");
  container.appendChild(navigation);
  const links = document.createElement("ul");
  navigation.appendChild(links);
  const list1 = document.createElement("li");
  const list2 = document.createElement("li");
  const list3 = document.createElement("li");
  links.append(list1, list2, list3);
  const link1 = document.createElement("a");
  list1.appendChild(link1);
  link1.href = "#";
  link1.textContent = "Home";
  link1.classList.add("home");
  const link2 = document.createElement("a");
  list2.appendChild(link2);
  link2.href = "#";
  link2.textContent = "Menu";
  link2.classList.add("menu");
  const link3 = document.createElement("a");
  list3.appendChild(link3);
  link3.href = "#";
  link3.textContent = "Contact";
  link3.classList.add("contact");
  homeLoad();
})();
export { initialPage };
