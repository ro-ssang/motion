import { MotionTagAttribute } from '@customTypes/MotionTag';

class MotionComponent {
  public constructor(
    private tagName: string,
    private tagAttributes?: MotionTagAttribute[],
    public children?: MotionComponent
  ) {}

  public render(): HTMLElement {
    const element = document.createElement(this.tagName);
    if (this.tagAttributes && this.tagAttributes.length > 0) {
      this.tagAttributes.forEach(([attrName, attrValue]) => element.setAttribute(attrName, attrValue));
    }
    if (this.children) {
      element.appendChild(this.children.render());
    }
    return element;
  }
}

export default MotionComponent;
