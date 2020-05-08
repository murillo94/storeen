import AdminPage from '../adminContent';

import { TabList, Tab } from '@storeen/components';

const Content = ({ children, options, padding }) => (
  <>
    <AdminPage padding={padding}>
      <div className="sidebar">
        <TabList
          marginRight={[0, 6]}
          marginBottom={[4, 0]}
          sx={{
            width: ['100%', '225px'],
            overflowX: ['auto', 'inherit'],
            '-webkit-overflow-scrolling': 'touch',
            '-ms-overflow-style': '-ms-autohiding-scrollbar',
            display: ['flex', 'block']
          }}
        >
          {options.map(item => (
            <Tab
              key={item.name}
              icon={item.icon}
              href={item.href}
              marginLeft={0}
            >
              {item.name}
            </Tab>
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
        }
      `}
    </style>
  </>
);

export default Content;
