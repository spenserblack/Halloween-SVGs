import Lightable from './Lightable';
import {Prop} from 'vue-property-decorator';

export default abstract class Smile extends Lightable {
  @Prop({type: Number, required: true}) readonly smile!: number;
  readonly minimumSmile = -1.0;
  readonly maximumSmile = 1.0;

  abstract get path(): string
}
