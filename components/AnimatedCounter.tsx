"use client"

import { CURRENCY } from "@/constants"
import CountUp from "react-countup"

const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <div className="w-full">
      <CountUp decimals={2} decimal="," prefix={CURRENCY + " "} end={amount} />
    </div>
  )
}

export default AnimatedCounter
