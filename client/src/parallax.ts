const scalar = 1 / 150;

export function addEffect(el: HTMLElement | null): void {
  if (!el) throw('No element specifed.');

  const center = {
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  };

  window.onmousemove = ({ screenX, screenY }) => {
    const xOffset = (center.x - screenX) * scalar;
    const yOffset = (center.y - screenY) * scalar;
    el.style.transform = `translate3d(${xOffset}px, ${yOffset}px, 0)`;
  };
}