import { FC, useState, useMemo, useEffect } from 'react'
import cx from 'classnames'
import { Button, message } from 'antd'
import { Dish, Meal, FormatDish } from '@/types'
import Step from '@/components/Step'
import Step1Con from '@/components/Content/stepOne'
import Step2Con from '@/components/Content/stepTwo'
import Step3Con from '@/components/Content/stepThree'
import Review from '@/components/Content/review'
import { formatDishData } from '@/utils/formatData'

import styles from './index.module.css'
import { EMPTY_WARN, PEOPLE_SIZE_WARN } from '@/consts/tips'

interface IProps {
  data: Dish[]
}

const STEP_ITEMS = ['Step 1', 'Step 2', 'Step 3', 'Review']

const Container: FC<IProps> = ({ data }) => {
  const [step, setStep] = useState<number>(1)
  const [meal, setMeal] = useState<Meal | null>(null)
  const [peopleSize, setPeopleSize] = useState<number | null>(1)
  const [restaurant, setRestaurant] = useState('')
  const [allDish, setAllDish] = useState<FormatDish['item']>([])

  const canBeSelectedRestaurant = useMemo(
    () =>
      meal
        ? formatDishData(data.filter((i) => i.availableMeals.includes(meal!)))
        : [],
    [meal]
  )

  useEffect(() => {
    /* if meal change, reset restaurant */
    setRestaurant('')
  }, [meal])

  const toPrev = () => {
    setStep((s) => s - 1)
  }
  const toNext = () => {
    if (step === 3) {
      if (allDish.filter((i) => i.isSelect).length > peopleSize!) {
        message.warning(PEOPLE_SIZE_WARN, 2)
        return
      }
      if (!meal || !peopleSize || !restaurant || allDish.length === 0) {
        message.warning(EMPTY_WARN, 2)
        return
      }
    }

    setStep((s) => s + 1)
  }

  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>Pre-order System</p>

      <Step current={step} items={STEP_ITEMS} onChange={setStep} />

      {/* todo content */}
      {step === 1 && (
        <Step1Con
          meal={meal}
          peopleSize={peopleSize}
          onChangeMeal={setMeal}
          onChangeSize={setPeopleSize}
        />
      )}
      {step === 2 && (
        <Step2Con
          options={canBeSelectedRestaurant}
          restaurant={restaurant}
          onChange={setRestaurant}
        />
      )}
      {step === 3 && (
        <Step3Con
          data={
            canBeSelectedRestaurant?.filter((i) => i.name === restaurant)?.[0]
          }
          allDish={allDish}
          onChange={setAllDish}
        />
      )}
      {step === 4 && (
        <Review
          meal={meal!}
          size={peopleSize!}
          restaurant={restaurant!}
          dishs={allDish}
        />
      )}

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
