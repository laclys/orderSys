import { FC, useState, useEffect } from 'react'
import { Select, InputNumber, Button, message, Divider } from 'antd'
import { FormatDish } from '@/types'
import { CHOOSE_LEAST_ONE } from '@/consts/tips'

import styles from './index.module.css'

interface IProps {
  data: FormatDish
  allDish: FormatDish['item']
  onChange: (s: FormatDish['item']) => void
}

const { Option } = Select

const Step3: FC<IProps> = ({ data, allDish, onChange }) => {
  const [selectedItem, setItem] = useState('')

  useEffect(() => {
    onChange(data?.item || [])
  }, [data])

  const _handleSelect = (v: string) => {
    setItem(v)
  }

  const _handleDishChange = (v: number | null) => {
    allDish.map((i) => {
      if (i.name === selectedItem) {
        i.count = v!
      }
    })
    onChange(allDish.concat([]))
  }

  const _handleReset = () => {
    allDish.map((i) => {
      i.count = 0
      i.isSelect = false
    })
    onChange(allDish.concat([]))
  }

  const _handleAdd = () => {
    try {
      allDish.map((i) => {
        if (i.name === selectedItem) {
          if (i.count === 0) {
            message.warning(CHOOSE_LEAST_ONE, 2)
            throw 'out'
          }
          i.isSelect = true
        }
      })
      onChange(allDish.concat([]))
      setItem('')
      message.success('add success!', 2)
    } catch (e) {}
  }

  return (
    <div className={styles.content}>
      <p className={styles.title}>Selected Restaurant: {data?.name || '--'}</p>
      <div className={styles.item}>
        <div className={styles.label}>Please Select a Dish</div>
        <Select
          value={selectedItem}
          style={{ width: 180 }}
          placeholder="Select a Dish"
          onSelect={_handleSelect}
        >
          {allDish.map(
            (i) =>
              !i.isSelect && (
                <Option key={i.name} value={i.name}>
                  {i.name}
                </Option>
              )
          )}
        </Select>
      </div>

      <div className={styles.item}>
        <div className={styles.label}>Please enter no. of savings</div>
        <InputNumber
          value={allDish.filter((i) => i.name === selectedItem)?.[0]?.count}
          min={0}
          max={100}
          precision={0}
          onChange={_handleDishChange}
        />
      </div>

      <div className={styles.btnWrapper}>
        <Button type="primary" onClick={_handleAdd}>
          Add
        </Button>
        <Button onClick={_handleReset}>Reset</Button>
      </div>
      <Divider />
      <div className={styles.show}>
        {allDish
          .filter((i) => i.isSelect)
          .map((j) => (
            <div key={j.name} className={styles.reviewItem}>
              {j.name} - {j.count}
            </div>
          ))}
      </div>
    </div>
  )
}
export default Step3
