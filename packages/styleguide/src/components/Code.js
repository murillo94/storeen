import { theming } from '@storeen/components';

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
          background-color: ${theming.colors.purple100};
          color: ${theming.colors.purple800};
        }

        .fade {
          background-color: ${theming.colors.gray100};
          color: ${theming.colors.gray800};
        }
      `}
    </style>
  </>
);
