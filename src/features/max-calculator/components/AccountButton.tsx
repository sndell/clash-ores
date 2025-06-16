type Props = {
  openAccountModal: () => void;
};

export const AccountButton = ({ openAccountModal }: Props) => {
  return (
    <div onClick={openAccountModal} className="flex gap-2 items-center px-4 py-3 whitespace-nowrap center-text">
      <span className="icon-[solar--cloud-bold] text-xl" /> Load from account
    </div>
  );
};
