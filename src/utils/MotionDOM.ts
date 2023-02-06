import MotionNode from '@common/MotionNode';
import MotionComponent from '@components/common/MotionComponent';
import { MotionTagAttribute } from '@customTypes/MotionTag';

class MotionDOM {
  public static createElement(
    tagName: string,
    tagAttributes?: MotionTagAttribute[],
    children?: MotionNode[]
  ): MotionNode {
    return new MotionNode(tagName, tagAttributes, children);
  }

  public static renderDOM(rootElementSelector: string, motionComponent: MotionComponent): void {
    const rootElement = document.querySelector(rootElementSelector);
    if (!rootElement) {
      throw new Error(`Can not find root element! Please check root id again.`);
    }

    const motionNodes = motionComponent.render();
    motionNodes.forEach((motionNode) => {
      const element = motionNode.createElementTree();
      rootElement.appendChild(element);
    });
  }
}

export default MotionDOM;
