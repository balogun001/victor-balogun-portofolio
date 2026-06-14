import { Fragment, ReactNode } from 'react';
import { HiXMark } from 'react-icons/hi2';
import { Dialog, Transition } from '@headlessui/react';
import { cva, VariantProps } from 'class-variance-authority';
import classNames from 'classnames';

const modalStyle = cva('flex min-h-full', {
  defaultVariants: {
    full: false,
    position: 'center',
  },
  variants: {
    full: {
      false: 'p-4',
      true: 'p-0',
    },
    position: {
      center: 'items-center justify-center',
      left: 'justify-end',
      right: 'justify-start',
    },
  },
});

type Props = VariantProps<typeof modalStyle> & {
  open: boolean;
  onClose: () => void;
  className?: string;
  children: ReactNode;
  title?: string;
};
export const Modal = ({
  onClose,
  open,
  position,
  full,
  className,
  children,
  title,
}: Props) => {
  return (
    <Transition appear as={Fragment} show={open}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0">
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className={modalStyle({ full, position })}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95">
              <Dialog.Panel
                className={classNames(
                  'relative w-full max-w-md transform space-y-6 overflow-hidden rounded bg-silver p-8 text-left align-middle  text-black shadow-xl transition-all md:p-10',
                  className
                )}>
                <div className="flex items-center justify-between">
                  <Dialog.Title className="text-sm font-semibold text-black">
                    {title}
                  </Dialog.Title>
                  <button
                    className="absolute right-0 top-0 p-4 transition-all duration-100 hover:opacity-80"
                    onClick={onClose}>
                    <HiXMark className="h-4 w-4 fill-black" />
                  </button>
                </div>
                <div>{children}</div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
