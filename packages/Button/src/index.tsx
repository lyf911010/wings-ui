import { defineComponent } from 'vue';
import { buttonProps } from '../buttonTypes'

export default defineComponent({
  name: 'WButton',

  props: {
    types: buttonProps.types,
    size: buttonProps.size
  },

  setup(props, { slots }) {
    return () => <button class={[props.size, props.types]}>{slots.default!()}</button>;
  },
});
