const content = document.getElementById("content");

const contactLoad = () => {
  const contactSection = document.createElement("div");
  contactSection.classList.add("contact-section");
  content.appendChild(contactSection);
  const contentBox = document.createElement("div");
  contentBox.classList.add("content-box");
  contactSection.appendChild(contentBox);
  const contactBox = document.createElement("div");
  contactBox.classList.add("contact-box");
  contentBox.appendChild(contactBox);

  const contactHeading = document.createElement("h4");
  contactHeading.textContent = "CONTACT US";
  contactBox.appendChild(contactHeading);
  const number1 = document.createElement("p");
  const number2 = document.createElement("p");
  number1.textContent = "060-857-8635 x77507";
  number2.textContent = "1-698-594-4424 x18514";
  contactBox.append(number1, number2);
  const address = document.createElement("h4");
  address.textContent = "West North Jairo, Larson Forks, 30986, Huelside";
  contactBox.appendChild(address);
};
export { contactLoad };

//West North Jairo, Larson Forks, 30986
//
//Huelside
