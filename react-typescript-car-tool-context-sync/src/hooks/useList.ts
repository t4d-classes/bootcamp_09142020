import { useState, useCallback } from 'react';

import { Item } from '../models/Item';

type AppendItem<S> = (item: S) => void;
type RemoveItem = (itemId: number) => void;
type ReplaceItem<S> = (item: S) => void;

type UseList = <T extends Item>(initialItems: T[]) => ([
  T[], AppendItem<T>, RemoveItem, ReplaceItem<T>,
]);

export const useList: UseList = <T extends Item>(initialItems: T[]) => {

  const [ items, setItems ] = useState(initialItems);

  const appendItem: AppendItem<T> = useCallback((item) => {

    const nextItemId = Math.max(...items.map(c => c.id!), 0) + 1;

    setItems([
      ...items,
      {
        ...item,
        id: nextItemId,
      },
    ]);
  }, [ items ]);

  const removeItem: RemoveItem = (itemId) => {
    setItems(items.filter(item => item.id !== itemId));
  };

  const replaceItem: ReplaceItem<T> = (item) => {
    const itemIndex = items.findIndex(i => i.id === item.id);
    const newItems = items.concat();
    newItems[itemIndex] = item;
    setItems(newItems);
  };

  return [ items, appendItem, removeItem, replaceItem ];

};