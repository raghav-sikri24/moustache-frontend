import {
  Tabs as ChakraTabs,
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  TabsProps,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";

export interface TabItem {
  key: string;
  label: string;
  content: React.ReactNode;
  disabled?: boolean;
  icon?: React.ReactElement;
}

export interface CustomTabsProps extends Omit<TabsProps, "children"> {
  tabs: TabItem[];
  defaultIndex?: number;
  tabListProps?: any;
  tabProps?: any;
  tabPanelProps?: any;
}

export default function CustomTabs({
  tabs,
  defaultIndex = 0,
  tabListProps = {},
  tabProps = {},
  tabPanelProps = {},
  ...props
}: CustomTabsProps) {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);

  const handleTabChange = (index: number) => {
    setActiveIndex(index);
  };

  const variantStyles = {
    tabList: {
      border: "none",
      w: "full",
      color: "primary.500",
    },
    tab: {
      flex: "1",
      fontWeight: "700",
      _selected: {
        color: "primary.500",
        borderBottom: "2px solid",
        borderColor: "primary.500",
      },
      _hover: {
        color: "primary.600",
      },
    },
    tabPanel: {
      p: 0,
      m: 0,
    },
  };

  const currentVariant = variantStyles;

  return (
    <ChakraTabs
      index={activeIndex}
      onChange={handleTabChange}
      variant="unstyled"
      w="full"
      {...props}
    >
      <TabList {...currentVariant.tabList} {...tabListProps}>
        {tabs.map((tab) => (
          <Tab
            key={tab.key}
            disabled={tab.disabled}
            {...currentVariant.tab}
            {...tabProps}
          >
            <Flex align="center" gap="8px" p={8}>
              {tab.icon && <span>{tab.icon}</span>}
              <Text>{tab.label}</Text>
            </Flex>
          </Tab>
        ))}
      </TabList>

      <TabPanels>
        {tabs.map((tab) => (
          <TabPanel
            key={tab.key}
            {...currentVariant.tabPanel}
            {...tabPanelProps}
          >
            {tab.content}
          </TabPanel>
        ))}
      </TabPanels>
    </ChakraTabs>
  );
}
