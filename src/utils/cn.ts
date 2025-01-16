import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn = (...classes: Parameters<typeof clsx>) => twMerge(clsx(...classes));
