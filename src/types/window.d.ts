import type confetti from "canvas-confetti";

declare global {
  interface Window {
    quizConfetti: typeof confetti;
  }
}

export {};