import MotionComponent from '@components/common/MotionComponent';
import { MotionTagAttribute } from '@customTypes/MotionTag';

class MotionNode {
  public constructor(
    private tagName: string,
    private tagAttributes?: MotionTagAttribute[],
    public children?: MotionNode[]
  ) {}

  private createElement(tagName: string, tagAttributes?: MotionTagAttribute[]): HTMLElement {
    const element = document.createElement(tagName);
    if (tagAttributes && tagAttributes.length > 0) {
      tagAttributes.forEach(([attrName, attrValue]) => element.setAttribute(attrName, attrValue));
    }
    return element;
  }

  private appendChildren(element: HTMLElement, children: MotionNode[]): HTMLElement {
    children.forEach((motionNode) => {
      element.appendChild(motionNode.createElementTree());
    });
    return element;
  }

  public createElementTree(): HTMLElement {
    let element = this.createElement(this.tagName, this.tagAttributes);
    if (this.children && this.children.length > 0) {
      element = this.appendChildren(element, this.children);
    }
    return element;
  }
}

export default MotionNode;
