import { FC, useState } from 'react'
import cx from 'classnames'
import { Button } from 'antd'
import { Dish } from '@/types'
import Step from '@/components/Step'

import styles from './index.module.css'

interface IProps {
  data: Dish[]
}

const STEP_ITEMS = ['Step 1', 'Step 2', 'Step 3', 'Review']

const Container: FC<IProps> = ({ data }) => {
  const [step, setStep] = useState(1)

  const toPrev = () => {
    setStep((s) => s - 1)
  }
  const toNext = () => {
    setStep((s) => s + 1)
  }

  return (
    <div className={styles.wrapper} >

      <p className={styles.title} >
        Pre-order System
      </p>

      <Step current={step} items={STEP_ITEMS} onChange={setStep} />

      {/* todo content */}
    
      <div className={styles.btnWrapper}>
        <Button
          className={cx(styles.btn, styles.prev)}
          onClick={toPrev}
          disabled={step === 1}
        >
          Previous
        </Button>
        <Button
          className={cx(styles.btn, styles.next)}
          onClick={toNext}
          disabled={STEP_ITEMS.length === step}
        >
          Next
        </Button>
      </div>
    </div>
  )
}

export default Container
