import './PlansComparison.scss'
import Section from "@/layouts/Section";
import Badge from "@/components/Badge";
import Table from "@/components/Table";
import Specifications from "@/components/Specifications";
import Tabs from "@/components/Tabs";

const PlansComparison = () => {
  const headCells = [
    {
      children: 'Features',
      width: '25%',
    },
    {
      children: 'Basic',
      width: '25%',
      tabTitle: 'basic',
    },
    {
      children: <>Standard <Badge mode="red">Popular</Badge></>,
      width: '25%',
      tabTitle: 'standard',
    },
    {
      children: 'Premium',
      width: '25%',
      tabTitle: 'premium',
    },
  ]

  const rows = [
    {
      cells: [
        'Price',
        '$9.99/Month',
        '$12.99/Month',
        '$14.99/Month',
      ]
    },
    {
      cells: [
        'Content',
        'Access to a wide selection of movies and shows, including some new releases.',
        'Access to a wider selection of movies and shows, including most new releases and exclusive content',
        'Access to a widest selection of movies and shows, including all new releases and Offline Viewing',
      ],
      isWide: true,
    },
    {
      cells: [
        'Devices',
        'Watch on one device simultaneously',
        'Watch on Two device simultaneously',
        'Watch on Four device simultaneously',
      ],
      isWide: true,
    },
    {
      cells: [
        'Free Trail',
        '7 Days',
        '7 Days',
        '7 Days',
      ],
    },
    {
      cells: [
        'Cancel Anytime',
        'Yes',
        'Yes',
        'Yes',
      ]
    },
    {
      cells: [
        'HDR',
        'No',
        'Yes',
        'Yes',
      ]
    },
    {
      cells: [
        'Dolby Atmos',
        'No',
        'Yes',
        'Yes',
      ]
    },
    {
      cells: [
        'Ad - Free',
        'No',
        'Yes',
        'Yes',
      ]
    },
    {
      cells: [
        'Offline Viewing',
        'No',
        'Yes, for select titles.',
        'Yes, for all titles.',
      ]
    },
    {
      cells: [
        'Family Sharing',
        'No',
        'Yes, up to 5 family members.',
        'Yes, up to 6 family members.',
      ]
    },
  ]

  const tabsItems = headCells
  .filter(headCell => headCell.tabTitle)
  .map((headCell, headIndexCell) => ({
    title: headCell.tabTitle,
    isActive: headIndexCell === 0,
    children: (
      <Specifications
        items={rows.map(({cells, isWide}) => ({
          key: cells[0],
          value: cells[headIndexCell + 1],
          isWide,
        }))}
      />
    )
  }))

  return (
    <Section
      title="Choose the plan that's right for you"
      titleId="plans-comparison-title"
      description="Join StreamVibe and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop entertainment!"
    >
      <Table
        className="hidden-mobile"
        headCells={headCells}
        rows={rows}
      />
      <Tabs
        className="visible-mobile"
        title="plans-comparison-title"
        items={tabsItems}
      />
    </Section>
  )
}

export default PlansComparison