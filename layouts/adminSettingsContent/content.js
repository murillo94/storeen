import { default as AdminPage } from 'layouts/adminContent/content';

import { TabList, Tab } from 'components/tab';

const Content = ({ children, options, padding, customStyle }) => (
  <>
    <AdminPage padding={padding}>
      <div className="sidebar">
        <TabList customStyle={customStyle}>
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

        @media (max-width: 746px) {
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
