interface ImportMetaEnv {
  VITE_PUBLIC_PATH: string;
  VITE_REQUESET_IMAGE_DOMIN: string;
  VITE_REQUESET_REQUESET_DOMIN: string;
}

interface FastClickObject {
  lastTouchIdentifier: number;
  layer: Element;
  tapDelay: number;
  targetElement: any;
  touchBoundary: number;
  touchStartX: number;
  touchStartY: number;
  trackingClick: boolean;
  trackingClickStart: number;
  destroy(): void;
  determineEventType(targetElement: any): string;
  findControl(labelElement: any /* EventTarget | HTMLLabelElement */): any;
  focus(targetElement: any /* EventTarget | Element */): void;
  getTargetElementFromEventTarget(eventTarget: EventTarget): any;
  needsClick(target: any /* EventTarget | Element */): boolean;
  needsFocus(target: any /* EventTarget | Element */): boolean;
}

interface FastClickOptions {
  touchBoundary?: number;
  tapDelay?: number;
}
declare module 'fastclick' {
  interface FastClick {
    attach(layer: Element, options?: FastClickOptions): FastClickObject;
  }
  const fastClick: FastClick;
  export default fastClick;
}
