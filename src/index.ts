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
  const pauseIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-pause"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>`;
  const weather: IWeatherList = {
    summer: {
      sound: new Audio("../files/assets/sounds/summer.mp3"),
      bgUrl: "../files/assets/summer-bg.jpg",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sun"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`,
    },
    rainy: {
      sound: new Audio("../files/assets/sounds/rain.mp3"),
      bgUrl: "../files/assets/rainy-bg.jpg",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" wtitleth="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" stroke-wtitleth="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-cloud-rain"><line x1="16" y1="13" x2="16" y2="21"></line><line x1="8" y1="13" x2="8" y2="21"></line><line x1="12" y1="15" x2="12" y2="23"></line><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path></svg>`,
    },
    winter: {
      sound: new Audio("../files/assets/sounds/winter.mp3"),
      bgUrl: "../files/assets/winter-bg.jpg",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" wtitleth="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" stroke-wtitleth="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-cloud-snow"><path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"></path><line x1="8" y1="16" x2="8.01" y2="16"></line><line x1="8" y1="20" x2="8.01" y2="20"></line><line x1="12" y1="18" x2="12.01" y2="18"></line><line x1="12" y1="22" x2="12.01" y2="22"></line><line x1="16" y1="16" x2="16.01" y2="16"></line><line x1="16" y1="20" x2="16.01" y2="20"></line></svg>`,
    },
  };

  window.onload = init;

  function init() {
    const body = document.querySelector("body");
    const summerBtn = document.getElementById("summer");
    const rainyBtn = document.getElementById("rainy");
    const winterBtn = document.getElementById("winter");
    const volume = document.getElementById("volume") as HTMLInputElement;
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
        //   if (doc) doc.innerHTML = weather[title].icon;
      }

      if (body) body.style.backgroundImage = `url(${weather[title].bgUrl})`;
    };

    volume.addEventListener("change", () => {
      let key: keyof IWeatherList;
      for (key in weather) {
        if (!!weather[key].sound.played.length) {
          weather[key].sound.volume = +volume.value;
        }
      }
    });
    summerBtn?.addEventListener("click", () => handlePlay("summer"));
    rainyBtn?.addEventListener("click", () => handlePlay("rainy"));
    winterBtn?.addEventListener("click", () => handlePlay("winter"));
  }
})(window, document);
