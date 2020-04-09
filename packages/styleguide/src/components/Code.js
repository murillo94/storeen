import { purple100, purple800, gray100, gray800 } from '@storeen/system';

export const Code = ({ children, variant = 'normal' }) => (
  <>
    <code className={variant}>{children}</code>

    <style jsx>
      {`
        code {
          border-radius: 3px;
          padding: 0 5px;
        }

        .normal {
          background-color: ${purple100};
          color: ${purple800};
        }

        .fade {
          background-color: ${gray100};
          color: ${gray800};
        }
      `}
    </style>
  </>
);
