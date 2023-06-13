import { FC } from 'react';
import FilterTiltShiftIcon from '@mui/icons-material/FilterTiltShift';
import FilterCenterFocusIcon from '@mui/icons-material/FilterCenterFocus';
import { useAppSelector } from '@/hooks/redux';
import { Docs } from '@/utils';

export const EditorDocsSectionType: FC = () => {
  const { type } = useAppSelector((state) => state.currentType);
  const { currentArgs } = useAppSelector((state) => state.currentArgs);

  return (
    <>
      <div className="subtitle">
        <FilterTiltShiftIcon fontSize="small" />
        <span className="subtitle__text">{Docs.TYPE}</span>
      </div>
      <p className="type-text">{type}</p>
      {!!currentArgs?.length && (
        <div className="subtitle">
          <FilterCenterFocusIcon fontSize="small" />
          <span className="subtitle__text">{Docs.ARGS}</span>
        </div>
      )}
      {currentArgs &&
        currentArgs.map((arg) => (
          <div key={arg.name}>
            <span className="args">{arg.name}: </span>
            <span className="type-text">
              {arg.type.name || arg.type.ofType?.name || arg.type.ofType?.ofType?.ofType?.name}
              {arg.type?.kind === 'NON_NULL' && '!'}
            </span>
          </div>
        ))}
    </>
  );
};
