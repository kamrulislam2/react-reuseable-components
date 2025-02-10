import cn from "../../utils/cn";
import { createPortal } from "react-dom";

type ModalProps = {
  isOpen: boolean;
};

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  return createPortal(
    <div
      className={cn("fixed inset-0 bg-gray-600/70 invisible z-[999]", {
        visible: isOpen,
      })}
    >
      <div className="bg-white">{children}</div>
    </div>,
    document.getElementById("portal") as Element
  );
};

export default Modal;
