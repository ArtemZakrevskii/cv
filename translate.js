import eng from './locales/en/eng.json' assert { type: "json" };
import pln from './locales/pl/pln.json' assert { type: "json" };

const translateBtnEng = document.querySelector('#translateBtnEng');
const translateBtnPl = document.querySelector('#translateBtnPl');
const aboutLink = document.querySelector('#link-about');
const skillsLink = document.querySelector('#link-skills');
const educationLink = document.querySelector('#link-education');
const portfolioLink = document.querySelector('#link-portfolio');
const skilsTitle = document.querySelector('#skillsTitle');
const langTitle = document.querySelector('#langTitle');
const educationTitle = document.querySelector('#educationTitle');
const portfolioTitle = document.querySelector('#portfolioTitle');

i18next.init({
  lng: 'pl',
  resources: {
    en: {
      translation: eng,
    },
    pl: {
      translation: pln,
    }
  }
});

function translate(lang) {
  aboutLink.textContent = i18next.t("header.about", {lng: lang})
  skillsLink.textContent = i18next.t("header.skills", {lng: lang})
  educationLink.textContent = i18next.t("header.education", {lng: lang})
  portfolioLink.textContent = i18next.t("header.portfolio", {lng: lang})
  skilsTitle.textContent = i18next.t("skillsTitle", {lng: lang})
  langTitle.textContent = i18next.t("langTitle", {lng: lang})
  educationTitle.textContent = i18next.t("header.education", {lng: lang})
  portfolioTitle.textContent = i18next.t("header.portfolio", {lng: lang})
}

translateBtnEng.addEventListener('click', () => {
  translate('en');
  translateBtnEng.classList.add('lang-active');
  translateBtnPl.classList.remove('lang-active');
});
translateBtnPl.addEventListener('click', () => {
  translate('pl');
  translateBtnPl.classList.add('lang-active');
  translateBtnEng.classList.remove('lang-active');
});