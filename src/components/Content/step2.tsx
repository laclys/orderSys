import { FC } from 'react'
import { Select } from 'antd'
import { Dish } from '@/types'

import styles from './index.module.css'

interface IProps {
  options: Dish[]
  restaurant: string
  onChange: (s: string) => void
}

const { Option } = Select

const Step2: FC<IProps> = ({ restaurant, onChange, options }) => {
  return (
    <div className={styles.content}>
      <div className={styles.item}>
        <div className={styles.label}>Please Select a Restaurant</div>
        <Select
          value={restaurant}
          style={{ width: 180 }}
          placeholder="Select a Restaurant"
          onSelect={onChange}
        >
          {options.map((i) => (
            <Option key={i.id} value={i.name}>
              {i.name}
            </Option>
          ))}
        </Select>
      </div>
    </div>
  )
}
export default Step2
