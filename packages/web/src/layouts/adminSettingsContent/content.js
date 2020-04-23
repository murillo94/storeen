import AdminPage from '../adminContent';

import { TabList, Tab } from '@storeen/components';

const sidebarStyle = {
  width: '225px'
};

const Content = ({ children, options, padding }) => (
  <>
    <AdminPage padding={padding}>
      <div className="sidebar">
        <TabList marginRight={6} sx={sidebarStyle}>
          {options.map(item => (
            <Tab
              key={item.name}
              text={item.name}
              icon={item.icon}
              href={item.href}
            />
          ))}
        </TabList>
        <div className="children">{children}</div>
      </div>
    </AdminPage>

    <style jsx>
      {`
        .sidebar {
          display: flex;
        }

        .children {
          width: 100%;
        }

        @media (max-width: 40em) {
          .sidebar {
            flex-direction: column;
          }

          .sidebar :global(ul) {
            margin: 0 0 20px !important;
            width: 100% !important;
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
            -ms-overflow-style: -ms-autohiding-scrollbar;
            display: flex;
          }

          .sidebar :global(li) {
            margin-left: 0 !important;
          }
        }
      `}
    </style>
  </>
);

export default Content;
