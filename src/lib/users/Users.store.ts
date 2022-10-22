import { writable } from 'svelte/store';
import type { User } from '../Users.service';

export let selectedUser = writable<User>();
