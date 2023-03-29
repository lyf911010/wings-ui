import { defineComponent } from 'vue'

export default defineComponent({
    name: 'WButton',
    
    setup(props, { slots }) {
        return () => <button>{slots.default!()}</button>
    }
})