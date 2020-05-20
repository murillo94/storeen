import { Box } from '../../box';
import { Overlay } from '../../overlay';

export const Dialog = ({
  children,
  role = 'dialog',
  width = '560px',
  ariaLabel = null,
  isVisible = false,
  onClose = null,
  ...props
}) => (
  <Overlay
    id="dialog"
    isVisible={isVisible}
    shouldRemoveBodyScroll
    onClose={onClose}
  >
    <Box
      role={role}
      aria-modal="true"
      aria-label={ariaLabel}
      padding={4}
      styleConfig={{
        backgroundColor: 'gray0',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: 'gray400',
        borderRadius: 3,
        width,
        maxHeight: 'calc(100vh - 56px)',
        overflow: 'auto',
        '-webkit-overflow-scrolling': 'touch',
        '-ms-overflow-style': '-ms-autohiding-scrollbar',
        zIndex: 2,
        display: `${isVisible ? 'flex' : 'none'}`,
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}
      {...props}
    >
      {children}
    </Box>
  </Overlay>
);
