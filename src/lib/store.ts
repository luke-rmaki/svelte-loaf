import { v4 as uuid } from 'uuid';
import { writable } from 'svelte/store';
import type { Toast } from './types';

export const toast = writable<Toast[]>([]);

/**
 *
 * @param newToast Toast
 * @param timeout number: Milliseconds to show the message
 */
export function addToast(newToast: Toast, timeout = 5000): void {
	const id = uuid();
	if (!newToast.timeout) {
		newToast.timeout = timeout;
	}
	toast.update((toasts) => [...toasts, { ...newToast, id }]);

	// if not dismissable then remove after timeout
	if (newToast.autohide || newToast.autohide === undefined) {
		setTimeout(() => {
			toast.update((toasts) => {
				const newState = toasts.filter((t) => t.id !== id);
				return newState;
			});
		}, newToast.timeout);
	}
}
