import styles from './ModalIngredient.module.css'

function ModalIngredient({ ingredient }) {
    return (
        <>
            <h1 className={`${styles.ingredient_headline} text text_type_main-large`}>Детали ингредиента</h1>
            <img src={ingredient.image_large} alt={ingredient.name} />
            <h2 className='text text_type_main-medium mt-4 mb-8'>{ingredient.name}</h2>
            <IngredientProperties
                calories={ingredient.calories}
                proteins={ingredient.proteins}
                fat={ingredient.fat}
                carbohydrates={ingredient.carbohydrates}
            />
        </>
    )
}

function IngredientProperties({ calories, proteins, fat, carbohydrates }) {
    return <ul className={styles.ingredient_properties}>
        <IngredientPropertyItem name={'Калории, ккал'} value={calories} />
        <IngredientPropertyItem name={'Белки, г'} value={proteins} />
        <IngredientPropertyItem name={'Жиры, г'} value={fat} />
        <IngredientPropertyItem name={'Углеводы, г'} value={carbohydrates} />
    </ul>
}

function IngredientPropertyItem({ name, value }) {
    return (
        <li className={styles.ingredient_property_item}>
            <div className='text text_type_main-default text_color_inactive mb-2'>{name}</div>
            <div className='text text_type_digits-default text_color_inactive'>{value}</div>
        </li>
    )
}

export default ModalIngredient