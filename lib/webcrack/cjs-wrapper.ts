import type { webcrack as wc } from '../serverOnly/webcrack-server';

export const webcrack: typeof wc = async (...args) => {
  const { webcrack } = await import('../serverOnly/webcrack-server');
  return webcrack(...args);
};
