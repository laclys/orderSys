/* Fetch Data */
import { useState, useCallback } from 'react'
import { Result } from '@/types'
import { message } from 'antd'

import { getMockData } from '@/mock/helper'
import MockData from '@/mock/dishes.json'

interface IState {
  data: Result | null
  loading: boolean
}

export const useFetchOrderData = () => {
  const [state, setState] = useState<IState>({
    data: null,
    loading: false,
  })

  const fetch = useCallback(async () => {
    setState((s) => ({
      ...s,
      loading: true,
    }))
    try {
      const ret = (await getMockData(MockData)) as Result
      if (ret?.dishes) {
        setState({
          data: ret,
          loading: false,
        })
      } else {
        setState((s) => ({
          ...s,
          loading: false,
        }))
        message.error('interal error')
      }
    } catch (e) {
      setState((s) => ({
        ...s,
        loading: false,
      }))
      message.error('interal error')
    }
  }, [])

  return {
    state,
    fetch,
  }
}

export default useFetchOrderData;