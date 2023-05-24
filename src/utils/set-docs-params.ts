import { MouseEvent } from 'react';
import { InitialType, initialState } from '@/slices/docs-current-type-slice';
import { SchemaType } from '@/server/schema';

type Btn = HTMLButtonElement & { name: string };

export function setDocsParams(
  schema: SchemaType[],
  history: string[],
  currentType: InitialType,
  event: MouseEvent
) {
  const newHistory = [...history, currentType.name];
  const btn = event?.target as Btn;
  const newTitle = btn?.name === 'showType' ? 'Type' : 'Fields';
  const newName = btn.innerText;
  const field = currentType.fields?.find((el) => el.name === newName);
  const schemaElement = schema.find((el) => el.name === newName);
  const newDescription =
    btn.name === 'showType' ? field?.description : schemaElement?.description || '';
  const newType =
    btn.name === 'showType' ? field?.type?.name || `${field?.type?.ofType?.name}[]` : '';
  const newFields = btn.name === 'showType' ? null : schemaElement?.fields;
  let newCurrentType;

  if (!(btn?.name === 'showType' && newName === 'query')) {
    if (newName === 'Docs') {
      newCurrentType = initialState;
    } else {
      newCurrentType = {
        title: newTitle,
        name: newName,
        description: newDescription,
        type: newType,
        fields: newFields,
      };
    }
  }

  return [newHistory, newCurrentType, field];
}
