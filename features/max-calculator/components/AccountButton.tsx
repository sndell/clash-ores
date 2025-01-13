export const AccountButton = ({ openAccountModal }: { openAccountModal: () => void }) => {
  return (
    <div
      onClick={openAccountModal}
      className='flex gap-3 items-center px-4 py-3 whitespace-nowrap transition-colors center-text hover:bg-primary text-start'
    >
      <span className='icon-[solar--cloud-bold] text-xl' />
      Load Equipment
    </div>
  );
};
