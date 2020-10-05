import {Prop, Vue} from 'vue-property-decorator';

export default abstract class Lightable extends Vue {
  @Prop({type: String, required: true}) readonly stroke!: string;
  @Prop({type: String, required: true}) readonly outFill!: string;
  @Prop({type: String, required: true}) readonly litFill!: string;
  @Prop({type: Boolean, default: true}) readonly lit!: boolean;

  get fill() {
    return this.lit ? this.litFill : this.outFill;
  }
}
