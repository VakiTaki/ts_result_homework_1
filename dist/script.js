/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

(function (window, document) {
    const pauseIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-pause"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>`;
    const weather = {
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
        const volume = document.getElementById("volume");
        const initialIcons = () => {
            let key;
            for (key in weather) {
                const doc = document.getElementById(key);
                if (doc)
                    doc.innerHTML = weather[key].icon;
            }
        };
        initialIcons();
        const handlePlay = (title) => {
            initialIcons();
            const doc = document.getElementById(title);
            let key;
            for (key in weather) {
                if (key !== title) {
                    weather[key].sound.pause();
                    weather[key].sound.currentTime = 0;
                }
            }
            if (!!weather[title].sound.played.length &&
                !weather[title].sound.paused) {
                weather[title].sound.pause();
                if (doc)
                    doc.innerHTML = pauseIcon;
            }
            else {
                weather[title].sound.play();
                //   if (doc) doc.innerHTML = weather[title].icon;
            }
            if (body)
                body.style.backgroundImage = `url(${weather[title].bgUrl})`;
        };
        volume.addEventListener("change", () => {
            let key;
            for (key in weather) {
                if (!!weather[key].sound.played.length) {
                    weather[key].sound.volume = +volume.value;
                }
            }
        });
        summerBtn === null || summerBtn === void 0 ? void 0 : summerBtn.addEventListener("click", () => handlePlay("summer"));
        rainyBtn === null || rainyBtn === void 0 ? void 0 : rainyBtn.addEventListener("click", () => handlePlay("rainy"));
        winterBtn === null || winterBtn === void 0 ? void 0 : winterBtn.addEventListener("click", () => handlePlay("winter"));
    }
})(window, document);

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDO1FBQ3hFLENBQUMsQ0FBQztRQUVGLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFO1lBQ3JDLElBQUksR0FBdUIsQ0FBQztZQUM1QixLQUFLLEdBQUcsSUFBSSxPQUFPLEVBQUU7Z0JBQ25CLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRTtvQkFDdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO2lCQUMzQzthQUNGO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDSCxTQUFTLGFBQVQsU0FBUyx1QkFBVCxTQUFTLENBQUUsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ2pFLFFBQVEsYUFBUixRQUFRLHVCQUFSLFFBQVEsQ0FBRSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDL0QsU0FBUyxhQUFULFNBQVMsdUJBQVQsU0FBUyxDQUFFLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUNuRSxDQUFDO0FBQ0gsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHNfcmVzdWx0X2hvbWV3b3JrXzEvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW50ZXJmYWNlIElXZWF0aGVyIHtcbiAgc291bmQ6IEhUTUxBdWRpb0VsZW1lbnQ7XG4gIGJnVXJsOiBzdHJpbmc7XG4gIGljb246IHN0cmluZztcbn1cbmludGVyZmFjZSBJV2VhdGhlckxpc3Qge1xuICBzdW1tZXI6IElXZWF0aGVyO1xuICByYWlueTogSVdlYXRoZXI7XG4gIHdpbnRlcjogSVdlYXRoZXI7XG59XG5cbihmdW5jdGlvbiAod2luZG93LCBkb2N1bWVudCkge1xuICBjb25zdCBwYXVzZUljb24gPSBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCI0OFwiIGhlaWdodD1cIjQ4XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwid2hpdGVcIiBzdHJva2Utd2lkdGg9XCIyXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgY2xhc3M9XCJmZWF0aGVyIGZlYXRoZXItcGF1c2VcIj48cmVjdCB4PVwiNlwiIHk9XCI0XCIgd2lkdGg9XCI0XCIgaGVpZ2h0PVwiMTZcIj48L3JlY3Q+PHJlY3QgeD1cIjE0XCIgeT1cIjRcIiB3aWR0aD1cIjRcIiBoZWlnaHQ9XCIxNlwiPjwvcmVjdD48L3N2Zz5gO1xuICBjb25zdCB3ZWF0aGVyOiBJV2VhdGhlckxpc3QgPSB7XG4gICAgc3VtbWVyOiB7XG4gICAgICBzb3VuZDogbmV3IEF1ZGlvKFwiLi4vZmlsZXMvYXNzZXRzL3NvdW5kcy9zdW1tZXIubXAzXCIpLFxuICAgICAgYmdVcmw6IFwiLi4vZmlsZXMvYXNzZXRzL3N1bW1lci1iZy5qcGdcIixcbiAgICAgIGljb246IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjQ4XCIgaGVpZ2h0PVwiNDhcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJ3aGl0ZVwiIHN0cm9rZS13aWR0aD1cIjJcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBjbGFzcz1cImZlYXRoZXIgZmVhdGhlci1zdW5cIj48Y2lyY2xlIGN4PVwiMTJcIiBjeT1cIjEyXCIgcj1cIjVcIj48L2NpcmNsZT48bGluZSB4MT1cIjEyXCIgeTE9XCIxXCIgeDI9XCIxMlwiIHkyPVwiM1wiPjwvbGluZT48bGluZSB4MT1cIjEyXCIgeTE9XCIyMVwiIHgyPVwiMTJcIiB5Mj1cIjIzXCI+PC9saW5lPjxsaW5lIHgxPVwiNC4yMlwiIHkxPVwiNC4yMlwiIHgyPVwiNS42NFwiIHkyPVwiNS42NFwiPjwvbGluZT48bGluZSB4MT1cIjE4LjM2XCIgeTE9XCIxOC4zNlwiIHgyPVwiMTkuNzhcIiB5Mj1cIjE5Ljc4XCI+PC9saW5lPjxsaW5lIHgxPVwiMVwiIHkxPVwiMTJcIiB4Mj1cIjNcIiB5Mj1cIjEyXCI+PC9saW5lPjxsaW5lIHgxPVwiMjFcIiB5MT1cIjEyXCIgeDI9XCIyM1wiIHkyPVwiMTJcIj48L2xpbmU+PGxpbmUgeDE9XCI0LjIyXCIgeTE9XCIxOS43OFwiIHgyPVwiNS42NFwiIHkyPVwiMTguMzZcIj48L2xpbmU+PGxpbmUgeDE9XCIxOC4zNlwiIHkxPVwiNS42NFwiIHgyPVwiMTkuNzhcIiB5Mj1cIjQuMjJcIj48L2xpbmU+PC9zdmc+YCxcbiAgICB9LFxuICAgIHJhaW55OiB7XG4gICAgICBzb3VuZDogbmV3IEF1ZGlvKFwiLi4vZmlsZXMvYXNzZXRzL3NvdW5kcy9yYWluLm1wM1wiKSxcbiAgICAgIGJnVXJsOiBcIi4uL2ZpbGVzL2Fzc2V0cy9yYWlueS1iZy5qcGdcIixcbiAgICAgIGljb246IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3dGl0bGV0aD1cIjQ4XCIgaGVpZ2h0PVwiNDhcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJ3aGl0ZVwiIHN0cm9rZS13dGl0bGV0aD1cIjJcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBjbGFzcz1cImZlYXRoZXIgZmVhdGhlci1jbG91ZC1yYWluXCI+PGxpbmUgeDE9XCIxNlwiIHkxPVwiMTNcIiB4Mj1cIjE2XCIgeTI9XCIyMVwiPjwvbGluZT48bGluZSB4MT1cIjhcIiB5MT1cIjEzXCIgeDI9XCI4XCIgeTI9XCIyMVwiPjwvbGluZT48bGluZSB4MT1cIjEyXCIgeTE9XCIxNVwiIHgyPVwiMTJcIiB5Mj1cIjIzXCI+PC9saW5lPjxwYXRoIGQ9XCJNMjAgMTYuNThBNSA1IDAgMCAwIDE4IDdoLTEuMjZBOCA4IDAgMSAwIDQgMTUuMjVcIj48L3BhdGg+PC9zdmc+YCxcbiAgICB9LFxuICAgIHdpbnRlcjoge1xuICAgICAgc291bmQ6IG5ldyBBdWRpbyhcIi4uL2ZpbGVzL2Fzc2V0cy9zb3VuZHMvd2ludGVyLm1wM1wiKSxcbiAgICAgIGJnVXJsOiBcIi4uL2ZpbGVzL2Fzc2V0cy93aW50ZXItYmcuanBnXCIsXG4gICAgICBpY29uOiBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd3RpdGxldGg9XCI0OFwiIGhlaWdodD1cIjQ4XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwid2hpdGVcIiBzdHJva2Utd3RpdGxldGg9XCIyXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgY2xhc3M9XCJmZWF0aGVyIGZlYXRoZXItY2xvdWQtc25vd1wiPjxwYXRoIGQ9XCJNMjAgMTcuNThBNSA1IDAgMCAwIDE4IDhoLTEuMjZBOCA4IDAgMSAwIDQgMTYuMjVcIj48L3BhdGg+PGxpbmUgeDE9XCI4XCIgeTE9XCIxNlwiIHgyPVwiOC4wMVwiIHkyPVwiMTZcIj48L2xpbmU+PGxpbmUgeDE9XCI4XCIgeTE9XCIyMFwiIHgyPVwiOC4wMVwiIHkyPVwiMjBcIj48L2xpbmU+PGxpbmUgeDE9XCIxMlwiIHkxPVwiMThcIiB4Mj1cIjEyLjAxXCIgeTI9XCIxOFwiPjwvbGluZT48bGluZSB4MT1cIjEyXCIgeTE9XCIyMlwiIHgyPVwiMTIuMDFcIiB5Mj1cIjIyXCI+PC9saW5lPjxsaW5lIHgxPVwiMTZcIiB5MT1cIjE2XCIgeDI9XCIxNi4wMVwiIHkyPVwiMTZcIj48L2xpbmU+PGxpbmUgeDE9XCIxNlwiIHkxPVwiMjBcIiB4Mj1cIjE2LjAxXCIgeTI9XCIyMFwiPjwvbGluZT48L3N2Zz5gLFxuICAgIH0sXG4gIH07XG5cbiAgd2luZG93Lm9ubG9hZCA9IGluaXQ7XG5cbiAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG4gICAgY29uc3Qgc3VtbWVyQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdW1tZXJcIik7XG4gICAgY29uc3QgcmFpbnlCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJhaW55XCIpO1xuICAgIGNvbnN0IHdpbnRlckJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2ludGVyXCIpO1xuICAgIGNvbnN0IHZvbHVtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidm9sdW1lXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgY29uc3QgaW5pdGlhbEljb25zID0gKCkgPT4ge1xuICAgICAgbGV0IGtleToga2V5b2YgSVdlYXRoZXJMaXN0O1xuICAgICAgZm9yIChrZXkgaW4gd2VhdGhlcikge1xuICAgICAgICBjb25zdCBkb2MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChrZXkpO1xuICAgICAgICBpZiAoZG9jKSBkb2MuaW5uZXJIVE1MID0gd2VhdGhlcltrZXldLmljb247XG4gICAgICB9XG4gICAgfTtcbiAgICBpbml0aWFsSWNvbnMoKTtcbiAgICBjb25zdCBoYW5kbGVQbGF5ID0gKHRpdGxlOiBrZXlvZiBJV2VhdGhlckxpc3QpID0+IHtcbiAgICAgIGluaXRpYWxJY29ucygpO1xuICAgICAgY29uc3QgZG9jID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGl0bGUpO1xuICAgICAgbGV0IGtleToga2V5b2YgSVdlYXRoZXJMaXN0O1xuICAgICAgZm9yIChrZXkgaW4gd2VhdGhlcikge1xuICAgICAgICBpZiAoa2V5ICE9PSB0aXRsZSkge1xuICAgICAgICAgIHdlYXRoZXJba2V5XS5zb3VuZC5wYXVzZSgpO1xuICAgICAgICAgIHdlYXRoZXJba2V5XS5zb3VuZC5jdXJyZW50VGltZSA9IDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgISF3ZWF0aGVyW3RpdGxlXS5zb3VuZC5wbGF5ZWQubGVuZ3RoICYmXG4gICAgICAgICF3ZWF0aGVyW3RpdGxlXS5zb3VuZC5wYXVzZWRcbiAgICAgICkge1xuICAgICAgICB3ZWF0aGVyW3RpdGxlXS5zb3VuZC5wYXVzZSgpO1xuICAgICAgICBpZiAoZG9jKSBkb2MuaW5uZXJIVE1MID0gcGF1c2VJY29uO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2VhdGhlclt0aXRsZV0uc291bmQucGxheSgpO1xuICAgICAgICAvLyAgIGlmIChkb2MpIGRvYy5pbm5lckhUTUwgPSB3ZWF0aGVyW3RpdGxlXS5pY29uO1xuICAgICAgfVxuXG4gICAgICBpZiAoYm9keSkgYm9keS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7d2VhdGhlclt0aXRsZV0uYmdVcmx9KWA7XG4gICAgfTtcblxuICAgIHZvbHVtZS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcbiAgICAgIGxldCBrZXk6IGtleW9mIElXZWF0aGVyTGlzdDtcbiAgICAgIGZvciAoa2V5IGluIHdlYXRoZXIpIHtcbiAgICAgICAgaWYgKCEhd2VhdGhlcltrZXldLnNvdW5kLnBsYXllZC5sZW5ndGgpIHtcbiAgICAgICAgICB3ZWF0aGVyW2tleV0uc291bmQudm9sdW1lID0gK3ZvbHVtZS52YWx1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIHN1bW1lckJ0bj8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGhhbmRsZVBsYXkoXCJzdW1tZXJcIikpO1xuICAgIHJhaW55QnRuPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gaGFuZGxlUGxheShcInJhaW55XCIpKTtcbiAgICB3aW50ZXJCdG4/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBoYW5kbGVQbGF5KFwid2ludGVyXCIpKTtcbiAgfVxufSkod2luZG93LCBkb2N1bWVudCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=