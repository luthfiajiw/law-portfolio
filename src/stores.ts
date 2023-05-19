import { writable, type Writable } from "svelte/store";

const isOpen = writable(false)
const selectedImg = writable("")
const images: Writable<string[]> = writable([])

export {
  isOpen, selectedImg, images
}