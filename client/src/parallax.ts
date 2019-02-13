export function addEffect(el: HTMLElement | null): void {
  if (!el) return;

  const center = {
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  };

  window.onmousemove = ({ screenX, screenY }) => {
    const xOffset = (center.x - screenX) / 100;
    const yOffset = (center.y - screenY) / 100;
    el.style.transform = `translate3d(${xOffset}px, ${yOffset}px, 0)`;
  };
}