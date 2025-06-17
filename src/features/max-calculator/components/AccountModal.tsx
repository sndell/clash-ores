"use client";

import { Modal } from "@/components/elements/Modal";
import { useState } from "react";
import { getEquipmentData } from "../actions/getAccountData";
import { cn } from "@/util/cn";
import { useEquipmentStore } from "../stores/equipmentStore";
import { sendGAEvent } from "@next/third-parties/google";

interface AccountModalProps {
  close: () => void;
}

export const AccountModal = ({ close }: AccountModalProps) => {
  return (
    <Modal close={close}>
      <div className="divide-y divide-primary">
        <AccountModalHero />
        <AccountModalForm close={close} />
      </div>
    </Modal>
  );
};

const AccountModalHero = () => {
  return (
    <div className="flex flex-col gap-1 px-3 py-6 w-full sm:max-w-96">
      <h1 className="text-center">Load equipment data</h1>
      <p className="text-center text-primary-dark">
        Enter your Clash of Clans account tag to load your equipment data.
      </p>
    </div>
  );
};

const AccountModalForm = ({ close }: { close: () => void }) => {
  const [formState, setFormState] = useState({
    tag: "",
    error: "",
    isLoading: false,
  });

  const { loadItems } = useEquipmentStore();

  const handleLoad = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState((prev) => ({ ...prev, error: "" }));
    const regex = /^[#PYLQGRJCUV0289]+$/;
    const upperTag = formState.tag.toUpperCase();
    if (regex.test(upperTag)) {
      setFormState((prev) => ({ ...prev, isLoading: true }));
      try {
        const data = await getEquipmentData(formState.tag);
        loadItems(data);
        sendGAEvent("event", "account_loading_complete", { value: formState.tag });
        close();
      } catch {
        setFormState((prev) => ({ ...prev, error: "Invalid tag" }));
      } finally {
        setFormState((prev) => ({ ...prev, isLoading: false }));
      }
    } else {
      setFormState((prev) => ({ ...prev, error: "Invalid tag" }));
    }
  };
  const handleTagChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState((prev) => ({ ...prev, tag: e.target.value, error: "" }));
  };

  return (
    <>
      <form onSubmit={handleLoad} className="flex gap-2 p-3 max-xs:flex-col">
        <input
          type="text"
          placeholder="Clash of Clans tag..."
          value={formState.tag}
          onChange={handleTagChange}
          className={cn(
            "flex-1 px-3 py-2 rounded-full border placeholder:text-primary-dark border-secondary text-secondary",
            formState.error && "border-2 border-red-600"
          )}
        />
        <button className="grid place-items-center py-2 w-24 rounded-full border bg-accent border-accent max-xs:w-full">
          {formState.isLoading ? (
            <div className="icon-[svg-spinners--3-dots-move] text-2xl" />
          ) : (
            <div className="center-text">Load</div>
          )}
        </button>
      </form>
      {formState.error && <p className="py-3 text-sm text-center text-red-600">{formState.error}</p>}
    </>
  );
};
