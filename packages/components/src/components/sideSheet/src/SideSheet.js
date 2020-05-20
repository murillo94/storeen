import { Overlay } from '../../overlay';
import { SideNavigation } from '../../sideNavigation';

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
      <SideNavigation
        className="side-sheet"
        paddingTop={4}
        paddingBottom={2}
        paddingX={0}
        styleConfig={{
          backgroundColor: 'gray0',
          borderRightWidth: '1px',
          borderRightStyle: 'solid',
          borderRightColor: 'gray400',
          maxWidth: width,
          height: '100vh',
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
      </SideNavigation>
    </Overlay>
  </>
);
