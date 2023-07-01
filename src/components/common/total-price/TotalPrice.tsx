import type { ReactElement } from 'react'
import type { Ingredient, ConstructorIngredient } from '../../../utils/interfaces'

import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { useAppSelector } from '../../../utils/hooks'

import styles from './TotalPrice.module.css'


export default function TotalPrice(): ReactElement {
    const constructorBun: Ingredient | null = useAppSelector(store => store.constructorIngredientList.bun)
    const constructorList: ConstructorIngredient[] = useAppSelector(store => store.constructorIngredientList.ingredients)
    const totalPrice: number = constructorList?.reduce((acc: number, item: Ingredient) => acc + item.price, 0) + (constructorBun?.price ? constructorBun.price * 2 : 0)

    return (
        <div className={styles.total_price}>
            <span className='text text_type_digits-medium'>{totalPrice ? totalPrice : 0}</span>
            <CurrencyIcon type='primary' />
        </div>
    )
}