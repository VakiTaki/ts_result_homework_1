import pauseIcon from "../files/assets/icons/pause.svg";
import sunIcon from "../files/assets/icons/sun.svg";
import rainIcon from "../files/assets/icons/cloud-rain.svg";
import snowIcon from "../files/assets/icons/cloud-snow.svg";

interface IWeather {
  sound: HTMLAudioElement;
  bgUrl: string;
  icon: string;
}
interface IWeatherList {
  summer: IWeather;
  rainy: IWeather;
  winter: IWeather;
}

(function (window, document) {
  const weather: IWeatherList = {
    summer: {
      sound: new Audio("../files/assets/sounds/summer.mp3"),
      bgUrl: "../files/assets/summer-bg.jpg",
      icon: sunIcon,
    },
    rainy: {
      sound: new Audio("../files/assets/sounds/rain.mp3"),
      bgUrl: "../files/assets/rainy-bg.jpg",
      icon: rainIcon,
    },
    winter: {
      sound: new Audio("../files/assets/sounds/winter.mp3"),
      bgUrl: "../files/assets/winter-bg.jpg",
      icon: snowIcon,
    },
  };

  window.onload = init;

  function init() {
    const body = document.querySelector("body");
    const summerBtn = document.getElementById("summer");
    const rainyBtn = document.getElementById("rainy");
    const winterBtn = document.getElementById("winter");
    const volume = document.querySelector("input");
    const initialIcons = () => {
      let key: keyof IWeatherList;
      for (key in weather) {
        const doc = document.getElementById(key);
        if (doc) doc.innerHTML = weather[key].icon;
      }
    };
    initialIcons();
    const handlePlay = (title: keyof IWeatherList) => {
      initialIcons();
      const doc = document.getElementById(title);
      let key: keyof IWeatherList;
      for (key in weather) {
        if (key !== title) {
          weather[key].sound.pause();
          weather[key].sound.currentTime = 0;
        }
      }
      if (
        !!weather[title].sound.played.length &&
        !weather[title].sound.paused
      ) {
        weather[title].sound.pause();
        if (doc) doc.innerHTML = pauseIcon;
      } else {
        weather[title].sound.play();
      }
      if (body) body.style.backgroundImage = `url(${weather[title].bgUrl})`;
    };

    volume?.addEventListener("change", () => {
      let key: keyof IWeatherList;
      for (key in weather) {
        weather[key].sound.volume = +volume.value;
      }
    });
    summerBtn?.addEventListener("click", () => handlePlay("summer"));
    rainyBtn?.addEventListener("click", () => handlePlay("rainy"));
    winterBtn?.addEventListener("click", () => handlePlay("winter"));
  }
})(window, document);
