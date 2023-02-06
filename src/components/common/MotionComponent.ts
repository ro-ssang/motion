import MotionNode from 'src/common/MotionNode';

abstract class MotionComponent {
  public constructor(public children?: MotionComponent[]) {}

  public abstract render(): MotionNode[];
}

export default MotionComponent;
