import { FC, useState } from 'react'
import { Radio } from 'antd'
import type { RadioChangeEvent } from 'antd';

import styles from './index.module.css'

interface IProps {
  current: number
  items: string[]
  onChange: (s: number) => void
}

const Step: FC<IProps> = ({ current, items, onChange }) => {
  const _handleChange = (e: RadioChangeEvent) => {
    onChange(e.target.value)
  }
  return  (
    <Radio.Group value={current} onChange={_handleChange}>
      {items.map((item, idx) => (
         <Radio.Button key={`INDEX_${idx}`} value={idx + 1}>{item}</Radio.Button>
      ))}
    </Radio.Group>
  )
}

export default Step
