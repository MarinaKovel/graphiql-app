import { FC, MouseEvent } from 'react';
import AdjustIcon from '@mui/icons-material/Adjust';
import TripOriginIcon from '@mui/icons-material/TripOrigin';
import { useAppSelector } from '@/hooks/redux';
import { Docs } from '@/utils';

type EditorDocsSectionFieldsProps = {
  showNext: (event: MouseEvent) => void;
};

export const EditorDocsSectionFields: FC<EditorDocsSectionFieldsProps> = ({ showNext }) => {
  const { title, fields } = useAppSelector((state) => state.currentType);

  return (
    <>
      <div className="subtitle">
        {title === Docs.FIELDS ? (
          <AdjustIcon fontSize="small" />
        ) : (
          <TripOriginIcon fontSize="small" />
        )}
        <span className="subtitle__text">{title}</span>
      </div>
      {fields?.map(({ name, args, type, description }) => (
        <div key={name}>
          <button name="showType" type="button" className="name" onClick={showNext}>
            {name}
          </button>
          <span>
            {!!args.length && <span>&#40;</span>}
            {args &&
              args.map((arg) => (
                <div key={arg.name}>
                  <span className="args">{arg.name}: </span>
                  <span className="type-text">
                    {arg.type.name ||
                      arg.type.ofType?.name ||
                      arg.type.ofType?.ofType?.ofType?.name}
                  </span>
                </div>
              ))}
            {!!args.length && <span>&#41;</span>}:{' '}
            <button name="showFields" type="button" className="type" onClick={showNext}>
              {type.name || type.ofType?.name}
            </button>
          </span>
          <p>{description}</p>
          <br />
        </div>
      ))}
    </>
  );
};
