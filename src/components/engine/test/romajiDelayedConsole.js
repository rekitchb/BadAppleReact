/* eslint-disable no-unused-expressions */

import romaji from "../../support/lyrics/lyricsRomaji.json";

export async function romajiConsole() {
  let delay = 1000;
  let Romaji = romaji;
  for (let i = 0; i < Romaji.length; i++) {
    setTimeout(() => console.log(Romaji[i]), delay);
    delay += 750;
  }
}