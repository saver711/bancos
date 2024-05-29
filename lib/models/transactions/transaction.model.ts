export type Transaction = {
  id: string
  $id: string
  name: string
  paymentChannel: string
  accountId: string
  amount: number
  pending: boolean
  category: string
  date: string
  image: string
  type: string
  $createdAt: string
  channel: string
  senderBankId: string
  receiverBankId: string
}
