export const generateColor = (index?: number): string => {
  const colors = [
    '#FF5733', // Vibrant Red-Orange
    '#FF8C00', // Dark Orange
    '#FFD700', // Gold
    '#32CD32', // Lime Green
    '#00FA9A', // Medium Spring Green
    '#1E90FF', // Dodger Blue
    '#FF69B4', // Hot Pink
    '#8A2BE2', // Blue Violet
    '#FF4500', // Orange Red
    '#00CED1', // Dark Turquoise
    '#ADFF2F', // Green Yellow
    '#FF1493', // Deep Pink
    '#FF6347', // Tomato
    '#FF00FF', // Magenta
    '#00FF00', // Bright Green
    '#40E0D0', // Turquoise
  ];
  //Fisher Yates Shuffle
  return colors[Math.floor(Math.random() * colors.length)]
};