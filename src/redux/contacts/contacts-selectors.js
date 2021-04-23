import { createSelector } from '@reduxjs/toolkit';

export const getLoading = state => state.contacts.loading;

export const getFilter = state => state.contacts.filter;

export const getAllContacts = state => state.contacts.items;

export const getVisibleContact = createSelector(
  [getAllContacts, getFilter],

  (items, filter) => {
    const normalizedFilter = filter.toLocaleLowerCase();

    return items.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizedFilter),
    );
  },
);
