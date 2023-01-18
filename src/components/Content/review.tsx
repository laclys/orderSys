import { FC } from 'react'
import { Divider, Button } from 'antd'
import { FormatDish, Meal } from '@/types'

import styles from './index.module.css'

interface IProps {
  meal: Meal
  size: number
  restaurant: string
  dishs: FormatDish['item']
}

const Review:FC<IProps>= ({ meal, size, restaurant, dishs }) => {

  const _handleSubmit = () => {
    const target = {
      meal,
      size,
      restaurant,
      dishs: dishs.filter(i => i.isSelect)
    }
    console.log('submit_data', target)
  }

  return (
    <div className={styles.content}>
      <div className={styles.review} >
        <div className={styles.reviewTitle}>Meal</div>
        <div className={styles.reviewValue}>{meal || '--'}</div>
      </div>
      <div className={styles.review} >
        <div className={styles.reviewTitle}>No. of. People</div>
        <div className={styles.reviewValue}>{size || '--'}</div>
      </div>
      <div className={styles.review} >
        <div className={styles.reviewTitle}>Restaurant</div>
        <div className={styles.reviewValue}>{restaurant || '--'}</div>
      </div>
      <Divider/>
      <div className={styles.review} >
        <div className={styles.reviewTitle}>Dishes</div>
        <div className={styles.reviewValue}>
          {dishs.filter(i => i.isSelect).map(j => (
            <div className={styles.reviewItem} >{j.name} - {j.count}</div>
          ))}
        </div>
      </div>
      <Divider/>
      <Button type="primary" onClick={_handleSubmit} >Submit</Button>
    </div>
  )
}

export default Review