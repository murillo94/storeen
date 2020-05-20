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
          background-color: ${theming.colors.blue100};
          color: ${theming.colors.blue700};
        }

        .fade {
          background-color: ${theming.colors.gray200};
          color: ${theming.colors.gray700};
        }
      `}
    </style>
  </>
);
