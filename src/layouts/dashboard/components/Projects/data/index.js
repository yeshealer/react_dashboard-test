// @mui material components
import Tooltip from "@mui/material/Tooltip";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiAvatar from "components/VuiAvatar";
import VuiProgress from "components/VuiProgress";

// Images
import AdobeXD from "examples/Icons/AdobeXD";
import Atlassian from "examples/Icons/Atlassian";
import Slack from "examples/Icons/Slack";
import Spotify from "examples/Icons/Spotify";
import Jira from "examples/Icons/Jira";
import Invision from "examples/Icons/Invision";
import avatar1 from "assets/images/avatar1.png";
import avatar2 from "assets/images/avatar2.png";
import avatar3 from "assets/images/avatar3.png";
import avatar4 from "assets/images/avatar4.png";

export default function data() {
  const avatars = (amount) =>
    amount.map(([image, name]) => (
      <Tooltip key={name} title={name} placeholder="bottom">
        <VuiAvatar
          src={image}
          alt="name"
          size="xs"
          sx={{
            border: ({ borders: { borderWidth }, palette: { dark } }) =>
              `${borderWidth[2]} solid ${dark.focus}`,
            cursor: "pointer",
            position: "relative",

            "&:not(:first-of-type)": {
              ml: -1.25,
            },

            "&:hover, &:focus": {
              zIndex: "10",
            },
          }}
        />
      </Tooltip>
    ));

  return {
    columns: [
      { name: "date", align: "left" },
      { name: "amount", align: "left" },
      { name: "budget", align: "center" },
      { name: "vip", align: "center" },
    ],

    rows: [
      {
        date: (
          <VuiBox display="flex" alignItems="center">
            <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
              2022-01-18
            </VuiTypography>
          </VuiBox>
        ),
        amount: (
          <VuiBox width="8rem" textAlign="left">
            <VuiTypography color="white" variant="button" fontWeight="bold">
              49%
            </VuiTypography>
            <VuiProgress value={49} color="info" label={false} sx={{ background: "#2D2E5F" }} />
          </VuiBox>
        ),
        budget: (
          <VuiTypography variant="button" color="white" fontWeight="bold">
            $49,000
          </VuiTypography>
        ),
        vip: (
          <VuiBox display="flex" py={1}>
            {avatars([
              [avatar1, "Ryan Tompson"],
              [avatar2, "Romina Hadid"],
              [avatar3, "Alexander Smith"],
              [avatar4, "Jessica Doe"],
            ])}
          </VuiBox>
        ),
      },
      {
        date: (
          <VuiBox display="flex" alignItems="center">
            <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
              2022-01-19
            </VuiTypography>
          </VuiBox>
        ),
        amount: (
          <VuiBox width="8rem" textAlign="left">
            <VuiTypography color="white" variant="button" fontWeight="bold">
              51%
            </VuiTypography>
            <VuiProgress value={51} color="info" label={false} sx={{ background: "#2D2E5F" }} />
          </VuiBox>
        ),
        budget: (
          <VuiTypography variant="button" color="white" fontWeight="bold">
            $51,000
          </VuiTypography>
        ),
        vip: (
          <VuiBox display="flex" py={1}>
            {avatars([
              [avatar2, "Romina Hadid"],
              [avatar4, "Jessica Doe"],
            ])}
          </VuiBox>
        ),
      },
      {
        date: (
          <VuiBox display="flex" alignItems="center">
            <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
              2022-01-20
            </VuiTypography>
          </VuiBox>
        ),
        amount: (
          <VuiBox width="8rem" textAlign="left">
            <VuiTypography color="white" variant="button" fontWeight="bold">
              43%
            </VuiTypography>
            <VuiProgress value={43} color="info" label={false} sx={{ background: "#2D2E5F" }} />
          </VuiBox>
        ),
        budget: (
          <VuiTypography variant="button" color="white" fontWeight="bold">
            $43,000
          </VuiTypography>
        ),
        vip: (
          <VuiBox display="flex" py={1}>
            {avatars([
              [avatar1, "Ryan Tompson"],
              [avatar3, "Alexander Smith"],
            ])}
          </VuiBox>
        ),
      },
      {
        date: (
          <VuiBox display="flex" alignItems="center">
            <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
              2022-01-21
            </VuiTypography>
          </VuiBox>
        ),
        amount: (
          <VuiBox width="8rem" textAlign="left">
            <VuiTypography color="white" variant="button" fontWeight="bold">
              50.5%
            </VuiTypography>
            <VuiProgress value={50.5} color="info" label={false} sx={{ background: "#2D2E5F" }} />
          </VuiBox>
        ),
        budget: (
          <VuiTypography variant="button" color="white" fontWeight="bold">
            $50,500
          </VuiTypography>
        ),
        vip: (
          <VuiBox display="flex" py={1}>
            {avatars([
              [avatar4, "Jessica Doe"],
              [avatar3, "Alexander Smith"],
              [avatar2, "Romina Hadid"],
              [avatar1, "Ryan Tompson"],
            ])}
          </VuiBox>
        ),
      },
      {
        date: (
          <VuiBox display="flex" alignItems="center">
            <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
              2022-01-22
            </VuiTypography>
          </VuiBox>
        ),
        amount: (
          <VuiBox width="8rem" textAlign="left">
            <VuiTypography color="white" variant="button" fontWeight="bold">
              51.5%
            </VuiTypography>
            <VuiProgress value={51.5} color="info" label={false} sx={{ background: "#2D2E5F" }} />
          </VuiBox>
        ),
        budget: (
          <VuiTypography variant="button" color="white" fontWeight="bold">
            $51,500
          </VuiTypography>
        ),
        vip: (
          <VuiBox display="flex" py={1}>
            {avatars([[avatar4, "Jessica Doe"]])}
          </VuiBox>
        ),
      },
      {
        date: (
          <VuiBox display="flex" alignItems="center">
            <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
              2022-01-23
            </VuiTypography>
          </VuiBox>
        ),
        amount: (
          <VuiBox width="8rem" textAlign="left">
            <VuiTypography color="white" variant="button" fontWeight="bold">
              52%
            </VuiTypography>
            <VuiProgress value={52} color="info" label={false} sx={{ background: "#2D2E5F" }} />
          </VuiBox>
        ),
        budget: (
          <VuiTypography variant="button" color="white" fontWeight="bold">
            $52,000
          </VuiTypography>
        ),
        vip: (
          <VuiBox display="flex" py={1}>
            {avatars([
              [avatar1, "Ryan Tompson"],
              [avatar4, "Jessica Doe"],
            ])}
          </VuiBox>
        ),
      },
      {
        date: (
          <VuiBox display="flex" alignItems="center">
            <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
              2022-01-24
            </VuiTypography>
          </VuiBox>
        ),
        amount: (
          <VuiBox width="8rem" textAlign="left">
            <VuiTypography color="white" variant="button" fontWeight="bold">
              45%
            </VuiTypography>
            <VuiProgress value={45} color="info" label={false} sx={{ background: "#2D2E5F" }} />
          </VuiBox>
        ),
        budget: (
          <VuiTypography variant="button" color="white" fontWeight="bold">
            $45,000
          </VuiTypography>
        ),
        vip: (
          <VuiBox display="flex" py={1}>
            {avatars([
              [avatar2, "Romina Hadid"],
              [avatar3, "Alexander Smith"],
            ])}
          </VuiBox>
        ),
      },
    ],
  };
}
