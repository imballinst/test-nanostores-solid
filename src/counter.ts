import { atom } from "nanostores";
import { useStore } from "@nanostores/solid";

const store = atom(1);
useStore(store);

export function setupCounter(element: HTMLButtonElement) {
  let counter = 0;
  const setCounter = (count: number) => {
    counter = count;
    element.innerHTML = `count is ${counter}`;
  };
  element.addEventListener("click", () => setCounter(++counter));
  setCounter(0);
}
