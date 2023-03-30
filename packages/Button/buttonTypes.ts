import type { Prop, PropType } from "vue"

type buttonTypes = 'default' | 'warning' | 'success'
type buttonSize = 'small' | 'middle' | 'large'

export const buttonProps = {
  types: {
    type: String as PropType<buttonTypes>,
    default: 'default'
  },
  size: {
    type: String as PropType<buttonSize>,
    default: 'middle'
  }
}