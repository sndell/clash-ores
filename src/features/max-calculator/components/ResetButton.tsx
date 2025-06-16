import { useEquipmentStore } from "../stores/equipmentStore";

export const ResetButton = () => {
  const { reset } = useEquipmentStore();
  return (
    <div onClick={reset} className="flex gap-2 items-center px-4 py-3 whitespace-nowrap center-text">
      <span className="icon-[solar--refresh-circle-bold] text-xl" /> Reset levels
    </div>
  );
};
