
export interface Point {
  x: number;
  y: number;
}

export interface StrokeData {
  d: string; // SVG path string
  color: string;
  startPoint: Point;
  checkpoints: Point[]; // Points user must hit to validate
}

export interface LetterConfig {
  id: string;
  char: string;
  word?: string; // e.g. "Apple"
  emoji?: string; // e.g. "🍎"
  strokes: StrokeData[];
  viewBox: string; // e.g., "0 0 300 300"
}

export enum GameState {
  DEMO = 'DEMO', // Show how to draw
  TRACE = 'TRACE', // User is drawing
  SUCCESS = 'SUCCESS', // Animation
}

export enum TraceDifficulty {
  EASY = 25, // Tolerance radius
  HARD = 15,
}
