import { Modal } from "antd"

export const PaymentModal = ({ visible, onCancel }) => {
  return (
    <Modal
        visible={visible}
        onCancel={onCancel}
        footer={null}
      >
        <figure>
          <img src="" alt="" />
        </figure>
      </Modal>
  )
}
