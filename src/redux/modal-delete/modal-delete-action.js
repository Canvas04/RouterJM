import { modal } from '../../constants/constants'

const { OPENED, CLOSED } = modal

export const openModal = () => ({ type: OPENED })
export const closeModal = () => ({ type: CLOSED })
