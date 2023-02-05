import MotionComponent from '@components/common/MotionComponent';
import { MotionTagAttribute } from '@customTypes/MotionTag';

class MotionDOM {
  public static createElement(
    tagName: string,
    tagAttributes?: MotionTagAttribute[],
    children?: MotionComponent
  ): MotionComponent {
    return new MotionComponent(tagName, tagAttributes, children);
  }

  public static renderDOM(rootElementSelector: string, motionComponent: MotionComponent): void {
    const rootElement = document.querySelector(rootElementSelector);
    if (!rootElement) {
      throw new Error(`Can not find root element! Please check root id again.`);
    }
    rootElement.appendChild(motionComponent.render());
  }
}

export default MotionDOM;
