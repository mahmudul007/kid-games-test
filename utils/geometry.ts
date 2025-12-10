import { Point } from '../types';

export const getDistance = (p1: Point, p2: Point): number => {
  return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
};

export const interpolatePoint = (p1: Point, p2: Point, t: number): Point => {
  return {
    x: p1.x + (p2.x - p1.x) * t,
    y: p1.y + (p2.y - p1.y) * t,
  };
};

// Check if a user's drawn path roughly covers the checkpoints
export const validateStroke = (
  userPath: Point[],
  checkpoints: Point[],
  tolerance: number
): boolean => {
  if (userPath.length === 0) return false;

  let checkpointIndex = 0;
  
  // We iterate through user points and see if they "collect" the checkpoints in order
  for (const userPoint of userPath) {
    if (checkpointIndex >= checkpoints.length) break;

    const target = checkpoints[checkpointIndex];
    const dist = getDistance(userPoint, target);

    if (dist < tolerance) {
      checkpointIndex++;
    }
  }

  // Success if all checkpoints were visited
  return checkpointIndex === checkpoints.length;
};

// Get SVG path total length (rough approximation for simple paths if DOM is unavailable)
// In a real app, we would use SVGPathElement.getTotalLength() via a hidden Ref
export const getSVGPointAt = (pathElement: SVGPathElement | null, percent: number): Point => {
  if (!pathElement) return { x: 0, y: 0 };
  const len = pathElement.getTotalLength();
  const point = pathElement.getPointAtLength(len * percent);
  return { x: point.x, y: point.y };
};