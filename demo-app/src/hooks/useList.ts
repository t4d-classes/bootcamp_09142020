import { useState } from 'react';

import { Item, ItemId } from '../models/Item';

type AppendItem<S> = (item: S) => void;
type ReplaceItem<S> = (item: S) => void;
type RemoveItem = (itemId: ItemId) => void;

type UseList = <ItemType extends Item, NewItemType>(initialItems: ItemType[]) =>
  ([
    ItemType[],
    AppendItem<ItemType>,
    ReplaceItem<ItemType>,
    RemoveItem,
  ]);

export const useList: UseList = <ItemType extends Item>(initialItems: ItemType[]) => {

  const [ items, setItems ] = useState([ ...initialItems ]);

  const addItem: AppendItem<ItemType> = (item) => {

    // TODO: add support for string based ids
    // I am assuming, that is the item has a numeric id then the list uses number ids

    setItems([
      ...items,
      {
        ...item,
        id: Math.max(...items.map(i => i.id), 0) + 1,
      },
    ]);
  };

  const saveItem: ReplaceItem<ItemType> = (item) => {
    // const itemIdStr = String(item.id);
    // const itemIndex = items.findIndex(i => String(i.id) === itemIdStr);
    const itemIndex = items.findIndex(i => i.id === item.id);
    if (itemIndex >= 0) {
      const newItems = items.concat();
      newItems[itemIndex] = item;
      setItems(newItems);
    }
  };

  const deleteItem: RemoveItem = (itemId) => {
    // const itemIdStr = String(itemId);
    // setItems(items.filter(i => String(i.id) !== itemIdStr));
    setItems(items.filter(i => i.id !== itemId));
  };

  return [ items, addItem, saveItem, deleteItem ];

};