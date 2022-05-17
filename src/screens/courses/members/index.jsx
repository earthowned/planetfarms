import { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { Flex } from "common/grids";
import { DashboardLayout } from "layout/dashboard";
import { TabletUp, LaptopUp } from "common/responsive";
import { IconButton } from "common/buttons/icon-button";
import { MembersList, MembersListItemGrid } from "components/courses";

import { selectCurrentCourse } from "store/courses";

import "./styles.scss";

export const MembersPage = () => {
  const { id: courseId } = useParams();
  const course = useSelector((state) => selectCurrentCourse(state, courseId));

  const [grid, setGrid] = useState(MembersListItemGrid.row);

  const handleInviteMemberClick = () => {};

  const handleMemberClick = () => {};

  return (
    <DashboardLayout
      title="Members"
      withBackButton
      addButtonProps={{
        icon: "plus",
        variant: "primary",
        title: "Invite Member",
        onClick: handleInviteMemberClick,
      }}
    >
      <div className="members-page-container">
        <LaptopUp>
          <Flex gap="16px" direction="row" justify="flex-end" align="center">
            <IconButton
              icon="grid-four"
              onClick={() => setGrid(MembersListItemGrid.row)}
              variant={
                grid === MembersListItemGrid.row ? "transparent" : "white"
              }
            />
            <IconButton
              icon="grid-two"
              onClick={() => setGrid(MembersListItemGrid.column)}
              variant={
                grid === MembersListItemGrid.column ? "transparent" : "white"
              }
            />
          </Flex>
        </LaptopUp>

        <TabletUp>
          <MembersList
            variant="list"
            list={course?.members || []}
            grid={MembersListItemGrid.column}
            onSelectMember={handleMemberClick}
          />
        </TabletUp>

        <LaptopUp>
          <MembersList
            grid={grid}
            variant="list"
            list={course?.members || []}
            onSelectMember={handleMemberClick}
          />
        </LaptopUp>
      </div>
    </DashboardLayout>
  );
};
