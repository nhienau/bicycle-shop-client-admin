export const PAGE_SIZE = 10;
export const MAX_IMAGE_SIZE = 10000000; // 10MB

export const NEXT_ORDER_STATUS = [
  {
    current: "Chờ xác nhận",
    next: [
      {
        label: "Xác nhận",
        value: "Chờ lấy hàng",
      },
      {
        label: "Huỷ đơn",
        value: "Đã huỷ",
      },
    ],
  },
  {
    current: "Chờ lấy hàng",
    next: [
      {
        label: "Chờ giao hàng",
        value: "Chờ giao hàng",
      },
    ],
  },
  {
    current: "Chờ giao hàng",
    next: [
      {
        label: "Đã giao",
        value: "Đã giao",
      },
    ],
  },
];

export const ORDER_STATUSES_WITHOUT_NEXT = ["Đã giao", "Đã huỷ"];
export const ORDER_STATUSES = [
  "Chờ xác nhận",
  "Chờ lấy hàng",
  "Chờ giao hàng",
  "Trả hàng",
  "Đã giao",
  "Đã huỷ",
];
