
import { LetterConfig } from '../types';

const COLORS = {
  RED: "#FF5252",
  BLUE: "#448AFF",
  GREEN: "#69F0AE",
  PURPLE: "#E040FB",
  ORANGE: "#FFAB40",
  TEAL: "#40C4FF",
  YELLOW: "#FFD740",
  PINK: "#FF4081"
};

export const LETTERS: LetterConfig[] = [
  // --- UPPERCASE LETTERS A-Z ---
  {
    id: 'A', char: 'A', word: "Apple", emoji: "🍎", viewBox: "0 0 300 300",
    strokes: [
      { d: "M150 50 L80 250", color: COLORS.RED, startPoint: { x: 150, y: 50 }, checkpoints: [{ x: 150, y: 50 }, { x: 115, y: 150 }, { x: 80, y: 250 }] },
      { d: "M150 50 L220 250", color: COLORS.BLUE, startPoint: { x: 150, y: 50 }, checkpoints: [{ x: 150, y: 50 }, { x: 185, y: 150 }, { x: 220, y: 250 }] },
      { d: "M100 190 L200 190", color: COLORS.GREEN, startPoint: { x: 100, y: 190 }, checkpoints: [{ x: 100, y: 190 }, { x: 150, y: 190 }, { x: 200, y: 190 }] }
    ]
  },
  {
    id: 'B', char: 'B', word: "Ball", emoji: "⚽", viewBox: "0 0 300 300",
    strokes: [
      { d: "M80 50 L80 250", color: COLORS.PURPLE, startPoint: { x: 80, y: 50 }, checkpoints: [{ x: 80, y: 50 }, { x: 80, y: 150 }, { x: 80, y: 250 }] },
      { d: "M80 50 Q180 50 180 100 Q180 150 80 150", color: COLORS.ORANGE, startPoint: { x: 80, y: 50 }, checkpoints: [{ x: 80, y: 50 }, { x: 150, y: 70 }, { x: 150, y: 130 }, { x: 80, y: 150 }] },
      { d: "M80 150 Q200 150 200 200 Q200 250 80 250", color: COLORS.TEAL, startPoint: { x: 80, y: 150 }, checkpoints: [{ x: 80, y: 150 }, { x: 170, y: 170 }, { x: 170, y: 230 }, { x: 80, y: 250 }] }
    ]
  },
  {
    id: 'C', char: 'C', word: "Cat", emoji: "🐱", viewBox: "0 0 300 300",
    strokes: [
      { d: "M220 80 Q150 20 80 150 Q80 250 220 220", color: COLORS.YELLOW, startPoint: { x: 220, y: 80 }, checkpoints: [{x: 220, y: 80}, {x: 100, y: 100}, {x: 80, y: 150}, {x: 100, y: 230}, {x: 220, y: 220}] }
    ]
  },
  {
    id: 'D', char: 'D', word: "Dog", emoji: "🐶", viewBox: "0 0 300 300",
    strokes: [
      { d: "M80 50 L80 250", color: COLORS.RED, startPoint: { x: 80, y: 50 }, checkpoints: [{x: 80, y: 50}, {x: 80, y: 250}] },
      { d: "M80 50 Q240 50 240 150 Q240 250 80 250", color: COLORS.BLUE, startPoint: { x: 80, y: 50 }, checkpoints: [{x: 80, y: 50}, {x: 200, y: 100}, {x: 240, y: 150}, {x: 200, y: 200}, {x: 80, y: 250}] }
    ]
  },
  {
    id: 'E', char: 'E', word: "Egg", emoji: "🥚", viewBox: "0 0 300 300",
    strokes: [
      { d: "M80 50 L80 250", color: COLORS.GREEN, startPoint: { x: 80, y: 50 }, checkpoints: [{x: 80, y: 50}, {x: 80, y: 250}] },
      { d: "M80 50 L220 50", color: COLORS.PURPLE, startPoint: { x: 80, y: 50 }, checkpoints: [{x: 80, y: 50}, {x: 220, y: 50}] },
      { d: "M80 150 L200 150", color: COLORS.ORANGE, startPoint: { x: 80, y: 150 }, checkpoints: [{x: 80, y: 150}, {x: 200, y: 150}] },
      { d: "M80 250 L220 250", color: COLORS.TEAL, startPoint: { x: 80, y: 250 }, checkpoints: [{x: 80, y: 250}, {x: 220, y: 250}] }
    ]
  },
  {
    id: 'F', char: 'F', word: "Fish", emoji: "🐟", viewBox: "0 0 300 300",
    strokes: [
      { d: "M80 50 L80 250", color: COLORS.RED, startPoint: { x: 80, y: 50 }, checkpoints: [{x: 80, y: 50}, {x: 80, y: 250}] },
      { d: "M80 50 L220 50", color: COLORS.BLUE, startPoint: { x: 80, y: 50 }, checkpoints: [{x: 80, y: 50}, {x: 220, y: 50}] },
      { d: "M80 150 L200 150", color: COLORS.GREEN, startPoint: { x: 80, y: 150 }, checkpoints: [{x: 80, y: 150}, {x: 200, y: 150}] }
    ]
  },
  {
    id: 'G', char: 'G', word: "Grapes", emoji: "🍇", viewBox: "0 0 300 300",
    strokes: [
      { d: "M220 80 Q80 50 80 150 Q80 250 220 250 L220 180", color: COLORS.ORANGE, startPoint: { x: 220, y: 80 }, checkpoints: [{x: 220, y: 80}, {x: 100, y: 80}, {x: 80, y: 150}, {x: 100, y: 220}, {x: 220, y: 250}, {x: 220, y: 180}] },
      { d: "M180 180 L220 180", color: COLORS.PURPLE, startPoint: { x: 180, y: 180 }, checkpoints: [{x: 180, y: 180}, {x: 220, y: 180}] }
    ]
  },
  {
    id: 'H', char: 'H', word: "Hat", emoji: "🎩", viewBox: "0 0 300 300",
    strokes: [
      { d: "M80 50 L80 250", color: COLORS.TEAL, startPoint: { x: 80, y: 50 }, checkpoints: [{x: 80, y: 50}, {x: 80, y: 250}] },
      { d: "M220 50 L220 250", color: COLORS.PINK, startPoint: { x: 220, y: 50 }, checkpoints: [{x: 220, y: 50}, {x: 220, y: 250}] },
      { d: "M80 150 L220 150", color: COLORS.YELLOW, startPoint: { x: 80, y: 150 }, checkpoints: [{x: 80, y: 150}, {x: 220, y: 150}] }
    ]
  },
  {
    id: 'I', char: 'I', word: "Ice Cream", emoji: "🍦", viewBox: "0 0 300 300",
    strokes: [
      { d: "M150 50 L150 250", color: COLORS.RED, startPoint: { x: 150, y: 50 }, checkpoints: [{x: 150, y: 50}, {x: 150, y: 250}] },
      { d: "M100 50 L200 50", color: COLORS.BLUE, startPoint: { x: 100, y: 50 }, checkpoints: [{x: 100, y: 50}, {x: 200, y: 50}] },
      { d: "M100 250 L200 250", color: COLORS.GREEN, startPoint: { x: 100, y: 250 }, checkpoints: [{x: 100, y: 250}, {x: 200, y: 250}] }
    ]
  },
  {
    id: 'J', char: 'J', word: "Juice", emoji: "🧃", viewBox: "0 0 300 300",
    strokes: [
      { d: "M200 50 L200 200 Q200 250 120 250", color: COLORS.PURPLE, startPoint: { x: 200, y: 50 }, checkpoints: [{x: 200, y: 50}, {x: 200, y: 200}, {x: 160, y: 250}, {x: 120, y: 250}] }
    ]
  },
  {
    id: 'K', char: 'K', word: "Kite", emoji: "🪁", viewBox: "0 0 300 300",
    strokes: [
      { d: "M80 50 L80 250", color: COLORS.ORANGE, startPoint: { x: 80, y: 50 }, checkpoints: [{x: 80, y: 50}, {x: 80, y: 250}] },
      { d: "M220 50 L80 150", color: COLORS.TEAL, startPoint: { x: 220, y: 50 }, checkpoints: [{x: 220, y: 50}, {x: 80, y: 150}] },
      { d: "M120 120 L220 250", color: COLORS.PINK, startPoint: { x: 120, y: 120 }, checkpoints: [{x: 120, y: 120}, {x: 220, y: 250}] }
    ]
  },
  {
    id: 'L', char: 'L', word: "Lion", emoji: "🦁", viewBox: "0 0 300 300",
    strokes: [
      { d: "M80 50 L80 250 L220 250", color: COLORS.BLUE, startPoint: { x: 80, y: 50 }, checkpoints: [{x: 80, y: 50}, {x: 80, y: 250}, {x: 220, y: 250}] }
    ]
  },
  {
    id: 'M', char: 'M', word: "Moon", emoji: "🌙", viewBox: "0 0 300 300",
    strokes: [
      { d: "M60 250 L60 50", color: COLORS.RED, startPoint: { x: 60, y: 250 }, checkpoints: [{x: 60, y: 250}, {x: 60, y: 50}] },
      { d: "M60 50 L150 150", color: COLORS.GREEN, startPoint: { x: 60, y: 50 }, checkpoints: [{x: 60, y: 50}, {x: 150, y: 150}] },
      { d: "M150 150 L240 50", color: COLORS.ORANGE, startPoint: { x: 150, y: 150 }, checkpoints: [{x: 150, y: 150}, {x: 240, y: 50}] },
      { d: "M240 50 L240 250", color: COLORS.PURPLE, startPoint: { x: 240, y: 50 }, checkpoints: [{x: 240, y: 50}, {x: 240, y: 250}] }
    ]
  },
  {
    id: 'N', char: 'N', word: "Nest", emoji: "🪹", viewBox: "0 0 300 300",
    strokes: [
      { d: "M80 250 L80 50", color: COLORS.TEAL, startPoint: { x: 80, y: 250 }, checkpoints: [{x: 80, y: 250}, {x: 80, y: 50}] },
      { d: "M80 50 L220 250", color: COLORS.YELLOW, startPoint: { x: 80, y: 50 }, checkpoints: [{x: 80, y: 50}, {x: 220, y: 250}] },
      { d: "M220 250 L220 50", color: COLORS.PINK, startPoint: { x: 220, y: 250 }, checkpoints: [{x: 220, y: 250}, {x: 220, y: 50}] }
    ]
  },
  {
    id: 'O', char: 'O', word: "Owl", emoji: "🦉", viewBox: "0 0 300 300",
    strokes: [
      { d: "M150 50 Q50 50 50 150 Q50 250 150 250 Q250 250 250 150 Q250 50 150 50", color: COLORS.BLUE, startPoint: { x: 150, y: 50 }, checkpoints: [{x: 150, y: 50}, {x: 50, y: 150}, {x: 150, y: 250}, {x: 250, y: 150}, {x: 150, y: 50}] }
    ]
  },
  {
    id: 'P', char: 'P', word: "Pig", emoji: "🐷", viewBox: "0 0 300 300",
    strokes: [
      { d: "M80 50 L80 250", color: COLORS.RED, startPoint: { x: 80, y: 50 }, checkpoints: [{x: 80, y: 50}, {x: 80, y: 250}] },
      { d: "M80 50 Q220 50 220 125 Q220 200 80 200", color: COLORS.GREEN, startPoint: { x: 80, y: 50 }, checkpoints: [{x: 80, y: 50}, {x: 220, y: 80}, {x: 220, y: 170}, {x: 80, y: 200}] }
    ]
  },
  {
    id: 'Q', char: 'Q', word: "Queen", emoji: "👑", viewBox: "0 0 300 300",
    strokes: [
      { d: "M150 50 Q50 50 50 150 Q50 250 150 250 Q250 250 250 150 Q250 50 150 50", color: COLORS.PURPLE, startPoint: { x: 150, y: 50 }, checkpoints: [{x: 150, y: 50}, {x: 50, y: 150}, {x: 150, y: 250}, {x: 250, y: 150}, {x: 150, y: 50}] },
      { d: "M180 200 L250 280", color: COLORS.ORANGE, startPoint: { x: 180, y: 200 }, checkpoints: [{x: 180, y: 200}, {x: 250, y: 280}] }
    ]
  },
  {
    id: 'R', char: 'R', word: "Rainbow", emoji: "🌈", viewBox: "0 0 300 300",
    strokes: [
      { d: "M80 50 L80 250", color: COLORS.TEAL, startPoint: { x: 80, y: 50 }, checkpoints: [{x: 80, y: 50}, {x: 80, y: 250}] },
      { d: "M80 50 Q220 50 220 125 Q220 200 80 200", color: COLORS.YELLOW, startPoint: { x: 80, y: 50 }, checkpoints: [{x: 80, y: 50}, {x: 220, y: 80}, {x: 220, y: 170}, {x: 80, y: 200}] },
      { d: "M150 200 L220 250", color: COLORS.PINK, startPoint: { x: 150, y: 200 }, checkpoints: [{x: 150, y: 200}, {x: 220, y: 250}] }
    ]
  },
  {
    id: 'S', char: 'S', word: "Sun", emoji: "☀️", viewBox: "0 0 300 300",
    strokes: [
      { d: "M220 80 Q50 80 150 150 Q250 220 80 220", color: COLORS.BLUE, startPoint: { x: 220, y: 80 }, checkpoints: [{x: 220, y: 80}, {x: 100, y: 80}, {x: 150, y: 150}, {x: 200, y: 220}, {x: 80, y: 220}] }
    ]
  },
  {
    id: 'T', char: 'T', word: "Tree", emoji: "🌳", viewBox: "0 0 300 300",
    strokes: [
      { d: "M50 50 L250 50", color: COLORS.RED, startPoint: { x: 50, y: 50 }, checkpoints: [{x: 50, y: 50}, {x: 250, y: 50}] },
      { d: "M150 50 L150 250", color: COLORS.GREEN, startPoint: { x: 150, y: 50 }, checkpoints: [{x: 150, y: 50}, {x: 150, y: 250}] }
    ]
  },
  {
    id: 'U', char: 'U', word: "Umbrella", emoji: "☂️", viewBox: "0 0 300 300",
    strokes: [
      { d: "M80 50 L80 200 Q80 250 150 250 Q220 250 220 200 L220 50", color: COLORS.PURPLE, startPoint: { x: 80, y: 50 }, checkpoints: [{x: 80, y: 50}, {x: 80, y: 200}, {x: 150, y: 250}, {x: 220, y: 200}, {x: 220, y: 50}] }
    ]
  },
  {
    id: 'V', char: 'V', word: "Violin", emoji: "🎻", viewBox: "0 0 300 300",
    strokes: [
      { d: "M60 50 L150 250", color: COLORS.ORANGE, startPoint: { x: 60, y: 50 }, checkpoints: [{x: 60, y: 50}, {x: 150, y: 250}] },
      { d: "M150 250 L240 50", color: COLORS.TEAL, startPoint: { x: 150, y: 250 }, checkpoints: [{x: 150, y: 250}, {x: 240, y: 50}] }
    ]
  },
  {
    id: 'W', char: 'W', word: "Whale", emoji: "🐳", viewBox: "0 0 300 300",
    strokes: [
      { d: "M50 50 L80 250", color: COLORS.PINK, startPoint: { x: 50, y: 50 }, checkpoints: [{x: 50, y: 50}, {x: 80, y: 250}] },
      { d: "M80 250 L150 150", color: COLORS.YELLOW, startPoint: { x: 80, y: 250 }, checkpoints: [{x: 80, y: 250}, {x: 150, y: 150}] },
      { d: "M150 150 L220 250", color: COLORS.RED, startPoint: { x: 150, y: 150 }, checkpoints: [{x: 150, y: 150}, {x: 220, y: 250}] },
      { d: "M220 250 L250 50", color: COLORS.BLUE, startPoint: { x: 220, y: 250 }, checkpoints: [{x: 220, y: 250}, {x: 250, y: 50}] }
    ]
  },
  {
    id: 'X', char: 'X', word: "X-ray", emoji: "🩻", viewBox: "0 0 300 300",
    strokes: [
      { d: "M60 50 L240 250", color: COLORS.GREEN, startPoint: { x: 60, y: 50 }, checkpoints: [{x: 60, y: 50}, {x: 150, y: 150}, {x: 240, y: 250}] },
      { d: "M240 50 L60 250", color: COLORS.PURPLE, startPoint: { x: 240, y: 50 }, checkpoints: [{x: 240, y: 50}, {x: 150, y: 150}, {x: 60, y: 250}] }
    ]
  },
  {
    id: 'Y', char: 'Y', word: "Yo-yo", emoji: "🪀", viewBox: "0 0 300 300",
    strokes: [
      { d: "M60 50 L150 150", color: COLORS.ORANGE, startPoint: { x: 60, y: 50 }, checkpoints: [{x: 60, y: 50}, {x: 150, y: 150}] },
      { d: "M240 50 L150 150", color: COLORS.TEAL, startPoint: { x: 240, y: 50 }, checkpoints: [{x: 240, y: 50}, {x: 150, y: 150}] },
      { d: "M150 150 L150 250", color: COLORS.PINK, startPoint: { x: 150, y: 150 }, checkpoints: [{x: 150, y: 150}, {x: 150, y: 250}] }
    ]
  },
  {
    id: 'Z', char: 'Z', word: "Zebra", emoji: "🦓", viewBox: "0 0 300 300",
    strokes: [
      { d: "M60 50 L240 50", color: COLORS.RED, startPoint: { x: 60, y: 50 }, checkpoints: [{x: 60, y: 50}, {x: 240, y: 50}] },
      { d: "M240 50 L60 250", color: COLORS.BLUE, startPoint: { x: 240, y: 50 }, checkpoints: [{x: 240, y: 50}, {x: 150, y: 150}, {x: 60, y: 250}] },
      { d: "M60 250 L240 250", color: COLORS.GREEN, startPoint: { x: 60, y: 250 }, checkpoints: [{x: 60, y: 250}, {x: 240, y: 250}] }
    ]
  },
  // --- LOWERCASE LETTERS a-z ---
  {
    id: 'a', char: 'a', word: "Apple", emoji: "🍎", viewBox: "0 0 300 300",
    strokes: [
      { d: "M220 120 Q100 120 100 185 Q100 250 220 250", color: COLORS.RED, startPoint: { x: 220, y: 120 }, checkpoints: [{ x: 220, y: 120 }, { x: 100, y: 150 }, { x: 100, y: 220 }, { x: 220, y: 250 }] },
      { d: "M220 120 L220 250", color: COLORS.BLUE, startPoint: { x: 220, y: 120 }, checkpoints: [{ x: 220, y: 120 }, { x: 220, y: 250 }] }
    ]
  },
  {
    id: 'b', char: 'b', word: "Ball", emoji: "⚽", viewBox: "0 0 300 300",
    strokes: [
      { d: "M80 50 L80 250", color: COLORS.GREEN, startPoint: { x: 80, y: 50 }, checkpoints: [{ x: 80, y: 50 }, { x: 80, y: 250 }] },
      { d: "M80 150 Q220 150 220 200 Q220 250 80 250", color: COLORS.PURPLE, startPoint: { x: 80, y: 150 }, checkpoints: [{ x: 80, y: 150 }, { x: 220, y: 180 }, { x: 220, y: 230 }, { x: 80, y: 250 }] }
    ]
  },
  {
    id: 'c', char: 'c', word: "Cat", emoji: "🐱", viewBox: "0 0 300 300",
    strokes: [
      { d: "M220 150 Q100 120 100 185 Q100 250 220 250", color: COLORS.ORANGE, startPoint: { x: 220, y: 150 }, checkpoints: [{ x: 220, y: 150 }, { x: 100, y: 150 }, { x: 100, y: 220 }, { x: 220, y: 250 }] }
    ]
  },
  {
    id: 'd', char: 'd', word: "Dog", emoji: "🐶", viewBox: "0 0 300 300",
    strokes: [
      { d: "M220 150 Q80 150 80 200 Q80 250 220 250", color: COLORS.TEAL, startPoint: { x: 220, y: 150 }, checkpoints: [{ x: 220, y: 150 }, { x: 80, y: 180 }, { x: 80, y: 230 }, { x: 220, y: 250 }] },
      { d: "M220 50 L220 250", color: COLORS.YELLOW, startPoint: { x: 220, y: 50 }, checkpoints: [{ x: 220, y: 50 }, { x: 220, y: 250 }] }
    ]
  },
  {
    id: 'e', char: 'e', word: "Egg", emoji: "🥚", viewBox: "0 0 300 300",
    strokes: [
      { d: "M80 180 L220 180 Q220 120 150 120 Q80 120 80 185 Q80 250 220 250", color: COLORS.PINK, startPoint: { x: 80, y: 180 }, checkpoints: [{ x: 80, y: 180 }, { x: 220, y: 180 }, { x: 150, y: 120 }, { x: 80, y: 180 }, { x: 220, y: 250 }] }
    ]
  },
  {
    id: 'f', char: 'f', word: "Fish", emoji: "🐟", viewBox: "0 0 300 300",
    strokes: [
      { d: "M180 50 Q150 50 150 100 L150 250", color: COLORS.RED, startPoint: { x: 180, y: 50 }, checkpoints: [{ x: 180, y: 50 }, { x: 150, y: 80 }, { x: 150, y: 250 }] },
      { d: "M100 150 L200 150", color: COLORS.BLUE, startPoint: { x: 100, y: 150 }, checkpoints: [{ x: 100, y: 150 }, { x: 200, y: 150 }] }
    ]
  },
  {
    id: 'g', char: 'g', word: "Grapes", emoji: "🍇", viewBox: "0 0 300 300",
    strokes: [
      { d: "M220 120 Q100 120 100 185 Q100 250 220 250", color: COLORS.GREEN, startPoint: { x: 220, y: 120 }, checkpoints: [{ x: 220, y: 120 }, { x: 100, y: 150 }, { x: 100, y: 220 }, { x: 220, y: 250 }] },
      { d: "M220 120 L220 300 Q220 350 150 350", color: COLORS.PURPLE, startPoint: { x: 220, y: 120 }, checkpoints: [{ x: 220, y: 120 }, { x: 220, y: 300 }, { x: 150, y: 350 }] }
    ]
  },
  {
    id: 'h', char: 'h', word: "Hat", emoji: "🎩", viewBox: "0 0 300 300",
    strokes: [
      { d: "M80 50 L80 250", color: COLORS.ORANGE, startPoint: { x: 80, y: 50 }, checkpoints: [{ x: 80, y: 50 }, { x: 80, y: 250 }] },
      { d: "M80 150 Q180 150 180 200 L180 250", color: COLORS.TEAL, startPoint: { x: 80, y: 150 }, checkpoints: [{ x: 80, y: 150 }, { x: 180, y: 180 }, { x: 180, y: 250 }] }
    ]
  },
  {
    id: 'i', char: 'i', word: "Ice Cream", emoji: "🍦", viewBox: "0 0 300 300",
    strokes: [
      { d: "M150 120 L150 250", color: COLORS.YELLOW, startPoint: { x: 150, y: 120 }, checkpoints: [{ x: 150, y: 120 }, { x: 150, y: 250 }] },
      { d: "M150 70 L150 75", color: COLORS.PINK, startPoint: { x: 150, y: 70 }, checkpoints: [{ x: 150, y: 70 }, { x: 150, y: 75 }] } // Dot as short line
    ]
  },
  {
    id: 'j', char: 'j', word: "Juice", emoji: "🧃", viewBox: "0 0 300 300",
    strokes: [
      { d: "M180 120 L180 300 Q180 350 120 350", color: COLORS.RED, startPoint: { x: 180, y: 120 }, checkpoints: [{ x: 180, y: 120 }, { x: 180, y: 300 }, { x: 120, y: 350 }] },
      { d: "M180 70 L180 75", color: COLORS.BLUE, startPoint: { x: 180, y: 70 }, checkpoints: [{ x: 180, y: 70 }, { x: 180, y: 75 }] }
    ]
  },
  {
    id: 'k', char: 'k', word: "Kite", emoji: "🪁", viewBox: "0 0 300 300",
    strokes: [
      { d: "M80 50 L80 250", color: COLORS.GREEN, startPoint: { x: 80, y: 50 }, checkpoints: [{ x: 80, y: 50 }, { x: 80, y: 250 }] },
      { d: "M200 150 L80 200", color: COLORS.PURPLE, startPoint: { x: 200, y: 150 }, checkpoints: [{ x: 200, y: 150 }, { x: 80, y: 200 }] },
      { d: "M120 180 L200 250", color: COLORS.ORANGE, startPoint: { x: 120, y: 180 }, checkpoints: [{ x: 120, y: 180 }, { x: 200, y: 250 }] }
    ]
  },
  {
    id: 'l', char: 'l', word: "Lion", emoji: "🦁", viewBox: "0 0 300 300",
    strokes: [
      { d: "M150 50 L150 250", color: COLORS.TEAL, startPoint: { x: 150, y: 50 }, checkpoints: [{ x: 150, y: 50 }, { x: 150, y: 250 }] }
    ]
  },
  {
    id: 'm', char: 'm', word: "Moon", emoji: "🌙", viewBox: "0 0 300 300",
    strokes: [
      { d: "M80 120 L80 250", color: COLORS.YELLOW, startPoint: { x: 80, y: 120 }, checkpoints: [{ x: 80, y: 120 }, { x: 80, y: 250 }] },
      { d: "M80 140 Q150 120 150 180 L150 250", color: COLORS.PINK, startPoint: { x: 80, y: 140 }, checkpoints: [{ x: 80, y: 140 }, { x: 150, y: 140 }, { x: 150, y: 250 }] },
      { d: "M150 140 Q220 120 220 180 L220 250", color: COLORS.RED, startPoint: { x: 150, y: 140 }, checkpoints: [{ x: 150, y: 140 }, { x: 220, y: 140 }, { x: 220, y: 250 }] }
    ]
  },
  {
    id: 'n', char: 'n', word: "Nest", emoji: "🪹", viewBox: "0 0 300 300",
    strokes: [
      { d: "M80 120 L80 250", color: COLORS.BLUE, startPoint: { x: 80, y: 120 }, checkpoints: [{ x: 80, y: 120 }, { x: 80, y: 250 }] },
      { d: "M80 140 Q200 120 200 180 L200 250", color: COLORS.GREEN, startPoint: { x: 80, y: 140 }, checkpoints: [{ x: 80, y: 140 }, { x: 200, y: 140 }, { x: 200, y: 250 }] }
    ]
  },
  {
    id: 'o', char: 'o', word: "Owl", emoji: "🦉", viewBox: "0 0 300 300",
    strokes: [
      { d: "M150 120 Q50 120 50 185 Q50 250 150 250 Q250 250 250 185 Q250 120 150 120", color: COLORS.PURPLE, startPoint: { x: 150, y: 120 }, checkpoints: [{ x: 150, y: 120 }, { x: 50, y: 185 }, { x: 150, y: 250 }, { x: 250, y: 185 }] }
    ]
  },
  {
    id: 'p', char: 'p', word: "Pig", emoji: "🐷", viewBox: "0 0 300 300",
    strokes: [
      { d: "M80 120 L80 320", color: COLORS.ORANGE, startPoint: { x: 80, y: 120 }, checkpoints: [{ x: 80, y: 120 }, { x: 80, y: 320 }] },
      { d: "M80 140 Q220 140 220 200 Q220 260 80 260", color: COLORS.TEAL, startPoint: { x: 80, y: 140 }, checkpoints: [{ x: 80, y: 140 }, { x: 220, y: 200 }, { x: 80, y: 260 }] }
    ]
  },
  {
    id: 'q', char: 'q', word: "Queen", emoji: "👑", viewBox: "0 0 300 300",
    strokes: [
      { d: "M220 120 Q100 120 100 185 Q100 250 220 250", color: COLORS.YELLOW, startPoint: { x: 220, y: 120 }, checkpoints: [{ x: 220, y: 120 }, { x: 100, y: 150 }, { x: 100, y: 220 }, { x: 220, y: 250 }] },
      { d: "M220 120 L220 320", color: COLORS.PINK, startPoint: { x: 220, y: 120 }, checkpoints: [{ x: 220, y: 120 }, { x: 220, y: 320 }] }
    ]
  },
  {
    id: 'r', char: 'r', word: "Rainbow", emoji: "🌈", viewBox: "0 0 300 300",
    strokes: [
      { d: "M80 120 L80 250", color: COLORS.RED, startPoint: { x: 80, y: 120 }, checkpoints: [{ x: 80, y: 120 }, { x: 80, y: 250 }] },
      { d: "M80 150 Q180 120 180 150", color: COLORS.BLUE, startPoint: { x: 80, y: 150 }, checkpoints: [{ x: 80, y: 150 }, { x: 180, y: 150 }] }
    ]
  },
  {
    id: 's', char: 's', word: "Sun", emoji: "☀️", viewBox: "0 0 300 300",
    strokes: [
      { d: "M200 130 Q100 130 150 190 Q200 250 100 250", color: COLORS.GREEN, startPoint: { x: 200, y: 130 }, checkpoints: [{ x: 200, y: 130 }, { x: 100, y: 160 }, { x: 200, y: 220 }, { x: 100, y: 250 }] }
    ]
  },
  {
    id: 't', char: 't', word: "Tree", emoji: "🌳", viewBox: "0 0 300 300",
    strokes: [
      { d: "M150 50 L150 250", color: COLORS.PURPLE, startPoint: { x: 150, y: 50 }, checkpoints: [{ x: 150, y: 50 }, { x: 150, y: 250 }] },
      { d: "M100 150 L200 150", color: COLORS.ORANGE, startPoint: { x: 100, y: 150 }, checkpoints: [{ x: 100, y: 150 }, { x: 200, y: 150 }] }
    ]
  },
  {
    id: 'u', char: 'u', word: "Umbrella", emoji: "☂️", viewBox: "0 0 300 300",
    strokes: [
      { d: "M80 120 L80 220 Q80 250 150 250 Q220 250 220 220 L220 120", color: COLORS.TEAL, startPoint: { x: 80, y: 120 }, checkpoints: [{ x: 80, y: 120 }, { x: 80, y: 220 }, { x: 150, y: 250 }, { x: 220, y: 220 }, { x: 220, y: 120 }] }
    ]
  },
  {
    id: 'v', char: 'v', word: "Violin", emoji: "🎻", viewBox: "0 0 300 300",
    strokes: [
      { d: "M80 120 L150 250", color: COLORS.YELLOW, startPoint: { x: 80, y: 120 }, checkpoints: [{ x: 80, y: 120 }, { x: 150, y: 250 }] },
      { d: "M150 250 L220 120", color: COLORS.PINK, startPoint: { x: 150, y: 250 }, checkpoints: [{ x: 150, y: 250 }, { x: 220, y: 120 }] }
    ]
  },
  {
    id: 'w', char: 'w', word: "Whale", emoji: "🐳", viewBox: "0 0 300 300",
    strokes: [
      { d: "M50 120 L80 250", color: COLORS.RED, startPoint: { x: 50, y: 120 }, checkpoints: [{x: 50, y: 120}, {x: 80, y: 250}] },
      { d: "M80 250 L150 150", color: COLORS.BLUE, startPoint: { x: 80, y: 250 }, checkpoints: [{x: 80, y: 250}, {x: 150, y: 150}] },
      { d: "M150 150 L220 250", color: COLORS.GREEN, startPoint: { x: 150, y: 150 }, checkpoints: [{x: 150, y: 150}, {x: 220, y: 250}] },
      { d: "M220 250 L250 120", color: COLORS.PURPLE, startPoint: { x: 220, y: 250 }, checkpoints: [{x: 220, y: 250}, {x: 250, y: 120}] }
    ]
  },
  {
    id: 'x', char: 'x', word: "X-ray", emoji: "🩻", viewBox: "0 0 300 300",
    strokes: [
      { d: "M80 120 L220 250", color: COLORS.ORANGE, startPoint: { x: 80, y: 120 }, checkpoints: [{ x: 80, y: 120 }, { x: 220, y: 250 }] },
      { d: "M220 120 L80 250", color: COLORS.TEAL, startPoint: { x: 220, y: 120 }, checkpoints: [{ x: 220, y: 120 }, { x: 80, y: 250 }] }
    ]
  },
  {
    id: 'y', char: 'y', word: "Yo-yo", emoji: "🪀", viewBox: "0 0 300 300",
    strokes: [
      { d: "M80 120 L150 250", color: COLORS.YELLOW, startPoint: { x: 80, y: 120 }, checkpoints: [{ x: 80, y: 120 }, { x: 150, y: 250 }] },
      { d: "M220 120 L80 320", color: COLORS.PINK, startPoint: { x: 220, y: 120 }, checkpoints: [{ x: 220, y: 120 }, { x: 150, y: 220 }, { x: 80, y: 320 }] }
    ]
  },
  {
    id: 'z', char: 'z', word: "Zebra", emoji: "🦓", viewBox: "0 0 300 300",
    strokes: [
      { d: "M80 120 L220 120", color: COLORS.RED, startPoint: { x: 80, y: 120 }, checkpoints: [{ x: 80, y: 120 }, { x: 220, y: 120 }] },
      { d: "M220 120 L80 250", color: COLORS.BLUE, startPoint: { x: 220, y: 120 }, checkpoints: [{ x: 220, y: 120 }, { x: 150, y: 185 }, { x: 80, y: 250 }] },
      { d: "M80 250 L220 250", color: COLORS.GREEN, startPoint: { x: 80, y: 250 }, checkpoints: [{ x: 80, y: 250 }, { x: 220, y: 250 }] }
    ]
  },

  // --- NUMBERS 0-9 ---
  {
    id: '0', char: '0', word: "Zero", emoji: "0️⃣", viewBox: "0 0 300 300",
    strokes: [
      { d: "M150 50 Q50 50 50 150 Q50 250 150 250 Q250 250 250 150 Q250 50 150 50", color: COLORS.PURPLE, startPoint: { x: 150, y: 50 }, checkpoints: [{x: 150, y: 50}, {x: 50, y: 150}, {x: 150, y: 250}, {x: 250, y: 150}, {x: 150, y: 50}] }
    ]
  },
  {
    id: '1', char: '1', word: "One", emoji: "1️⃣", viewBox: "0 0 300 300",
    strokes: [
      { d: "M150 60 L150 240", color: COLORS.RED, startPoint: { x: 150, y: 60 }, checkpoints: [{ x: 150, y: 60 }, { x: 150, y: 150 }, { x: 150, y: 240 }] }
    ]
  },
  {
    id: '2', char: '2', word: "Two", emoji: "2️⃣", viewBox: "0 0 300 300",
    strokes: [
      { d: "M80 100 Q80 20 180 60 Q240 100 80 240 L240 240", color: COLORS.GREEN, startPoint: { x: 80, y: 100 }, checkpoints: [{ x: 80, y: 100 }, { x: 150, y: 50 }, { x: 200, y: 100 }, { x: 150, y: 170 }, { x: 80, y: 240 }, { x: 240, y: 240 }] }
    ]
  },
  {
    id: '3', char: '3', word: "Three", emoji: "3️⃣", viewBox: "0 0 300 300",
    strokes: [
      { d: "M80 70 Q200 50 150 150 Q220 180 200 240 Q180 280 80 240", color: COLORS.BLUE, startPoint: { x: 80, y: 70 }, checkpoints: [{ x: 80, y: 70 }, { x: 180, y: 70 }, { x: 150, y: 150 }, { x: 200, y: 200 }, { x: 80, y: 240 }] }
    ]
  },
  {
    id: '4', char: '4', word: "Four", emoji: "4️⃣", viewBox: "0 0 300 300",
    strokes: [
      { d: "M200 50 L60 180 L240 180", color: COLORS.ORANGE, startPoint: { x: 200, y: 50 }, checkpoints: [{x: 200, y: 50}, {x: 60, y: 180}, {x: 240, y: 180}] },
      { d: "M180 50 L180 250", color: COLORS.TEAL, startPoint: { x: 180, y: 50 }, checkpoints: [{x: 180, y: 50}, {x: 180, y: 250}] }
    ]
  },
  {
    id: '5', char: '5', word: "Five", emoji: "5️⃣", viewBox: "0 0 300 300",
    strokes: [
      { d: "M220 60 L100 60 L80 140 Q240 120 240 200 Q240 250 100 250", color: COLORS.PINK, startPoint: { x: 220, y: 60 }, checkpoints: [{x: 220, y: 60}, {x: 100, y: 60}, {x: 80, y: 140}, {x: 240, y: 180}, {x: 100, y: 250}] }
    ]
  },
  {
    id: '6', char: '6', word: "Six", emoji: "6️⃣", viewBox: "0 0 300 300",
    strokes: [
      { d: "M200 50 Q50 150 100 250 Q220 250 220 180 Q220 140 100 180", color: COLORS.YELLOW, startPoint: { x: 200, y: 50 }, checkpoints: [{x: 200, y: 50}, {x: 60, y: 200}, {x: 160, y: 250}, {x: 220, y: 180}, {x: 100, y: 180}] }
    ]
  },
  {
    id: '7', char: '7', word: "Seven", emoji: "7️⃣", viewBox: "0 0 300 300",
    strokes: [
      { d: "M60 60 L240 60 L120 250", color: COLORS.RED, startPoint: { x: 60, y: 60 }, checkpoints: [{x: 60, y: 60}, {x: 240, y: 60}, {x: 120, y: 250}] }
    ]
  },
  {
    id: '8', char: '8', word: "Eight", emoji: "8️⃣", viewBox: "0 0 300 300",
    strokes: [
      { d: "M150 150 Q220 100 150 50 Q80 100 150 150 Q220 200 150 250 Q80 200 150 150", color: COLORS.BLUE, startPoint: { x: 150, y: 150 }, checkpoints: [{x: 150, y: 150}, {x: 200, y: 75}, {x: 150, y: 50}, {x: 100, y: 75}, {x: 150, y: 150}, {x: 200, y: 225}, {x: 150, y: 250}, {x: 100, y: 225}] }
    ]
  },
  {
    id: '9', char: '9', word: "Nine", emoji: "9️⃣", viewBox: "0 0 300 300",
    strokes: [
      { d: "M100 250 Q250 150 200 50 Q80 50 80 120 Q80 160 200 120", color: COLORS.GREEN, startPoint: { x: 100, y: 250 }, checkpoints: [{x: 100, y: 250}, {x: 250, y: 150}, {x: 200, y: 50}, {x: 80, y: 80}, {x: 200, y: 120}] }
    ]
  }
];
