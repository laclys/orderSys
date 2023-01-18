import type { FC } from 'react'
import { Select, InputNumber } from 'antd'
import { Meal } from '@/types'

import styles from './index.module.css'

interface IProps {
  meal: Meal | null
  peopleSize: number | null
  onChangeMeal: (s: Meal) => void
  onChangeSize: (s: number | null) => void
}

const OPTIONS = [
  {
    label: 'Breakfast',
    value: 'breakfast',
  },
  {
    label: 'Lunch',
    value: 'lunch',
  },
  {
    label: 'Dinner',
    value: 'dinner',
  },
]

const Step1: FC<IProps> = ({
  meal,
  onChangeMeal,
  peopleSize,
  onChangeSize,
}) => {
  return (
    <div className={styles.content}>
      <div className={styles.item}>
        <div className={styles.label}>Please Select a meal</div>
        <Select
          value={meal}
          style={{ width: 160 }}
          options={OPTIONS}
          placeholder="Select a meal"
          onSelect={onChangeMeal}
        />
      </div>
      <div className={styles.item}>
        <div className={styles.label}>Please Enter Number of people</div>
        <InputNumber
          value={peopleSize}
          onChange={onChangeSize}
          min={1}
          max={10}
          precision={0}
        />
      </div>
    </div>
  )
}

export default Step1
