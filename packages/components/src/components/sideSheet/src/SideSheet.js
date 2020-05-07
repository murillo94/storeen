import { Box } from '../../box';
import { Overlay } from '../../overlay';

export const SideSheet = ({
  children,
  width = '620px',
  isVisible = false,
  onClose = null,
  ...props
}) => (
  <>
    <Overlay
      id="side-sheet"
      isVisible={isVisible}
      shouldRemoveBodyScroll
      onClose={onClose}
    >
      <Box
        as="nav"
        className="side-sheet"
        paddingTop={4}
        paddingBottom={2}
        paddingX={0}
        styleConfig={{
          backgroundColor: 'gray0',
          borderRightWidth: '1px',
          borderRightStyle: 'solid',
          borderRightColor: 'gray200',
          maxWidth: width,
          height: '100vh',
          overflow: 'auto',
          '-webkit-overflow-scrolling': 'touch',
          '-ms-overflow-style': '-ms-autohiding-scrollbar',
          position: 'fixed',
          top: '0',
          left: '0',
          transform: `${
            isVisible ? 'translate3d(0, 0, 0)' : 'translate3d(-125px, 0, 0)'
          }`,
          willChange: 'transform',
          zIndex: '2',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          flexShrink: '0'
        }}
        {...props}
      >
        {children}
      </Box>
    </Overlay>
  </>
);
