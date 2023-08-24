/* eslint-disable no-unused-vars */
export enum KFK_CLIENTS {
  BOOK_CLIENT = "BOOK_CLIENT",
  ORDER_CLIENT = "ORDER_CLIENT",
  PAYMENT_CLIENT = "PAYMENT_CLIENT "
}

export enum KFK_GROUPS {
  BOOK_GROUP = "BOOK_GROUP",
  ORDER_GROUP = "ORDER_GROUP",
  PAYMENT_GROUP = "PAYMENT_GROUP"
}

export enum KFK_NAMES {
  ORDER_SERVICE = "ORDER_SERVICE",
  PAYMENT_SERVICE = "PAYMENT_SERVICE"
}

export enum PaymentEvents {
  PAYMENT_ORDER_CREATION = "payment.service.payment-order-creation"
}
